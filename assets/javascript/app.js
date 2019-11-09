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
    answers: [
      "Liverpool FC",
      "Leeds United",
      "Manchester United",
      "Arsenal FC"
    ],
    correctAnswer: 2
  },

  {
    question: "Top Scorer Of The Premier League?",
    answers: ["Thierry Henry", "Didier Drogba", "Alan Shearer", "Wayne Rooney"],
    correctAnswer: 2
  },

  {
    question: "Most Defeats In The Premier League?",
    answers: [
      "Newcastle United",
      "Sunderland AFC",
      "Blackburn Rovers",
      "Everton FC"
    ],
    correctAnswer: 3
  },
  {
    question: "Most Premier League Apperances?",
    answers: ["Gareth Barry", "Ryan Giggs", "Frank Lampard", "James Milner"],
    correctAnswer: 0
  }
];
console.log(" questions " , gameQuestions);

$(document).ready(() => {
  $(".startGame").click(function() {
    for (i = 0; i < gameQuestions.length; i++) {
      console.log("the questions " + gameQuestions[i].question[i]);
    }
  });
});
