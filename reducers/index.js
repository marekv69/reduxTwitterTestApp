import { combineReducers } from 'redux'
import {
  SELECT_REDDIT, INVALIDATE_REDDIT,
    REQUEST_TWEETS, RECEIVE_TWEETS,RECEIVE_ERROR
} from '../actions'

function selectedReddit(state = 'reactjs', action) {
  console.log("From selectedReddit: "+ action.type)

  switch (action.type) {
    case SELECT_REDDIT:
      return action.reddit
    default:
      return state
  }
}

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {


  switch (action.type) {
    case INVALIDATE_REDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsByReddit(state = { }, action) {
  console.log("From postsByReddit: "+ action.type)

  switch (action.type) {
    case INVALIDATE_REDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
     /* let nextState = {}
      nextState[action.reddit] = posts(state[action.reddit], action)
      return Object.assign({}, state, nextState)*/

      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action)
      })
    default:
      return state
  }
}

const initialState = {
    currentSortingProperty : "date",
    currentSortingType : "descending",
    filterString : "",
    showModalInfo : false,
    tweetsResponse : null,
    areTweetsLoading : false
};


function tweetsReducer(state = initialState, action) {

  switch (action.type) {
    case INVALIDATE_REDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      /* let nextState = {}
       nextState[action.reddit] = posts(state[action.reddit], action)
       return Object.assign({}, state, nextState)*/

      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action)
      })
    default:
      return state
  }
}


export default tweetsReducer;
