import { buildUrl, buildPage } from './services/util.js'
import landingPage from './pages/landing.js'
import questionsPage from './pages/questions.js'
import resultsPage from './pages/results.js'

const apiUrl = 'https://opentdb.com/api.php?amount=25'

// https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple

async function getQuestions(url){
    const res = await fetch(url)
    const data = await res.json()


    console.log(data.result)
}

// BUILDING LANDING PAGE
buildPage(landingPage)

const startBtn = document.getElementById('play')

const queryObj = {
    amount: '10',
    category: '',
    difficulty: '',
    type: ''
}

// GETTING USER INPUT;

const questionNumberBtns = document.querySelectorAll('.num-quest')

const categoryField = document.getElementById('select-category')

const difficultyBtns = document.querySelectorAll('.sel-diff')

const typeBtns = document.querySelectorAll('.sel-type')

questionNumberBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const choice = e.target.innerHTML

        if (choice === 'Short') queryObj.amount = '5'
        else if (choice === 'Medium') queryObj.amount = '10'
        else if (choice === 'Long') queryObj.amount = '15'
    })
})

categoryField.addEventListener('input', (e) => {
  const selected = e.target.value
  queryObj.category = selected
})

difficultyBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const diff = e.target.name
    queryObj.difficulty = diff
  })
})

typeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const type = e.target.name
    queryObj.type = type
  })
})

startBtn.addEventListener('click', () => {
  const url = buildUrl(queryObj)

  const response = fetch(url)

  console.log(response)

  // FETCH QUESTION FROM API URL.

  buildPage(questionsPage)
})
