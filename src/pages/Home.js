import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import renderIf from 'render-if';
import autobind from 'auto-bind';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Modal, Avatar } from 'antd';
import TweetDeckContainer from '../containers/TweetDeckContainer';
import AvatarsList from '../components/AvatarsList';

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
  onDragEnd(...args) {
    console.log(args);
    console.log('here ends drag');
  }
  render() {
    const {
      app: { tweets, preferences },
    } = this.props;
    const { handles } = preferences;
    const colSpan = 24 / handles.length;
    return (
      <div>
        <Modal
          onCancel={this.handleModalCancel}
          visible={this.state.isModalShown}
          title={
            <span style={{ textTransform: 'capitalize' }}>
              {this.state.selectedModalMode}
            </span>
          }
          footer={[]}
        >
          <AvatarsList users={this.state.users} />
        </Modal>
        <Row>
          <DragDropContext onDragEnd={this.onDragEnd}>
            {handles.map((handle, index) => {
              return (
                <Droppable key={handle} droppableId={handle}>
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                      <Draggable
                        key={handle}
                        draggableId={handle}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <Col key={handle} span={colSpan}>
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TweetDeckContainer
                                handle={handle}
                                tweets={tweets[handle]}
                                handleActions={this.handleActions}
                              />
                            </div>
                          </Col>
                        )}
                      </Draggable>
                    </div>
                  )}
                </Droppable>
              );
            })}
          </DragDropContext>
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
