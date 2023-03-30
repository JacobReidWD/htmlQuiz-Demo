
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-contaner')
const questionElement = document.getElementById('question')
const questionButtonsElement = document.getElementById('question-buttons')

let shuffledQuestions,currentQuestionIndex;
let quizScore =0;
