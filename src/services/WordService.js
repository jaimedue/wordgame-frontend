export const getQuizWord = async() => {
    const URI = "https://mswg-backend.herokuapp.com"
    const response = await fetch(`${URI}/api/words/quiz/word`)
    return await response.json()
}