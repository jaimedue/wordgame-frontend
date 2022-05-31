import { Exit, Restart } from '../../Buttons/Buttons'
import { useEffect, useState } from 'react'
import './Gameover.css'
import SaveScore from './SaveScore'

const Gameover = ({setCurrentComp, gameData, scoreId, setScoreId, setGameState}) => {
    const [accuracy, setAccuracy] = useState(0)
    const total = gameData.incorrectCount + gameData.correctCount

    useEffect(() => {
        calcAccuracy()
    }, [])

    // Open leaderboard component when user saves their score
    useEffect(() => {
        if(scoreId !== 0) {
            setGameState('leaderboard')
        }
    })

    // Calculate rate of words user got correct
    const calcAccuracy = () => {
        if (total !== 0) {
            const acc = (Number(1000 * gameData.correctCount/total))
            setAccuracy(acc.toFixed(0))
        }
    }

    return (
        <div className='Gameover'>
            <SaveScore setGameState={setGameState} gameData={gameData} setScoreId={setScoreId} accuracy={accuracy} />
                <div className='gameover-btns-container'>
                    <Restart setCurrentComp={setCurrentComp} />
                    <Exit setCurrentComp={setCurrentComp} />
                </div>
        </div>
    )
}

export default Gameover