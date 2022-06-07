export const getQuizWord = async() => {
    const URI = "https://misspelled-word-game.herokuapp.com"
    const response = await fetch(`${URI}/api/words/quiz/word`)
    return await response.json()
}