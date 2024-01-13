//DOM
const _question = document.getElementById('question')
const _options = document.querySelector('.quiz-options')
const nestBtn = document.querySelector('.next')
const _totalQuestion = document.getElementById('total-question')

// event listeners
function eventListeners(){
  nestBtn.addEventListener('click', nextQuestion)
}

// GETTING URL
const url = localStorage.getItem('url')

const getQuestions = async () => {
  const response = await fetch(url).then(res => res.json())
  console.log(response)
}

getQuestions()