import Component from '../node_modules/react-pure-render/component';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import TweetListButtonGroup from '../components/TweetListButtonGroup';
import { changeFilteringOrSortingOrModalInfo } from '../actions';

/**
 * This container contains GUI elements for sorting and showing modal info window.
 * It allows sorting tweets through date when a tweet was added and likes of each tweets. Both ascending and descending.
 * Two <DropdownButton> components are used for sorting.
 * Showing modal info window can be triggered by <Button> component.
 */
class TweetListSortingContainer extends Component {
  
  render() {
    return (
        <div>
          <TweetListButtonGroup sortByDate = {this.props.sortByDate} 
                              sortByLikes = {this.props.sortByLikes}
                              showModalInfo = {this.props.showModalInfo} />
        </div>
    );
  }
}

TweetListSortingContainer.propTypes = {
  sortByDate : PropTypes.func.isRequired,
  sortByLikes : PropTypes.func.isRequired,
  showModalInfo : PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const {showModalInfo} = state;

  return {
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
    }

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TweetListSortingContainer);
