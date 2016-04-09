import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar.react';
import { getTweets } from '../actions';

/**
 * This container is used for searching tweets using Twitter API for a Twitter user
 * Action onButtonClick is used for gathering tweets
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

const TweetSearchBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default TweetSearchBar;



