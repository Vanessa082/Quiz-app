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


const arrResults = [
  // {
  //   question: '',
  //   question_num: 1,
  //   passed: false,
  // }
]

const arrQuestions = (await getQuestions()).results || [
  {
    category: "Entertainment: Books",
    correct_answer: "Charles Dickens",
    difficulty: "easy",
    incorrect_answers: ['Charles Darwin', 'Mark Twain', 'Roald Dahl'],
    question: "Who wrote &quot;A Tale of Two Cities&quot;?",
    type: "multiple",
  },
  {
    category: "Entertainment: Books",
    correct_answer: "yes, she is",
    difficulty: "easy",
    incorrect_answers: ['maybe', 'normally', 'no'],
    question: "is Vanessa la hot??",
    type: "multiple",
  },
  {
    category: "Entertainment: Books",
    correct_answer: "vanessa",
    difficulty: "easy",
    incorrect_answers: ['Aisha', 'Ayisha', 'none'],
    question: "who is wah",
    type: "multiple",
  }
]

const displayMultipleChoiceQuestion = (question, question_num) => {
  quizBody.innerHTML = ''
  let answer = '' // user's selected answer

  const questionElement = document.createElement('p')
  const optionsDisplay = document.createElement('ul')
  const nextBtn = document.createElement('button')

  questionElement.id = 'question'
  optionsDisplay.id = 'options-display'
  nextBtn.className = 'next'

  const options = randomizeOptions(question.correct_answer, question.incorrect_answers)

  questionElement.innerHTML = `${question_num + 1} ) ${question.question}`
  nextBtn.innerHTML = 'Next'

  options.forEach((option, i) => {
    const label = document.createElement('label')
    const radioField = document.createElement('input')
    radioField.type = 'radio'

    const id = 'option-' + i
    radioField.id = id
    radioField.name = 'option'

    label.htmlFor = id

    label.appendChild(radioField)
    label.append(option)

    optionsDisplay.appendChild(label)

    label.addEventListener('input', () => {
      answer = option
    })
  })

  quizBody.appendChild(questionElement)
  quizBody.appendChild(optionsDisplay)
  quizBody.appendChild(nextBtn)

  nextBtn.addEventListener('click', () => {
    if (question_num <= arrQuestions.length) {
      const nextIndx = question_num + 1

      const newResult = {
        question: question.question,
        question_num: question_num,
        passed: answer === question.correct_answer,
      }

      arrResults.push(newResult)
      displayMultipleChoiceQuestion(arrQuestions[nextIndx], nextIndx)
    } else[
      // means we've exhausted all our question.
      // search how to navigate using the window object.
      console.log(arrResults)
      // got to results page and display results

    ]
  })
}

displayMultipleChoiceQuestion(arrQuestions[0], 0)
