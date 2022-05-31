import './Start.css'

const Start = ({setCurrentComp}) => {

    const start = () => {
        setCurrentComp('loadscreen')
    }

    return (
        <div className='Start'>
            <header>
                <h1>Spelling Game</h1>
            </header>
            <div className="play-btn-container">
                <button onClick={start} className='play-btn'>Play</button>
            </div>
        </div>
    )
}

export default Start