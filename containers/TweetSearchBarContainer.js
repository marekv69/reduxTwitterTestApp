import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { getTweets } from '../actions';

/**
 * TODO: Add comment
 */

const mapStateToProps = (state, ownProps) => {
  return {
    isGUIBlocked: state.areTweetsLoading,
      ...ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (currentInputValue) => {
      dispatch(getTweets(currentInputValue));
    }
  };
};

const TweetSearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default TweetSearchBarContainer;



