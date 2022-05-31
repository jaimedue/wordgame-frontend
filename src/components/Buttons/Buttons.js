import './Buttons.css'

// On screen during game play
// On click: Opens pause screen component
export const Pause = ({setGameState, timer, setTimer}) => {

    // Save time of pause
    const timeAtPause = (time) => time
    
    // set component to pause screen
    // set timer to time of pause
    const pause = () => {
        setGameState('paused')
        setTimer(timeAtPause(timer))
    }
    
    return (
        <span onClick={ pause } className="material-icons md-64" id='pause-circle'>
            pause_circle
        </span>
    )
}

// 'Resume' button in pause component
// On click: Opens gameplay component
export const Play = ({setGameState}) => {

    const play = () => {
        setGameState('playing')
    }

    return (
        <button onClick={play} className='btn' id='resume'>
            Resume
        </button>
    )
}
    
// In pause screen component
// Takes user to loadscreen component
export const Restart = ({setCurrentComp}) => {

    const restart = () => {
        setCurrentComp('loadscreen')
    }

    return (
        <button onClick={ restart } className='btn' id='restart'>
            Restart
        </button>
    )
}

// In save score & leaderboard components
// Takes user to loadscreen component
export const PlayAgain = ({setCurrentComp}) =>{

    const playAgain = () => {
        setCurrentComp('loadscreen')
    }

    return (
        <button onClick={playAgain} className='btn' id="play-again">
            Play Again
        </button>
    )
}

// In pause screen, save score, & leaderboard components
// Takes user to start component
export const Exit = ({setCurrentComp}) => {

    const exit = () => {
        setCurrentComp('start')
    }

    return (
        <button onClick={ exit } className='btn' id="exit">Exit</button>
    )
}

// In save score component
// Displayed when no wordbuttons were pressed during gameplay
// Takes user to leaderboard component
export const ContToLB = ({setGameState}) => {
    
    const toLB = () => {
        setGameState('leaderboard')
    }

    return (
        <button onClick={toLB} id='continue'>Continue</button>
    )
}