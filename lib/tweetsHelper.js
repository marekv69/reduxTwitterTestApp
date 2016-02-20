/**
 * This module contains helper methods for tweets returned using Twitter API
 */

/**
 * It sorts tweets by date or likes
 *
 * @param tweets list of unsorted tweets to be sorted in Twitter API JSON format
 * @param sortingPropertyName date or likes
 * @param sortingType descending or ascending
 *
 * @return sorted tweets
 */
export function sortTweets(tweets, sortingPropertyName,  sortingType) {
  if(sortingPropertyName === "date"){
    sortByDate(tweets, sortingType);
  } else {
    sortByLikes(tweets, sortingType);
  }

  return tweets;
}

/**
 * It creates and returns number of likes, likes per tweets and usernames used in tweets from list of tweets
 * in Twitter API JSON format from
 *
 * @param tweets list of tweets in Twitter API JSON format from
 * @returns {{numberOfLikes: number, likesPerTweet: (number|*), userNamesInTweetsMap}}
 */
export function getTweetsInfo(tweets) {
  var numberOfLikes = 0, allTweetsText= "";

  tweets.forEach(currentTweet =>{
    numberOfLikes += currentTweet.hasOwnProperty("retweeted_status") ? currentTweet.retweeted_status.favorite_count :
      currentTweet.favorite_count;

    allTweetsText += currentTweet.text;
  });

  const likesPerTweet = numberOfLikes / tweets.length;

  return {numberOfLikes, likesPerTweet, userNamesInTweetsMap : getUserNamesInTweetsMapFromTweetsText(allTweetsText)};
}

function sortByDate(tweets, sortingType) {
  tweets.sort((a, b)=> {
    if (sortingType == "descending") {
      return new Date(b.created_at) - new Date(a.created_at);
    } else {
      return new Date(a.created_at) - new Date(b.created_at);
    }
  });
}

function sortByLikes(tweets, sortingType) {
  tweets.sort((a, b)=> {
    let aFavorite_count = a.hasOwnProperty("retweeted_status") ? a.retweeted_status.favorite_count :
        a.favorite_count;
    let bFavorite_count = b.hasOwnProperty("retweeted_status") ? b.retweeted_status.favorite_count :
        b.favorite_count;

    if (sortingType === "descending") {
      return bFavorite_count - aFavorite_count;
    } else {
      return aFavorite_count - bFavorite_count;
    }
  });
}

function getUserNamesInTweetsMapFromTweetsText(allTweetsText) {
  const userNameRegex = /@([\w_]){1,15}/g;
  const userNamesInTweetsMap = new Map();

  for (let actualUser = userNameRegex.exec(allTweetsText); actualUser !== null; actualUser = userNameRegex.exec(allTweetsText)) {

    if (!userNamesInTweetsMap.has(actualUser[0].toLowerCase())) {

      userNamesInTweetsMap.set(actualUser[0].toLowerCase(), actualUser[0]);
    }
  }
  return userNamesInTweetsMap;
}

