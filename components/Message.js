import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react'

/**
 * This component is used for showing a message.
 */
export default class Message extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {messageText, isErrorMessage} = this.props;

    return (
    messageText ? <div className={isErrorMessage ? "message error" : "message"}>{messageText}</div> : null
    );
  }
}

Message.propTypes = {
  messageText: PropTypes.string,
  isErrorMessage: PropTypes.bool
};

