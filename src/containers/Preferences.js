import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'auto-bind';
import { connect } from 'react-redux';
import { message, Form, Input, DatePicker, Button } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import { PRESERVE_PREFERENCES } from '../consts';
import { hydratePreferences, changePreferenceDrawerStatus } from '../store/actions';

import CoreContext from '../contexts/CoreContext';

const ThemePallet = styled.div`
  float: left;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-style: ${props => (props.selected === props.theme ? 'solid' : 'none')};
  background: ${props => props.theme};
  &:hover {
    border-style: solid;
  }
`;
const FormItem = Form.Item;
const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

class Preferences extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      preferences: null,
    };
  }
  componentDidMount() {
    // prettier-ignore
    this.setState({// eslint-disable-line
      preferences: Object.assign({}, this.props.preferences),
    });
  }
  handleThemeSelection(theme) {
    return () => {
      this.setState({
        preferences: {
          ...this.state.preferences,
          theme,
        },
      });
    };
  }

  handleTimeRangeChange(ranges) {
    const [rangeFrom, rangeTo] = ranges.map(momentObj => momentObj.toString());
    this.setState({
      preferences: {
        ...this.state.preferences,
        time: {
          from: rangeFrom,
          to: rangeTo,
        },
      },
    });
  }
  handleTweetPerColumnChange(event) {
    let value = event.target.value;
    const matchedValue = value.match(/(\d+)/g);
    value = matchedValue ? matchedValue.join('') : '';
    this.setState({
      preferences: {
        ...this.state.preferences,
        tweetsPerColumn: Number(value),
      },
    });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.props.hydratePreferences(this.state.preferences);
    this.context.emit(PRESERVE_PREFERENCES, this.state.preferences);
    message.success('Preferences has been saved successfully.');
    this.props.changePreferenceDrawerStatus(false);
  }
  renderThemePallets(themes) {
    return (
      <div>
        {themes.map(theme => (
          <ThemePallet selected={this.state.preferences.theme} onClick={this.handleThemeSelection(theme)} key={theme} theme={theme} />
        ))}
      </div>
    );
  }
  render() {
    const { preferences } = this.state;
    if (!preferences) return null;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormItem {...formItemLayout} label="Tweets">
          <Input type="number" value={preferences.tweetsPerColumn} onChange={this.handleTweetPerColumnChange} />
        </FormItem>
        <FormItem {...formItemLayout} label="Tweet Range">
          <RangePicker
            onChange={this.handleTimeRangeChange}
            value={[moment(new Date(preferences.time.from)), moment(new Date(preferences.time.to))]}
          />
        </FormItem>
        <FormItem {...formItemLayout} label="Select Theme">
          {this.renderThemePallets(preferences.themes)}
          <div style={{ clear: 'both' }} />
        </FormItem>
        <FormItem {...formItemLayout}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </FormItem>
      </Form>
    );
  }
}
const mapStateToProps = state => ({
  preferences: state.app.preferences,
});
Preferences.contextType = CoreContext;
Preferences.defaultProps = {
  preferences: null,
};
Preferences.propTypes = {
  changePreferenceDrawerStatus: PropTypes.func.isRequired,
  hydratePreferences: PropTypes.func.isRequired,
  preferences: PropTypes.oneOfType([PropTypes.object]),
};
export default connect(
  mapStateToProps,
  { hydratePreferences, changePreferenceDrawerStatus },
)(Preferences);
