const apiUrl = 'https://opentdb.com/api.php?amount=25'

async function getQuestions(url){
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.result)
}