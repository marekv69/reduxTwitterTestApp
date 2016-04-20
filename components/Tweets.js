import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import Tweet from 'react-tweet';


/**
 * This component shows list of Tweets using react-tweet component
 */
export default class Tweets extends Component {
  
  render() {
    const tweetsList = this.props.tweets.map(function(currentTweet){
      return <Tweet data={currentTweet} key={currentTweet.id}/>;
    });
    return (
      <div>
        {tweetsList}
      </div>
    );
  }
}

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired
};

