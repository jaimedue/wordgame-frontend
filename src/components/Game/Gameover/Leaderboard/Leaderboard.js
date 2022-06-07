import { useEffect, useState, useMemo } from 'react'
import { Exit, PlayAgain } from '../../../Buttons/Buttons'
import './Leaderboard.css'
import Table from './Table/Table'
import { getScores } from '../../../../services/ScoresService'

const Leaderboard = ({scoreId, setCurrentComp}) => {
    const[data, setData] = useState([])

    // Get all scores from score table
    useEffect(() => {
        // fetch('/api/scores')
        //     .then(response => response.json())
        //     .then(data => setData(data))
        getLeaderboardData()
    }, [])

    getLeaderboardData = () => {
        getScores()
            .then(data => setData(data))
    }

    // Leaderboard table displays name, score, level, and accuracy
    // columns from score table
    const columns = useMemo(
        () => [
        {
            Header: "Leaderboard",
            columns: [
                {
                    Header: " ",
                    id: "id",
                    Cell: ({row}) => {
                        return (
                            <p>{row.index + 1}</p>
                        )}
                },
                {
                    Header: "Name",
                    accessor: "username"
                },
                {
                    Header: "Score",
                    accessor: "score"
                },
                {
                    Header: "Lvl",
                    accessor: "level"
                },
                {
                    Header: "Accuracy",
                    accessor: "accuracy",
                    Cell: cell => {
                        return (
                            <p>{cell.value / 10}%</p>
                        )
                    }
                }
            ]
        }
    ],[])

    return (
        <div className='Leaderboard'>
            <Table columns={columns} data={data} scoreId={scoreId} />
            <div className='leaderboard-btns'>
                <PlayAgain setCurrentComp={setCurrentComp} />
                <Exit setCurrentComp={setCurrentComp} />
            </div>
        </div>
    )
}

export default Leaderboard