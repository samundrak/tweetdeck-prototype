import React from 'react';
import { connect } from 'react-redux';
import TweetDeck from '../components/TweetDeck';
import { fetchTweetsAction } from '../store/actions/fetchTweetActions';

class TweetDeckContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingTweets: false,
    };
  }
  componentDidMount() {
    this.setState({
      isLoadingTweets: true,
    });
    this.props
      .fetchTweetsAction({
        count: 30,
        screenName: this.props.handle,
      })
      .finally(() => {
        this.setState({
          isLoadingTweets: false,
        });
      });
  }
  render() {
    return (
      <TweetDeck
        handleActions={this.props.handleActions}
        isLoading={this.state.isLoadingTweets}
        tweets={this.props.tweets}
        handle={this.props.handle}
      />
    );
  }
}

const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  { fetchTweetsAction },
)(TweetDeckContainer);
