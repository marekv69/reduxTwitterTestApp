import Component from '../node_modules/react-pure-render/component';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import TweetListButtonGroup from '../components/TweetListButtonGroup';
import TweetListFilterBar from '../components/TweetListFilterBar';
import TweetListFilteringAndSortingInfo from '../components/TweetListFilteringAndSortingInfo';
import {ButtonGroup, DropdownButton, Button, MenuItem} from 'react-bootstrap';
import { changeFilteringOrSortingOrModalInfo } from '../actions';

/**
 * This container contains GUI elements for sorting and showing modal info window.
 * It allows sorting tweets through date when a tweet was added and likes of each tweets. Both ascending and descending.
 * Two <DropdownButton> components are used for sorting.
 * Showing modal info window can be triggered by <Button> component.
 */
class TweetListFilteringAndSortingContainer extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div>
          <TweetListButtonGroup sortByDate = {this.props.sortByDate} 
                              sortByLikes = {this.props.sortByLikes}
                              showModalInfo = {this.props.showModalInfo} />
          <TweetListFilterBar filterString = {this.props.filterString}
                              changeFiltering = {this.props.changeFiltering}/>
          <TweetListFilteringAndSortingInfo filterString={this.props.filterString} currentSortingProperty=
              {this.props.currentSortingProperty} currentSortingType={this.props.currentSortingType}/>
        </div>
    );
  }
}

TweetListFilteringAndSortingContainer.propTypes = {
  currentSortingProperty: PropTypes.string.isRequired,
  currentSortingType: PropTypes.string.isRequired,
  filterString: PropTypes.string.isRequired,
  sortByDate : PropTypes.func.isRequired,
  sortByLikes : PropTypes.func.isRequired,
  showModalInfo : PropTypes.func.isRequired,
  changeFiltering : PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const {currentSortingProperty, currentSortingType, filterString, showModalInfo} = state;

  return {
    currentSortingProperty,
    currentSortingType,
    filterString,
    showModalInfo
  };

};

const mapDispatchToProps = (dispatch) => {
  return {

    sortByDate : (e, sortingType) => {
      dispatch(changeFilteringOrSortingOrModalInfo({
        currentSortingProperty : "date",
        currentSortingType : sortingType
      }));
    },

    sortByLikes : (e, sortingType) => {
      dispatch(changeFilteringOrSortingOrModalInfo({
        currentSortingProperty : "likes",
        currentSortingType : sortingType
      }));
    },

    showModalInfo : () => {
      dispatch(changeFilteringOrSortingOrModalInfo({
        showModalInfo : true
      }));
    },
    
    changeFiltering : (newFilterString) => {
      dispatch(changeFilteringOrSortingOrModalInfo({
        filterString : newFilterString
      }));
    }

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TweetListFilteringAndSortingContainer);
