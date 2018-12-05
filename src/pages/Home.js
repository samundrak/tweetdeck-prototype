import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import TweetDeck from '../components/TweetDeck';

class Home extends Component {
  render() {
    const { handles } = this.props.home;
    const span = 24 / handles.length;
    return (
      <div>
        <Row>
          {handles.map(handle => {
            return (
              <Col key={handle} span={8}>
                <TweetDeck handle={handle} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
Home.propTypes = {
  home: PropTypes.object.isRequired,
};
const mapPropsToState = state => ({
  home: state.home,
});
export default connect(mapPropsToState)(Home);
