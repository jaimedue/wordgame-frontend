import './Timer.css'

const Timer = ({gameData, timer}) => {

    // Width of filled portion of timer bar is proportionate to timer #
    const timerStyle = {
        width: timer + '%'
    };

    return (
        <div className="Timer">
            <div className="score-container">
                <p className="score">{gameData.score}</p>
            </div>
            <div className="timer-bar">
                <div className="time-remaining" style={timerStyle}></div>
            </div>
            <div className="level-container">
                <p className="level">{gameData.level}</p>
            </div>
        </div>
    )
}

export default Timer