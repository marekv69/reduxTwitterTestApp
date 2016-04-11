import Component from '../node_modules/react-pure-render/component';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {ButtonGroup, DropdownButton, Button, MenuItem} from 'react-bootstrap';
import { changeFilteringOrSortingOrModalInfo } from '../actions';

/**
 * This container contains GUI elements for sorting and showing modal info window.
 * It allows sorting tweets through date when a tweet was added and likes of each tweets. Both ascending and descending.
 * Two <DropdownButton> components are used for sorting.
 * Showing modal info window can be triggered by <Button> component.
 */
export default class TweetListButtonGroup extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <ButtonGroup>
          <DropdownButton title="Sort by date" bsStyle="info" bsSize="xsmall" id="dropdown1"
                          onSelect={this.props.sortByDate}>
            <MenuItem eventKey="ascending">Ascending</MenuItem>
            <MenuItem eventKey="descending">Descending</MenuItem>
          </DropdownButton>
          <DropdownButton title="Sort by likes" bsStyle="info" bsSize="xsmall" id="dropdown2"
                          onSelect={this.props.sortByLikes}>
            <MenuItem eventKey="ascending">Ascending</MenuItem>
            <MenuItem eventKey="descending">Descending</MenuItem>
          </DropdownButton>
          <Button bsStyle="success" bsSize="xsmall" onClick={this.props.showModalInfo}>
            Show modal info
          </Button>
        </ButtonGroup>
    );
  }
}

TweetListButtonGroup.propTypes = {
  sortByDate: PropTypes.func.isRequired,
  sortByLikes: PropTypes.func.isRequired,
  showModalInfo: PropTypes.func.isRequired
};

