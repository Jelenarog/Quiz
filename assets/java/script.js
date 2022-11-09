var startQuiz = document.getElementById("start-quiz"); //get element start-quiz to assign event listener to
var questions = document.querySelector("#questionnaire"); //div holding questions and answers
var start = document.querySelector("#start");
var askQuestion = document.getElementById("questions");//questions
var selectAnswer = document.getElementById("answers");
var timerEl1 = document.getElementById('timer');
var counter = 0; //counter variable to count questions we are on





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


//get random question
var createQuestion = function(){
    askQuestion.textContent=questionsAndAnswers[counter].question;//getting question using conter
    for (let i = 0; i < questionsAndAnswers[counter].answer.length; i++) {
       var choices=document.createElement("li");
       choices.setAttribute("style", "color:white; list-style-type:none");
       choices.textContent=questionsAndAnswers[counter].answer[i];
       console.log(questionsAndAnswers[counter].answer[i]);
       selectAnswer.appendChild(choices);
    }
    }
   var questionOption=function(event){
    var target=event.target;
    if(target.matches("li")){
        if(target.textContent===questionsAndAnswers[counter].validAnswer){
            console.log("correct");
        }
        else{
            console.log("incorrect");
        }
    if(counter<questionsAndAnswers.length)
    {
        counter++;
        selectAnswer.textContent="";
        createQuestion();
    }    
    }
   }


//we need start  game  //when users click on button start quiz function for game will initiate
startQuiz.addEventListener("click", startGame)
function startGame() {
    console.log("started");
setTime();
start = start.setAttribute('style','display:none;');//hide start page
questions = questions.setAttribute('style', 'display:flex');//show quiz section with questions and answers
createQuestion();
}

questions.addEventListener("click",questionOption)


//     var randomSelection = Math.floor(Math.random()*questionsAndAnswers.length);
//     var randomQuestion = questionsAndAnswers[randomSelection];
//      askQuestion.textContent= randomQuestion.question
//    //for(let i = 0; i< questionsAndAnswers[randomSelection].answer.length; i++)
//      var answerList = document.createElement('button');
//     answerList.textContent = questionsAndAnswers[randomSelection].answer;
//     //console.log(questionsAndAnswers[randomSelection].answer[i]);
//     selectAnswer.appendChild(answerList);
//     answerList.setAttribute('style', 'list-style-type:none');
    

//     console.log(questionsAndAnswers[randomSelection].answer);
//     answerList.addEventListener('click', function() {
//     questionsAndAnswers[randomSelection].answer === questionsAndAnswers[randomSelection].validAnswer
    //console.log(questionsAndAnswers[randomSelection].validAnswer); this is a valid answer
//     };

//     if (questionsAndAnswers[randomSelection].answer === questionsAndAnswers[randomSelection].validAnswer)
//     {   
//        answerValidation = document.createElement('p');
//        answerValidation.textContent = "Great job, you selected correct answer !";
//        answers.appendChild(answerValidation);
//        return;
//      }
//      else {
//         answerValidation = document.createElement('p');
//         answerValidation.textContent = "Wrong answer!";
//         answers.appendChild(answerValidation);
//         secondsLeft -=5; 
       
//         }  


//     }
//     showQuestion();  

//     } 
    
//     // var selectAnswer = function(){
//     //     if (questionsAndAnswers[randomSelection].answer[i] === questionsAndAnswers[randomSelection].validAnswer)
//     //      {   var answerList = document.createElement('li');
//     //           answerList.textContent = questionsAndAnswers[randomSelection].answer[i];
//     //           answerValidation = document.createElement('p');
//     //          answerValidation.textContent = "Great job, you selected correct answer !";
//     //          answers.appendChild(answerValidation);
               
//     //      }
//    // }
    
//     //var i=0;   
//     //  while(i<questionsAndAnswers.length)
    //     do{
    //         var randomSelection = Math.floor(Math.random()*questionsAndAnswers.length);
    //  var randomQuestion = questionsAndAnswers[randomSelection];
    //         askQuestion.textContent= randomQuestion.question
    //     }

    // }

    // var answerList = document.createElement('li');
    //  answerList.textContent = "click-me";
    // selectAnswer.appendChild(answerList);
    // answerList.addEventListener("click",function(){
    //     console.log(i);
    //     i++;
    // })

//show offered answers
   //for (let i = 0; i< questionsAndAnswers[randomSelection].answer.length; i++) {
//    var answerList = document.createElement('li');
//    answerList.textContent = questionsAndAnswers[randomSelection].answer[i];
//    console.log(questionsAndAnswers[randomSelection].answer[i]);
//    selectAnswer.appendChild(answerList);
//    console.log(questionsAndAnswers[randomSelection].answer[i]);
//    answerList.setAttribute('style', 'list-style-type:none');
  // }
//     console.log("This is the list of possible answers"+ j + questionsAndAnswers[randomSelection].answer[j]);
//     console.log(questionsAndAnswers[randomSelection].validAnswer);
//     //select correct or incorrect answer media query on click
    //answerList.addEventListener('click', function() {
    //     j=0;
    //  if (questionsAndAnswers[randomSelection].answer[j] === questionsAndAnswers[randomSelection].validAnswer)
    // {   
    //      answerValidation = document.createElement('p');
    //     answerValidation.textContent = "Great job, you selected correct answer !";
    //     answers.appendChild(answerValidation);
    //     i++
    //  }

   // );
    

//     else {
//       answerValidation = document.createElement('p');
//       answerValidation.textContent = "Wrong answer!";
//        answers.appendChild(answerValidation);
//         secondsLeft -=5; 
//       i++
//      }    
//     });
// }
//}
//} //}

 

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
