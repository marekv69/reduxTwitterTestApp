# reduxTwitterTestApp

this app is used for showing 50 latest tweets of a twitter user. It's implemented using [React framework](http://facebook.github.io/react/docs/getting-started.html) and [Redux container](https://github.com/rackt/redux). It uses Async test app from Redux as an infrastructure 

## Important used modules
* [Redux Async example app](https://github.com/rackt/redux/tree/master/examples) - for app infrastructure
* [react tweet](https://github.com/artnotfound/react-tweet) - react tweet component for visualizing a tweet from Twitter
* [react bootstrap](https://github.com/react-bootstrap/react-bootstrap) - some copmonents (buttons, inputs) are used from this library
* [twit](https://github.com/ttezel/twit) - module for communication with Twitter API in the backend

## Important parts of code
* /reduxTwitterTestApp/components - react components
* /reduxTwitterTestApp/containers - redux containers
* /reduxTwitterTestApp/lib/tweetsHelper.js - Contains helepr function for parsing/sorting tweets JSONs from Twitter API
* /reduxTwitterTestApp/server.js - node server including rest service for gathering tweets from Twitter API
* /reduxTwitterTestApp/actions - redux actions
* /reduxTwitterTestApp/reducers - redux reducer 

## Installation
 1. clone repository
 2. open folder with cloned project in console
 3. type npm install to download dependencies
 4. type npm start
 5. open a web browser and open the application on http://localhost:3000 URL

## Live example of APP on heroku web server
 https://marekvreduxtwittertestapp.herokuapp.com/

## TODO
* Try using redux-devtools
* switch to React 15
* try to use react-router-redux
* Divide application into more Redux containers
* replace https://github.com/gaearon/react-pure-render with a standard React features 
* better solve sorting of tweets in tweetshelper.js
* creat the whole app more dynamic (e. g. load tweets dynamically when user typing to input for inserting username)
