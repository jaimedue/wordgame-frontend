import { useState } from "react"
import { ContToLB } from "../../Buttons/Buttons"

const SaveScore = ({setGameState, gameData, setScoreId, accuracy}) => {
    const [uname, setUname] = useState('')
    
    // If total number of words played is greater than 0
    // Divide accuracy by 10 to get it in percentage format
    const accuracyPercent = () => {
        if (gameData.correctCount === 0 && gameData.incorrectCount === 0) {
            return ('-')
        } else {
            return (accuracy / 10)
        }
    }

    // Add user's score to score table
    const saveScore = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: uname,
                score: gameData.score, 
                level: gameData.level,
                correctCount: gameData.correctCount,
                incorrectCount: gameData.incorrectCount,
                date: new Date().now,
                accuracy: accuracy
            })
        }
        fetch("/api/scores", requestOptions)
            .then(response => response.json())
            .then(data => setScoreId(data.id))
    }

    const handleChange = (e) => {
        setUname(e.target.value)
    }

    // Skips saving score and opens leaderboard component
    const skip = () => {
        setGameState('leaderboard')
    }

    // If user clicks no wordbuttons during gameplay display only 'continue' button
    // Otherwise, display options to enter username and save score
    const enterUname = () => {
        if (gameData.correctCount === 0 && gameData.incorrectCount === 0) {
            return (
                <ContToLB setGameState={setGameState}/>
            )
        } else {
            return (
                <div className="enter-uname-container">
                    <label>
                        Enter a Nickname:
                        <input maxLength="12" type="text" value={uname} onChange={handleChange} />
                    </label>
                    <button onClick={saveScore}>Save</button>
                    <p id="skip" onClick={skip}>Skip</p>
                </div>
            )
        }
    }
 

    return (
        <div className="SaveScore">
             <div className="final-score-main">
                <p>Level {gameData.level}</p>
                <p id="final-score">{gameData.score}</p>
            </div>
            <div className="final-score-sub">
                <div className="final-score-container" id="i-count">
                    <div className="h3"><h3>Missed</h3></div>
                    <div className="p"><p>{gameData.incorrectCount}</p></div>
                </div>
                <div className="final-score-container" id="c-count">
                    <div className="h3"><h3>Correct</h3></div>
                    <div className="p"><p>{gameData.correctCount}</p></div>
                </div>
                <div className="final-score-container" id="accuracy">
                    <div className="h3"><h3>Accuracy</h3></div>
                    <div className="p"><p>{accuracyPercent()}%</p></div>
                </div>
            </div>
            <div className="enter-uname-container">
                {enterUname()}
            </div>
        </div>
    )
}

export default SaveScore