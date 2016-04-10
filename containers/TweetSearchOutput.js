import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Iterable} from 'immutable';
import TweetList from '../components/TweetList.react';
import SearchBar from '../components/SearchBar.react';
import Message from '../components/Message.react';

class TweetSearchOutput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { tweets, currentSortingProperty,
        currentSortingType, filterString, showModalInfo, dispatch} = this.props;

    const tweetsSearchOutput = <TweetList tweets={tweets}
                                      currentSortingProperty={currentSortingProperty}
                                      currentSortingType={currentSortingType}
                                      filterString={filterString}
                                      showModalInfo={showModalInfo}
                                      dispatch={dispatch}/>;

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