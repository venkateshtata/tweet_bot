console.log('bot is running');
  var Twit = require('twit');
  var config = require('./config');
  // console.log(config);
var T = new Twit(config);

var tweet = {
  status:"hello world"
}

T.post('statuses/update',tweet,tweeted);

function tweeted(err, data, response){
  if(err){
    console.log(err);
  }
  else
  console.log(data);
}
