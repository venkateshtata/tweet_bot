var Twit = require('twit');
var config = require('./config');
// console.log(config);
var T = new Twit(config);

var stream = T.stream('user');
stream.on('follow',followed);

function followed(eventMsg){
  var name = eventMsg.sourue.name;
  var screeName = eventMsg.source.screen_name;
  tweetIt('@' +screeName+'thankyou for following me !');
}
