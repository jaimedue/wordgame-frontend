export const getScores = async() => {
    const URI = "https://mswg-backend.herokuapp.com"
    const response = await fetch(`${URI}/api/scores`)
    return await response.json()
}