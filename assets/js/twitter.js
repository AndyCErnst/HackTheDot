var twit = $('#twitter-container');
var i = 0;

for(var j = 0; j < 10; j++) {
  addTweet();
}
function addTweet() {
  if(i>=tweets.length){
    i = 0;
  }
  $('.tweet'+i).remove();
  twit.append('<div class="tweet tweet'+i+'">'+tweets[++i]+'</div>');
}

setInterval(addTweet, 2000);
