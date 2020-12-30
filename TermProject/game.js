const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const container = document.querySelector('.container');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
/*
var vid = document.getElementById("sound");
vid.volume = 0.1;
*/


let questions = [
    {question: "What is the name of Bilbo’s home?", 
     answers1: "Orcas Isle", 
     answers2:"Bag End", 
     answers3:"Hobbit Cottage", 
     answers4:"Le Troglo", 
     trueAnswer: 2},
    //Bag End
    {question: "What is the name Aragorn is known by that the Hobbits call him?", 
     answers1:"Esun", 
     answers2: "Cleaver", 
     answers3: "Strider", 
     answers4: "Glamdring", 
     trueAnswer: 3},
     
    //Strider
    {question: "How many members were there in the Fellowship of the Ring?",
    answers1: "11", 
    answers2: "9", 
    answers3: "7", 
    answers4: "5", 
    trueAnswer: 2},
    //9
     {question: "What’s the elvish word for “friend”?", 
     answers1: "Luin", 
     answers2: "Mithrin", 
     answers3: "Mellon", 
     answers4: "Parf", 
     trueAnswer: 3},
    //Mellon
    {question: "In 'Fellowship of the Ring' what gift does Lady Galadriel give Gimli before the" +  
    "fellowship leaves Lothlorien?",
    answers1: "three strands of her hair", 
    answers2: "a dagger", 
    answers3: "an elvish bow and arrow", 
    answers4: "a sheath for sword", 
    trueAnswer: 1},
    // three strands of her hair
    {question: "What was Gollum's hobbit name?",
    answers1: "Lancer", 
    answers2: "Precious", 
    answers3: "Deagol", 
    answers4: "Smeagol", 
    trueAnswer: 4},
    //Smaegol
    {question: "Who actually destroys the One Ring?",
    answers1: "Frodo", 
    answers2: "Gollum",
    answers3: "Sam", 
    answers4: "Gandalf", 
    trueAnswer: 2}
    //Gollum
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 7

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}
const doc = document.getElementById("#container")
getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign("https://enesbek.github.io/Advanced_Programming/TermProject/end.html")
    }

    questionCounter++
    progressText.innerText = `Progress ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)

    console.log(questionsIndex)
    currentQuestion = availableQuestions[questionsIndex]
    
    
    question.innerText = currentQuestion.question
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['answers' + number]
    })

    availableQuestions.splice(questionsIndex, 1)
    
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.trueAnswer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
