var startQuiz = document.getElementById("start-quiz"); //get element start-quiz to assign event listener to
var questions = document.querySelector("#questionnaire"); //div holding questions and answers
var start = document.querySelector("#start");
var askQuestion = document.getElementById("questions");//questions
var selectAnswer = document.getElementById("answers");
var timerEl1 = document.getElementById('timer');
var counter = 0; //counter variable to count questions we are on
var scoreScreen = document.getElementById("finish");
var score = document.getElementById('your-score');
var initials = document.querySelector("#initials");
var submitScore = document.querySelector("#save-score");
var answerValidation; //variable where correct or incorrect answer validation is displayed to user
var startOver=document.querySelector('go-back');

//timer
secondsLeft = 75;
function setTime() {
    var timerInterval = setInterval(function() {
      timerEl1.textContent = "Time: " + secondsLeft;
      secondsLeft--;
      if(secondsLeft <= 0 ) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);//every 1000m milliseconds

  }

var createQuestion = function(){
    askQuestion.textContent=questionsAndAnswers[counter].question;//getting questions using counter
    for (let i = 0; i < questionsAndAnswers[counter].answer.length; i++) {//for each question show answer choices
       var choices=document.createElement("li");
       choices.setAttribute("style", "color:white; list-style-type:none");
       choices.textContent=questionsAndAnswers[counter].answer[i];
       selectAnswer.appendChild(choices);
    }
    }
   var questionOption=function(event){
   var target=event.target;

    if(counter == questionsAndAnswers.length-1){
        endQuiz();
    }
    else 
    if(target.matches("li")){//for each time user selects one of li elements(answer choices display if answer is correct or incorrect)
        if(target.textContent===questionsAndAnswers[counter].validAnswer){
            answerValidation = document.createElement('p');
            answerValidation.textContent = "Great job, you selected correct answer !";
            questions.appendChild(answerValidation);
            console.log(answerValidation);
        }
        else{
            answerValidation = document.createElement('p');
            answerValidation.textContent = "Wrong answer!";
            questions.appendChild(answerValidation);
            secondsLeft -=5; //if answer incorrect decrease timer for 5 seconds
        }
    if(counter<questionsAndAnswers.length )//if there is more  questions available call the function to create question again
    {
        selectAnswer.textContent="";
        setTimeout(function(){
            answerValidation.textContent="";
        },1000);
        counter++;//increment question
        createQuestion();
    }    
    }
   }
   var endQuiz = function(){//whe game is done show end screen where user can see his final score 
    
    questions.setAttribute('style', 'display:none;');
    scoreScreen = scoreScreen.setAttribute('style', 'display:flex;');
    score.textContent="  " + secondsLeft;
    saveScore();
}
   
//store score
    var saveScore=function(){
        
    var scoreResult = initials.value +" : " + secondsLeft;
    localStorage.setItem("highScores", JSON.stringify(scoreResult));
   // JSON.parse(localStorage.getItem("highScores"));
}
submitScore.addEventListener('click',saveScore)

//we need start  game  //when users click on button start quiz function for game will initiate
startQuiz.addEventListener("click", startGame)
function startGame() {
setTime();
start.setAttribute('style','display:none;');//hide start page
questions.setAttribute('style', 'display:flex');
createQuestion();
}

questions.addEventListener("click",questionOption)

var startOver = function(){
   
//This part of the code has not been completed 
} 

//questions and answers
var questionsAndAnswers = [
    {
        question:"Which data type is used to create a variable that should store text?", 
        answer: ["String",  "string", "myString", "Txt"],
        validAnswer :"String",
    },
    {
        question:"How do you create a variable with the numeric value 5?", 
        answer: ["int x=5;","x=5", "inx x=5", "x=5", ],
        validAnswer :"int x=5;",
    },      
    {
            question:"Which method can be used to return a string in upper case letters?", 
            answer: ["touppercase()", "upperCase()", "toUpperCase()", "tuc()",],
            validAnswer :"toUpperCase()",
           
    }, 
    {
            question:"To declare an array in Java, define the variable type with?", 
            answer: [ "{}", "()", "[]","{[]}", ],
            validAnswer :"[]",
           
    },
   
]
