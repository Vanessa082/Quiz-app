import { randomizeOptions } from './services/util.js'

const quizBody = document.querySelector('.quiz-body')

// GETTING URL
const url = localStorage.getItem('url')

const getQuestions = async () => {
  const response = await fetch(url).then(res => res.json())
  console.log(response)

  return response
}

// getQuestions()


// const results = [
//   {
//     question: '',
//     question_num: 1,
//     passed: false,
//   }
// ]

const arr_questions = [
  {
    category: "Entertainment: Books",
    correct_answer: "Charles Dickens",
    difficulty: "easy",
    incorrect_answers: ['Charles Darwin', 'Mark Twain', 'Roald Dahl'],
    question: "Who wrote &quot;A Tale of Two Cities&quot;?",
    type: "multiple",
  }
]

/* 
<p id="question"></p>
<ul id="options-display"></ul>
<div id="result"></div>
<button class="next">Next</button>
 */

const displayQuestion = (question) => {
  let answer = ''

  const questionElement = document.createElement('p')
  const optionsDisplay = document.createElement('ul')
  const nextBtn = document.createElement('button')

  questionElement.id = 'question'
  optionsDisplay.id = 'options-display'
  nextBtn.className = 'next'

  const options = randomizeOptions(question.correct_answer, question.incorrect_answers)

  questionElement.innerHTML = question.question
  nextBtn.innerHTML = 'Next'

  options.forEach((option, i) => {
    const label = document.createElement('label')
    const radioField = document.createElement('input')
    radioField.type = 'radio'

    const id = 'option-'  + i
    radioField.id = id
    radioField.name = 'option'

    label.htmlFor = id

    label.appendChild(radioField)
    label.append(option)

    optionsDisplay.appendChild(label)

    label.option
  })

  quizBody.appendChild(questionElement)
  quizBody.appendChild(optionsDisplay)
  quizBody.appendChild(nextBtn)

  nextBtn.addEventListener('click', () => {
    console.log('clicked')
  })
}

displayQuestion(arr_questions[0])
