import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Input, Button} from 'react-bootstrap';

/**
 * This component is used for filtering showed tweets through a filter string in their bodies.
 * It contains <Input> for entering the filter string and <Button> for confirmation of the filter
 */
export default class TweetListFilterBar extends Component {
  
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

PropTypes.propTypes = {
  changeFiltering : PropTypes.func.isRequired
};
