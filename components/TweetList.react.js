//import './TweetList.styl';
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
/*import TweetListButtonGroup from './TweetListButtonGroup.react';
import TweetListFilterBar from './TweetListFilterBar.react';
import TweetListFilteringAndSortingInfo from './TweetListFilteringAndSortingInfo.react';*/
import TweetListTweetsOutput from './TweetListTweetsOutput.react';
//import TweetListModalInfo from './TweetListModalInfo.react.js';*/

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

    this.changeSorting = this.changeSorting.bind(this);
    this.changeFilteringString = this.changeFilteringString.bind(this);
    this.showModalInfo = this.showModalInfo.bind(this);
    this._hideModalInfo = this._hideModalInfo.bind(this);
  }

  changeSorting(currentSortingProperty, currentSortingType) {
    this.setState({
      currentSortingProperty,
      currentSortingType
    });
  }

  changeFilteringString(newFilterString) {
    this.setState({
      filterString : newFilterString
    });
  }

  showModalInfo() {
    this.setState({
      showModalInfo : true
    });
  }

  _hideModalInfo() {
    this.setState({
      showModalInfo : false
    });
  }

  render() {
    /*<TweetListButtonGroup onChangeSorting={this.changeSorting} showModalInfo={this.showModalInfo}/>
     <TweetListFilterBar onChangeFilteringString={this.changeFilteringString} filterString={this.state.filterString}/>
     <TweetListFilteringAndSortingInfo filterString={this.state.filterString} currentSortingProperty=
     {this.state.currentSortingProperty} currentSortingType={this.state.currentSortingType}/>*/

    /* <TweetListModalInfo tweets={this.props.tweets} showModalInfo={this.state.showModalInfo}
     closeModalInfoHandler={this._hideModalInfo}/>*/

    return (
      <div className="tweet-list">

        <TweetListTweetsOutput currentSortingProperty={this.props.currentSortingProperty} currentSortingType=
          {this.props.currentSortingType} filterString={this.props.filterString} tweets={this.props.tweets}/>

      </div>
    );
  }
}

TweetList.propTypes = {
  tweets: PropTypes.array.isRequired,
  areTweetsLoading: PropTypes.bool.isRequired,
  currentSortingProperty: PropTypes.string.isRequired,
  currentSortingType: PropTypes.string.isRequired,
  filterString: PropTypes.string.isRequired,
  showModalInfo: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};
