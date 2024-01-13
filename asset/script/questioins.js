//DOM
const questionElement = document.getElementById('question');
const incorrectAnswersElement = document.getElementById('incorrect-answers');
const correctAnswerElement = document.getElementById('correct-answer');

// event listeners
// function eventListeners(){
//   nestBtn.addEventListener('click', nextQuestion)
// }

// GETTING URL
const url = localStorage.getItem('url')

const getQuestions = async () => {
  const response = await fetch(url).then(res => res.json())
  console.log(response)
}

// getQuestions()



const sample = {
  category: "Entertainment: Books",
  correct_answer: "Charles Dickens",
  difficulty: "easy",
  incorrect_answers: ['Charles Darwin', 'Mark Twain', 'Roald Dahl'],
  question: "Who wrote &quot;A Tale of Two Cities&quot;?",
  type: "multiple",
}

questionElement.innerHTML = sample.question;
incorrectAnswersElement.innerHTML = sample.incorrect_answers.map(answer => `<li>${answer}</li>`).join('');
correctAnswerElement.innerHTML = sample.correct_answer;