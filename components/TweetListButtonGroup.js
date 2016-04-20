import Component from '../node_modules/react-pure-render/component';
import React, {PropTypes} from 'react';
import {ButtonGroup, DropdownButton, Button, MenuItem} from 'react-bootstrap';

/**
 * TODO: comment
 */
export default class TweetListButtonGroup extends Component {
  
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

