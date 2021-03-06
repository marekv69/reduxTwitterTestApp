import fetch from 'isomorphic-fetch';

export const REQUEST_TWEETS = 'REQUEST_TWEETS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const CHANGE_FILTERING_OR_SORTING_OR_MODAL_INFO = 'CHANGE_FILTERING_OR_SORTING_OR_MODAL_INFO';


function requestTweets() {
  return {
    type: REQUEST_TWEETS,
    requestPayload : {
      tweetsResponse : [],
      areTweetsLoading : true
    }

  }
}

function receiveTweets(response) {
  return {
    type: RECEIVE_TWEETS,
    receivePayload : {
      tweetsResponse: response,
      areTweetsLoading : false
    }
  }
}

function receiveError(error) {
  return {
    type: RECEIVE_ERROR,
    receivePayload : {
      tweetsResponse: {errorMessage: error.message},
      areTweetsLoading : false
    }
  }
}

export function changeFilteringOrSortingOrModalInfo(changePropertyObject) {
  return {
    type: CHANGE_FILTERING_OR_SORTING_OR_MODAL_INFO,
    changePropertyObject : changePropertyObject
  }
}

export function getTweets(username) {
  return dispatch => {
    dispatch(requestTweets());
    return fetch(`/user_timeline?screen_name=${username}`)
      .then(response => response.json())
      .then(response => dispatch(receiveTweets(response)))
      .catch(error =>  dispatch(receiveError(error)));
  }
}

