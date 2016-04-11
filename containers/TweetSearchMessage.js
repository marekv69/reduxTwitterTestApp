import React from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message';


/**
 * This container is used for showing standard or error message from Twitter API search call response.
 * Both messages types are returned from Twitter API when no tweets are returned in the response
 */

const mapStateToProps = (state) => {
  if(state.tweetsResponse != undefined && state.tweetsResponse.get("errorMessage")!== null)
  {
    return {
      messageText : state.tweetsResponse.get("errorMessage"),
      isErrorMessage : true
    }
  }

  if(state.tweetsResponse != undefined && state.tweetsResponse.get("standardMessage")!== null)
  {
    return {
      messageText : state.tweetsResponse.get("errorMessage"),
      isErrorMessage : false
    }
  }

  return {};
};

const TweetSearchMessage = connect(
    mapStateToProps,
)(Message);

export default TweetSearchMessage;
