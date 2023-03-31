
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-contaner')
const questionElement = document.getElementById('question')
const questionButtonsElement = document.getElementById('question-buttons')

let shuffledQuestions,currentQuestionIndex;
let quizScore =0;





function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.removeChild(answerButtonsElement.fistChild))
}







function selectAnswer(e){
    const selectButton=e.target
    const correct =selectedButton.dataset.correct

    let statusClass(document,body,correct)
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove("hide")
    }else {
        startButton.innerText ="restart"
        startButton.classList.remove("hide")
    }
    if(selectedButton.dataset = correct) {
        quizScore++
    }
    document.getElementById('right-answwers').innerText=quizScore
}







function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else {
        element.classList.add("wrong")
    }
 }




function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions =[
    {
    question: 'which one of these is a javescript framework?',
    answers :[
        { text: 'Python', correct: false},
        { text: 'Django', correct: false},
        { text: 'React', correct: true},
        { text: 'Eclipse', correct: false}
    ],
},
{
    question: 'who is the president of the united states?',
    answers :[
        { text: 'Barrack Obama', correct: false},
        { text: 'Joe Biden', correct: true},
],
},
{
    question: '20 years after 2014 - 7?',
    answers :[
        { text: '2024', correct: false},
        { text: '2021', correct: false},
        { text: '2017', correct: true},
],
},
]