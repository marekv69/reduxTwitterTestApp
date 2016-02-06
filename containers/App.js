import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import TweetList from '../components/TweetList.react';
import SearchBar from '../components/SearchBar.react';
import Message from '../components/Message.react';

class App extends Component {
  constructor(props) {
    super(props)
  }

  //after loading the component
  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }


  render() {
    const { tweets, errorMessage, standardMessage,  areTweetsLoading, currentSortingProperty,
        currentSortingType, filterString, showModalInfo, dispatch} = this.props;


    let tweetsSearchOutput;
    if(tweets){
      tweetsSearchOutput = <TweetList tweets={tweets}
                                      areTweetsLoading={areTweetsLoading}
                                      currentSortingProperty={currentSortingProperty}
                                      currentSortingType={currentSortingType}
                                      filterString={filterString}
                                      showModalInfo={showModalInfo}
                                      dispatch={dispatch}/>;
    } else if (errorMessage){
      tweetsSearchOutput = <Message message={errorMessage} messageType="errorMessage" />;
    } else {
      tweetsSearchOutput = <Message message={standardMessage || ""} messageType="standardMessage" />;
    }

    const tweetsSearchOutputConst = tweetsSearchOutput;

    return (
        <div className="twitter-app-page">
          <h2>Show 50 latest tweets by user name</h2>
          <SearchBar areTweetsLoading={areTweetsLoading} dispatch={dispatch}/>
          {tweetsSearchOutputConst}
        </div>
    );
  }
}

App.propTypes = {
  tweets: PropTypes.array,
  errorMessage : PropTypes.string,
  standardMessage : PropTypes.string,
  areTweetsLoading: PropTypes.bool.isRequired,
  sortingAndFilteringInfo : PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return state;
}

//Connects this react component App to react store
export default connect(mapStateToProps)(App)
