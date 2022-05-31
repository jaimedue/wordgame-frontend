import { Exit, Play, Quit, Restart } from '../../Buttons/Buttons'
import Timer from '../Timer/Timer'
import './PauseScreen.css'

const PauseScreen = ({setCurrentComp, gameData, timer, setGameState}) => {

    return (
        <div className='PauseScreen'>
            <Timer gameData={gameData} timer={timer}/>
            <div className='paused-container'>
                <p>PAUSED</p>
                <div className='paused-screen-btns'>
                    <Play setGameState={setGameState} />
                    <Restart setCurrentComp={setCurrentComp}/>
                    <Exit setCurrentComp={setCurrentComp} />
                </div>
            </div>
        </div>
    )
}

export default PauseScreen