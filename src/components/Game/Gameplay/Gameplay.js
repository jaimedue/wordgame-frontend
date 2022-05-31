import './Gameplay.css'
import { useEffect } from "react"
import Timer from "../Timer/Timer"
import WordButtons from "../WordButtons/WordButtons"
import { Pause } from "../../Buttons/Buttons"

const Gameplay = ({setCurrentComp, gameData, setGameData, timer, setTimer, setGameState, wordData, setWordData}) => {

    // Countdown timer
    // When 0 is reached, open gameover component
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer - .05)
             if (timer <= 0) {
                 clearInterval(interval)
                 setGameState('gameover')
             }
        }, gameData.speed)
        return () => clearInterval(interval)
     }, [setTimer, timer, setGameState, gameData])

    // Level up
    // When timer passes 100, increment level, increase speed & points
    useEffect(() => {
        if (timer > 100) {
            setGameData(gameData => ({
                level: gameData.level + 1,
                speed: gameData.speed * .9,
                points: Math.pow(2, gameData.level + 1),
                score: gameData.score,
                correctCount: gameData.correctCount,
                incorrectCount: gameData.incorrectCount
            }))
            setTimer(60)
        }
    }, [setTimer, timer, setGameData])

    return (
        <div className="Gameplay">
            <Timer gameData={gameData} timer={timer} />
            <WordButtons gameData={gameData} setGameData={setGameData} timer={timer} setTimer={setTimer} wordData={wordData} setWordData={setWordData}/>
            <Pause setGameState={setGameState} timer={timer} setTimer={setTimer}/>
        </div>
    )
}

export default Gameplay