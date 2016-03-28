import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Input, Button} from 'react-bootstrap';
import { getTweets } from '../actions';

/**
 * TODO: add comment, rename component because the current name is obsolete
 */

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentInputValue: ""
    };
  }

  _handleInputValueChange(event) {
    this.setState({currentInputValue : event.target.value})
  }


  render() {
    let input;

    const innerButton =
        <Button
            disabled={ this.state.currentInputValue === "" || this.props.areTweetsLoading}
            bsStyle="primary"
            onClick={ () => {
              this.props.onButtonClick(this.state.currentInputValue);
            }}
            standalone>
          { this.props.areTweetsLoading ? "Loading..." : "Show tweets" }
        </Button>;

    return (
        <div className="search-bar">
          <form>
            <Input
                buttonAfter={innerButton}
                className="searchInput"
                disabled={this.props.areTweetsLoading}
                onChange={this._handleInputValueChange.bind(this)}
                onKeyPress={(event) =>{
                  if(event.charCode==13){
                    event.preventDefault();
                    if(this.state.currentInputValue !== "") {
                      this.props.onButtonClick(this.state.currentInputValue);
                    }
                  }
                }}
                placeholder="Type twitter username"
                standalone
                type="text"
                value = {this.state.currentInputValue}
            />
          </form>
        </div>
    );
  }


}

SearchBar.propTypes = {
  areTweetsLoading: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default SearchBar;