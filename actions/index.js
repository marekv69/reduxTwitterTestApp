import fetch from 'isomorphic-fetch';

export const REQUEST_TWEETS = 'REQUEST_TWEETS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';

export function selectReddit(reddit) {
  return {
    type: SELECT_REDDIT,
    reddit
  }
}

export function invalidateReddit(reddit) {
  return {
    type: INVALIDATE_REDDIT,
    reddit
  }
}

function requestTweets(reddit) {
  return {
    type: REQUEST_TWEETS,
    areTweetsLoading : true
  }
}

function receiveTweets(response) {
  return {
    type: RECEIVE_TWEETS,
    tweetsResponse: response,
    areTweetsLoading : false
  }
}

function receiveError(error) {
  return {
    type: RECEIVE_ERROR,
    tweetsResponse: {errorMessage: error.message},
    areTweetsLoading : false
  }
}

function getTweets(username) {
  return dispatch => {
    dispatch(requestTweets());
    return fetch(`/user_timeline?screen_name=${username}`)
      .then(response => response.json())
      .then(response => dispatch(receiveTweets(response)))
      .catch(error =>  dispatch(receiveError(error)));
  }
}

