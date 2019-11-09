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
var currentQuestion;
var correctAnswer;
var incorrectAnswer;
var unanswered;
var time;
var answered;
var userSelect;
var answers = ["Manchester United", "Alan Shearer", "Everton FC", "Gareth Barry"]
var userSelection = $("input");
var totalQuestions = 4;
//user has 300 seconds
var countdown = 300;

/* Working on a different approach 
var gameQuestions = [
  {
    questionTitle: "Most Wins In The Premier League?",
    answers: [
      "Liverpool FC",
      "Leeds United",
      "Manchester United",
      "Arsenal FC"
    ],
    correctAnswer: 2
  },

  {
    questionTitle: "Top Scorer Of The Premier League?",
    answers: ["Thierry Henry", "Didier Drogba", "Alan Shearer", "Wayne Rooney"],
    correctAnswer: 2
  },

  {
    questionTitle: "Most Defeats In The Premier League?",
    answers: [
      "Newcastle United",
      "Sunderland AFC",
      "Blackburn Rovers",
      "Everton FC"
    ],
    correctAnswer: 3
  },
  {
    questionTitle: "Most Premier League Apperances?",
    answers: ["Gareth Barry", "Ryan Giggs", "Frank Lampard", "James Milner"],
    correctAnswer: 0
  }
];

for (var i = 0; i < gameQuestions.length; i++) {
 
  //get question titles 
  var titleTopic = gameQuestions[i].questionTitle; 
  console.log('Topic: ' + titleTopic)

  //get answers to the questions 
  var answers = gameQuestions[i].answers;
  console.log('Answers: ' + answers)

  //get correct answers 
  var correctAnswer = gameQuestions[i].correctAnswer;
  console.log('Correct Answer: ' + correctAnswer)
}
*/

$(document).ready(function() {
  $("#quiz, #questions, #timer").hide();

  function startGame() {
    $("#startGame").click(function() {
      $("#quiz, #questions, #timer").show();
      $("#startGame").hide();
      timer()
    });
  }
  startGame()

  function timer() {
    var startTimer = setInterval(function() {
      countdown--;
      $("#countdown").html(countdown + " Seconds Left");
    }, 1000);
  }

//scoreCount will be triggered when "submit is hit"
  function scoreCount() {
    for (var i = 0; i < userSelection.length; i++) {

        // If user selected an answer
        if (userSelection[i].checked) {

            // check if what the user select is equal to the array answers

            if (answers.indexOf(userSelection[i].value) !== -1) {
                correctAnswer++;
            } else {
                incorrectAnswer++;
            }
        }
    }
    //check how many questions were blank by subtracting the if/else values from above from the total number of questions.
    
    var totalAnswered = correctAnswer + incorrectAnswer;
    console.log(totalAnswered);
    if (totalAnswered !== totalQuestions) {
        blank = totalQuestions - totalAnswered;
    }

    $('#correct').html(" " + correctAnswer);
    $('#incorrect').html(" " + incorrectAnswer);
    $("#blank").html(" " + blank);

} //end scoreCount



$("#submit").click(function() {
//  $("#quiz, #timer").hide("slow");
 // $("#results").show("slow");
  //clearInterval(timer);
  scoreCount();
});



});
