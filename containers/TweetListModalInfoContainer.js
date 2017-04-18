import Component from '../node_modules/react-pure-render/component';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Modal,  Button} from 'react-bootstrap';
import {getTweetsInfo} from '../lib/tweetsHelper'
import { changeFilteringOrSortingOrModalInfo } from '../actions';

/**
 * This container defines ModalInfo dialog contains basic statistics information about the tweets. It contains number
 * of likes, likes per tweet and list of all Twitter users mentioned in the tweets.
 */
class TweetListModalInfoContainer extends Component {
  
  render() {
    //This line is here because of bug https://phabricator.babeljs.io/T6662
    const {Header: ModalHeader, Body: ModalBody, Footer: ModalFooter, Title : ModalTitle} = Modal;

    const tweetsJSON = this.props.tweets.toJSON();

    const {numberOfLikes, likesPerTweet, userNamesInTweetsMap} =  getTweetsInfo(tweetsJSON);

    let userNames = null;

    if(userNamesInTweetsMap.size > 0) {
      userNames = [];
      userNamesInTweetsMap.forEach( (value, key) => {
        let url = "http://www.twitter.com/"+value.replace('@','');
        userNames.push(<a key={key} href={url} target="_blank">{value}  </a>);
      });
    }

    return (
      <Modal backdrop='static' show={this.props.showModalInfo} onHide={this.props.closeModalInfo}>
        <ModalHeader closeButton>
          <ModalTitle>Statistics for shown tweets</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div>Number of likes: {numberOfLikes}</div>
          <div>Likes per tweet: {likesPerTweet}</div>
          {userNames !==null ? <div>User names: {userNames}</div> : null}
        </ModalBody>
        <ModalFooter>
          <Button onClick={this.props.closeModalInfo}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

TweetListModalInfoContainer.propTypes = {
  tweets : PropTypes.object.isRequired,
  showModalInfo: PropTypes.bool.isRequired,
  closeModalInfo : PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const {showModalInfo} = state;
  const tweets = state.tweetsResponse ? state.tweetsResponse.get("tweets") : null;


  return {
    showModalInfo,
    tweets
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModalInfo : () => {
      dispatch(changeFilteringOrSortingOrModalInfo({
        showModalInfo: false
      }))
    }
  };
};

//Connects this react component to react store
export default connect(mapStateToProps, mapDispatchToProps)(TweetListModalInfoContainer)
