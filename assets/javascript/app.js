//create qeestions display one at a time

//keep count of correct and wrongs

//timer for each question

//if question selected is correct promt "Congrats"

//if time runs out alert and move to next page

//if user hovers on option change class to active

//on final screen show correct answers, incorrects answers and option to restart game (without reloading the page)
//

var correctGuess = 0;
var incorrectsGuess = 0;
var unanswered = 0;
var timer;
var gameQuestions = [
  {
    question: "Most Wins In The Premier League?",
    answers: {
      a: "Liverpool FC",
      b: "Leeds United",
      c: "Manchester United",
      d: "Arsenal FC"
    },
    correctAnswer: "c"
  },

  {
    question: "Top Scorer Of The Premier League?",
    answers: {
      a: "Thierry Henry",
      b: "Didier Drogba",
      c: "Alan Shearer",
      d: "Wayne Rooney"
    },
    correctAnswer: "c"
  },

  {
    question: "Most Defeats In The Premier League?",
    answers: {
      a: "Newcastle United",
      b: "Sunderland AFC",
      c: "Blackburn Rovers",
      d: "Everton FC"
    },
    correctAnswer: "d"
  },
  {
    question: "Most Premier League Apperances?",
    answers: {
      a: "Gareth Barry",
      b: "Ryan Giggs",
      c: "Frank Lampard",
      d: "James Milner"
    }
  }
];

$(document).ready(() => {});
