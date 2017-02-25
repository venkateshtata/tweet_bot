console.log('bot is running');
  var Twit = require('twit');
  var config = require('./config');
  // console.log(config);
var T = new Twit(config);

var r = Math.floor(Math.random()*100);
function tweetIt(){
var tweet = {
  status:`bot post${r}`
}

T.post('statuses/update',tweet,tweeted);

function tweeted(err, data, response){
  if(err){
    console.log(err);
  }
  else
  console.log("Bot has posted !");
}
}

//tweetIt();

setInterval(tweetIt,1000*20);
