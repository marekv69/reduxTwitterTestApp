"use strict";
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var twit = require('twit');

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})


/**
 * Twitter API credentials
 */
const twitConfig = {
  "consumer_key": "Vavpkk33OIb9vkeDKCxUs7NWX",
  "consumer_secret": "MhH3ci2Oau6ISQFVz9myClqQnMHm6i9A7krJ7uEEwi7wQpfmFw",
  "app_only_auth" :  true
};

/**
 * get ajax method to Twitter API for gathering 50 latest tweets of a user with specified username
 */
app.get("/user_timeline",function (req, res)  {
  const twit = new twit(twitConfig);

  twit.get('statuses/user_timeline', { screen_name: req.query.screen_name, count: 50 }, (err, data) => {
    let response;

    if(typeof err !== "undefined") {
      response = {
        errorMessage : "There were communication error with Twitter API when trying to gather tweets for user "+
        req.query.screen_name + ". Error message: " + err.message + " Error code: " + err.code
      };
    } else {
      if(Array.isArray(data) && data.length > 0) {
        response = {
          tweets: data
        };
      }
      else {
        response = {
          standardMessage : "There are no tweets for user " + req.query.screen_name + " available."
        };
      }
    }

    res.send(response);
  });
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
