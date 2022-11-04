var startQuiz = document.getElementById("start-quiz"); //get element start-quiz to assign event listener to
var questions = document.querySelector("#questionnaire"); //div holding questions and answers
var start = document.querySelector("#start");
var askQuestion = document.getElementById("questions");//questions
var selectAnswer = document.getElementById("answers");


//we need start  game  //when users click on button start quiz function for game will initiate
startQuiz.addEventListener("click", startGame)
function startGame() {
start = start.setAttribute('style','display:none;');//hide start page
questions = questions.setAttribute('style', 'display:flex');//show quiz section with questions and answers


//get random question
var randomSelection = Math.floor(Math.random()*questionsAndAnswers.length);
//var randomQuestion = questionsAndAnswers[randomSelection].question;
console.log(randomQuestion);
//askQuestion.textContent= randomQuestion;
var randomQuestion = questionsAndAnswers[randomSelection];
askQuestion.textContent= randomQuestion.question


for (let i = 0; i< questionsAndAnswers[randomSelection].answer.length; i++) {
    //(questionsAndAnswers[randomSelection].answer[i]);
    var test = document.createElement('li');
    test.textContent=questionsAndAnswers[randomSelection].answer[i];
    selectAnswer.appendChild(test);
    selectAnswer.setAttribute('text')
}


//)

//for (var i=0; i< questionsAndAnswers.length; i++){
    // question.answer.forEach({
    // selectAnswer.textContent= answer;
    // //});
    

}



//console.log(askQuestion);



//show question for random index
//for(var i=0; i<randomQuestion.length; i++ ){
   // showQuestion[i] = questionsAndAnswers[randomSelection[i]];
   // askQuestion.textContent= showQuestion[i];
  //  console.log(askQuestion);
//}//





//}

//create timer
//show score
//randomize questions
//select correct answer media query on click

//show ending screen with final score, enter initials to store value using local storage
//high store list
//try again maun
//ongoing score

//display questions select next question
//questions set up in object so they can easely accessed 
var questionsAndAnswers = [
    {
        question:"What is Capital of Philippines", 
        answer: ["Manila",  "New York", "Rabat", "Bratislava"],
       validAnswer :"Manila",
    },
    {
        question:"What is Capital of Bosnia", 
        answer: ["Sarajevo","Belgrade", "Rabat", "Bratislava", ]
    },      
    {
            question:"What is Capital of Serbia", 
            answer: ["Prague", "Belgrade", "Rabat", "Bratislava",]
           
    }, 
    {
            question:"What is Capital of Croatia", 
            answer: [ "Manila", "New York", "Rabat", "Zagreb", ]
           
    },
   
]
console.log(questionsAndAnswers);


//is answer correct or wrong