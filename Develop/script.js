var header = document.querySelector("#header")
var Questions = document.querySelector(".Questions")
var startQuiz = document.querySelector("#startquiz")
var container = document.querySelector(".rectanglebox");
var quizPages = document.querySelector(".quizPages");
var initialsPage = document.querySelector(".initialsPage");
var viewHighscorespage = document.querySelector(".viewHighScoresPage");

var a1 = document.createElement("a");
var a2 = document.createElement("a");
var quizChallenge = document.createElement("p");
var q = document.createElement("div");
var q1 = document.createElement("p");
var q12 = document.createElement("p");
var q13 = document.createElement("p");
var stQuiz = document.createElement("button");
var timerEL = document.createElement("a");
var counter = 50;
var questionNo = 0;
var clickedElement = "";
var setInt;

//final score variables
var div = document.createElement("div");
var p1 = document.createElement("a");
var p2 = document.createElement("p");
var p3 = document.createElement("a");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "initials");
var score = 0;

var submit = document.createElement("button");
var initials = "";

a1.textContent = "View high scores";
a2.textContent = "Time: ";
quizChallenge.textContent = "Coding Quiz Challenge";
q1.textContent = "Try to answer the following code-related questions within the time limit."
q12.textContent = "Keep in mind that incorrect answers will penalize your score/time"
q13.textContent = "by ten seconds!"
stQuiz.textContent = "Start Quiz";

a1.classList.add("viewhighscores");
a1.href = "www.google.com"
q1.classList.add("startline1");
q12.classList.add("startline2");
q13.classList.add("startline3");
quizChallenge.classList.add("quizchallenge");

start()

function start() {
    counter = 50;
    questionNo = 0;
    console.log("questionNo: " + questionNo);
    
    header.appendChild(a1);
    header.appendChild(a2);
    Questions.appendChild(q).appendChild(quizChallenge);
    Questions.appendChild(q).appendChild(q1);
    Questions.appendChild(q).appendChild(q12);
    Questions.appendChild(q).appendChild(q13);
    Questions.appendChild(stQuiz);

    header.appendChild(timerEL);  
    console.log("resetting counter: "+timerEL.textContent);

function showNextQuestion() {
    pageQ1.textContent = quizQuestions[questionNo].quizQ;
    quizPages.appendChild(pageQ1div).appendChild(pageQ1);
    addOption(pageAnsBtn1, quizQuestions[questionNo].quizA.Option1);
    addOption(pageAnsBtn2, quizQuestions[questionNo].quizA.Option2);
    addOption(pageAnsBtn3, quizQuestions[questionNo].quizA.Option3);
    addOption(pageAnsBtn4, quizQuestions[questionNo].quizA.Option4);
}

function addOption(answerBtn, optionText) {
    answerBtn.textContent = optionText;
    quizPages.appendChild(pageQ1div).appendChild(answerBtn);
}

function finalScore() {
    console.log("Youre in finalscore page");
    $(quizPages).hide();
    $(initialsPage).show();
    p2.textContent = "Your final score is: " + score
    p3.textContent = "Enter initials: "
    submit.textContent = "Submit"
    // timer.textContent = 0;
    // clearInterval(setInt);

    initialsPage.appendChild(div).appendChild(p2);
    initialsPage.appendChild(div).appendChild(p3);
    document.body.appendChild(div).appendChild(input);
    initialsPage.appendChild(div).appendChild(submit);

    console.log("Value before submit: "+document.getElementById("initials").value);
    submit.addEventListener("click", function (event) {
        console.log("Value after submit: "+document.getElementById("initials").value);
        initials = document.getElementById("initials").value;
        localStorage.setItem('ini', JSON.stringify(initials));
        $(initialsPage).hide();
        $(viewHighscorespage).show();
        viewHighScores();
    });
}

function quizAnswer(clickedElement, questionNo) {
    if (clickedElement == quizQuestions[questionNo].correctans) {
        score = score + 20;
    }
    else {
        counter = counter - 10;
    }
}

function viewHighScores() {
    var div2 = document.createElement("div");
    var highScore = document.createElement("a");
    var scoreList = document.createElement("a");
    var goBack = document.createElement("button");
    var clearHighScores = document.createElement("button");
    // timer.textContent = 0;

    var hs = JSON.parse(localStorage.getItem('ini'));

    document.getElementById("initials").value = "";
    highScore.textContent = "High Scores";
    scoreList.textContent = hs + "-" + score;
    goBack.textContent = "Go back";
    clearHighScores.textContent = "Clear High Scores";

    viewHighscorespage.appendChild(div2).appendChild(highScore);
    viewHighscorespage.appendChild(div2).appendChild(scoreList);
    viewHighscorespage.appendChild(div2).appendChild(goBack);
    viewHighscorespage.appendChild(div2).appendChild(clearHighScores);
    console.log("viewHighScores: " + hs);

    goBack.addEventListener("click", function (event) {
        console.log("timerEL.textContent: " + timerEL.textContent);
        $(viewHighscorespage).hide();
        $(Questions).show();
        $(header).show();
        start();
    });
}

function endQuiz(){
    clearInterval(setInt);
    timerEL.textContent = 0;
    finalScore();
}

stQuiz.addEventListener("click", function (event) {

    $(Questions).hide();
    $(quizPages).show();

    setInt = setInterval(function () {
        // Decrement `timeLeft` by 1
        counter--;
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEL.textContent = counter;
        
      if (counter < 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        endQuiz();
      }
  
    }, 1000)
    showNextQuestion();
});


quizPages.addEventListener("click", function (event) {
    clickedElement = event.target.dataset.number;
    quizAnswer(clickedElement, questionNo);
    console.log(questionNo);

    console.log("Question No before increment: " + questionNo);
    if (questionNo === 4) {
        console.log("hiding a quiz page");
        // $(quizPages).hide();
        // $(initialsPage).show();
        endQuiz();
    }
    else {
        questionNo++;
        console.log("Question No after increment: " + questionNo);
        showNextQuestion();
    }

});
