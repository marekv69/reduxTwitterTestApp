import Component from 'react-pure-render/component';
import React from 'react';
import TweetSearchBarContainer from '../containers/TweetSearchBarContainer';
import TweetSearchMessageContainer from '../containers/TweetSearchMessageContainer';
import TweetSearchOutputContainer from '../containers/TweetSearchOutputContainer';

class App extends Component {

  render(){
    return (
        <div className="twitter-app-page">
          <h2>Show 50 latest tweets by user name</h2>
          <TweetSearchBarContainer inputPlaceholder ="Type twitter username" innerButtonLabel = "Show tweets"
                          innerButtonLabelWhenGUIBlocked = "Loading..."/>
          <TweetSearchOutputContainer />
          <TweetSearchMessageContainer />
        </div>
    );
  }
}
export default App;