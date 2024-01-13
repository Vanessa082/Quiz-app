// GETTING URL
const url = localStorage.getItem('url')

const getQuestions = async () => {
  const response = await fetch(url).then(res => res.json())
  console.log(response)
}

// getQuestions()