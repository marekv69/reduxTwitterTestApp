import { combineReducers } from 'redux';
import { REQUEST_TWEETS, RECEIVE_TWEETS, RECEIVE_ERROR, CHANGE_FILTERING_OR_SORTING_OR_MODAL_INFO } from '../actions';
import {Record} from 'immutable';



const defaultSortingAndFilteringOptions = {
    currentSortingProperty : "date",
    currentSortingType : "descending",
    filterString : "",
    showModalInfo : false
};

const InitialState = Record({
  ...defaultSortingAndFilteringOptions, //functionality from stage-1 ES2016
  areTweetsLoading : false,
  tweetsResponse : null
});

const initialState = new InitialState();

function tweetsReducer(state = initialState, action) {

  switch (action.type) {
    case REQUEST_TWEETS:
    return state.merge(defaultSortingAndFilteringOptions, action.requestPayload);

    case RECEIVE_TWEETS:
    case RECEIVE_ERROR:
      return state.merge(action.receivePayload);

    case CHANGE_FILTERING_OR_SORTING_OR_MODAL_INFO:
      return state.merge(action.changePropertyObject);

    default:
      return state;
  }
}

export default tweetsReducer;
