import { useState } from "react"
import './WordButtons.css'
import { getQuizWord } from "../../../services/WordService"

const WordButtons = ({gameData, setGameData, timer, setTimer, wordData, setWordData}) => {
    const [buttonEffects, setButtonEffects] = useState({ rButton: "unclicked", lButton: "unclicked" })
    const [order, setOrder] = useState(0);

    // Get new set of words
    // const getQuizWord = () => {
    //     fetch('/api/words/quiz/word')
    //         .then(response => response.json())
    //         .then(data => setWordData(data))
    // }

    const getWordData = () => {
        getQuizWord()
            .then(data => setWordData(data))
    }

    const buttons = [wordData.correct, wordData.wrong]
    const color = ["green", "red"]
    const negPos = [20, -10]

    // Randomize button order
    const getOrder = () => {
        setOrder(Math.floor(Math.random() * 2))
    }

    // Word Buttons
    // On click
        // If correct:
            // button flashes green
            // points are added
            // time is added to timer
        // If incorret:
            // button flashes red
            // time is removed from timer
    const lBtn = () => {
        buttonEffects.lButton = color[order]
        setGameData({ 
            level: gameData.level,
            points: gameData.points,
            speed: gameData.speed,
            score: gameData.score + ((1 - order) * gameData.points),
            correctCount: gameData.correctCount + (1 - order),
            incorrectCount: gameData.incorrectCount + (1 * order)
        })
        setTimer(timer + negPos[order])
        setTimeout(() => {
            nextWordset()
        }, 100)
    }

    const rBtn = () => {
        buttonEffects.rButton = color[1 - order]
        setGameData({ 
            level: gameData.level,
            points: gameData.points,
            speed: gameData.speed,
            score: gameData.score + ((1 * order) * gameData.points),
            correctCount: gameData.correctCount + (1 * order),
            incorrectCount: gameData.incorrectCount + (1 - order)
        })
        setTimer(timer + negPos[1 - order])
        setTimeout(() => {
            nextWordset()
        }, 100)
    }

    const nextWordset = () => {
        getWordData()
        setButtonEffects({
            rButton: "unclicked",
            lButton: "unclicked"
        })
        getOrder()
    } 
    
    return (
        <div className="WordButtons">
            <div className="def-container">
                <p className="definition">{wordData.define}</p>
            </div>
            <div className='wordBtns'>
                <button onClick={lBtn} id='button1' className={buttonEffects.lButton}><div className="btn-text">{ buttons[order] }</div></button>
                <button onClick={rBtn} id='button2' className={buttonEffects.rButton}><div className="btn-text">{ buttons[1 - order] }</div></button>
            </div>
        </div>
    )
}

export default WordButtons