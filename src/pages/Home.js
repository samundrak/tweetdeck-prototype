import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import autobind from 'auto-bind';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Modal } from 'antd';
import CoreContext from '../contexts/CoreContext';
import TweetDeckContainer from '../containers/TweetDeckContainer';
import AvatarsList from '../components/AvatarsList';
import Droppable from '../components/dnd/Droppable';
import Draggable from '../components/dnd/Draggable';
import { reorderTweetDecks } from '../store/actions';
import { PRESERVE_PREFERENCES } from '../consts';

class Home extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      isModalShown: false,
      selectedTweet: null,
      selectedModalMode: null,
      users: [],
    };
  }
  onDragEnd(source, destination) {
    const handles = this.props.app.preferences.handles;
    const sourceIndex = handles.findIndex(handle => source.source === handle);
    const destinationIndex = handles.findIndex(handle => destination === handle);
    const newHandles = [].concat(handles);
    newHandles.splice(sourceIndex, 1, destination);
    newHandles.splice(destinationIndex, 1, source.source);
    this.props.reorderTweetDecks(newHandles);
    this.context.emit(PRESERVE_PREFERENCES, this.props.app.preferences);
  }
  handleActions({ type, tweet }) {
    return () => {
      let users = [];
      if (type === 'retweets') return;
      if (type === 'mentions') {
        users = tweet.entities.user_mentions;
      }
      this.setState({
        selectedModalMode: type,
        selectedTweet: tweet,
        isModalShown: true,
        users,
      });
    };
  }
  handleModalCancel() {
    this.setState({
      isModalShown: false,
    });
  }

  render() {
    const {
      app: { tweets, preferences, tweetDeckKeys },
    } = this.props;
    const { handles } = preferences;
    const colSpan = 24 / handles.length;
    return (
      <div>
        <Modal
          onCancel={this.handleModalCancel}
          visible={this.state.isModalShown}
          title={<span style={{ textTransform: 'capitalize' }}>{this.state.selectedModalMode}</span>}
          footer={[]}
        >
          <AvatarsList users={this.state.users} />
        </Modal>
        <Row>
          {handles.map(handle => (
            <Droppable
              key={handle}
              source={handle}
              handleClone={this.onDragEnd}
              onOver={() => (
                <div
                  style={{
                    fontSize: '20px',
                    fontStyle: 'italic',
                    zIndex: '1000',
                    position: 'absolute',
                    left: '40%',
                    top: '40%',
                  }}
                />
              )}
            >
              <div>
                <Col key={handle} span={colSpan}>
                  <Draggable item={{ handle }} source={handle}>
                    <TweetDeckContainer key={tweetDeckKeys} handle={handle} tweets={tweets[handle]} handleActions={this.handleActions} />
                  </Draggable>
                </Col>
              </div>
            </Droppable>
          ))}
        </Row>
      </div>
    );
  }
}
Home.propTypes = {
  app: PropTypes.object.isRequired,
  reorderTweetDecks: PropTypes.func.isRequired,
};
const mapPropsToState = state => ({
  app: state.app,
});
Home.contextType = CoreContext;
export default connect(
  mapPropsToState,
  { reorderTweetDecks },
)(DragDropContext(HTML5Backend)(Home));
