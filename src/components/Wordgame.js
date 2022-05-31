import { useState } from 'react'
import Start from './Start/Start'
import Game from './Game/Game'
import './Wordgame.css'
import Loadscreen from './Loadscreen/Loadscreen'

const Wordgame = () => {
    const [currentComp, setCurrentComp] = useState('start')
    const [wordData, setWordData] = useState({})

    const getComponent = () => {
        switch (currentComp) {
        case 'start' :
            return <Start setCurrentComp={setCurrentComp} />
        case 'loadscreen' :
            return <Loadscreen setCurrentComp={setCurrentComp} setWordData={setWordData}/>
        case 'game' :
            return <Game setCurrentComp={setCurrentComp} wordData={wordData} setWordData={setWordData}/>
        default :
            return <Start setCurrentComp={setCurrentComp} />
        
        }
    }

    return (
        <div className="Wordgame">
            {getComponent()}
        </div>
    )

}

export default Wordgame