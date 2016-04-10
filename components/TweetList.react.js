import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import TweetListButtonGroup from './TweetListButtonGroup.react';
import TweetListFilterBar from './TweetListFilterBar.react';
import TweetListFilteringAndSortingInfo from './TweetListFilteringAndSortingInfo.react';
import TweetListTweetsOutput from './TweetListTweetsOutput.react';
import TweetListModalInfo from './TweetListModalInfo.react.js';

/**
 * This component is used for showing 50 latest tweets of a user if gathering the tweets using Twitter API
 * finished successfully
 * It contains following components:
 * <TweetListButtonGroup> - buttons for sorting and showing modal info
 * <TweetListFilterBar> - component for filtering tweets
 * <TweetListFilteringAndSortingInfo> - component for showing current filtering and sorting info
 * <TweetListTweetsOutput> - component showing the tweets (filtered and sorted if filtering/sorting is applied)
 * <TweetListModalInfo> - component showing modal window containing basic statistics concerning the tweets
 */
export default class TweetList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}

TweetList.propTypes = {
  tweets: PropTypes.object.isRequired,
  currentSortingProperty: PropTypes.string.isRequired,
  currentSortingType: PropTypes.string.isRequired,
  filterString: PropTypes.string.isRequired,
  showModalInfo: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};
