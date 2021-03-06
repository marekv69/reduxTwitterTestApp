import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Label} from 'react-bootstrap';

/**
 * This component shows current filtering and sorting info. It shows current filter string if filtering is applied and
 * also current sorting (through date or likes and descending or ascending)
 */
export default class TweetListFilteringInfo extends Component {
  
  constructor(props) {
    super(props);

  }

  render() {
    const filteringInfoOutput =
      this.props.filterString !== "" ? <span>Only tweets containing <Label
        bsStyle="warning">{this.props.filterString}</Label> are shown. </span> : null;

    const sortingInfoOutput =
      <span>Sorted by <Label bsStyle="info">
        {this.props.currentSortingProperty} {this.props.currentSortingType}</Label> :</span>;


    return (
      <div className="filtering-and-sorting-info">
        {filteringInfoOutput}
        {sortingInfoOutput}
      </div>
    );
  }
}

TweetListFilteringInfo.propTypes = {
  filterString: PropTypes.string.isRequired,
  currentSortingProperty : PropTypes.string.isRequired,
  currentSortingType : PropTypes.string.isRequired
};

