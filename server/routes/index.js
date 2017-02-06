const express = require('express');
const router = express.Router();
const Twitter = require('twitter');
var config = require('../config.json')

var client = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

router.get('/users', function (req, res, next) {
  var username = {screen_name: req.query.q}

  client.get('statuses/user_timeline', username, function(error, tweets, response) {

      console.log('testestes');
      console.log(tweets);
      res.send(tweets)
  })

})

router.post('/newtweet', function(req, res, next) {
  client.post('statuses/update', {status: req.body.dataStatus}, function (error, tweets, response) {
    res.send(tweets)
  })
})


router.get('api/twitter/callback', function(req, res, next) {
    res.send('wrong');
})


module.exports = router;
