const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(()=> Math.random() - .5) //Gives out either a positive number or a negative number 50% of the time and stores in the shuffledQuestions Array
    console.log(shuffledQuestions);
    currentQuestionIndex = 0; //This is the first index in the shuffledQuestions array
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function resetState(){
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer=>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct; //setting the data attribute of the correct answer button to true
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button, button.dataset.correct);
    })
}

const questions = [{
    question: 'What is 2+2 ?',
    answers: [{
        text: 2,
        correct: false,
    },
    {
        text: 4,
        correct: true,
    }
    ]
}]