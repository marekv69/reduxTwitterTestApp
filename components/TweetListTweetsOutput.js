import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import Tweet from 'react-tweet';
import {Label} from 'react-bootstrap';
import {sortTweets} from '../lib/tweetsHelper';


/**
 * This component shows (sorted/filtered) tweets using <Tweet> component for each of them. If filtering is turned on
 * and no tweets exist for the filter string the appropriate message is shown instead of tweets
 */
export default class TweetListTweetsOutput extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const filterRegex = this.props.filterString !== "" ? new RegExp(this.props.filterString, "i") : null;
    const tweetsJSON = this.props.tweets.toJSON();


    const sortedAndFilteredTweets = sortTweets(tweetsJSON, this.props.currentSortingProperty,
        this.props.currentSortingType).reduce((arrayWithTweets, currentTweet) => {

          if (filterRegex === null || filterRegex.test(currentTweet.text)) {
            arrayWithTweets.push(<Tweet data={currentTweet} key={currentTweet.id}/>);
          }
          return arrayWithTweets;
        }, []);

    const tweetsOutput =
      sortedAndFilteredTweets.length > 0 ? sortedAndFilteredTweets :
        <span className="noTweetsMessage">There are no tweets containing <Label bsStyle="warning">{this.props.filterString}</Label></span>;

    return (
      <div className="tweets-output">
        {tweetsOutput}
      </div>
    );
  }
}

TweetListTweetsOutput.propTypes = {
  currentSortingProperty : PropTypes.string.isRequired,
  currentSortingType  : PropTypes.string.isRequired,
  filterString : PropTypes.string.isRequired,
  tweets: PropTypes.object.isRequired
};

