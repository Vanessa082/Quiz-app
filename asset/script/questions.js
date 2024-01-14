import { randomizeOptions } from './services/util.js'

const quizBody = document.querySelector('.quiz-body')

// GETTING URL
const url = localStorage.getItem('url')

const getQuestions = async () => {
  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error('Failed to fetch questions')
    }
    
    const data = await response.json()
    
    arrQuestions.push(...data.results)
    
    // Call displayMultipleChoiceQuestion after fetching questions
    displayMultipleChoiceQuestion(arrQuestions[0], 0)
  } catch (error) {
    console.error(error)
    // Handle error - show error message to the user or retry the request
  }
}

getQuestions()

const arrResults = [
  {
    question: '',
    question_num: 0,
    passed: false,
  }
]

const arrQuestions = []

const displayMultipleChoiceQuestion = (question, question_num) => {
  if (!question || !question.correct_answer) {
    // Handle the case where the question is undefined or invalid
    console.error('Invalid question:', question)
    return
  }
  
  quizBody.innerHTML = ''
  let answer = '' // User's selected answer

  const questionElement = document.createElement('p')
  const optionsDisplay = document.createElement('ul')
  const nextBtn = document.createElement('button')

  questionElement.id = 'question'
  optionsDisplay.id = 'options-display'
  nextBtn.className = 'next'

  const options = randomizeOptions(question.correct_answer, question.incorrect_answers)

  questionElement.textContent = `${question_num + 1} ) ${question.question}`
  nextBtn.textContent = 'Next'

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
    if (question_num < arrQuestions.length - 1) {
      const nextIndex = question_num + 1

      const newResult = {
        question: question.question,
        question_num: nextIndex,
        passed: answer === question.correct_answer,
      }

      arrResults.push(newResult)
      displayMultipleChoiceQuestion(arrQuestions[nextIndex], nextIndex)
    } else {
      console.log(arrResults)

      // Calculate the total correct answers
      const correctAnswers = arrResults.filter(result => result.passed).length

      // Calculate the percentage
      const percentage = (correctAnswers / arrQuestions.length) * 100

      // Go to results page and display results
      window.location.href = '/congratulation.html?correct=' + correctAnswers + '&percentage=' + percentage
    }
  })
}

displayMultipleChoiceQuestion(arrQuestions[0], 0)