var startQuiz = document.getElementById("start-quiz"); //get element start-quiz to assign event listener to
var questions = document.querySelector("#questionnaire"); //div holding questions and answers
var start = document.querySelector("#start");
var askQuestion = document.getElementById("questions");//questions
var selectAnswer = document.getElementById("answers");
var timerEl1 = document.getElementById('timer');

//timer
secondsLeft = 75;
function setTime() {
    var timerInterval = setInterval(function() {
      timerEl1.textContent = "Time: " + secondsLeft;
      secondsLeft--;
      
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
       //show  result to submit
      }
  
    }, 1000);//every 1000m miliseconds
  }

//we need start  game  //when users click on button start quiz function for game will initiate
startQuiz.addEventListener("click", startGame)
function startGame() {
setTime();
start = start.setAttribute('style','display:none;');//hide start page
questions = questions.setAttribute('style', 'display:flex');//show quiz section with questions and answers


//get random question

// for(i=0; i<questionsAndAnswers.length; i++){
    var randomSelection = Math.floor(Math.random()*questionsAndAnswers.length);
    var randomQuestion = questionsAndAnswers[randomSelection];
    askQuestion.textContent= randomQuestion.question
   
//show offered answers
for (let i = 0; i< questionsAndAnswers[randomSelection].answer.length; i++) {
    var answerList = document.createElement('li');
    answerList.textContent = questionsAndAnswers[randomSelection].answer[i];
    selectAnswer.appendChild(answerList);
    answerList.setAttribute('style', 'list-style-type:none');
    console.log("This is the list of possible answers"+ i + questionsAndAnswers[randomSelection].answer[i]);
    console.log(questionsAndAnswers[randomSelection].validAnswer);
    //select correct or incorrect answer media query on click
    answerList.addEventListener('click', function() {
        
    if (questionsAndAnswers[randomSelection].answer[i] === questionsAndAnswers[randomSelection].validAnswer)
    {   
        answerValidation = document.createElement('p');
        answerValidation.textContent = "Great job, you selected correct answer !";
        answers.appendChild(answerValidation);
      
        }
    else {
      answerValidation = document.createElement('p');
      answerValidation.textContent = "Wrong answer!";
       answers.appendChild(answerValidation);
        secondsLeft -=5; 
       
     }    
    });
 
}
 } //}


//show score


//show ending screen with final score, enter initials to store value using local storage
//high store list
//try again maun
//ongoing score

//questions and answers
var questionsAndAnswers = [
    {
        question:"What is Capital of Philippines", 
        answer: ["Manila",  "New York", "Rabat", "Bratislava"],
        validAnswer :"Manila",
    },
    {
        question:"What is Capital of Bosnia", 
        answer: ["Sarajevo","Denver", "Rabat", "Bratislava", ],
        validAnswer :"Sarajevo",
    },      
    {
            question:"What is Capital of Serbia", 
            answer: ["Prague", "Belgrade", "Rabat", "Oslo",],
            validAnswer :"Belgrade",
           
    }, 
    {
            question:"What is Capital of Croatia", 
            answer: [ "Trn", "New York", "Rabat", "Zagreb", ],
            validAnswer :"Zagreb",
           
    },
   
]
