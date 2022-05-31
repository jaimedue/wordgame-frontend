import { useEffect, useState } from "react"
import { Exit, Restart } from "../Buttons/Buttons"
import Gameover from "./Gameover/Gameover"
import Leaderboard from "./Gameover/Leaderboard/Leaderboard"
import Gameplay from "./Gameplay/Gameplay"
import PauseScreen from "./PauseScreen/PauseScreen"
import './Game.css'


const Game = ({ setCurrentComp, wordData, setWordData }) => {

    const [gameData, setGameData] = useState({
        level: 1,
        speed: 10,
        points: 2,
        score: 0,
        correctCount: 0,
        incorrectCount: 0,
    })
    const [timer, setTimer] = useState(50)
    const [gameState, setGameState] = useState('playing')
    const [scoreId, setScoreId] = useState(0)

    const getComponent = () => {
        switch (gameState) {
            case 'playing':
                return (
                    <Gameplay 
                    setCurrentComp={setCurrentComp} 
                    gameData={gameData} setGameData={setGameData} 
                    timer={timer} setTimer={setTimer} 
                    setGameState={setGameState}
                    wordData={wordData} setWordData={setWordData}
                    />
                )
            case 'paused':
                return (
                    <PauseScreen 
                    setCurrentComp={setCurrentComp} 
                    gameData={gameData} 
                    timer={timer} setGameState={setGameState}
                    />
                )   
            case 'gameover':
                return (
                    <Gameover
                    setCurrentComp={setCurrentComp}
                    gameData={gameData}
                    scoreId={scoreId} setScoreId={setScoreId}
                    setGameState={setGameState}
                    />
                ) 
            case 'leaderboard':
                return (
                    <Leaderboard scoreId={scoreId} setCurrentComp={setCurrentComp}/>
                )         
            default :
                return (
                    <Gameplay 
                    setCurrentComp={setCurrentComp} 
                    gameData={gameData} setGameData={setGameData} 
                    timer={timer} setTimer={setTimer} 
                    setGameState={setGameState}
                    />
                )
        }

    }

    return (
        <div className="Game">
            {getComponent()}
        </div>
    )
    
}

export default Game