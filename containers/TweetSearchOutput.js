import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import TweetListButtonGroup from '../components/TweetListButtonGroup.react';
import TweetListFilterBar from '../components/TweetListFilterBar.react';
import TweetListFilteringAndSortingInfo from '../components/TweetListFilteringAndSortingInfo.react';
import TweetListTweetsOutput from '../components/TweetListTweetsOutput.react';
import TweetListModalInfo from '../components/TweetListModalInfo.react.js';

/**
 * This container is used for showing 50 latest tweets of a user if gathering the tweets using Twitter API
 * finished successfully
 * It contains following components:
 * <TweetListButtonGroup> - buttons for sorting and showing modal info
 * <TweetListFilterBar> - component for filtering tweets
 * <TweetListFilteringAndSortingInfo> - component for showing current filtering and sorting info
 * <TweetListTweetsOutput> - component showing the tweets (filtered and sorted if filtering/sorting is applied)
 * <TweetListModalInfo> - component showing modal window containing basic statistics concerning the tweets
 */
class TweetSearchOutput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { tweets, currentSortingProperty,
        currentSortingType, filterString, showModalInfo, dispatch} = this.props;

    const tweetsSearchOutput =
        <div className="tweet-list">
          <TweetListButtonGroup dispatch={this.props.dispatch}/>
          <TweetListFilterBar filterString={this.props.filterString} dispatch={this.props.dispatch}/>
          <TweetListFilteringAndSortingInfo filterString={this.props.filterString} currentSortingProperty=
          {this.props.currentSortingProperty} currentSortingType={this.props.currentSortingType}/>
          <TweetListTweetsOutput currentSortingProperty={this.props.currentSortingProperty} currentSortingType=
          {this.props.currentSortingType} filterString={this.props.filterString} tweets={this.props.tweets}/>
          <TweetListModalInfo tweets={this.props.tweets} dispatch={this.props.dispatch}
                          showModalInfo={this.props.showModalInfo}/>
        </div>

    return (
          tweets ? tweetsSearchOutput : null
    );
  }
}

TweetSearchOutput.propTypes = {
  tweets: PropTypes.object,
  currentSortingProperty: PropTypes.string,
  currentSortingType: PropTypes.string,
  filterString: PropTypes.string,
  showModalInfo: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const {currentSortingProperty, currentSortingType, filterString, showModalInfo} = state;
  const tweets = state.tweetsResponse ? state.tweetsResponse.get("tweets") : null;


  return {
    currentSortingProperty,
    currentSortingType,
    filterString,
    showModalInfo,
    tweets
  };
}

//Connects this react component to react store
export default connect(mapStateToProps)(TweetSearchOutput)