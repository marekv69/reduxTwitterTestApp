import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import TweetListFilteringAndSortingContainer from './TweetFilteringAndSortingContainer';
import TweetsContainer from './TweetsContainer';
import TweetListModalInfo from './TweetListModalInfoContainer';

/**
 * TODO: add comment
 */
class TweetSearchOutput extends Component {

  render() {
    const { tweets} = this.props;

    const tweetsSearchOutput =
        <div className="tweet-list">
          <TweetListFilteringAndSortingContainer />
          <TweetsContainer />
          <TweetListModalInfo />
        </div>

    return (
          tweets ? tweetsSearchOutput : null
    );
  }
}

TweetSearchOutput.propTypes = {
  tweets: PropTypes.object
};

function mapStateToProps(state) {
  const tweets = state.tweetsResponse ? state.tweetsResponse.get("tweets") : null;
  return {
    tweets
  };
}

//Connects this react component to react store
export default connect(mapStateToProps)(TweetSearchOutput)