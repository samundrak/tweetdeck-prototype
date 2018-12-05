import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import TweetDeckContainer from '../containers/TweetDeckContainer';

class Home extends Component {
  render() {
    const {
      app: { handles, tweets },
    } = this.props;
    const span = 24 / handles.length;
    return (
      <div>
        <Row>
          {handles.map(handle => {
            return (
              <Col key={handle} span={8}>
                <TweetDeckContainer handle={handle} tweets={tweets[handle]} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
Home.propTypes = {
  app: PropTypes.object.isRequired,
};
const mapPropsToState = state => ({
  app: state.app,
});

export default connect(mapPropsToState)(Home);
