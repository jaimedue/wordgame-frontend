import { useEffect, useState } from 'react'
import './Loadscreen.css'
import { getQuizWord } from '../../services/WordService'

const Loadscreen = ({setCurrentComp, setWordData}) => {
    const [hr, setHr] = useState(0)

    useEffect(() => {
        getWordData()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if(hr < 100) {
                setHr(hr + 1)
            }
        }, 10)
        return () => clearInterval(interval)
     }, [setHr, hr])

    const hrWidth = {
        width: hr + '%'
    }

    const hrEmpty = {
        width: (100 - hr) + "%"
    }

    // Get new set of words
    // const getQuizWord = () => {
    //     fetch('/api/words/quiz/word')
    //         .then(response => response.json())
    //         .then(data => setWordData(data))
    //         .then(() => delay())
    // }

    const getWordData = () => {
        getQuizWord()
            .then(data => setWordData(data))
            .then(() => delay())
    }

    const delay = () => {
        const loading = setTimeout(() =>
        setCurrentComp('game'), 1200)
        return () => clearTimeout(loading)
    }

    return (
        <div className='Loadscreen'>
            <p>Loading Game</p>
            <div className="loading-bar">
                <hr style={hrWidth}></hr>
                <hr style={hrEmpty}></hr>
            </div>
        </div>
    )
}

export default Loadscreen