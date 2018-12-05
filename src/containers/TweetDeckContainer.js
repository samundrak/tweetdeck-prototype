import React from 'react';
import { connect } from 'react-redux';
import TweetDeck from '../components/TweetDeck';
import { fetchTweetsAction } from '../store/actions/fetchTweetActions';

class TweetDeckContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTweetsAction({
      count: 30,
      screenName: this.props.handle,
    });
  }
  render() {
    return <TweetDeck tweets={this.props.tweets} handle={this.props.handle} />;
  }
}

const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  { fetchTweetsAction },
)(TweetDeckContainer);
