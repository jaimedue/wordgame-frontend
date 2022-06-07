export const getScores = async() => {
    const URI = "https://misspelled-word-game.herokuapp.com"
    const response = await fetch(`${URI}/api/scores`)
    return await response.json()
}