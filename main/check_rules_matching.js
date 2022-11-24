


var timerID = setInterval(function() {
  // your code goes here...
}, 60 * 1000); // 60 * 1000 milsec

clearInterval(timerID); // The setInterval it cleared and doesn't run anymore.
