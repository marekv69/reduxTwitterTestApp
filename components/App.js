import Component from 'react-pure-render/component';
import React from 'react';
import TweetSearchBar from '../containers/TweetSearchBar';
import TweetSearchMessage from '../containers/TweetSearchMessage';
import TweetSearchOutput from '../containers/TweetSearchOutput';

class App extends Component {

  render(){
    return (
        <div className="twitter-app-page">
          <h2>Show 50 latest tweets by user name</h2>
          <TweetSearchBar inputPlaceholder ="Type twitter username" innerButtonLabel = "Show tweets"
                          innerButtonLabelWhenGUIBlocked = "Loading..."/>
          <TweetSearchOutput />
          <TweetSearchMessage />
        </div>
    );
  }
}
export default App;