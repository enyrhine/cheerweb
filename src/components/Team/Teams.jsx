
import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'

const Teams = () => {
    const [teams, setTeams] = useState([])

    const db = firebase.firestore()

    useEffect(() => {
        getTeams()
            .then(res => setTeams(res))
    }, [])

    const getTeams = async () => {
        const snapshot = await db.collection('teams').get()
        return snapshot.docs
    }

    const renderTeams = () => {
        return (teams.map(team => {
            return (
                <p key={team.id}>{`${team.data().name} ${team.data().level}`}</p>
            )
        })
        )
    }

    return (
        <div>
            {renderTeams()}
        </div>
    )
}

export default (Teams)