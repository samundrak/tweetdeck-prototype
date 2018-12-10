import React from 'react';
import PropTypes from 'prop-types';
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
    // prettier-ignore
    this.setState({ // eslint-disable-line
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

const mapStateToProps = () => ({});
TweetDeckContainer.propTypes = {
  handle: PropTypes.string.isRequired,
  tweets: PropTypes.array.isRequired,
  handleActions: PropTypes.func.isRequired,
  fetchTweetsAction: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  { fetchTweetsAction },
)(TweetDeckContainer);
