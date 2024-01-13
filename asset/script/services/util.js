const buildUrl = (queryObj) => {
    // https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple

    const url = `https://opentdb.com/api.php?amount=${queryObj.amount}&category=${queryObj.category}&difficulty=${queryObj.difficulty}&type=${queryObj.type}`

    return url;
}

const buildPage = (page) => {
    document.querySelector('body').innerHTML = page
}

const randomizeOptions = (correct_answer, incorrect_answers) => {
    // incorrect_answers is an array

    return [correct_answer, ...incorrect_answers]
}

export {
    buildUrl,
    buildPage,
    randomizeOptions,
}
