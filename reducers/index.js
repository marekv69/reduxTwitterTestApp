import { combineReducers } from 'redux'
import { REQUEST_TWEETS, RECEIVE_TWEETS, RECEIVE_ERROR, CHANGE_FILTERING_OR_SORTING_OR_MODAL_INFO } from '../actions'



const defaultSortingAndFilteringOptions = {
    currentSortingProperty : "date",
    currentSortingType : "descending",
    filterString : "",
    showModalInfo : false
};


function tweetsReducer(state = {areTweetsLoading: false}, action) {

  switch (action.type) {
    case REQUEST_TWEETS:
      return Object.assign({}, state, defaultSortingAndFilteringOptions, action.requestPayload);

    case RECEIVE_TWEETS:
    case RECEIVE_ERROR:
      return Object.assign({}, state, action.receivePayload);

    case CHANGE_FILTERING_OR_SORTING_OR_MODAL_INFO:
      return Object.assign({}, state, action.changePropertyObject);

    default:
      return state
  }
}


export default tweetsReducer;
