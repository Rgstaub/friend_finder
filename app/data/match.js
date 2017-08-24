// this function will select the best match and rerturn the data object of that person
let match = function(obj) {
  let myScore = toInt(obj.scores);
   
  // get the data for the saved friends
  let friendsArr = require('./friends.js');
  
  // loop through the friends and store their score in an array
  let scoreTotals = [];
  friendsArr.forEach( (friend, i) => {
    let friendScore = 0;
    friend.scores.forEach( (score, j) => {
      friendScore += Math.abs(myScore[j] - score);
    })
    scoreTotals.push(friendScore);
  })

  // loop through the score array to select the lowest score and store its index
  let winning = {
    score: 500,
    index: null
  };
  scoreTotals.forEach( (score, i) => {
    if (score < winning.score) {
      winning.score = score;
      winning.index = i;
    }
  })
  // Add the new survey data into the JSON store
  friendsArr.push(obj);
  // return the data of the person at that index
  return friendsArr[winning.index];
}

// function to parseInt for an array
function toInt(arr) {
  arr.forEach( (score, k) => {
    arr[k] = parseInt(score);
  })
  return arr;
}

// Ship it out
module.exports = match;