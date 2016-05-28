import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Input} from 'react-bootstrap';
import { changeFilteringOrSortingOrModalInfo } from '../actions';

/**
 * This container is used for filtering showed tweets through a filter string in their bodies.
 * It contains <Input> component for entering the filter string
 */
class TweetListFilterBarContainer extends Component {

  render() {

    return (
        <div className="filter-bar">
          <Input bsSize="small" placeholder={"Write some text to filter tweets"}
                 type="text"
                 onChange={(e) => {
              this.props.changeFiltering(e.target.value);
          }}
          />
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFiltering : (newFilterString) => {
      dispatch(changeFilteringOrSortingOrModalInfo({
        filterString : newFilterString
      }));
    }
  };
};

PropTypes.propTypes = {
  changeFiltering : PropTypes.func.isRequired
};

export default connect(null , mapDispatchToProps)(TweetListFilterBarContainer);