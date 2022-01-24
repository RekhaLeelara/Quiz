var quizPages = document.querySelector(".quizPages");


var pageQ1div = document.createElement("div");
var pageQ1 = document.createElement("p");
var pageA1 = document.createElement("p");
var pageAnsBtn1 = document.createElement("button");
var pageAnsBtn2 = document.createElement("button");
var pageAnsBtn3 = document.createElement("button");
var pageAnsBtn4 = document.createElement("button");
var li = document.createElement("li");

pageAnsBtn1.setAttribute("data-number", "1");
pageAnsBtn2.setAttribute("data-number", "2");
pageAnsBtn3.setAttribute("data-number", "3");
pageAnsBtn4.setAttribute("data-number", "4");



var quizQuestions = [{
    quizQ: "Which is the largest continent in the world? ___________",
    quizA: {
        Option1: "Europe",
        Option2: "Asia",
        Option3: "Africa",
        Option4: "Antartica",
    },
    correctans: "2"
  //  quizA: ["Europe", "Asia", "Africa", "Antartica"]
},
{
    quizQ: "What does a thermometer measure ___________",
    quizA: {
        Option1: "Celcius",
        Option2: "Temperature",
        Option3: "degrees",
        Option4: "Nomenclature",
    },
    correctans: "2"
},
{
    quizQ: "Which planet in the Milky way is biggest ___________",
    quizA: {
        Option1: "Jupiter",
        Option2: "Earth",
        Option3: "Mercury",
        Option4: "Venus",
    },
    correctans: "1"
},
{
    quizQ: "What is the Earth's largest ocean ___________",
    quizA: {
        Option1: "Atlantic Ocean",
        Option2: "Southern Ocean",
        Option3: "Pacific",
        Option4: "Southern Ocean",
    },
    correctans: "3"
},
{
    quizQ: "Which bird can fly backward ___________",
    quizA: {
        Option1: "Parrots",
        Option2: "Owls",
        Option3: "American robin",
        Option4: "A hummingbird",
    },
    correctans: "4"
}];