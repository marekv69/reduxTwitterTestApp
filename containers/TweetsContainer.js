import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Label} from 'react-bootstrap';
import Tweets from '../components/Tweets';
import TweetListFilteringAndSortingInfo from '../components/TweetListFilteringAndSortingInfo';
import {sortTweets} from '../lib/tweetsHelper';


/**
 * TODO: write comment
 */
class TweetsContainer extends Component {
  
  render() {
    const filterRegex = this.props.filterString !== "" ? new RegExp(this.props.filterString, "i") : null;
    const tweetsJSON = this.props.tweets.toJSON();


    const sortedAndFilteredTweets = sortTweets(tweetsJSON, this.props.currentSortingProperty,
        this.props.currentSortingType).reduce((arrayWithTweets, currentTweet) => {

      if (filterRegex === null || filterRegex.test(currentTweet.text)) {
        arrayWithTweets.push(currentTweet);
      }
      return arrayWithTweets;
    }, []);

    const tweetsOutput =
        sortedAndFilteredTweets.length > 0 ? <Tweets tweets={sortedAndFilteredTweets}/> :
            <span className="noTweetsMessage">There are no tweets containing <Label bsStyle="warning">{this.props.filterString}</Label></span>;

    return (
        <div className="tweets-output">
          <TweetListFilteringAndSortingInfo filterString={this.props.filterString} currentSortingProperty=
              {this.props.currentSortingProperty} currentSortingType={this.props.currentSortingType}/>
          {tweetsOutput}
        </div>
    );
  }
}

TweetsContainer.propTypes = {
  currentSortingProperty : PropTypes.string.isRequired,
  currentSortingType  : PropTypes.string.isRequired,
  filterString : PropTypes.string.isRequired,
  tweets: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const {currentSortingProperty, currentSortingType, filterString} = state;
  const tweets = state.tweetsResponse ? state.tweetsResponse.get("tweets") : null;


  return {
    currentSortingProperty,
    currentSortingType,
    filterString,
    tweets
  };
}

//Connects this react component to react store
export default connect(mapStateToProps)(TweetsContainer)