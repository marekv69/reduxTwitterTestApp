//import './Message.styl';
import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react'

/**
 * This component is used for showing message if user has no tweets
 * or gathering tweets using Twitter API finished with an error
 */
export default class Message extends Component {

  static propTypes = {
    message: PropTypes.object.required,
    messageType: PropTypes.object.required
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {message, messageType} = this.props;

    const className = messageType === "standardMessage" ? "message" : "message error";

    return (
      <div className={className}>{message}</div>
    );
  }
}


