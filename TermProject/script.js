"use strict";
const myQuestion = document.getElementById("question");
const myAnswerA = document.getElementById("answerA");
const myAnswerB = document.getElementById("answerB");
const myAnswerC = document.getElementById("answerC");
const myAnswerD = document.getElementById("answerD");

function init(){
    myQuestion.textContent = "Are you ready to Journey?";
    myAnswerA.textContent = "YES!"
    myAnswerB.textContent = "YES!"
    myAnswerC.textContent = "YES!"
    myAnswerD.textContent = "YES!"
    myAnswerA.onclick = question1;
    myAnswerB.onclick = question1;
    myAnswerC.onclick = question1;
    myAnswerD.onclick = question1;
    
}
init()

function question1(){
    addQuestionAnswers(1);
    
    myAnswerA.addEventListener("click", function(){wrongAnswer('A')});
    myAnswerB.addEventListener("click", function(){trueAnswer('B')});
    myAnswerC.addEventListener("click", function(){wrongAnswer('C')});
    myAnswerD.addEventListener("click", function(){wrongAnswer('D')});


}

var Questions = [
    {question: "What is the name of Bilbo’s home?", 
     answers: {a: 'Orcas Isle', b: 'Bag End', c: 'Hobbit Cottage', d: 'Le Troglo'}},
    //Bag End
    {question: "What is the name Aragorn is known by that the Hobbits call him?", 
     answers: {a: 'Esun', b: 'Cleaver', c: 'Strider', d: 'Glamdring'}},
    //Strider
     {question: "What’s the elvish word for “friend”?", 
     answers: {a: 'Luin', b: 'Mithrin', c: 'Mellon', d: 'Parf'}},
    //Mellons
];

function addQuestionAnswers(number){
    myQuestion.innerHTML = Questions[number-1].question
    myAnswerA.innerHTML = Questions[number-1].answers.a
    myAnswerB.innerHTML = Questions[number-1].answers.b
    myAnswerC.innerHTML = Questions[number-1].answers.c
    myAnswerD.innerHTML = Questions[number-1].answers.d
}

function wrongAnswer(wronganswer){
    switch (wronganswer) {
        case 'A':
                myAnswerA.style.backgroundColor = "red"
            break;
        
        case 'B':
                myAnswerB.style.backgroundColor = "red"
            break;  
        
        case 'C':
                myAnswerC.style.backgroundColor = "red"
            break;
            
        case "D":
                myAnswerD.style.backgroundColor = "red"
            break;
    }
}

function trueAnswer(trueAnswer){
    switch (trueAnswer) {
        case 'A':
                myAnswerA.style.backgroundColor = "green"
            break;
        
        case 'B':
                myAnswerB.style.backgroundColor = "green"
            break;  
        
        case 'C':
                myAnswerC.style.backgroundColor = "green"
            break;
            
        case "D":
                myAnswerD.style.backgroundColor = "green"
            break;
    }
}


