import React, { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { firebaseApp } from '../../App'

const Teams = () => {
  const [teams, setTeams] = useState([])

  const db = getFirestore(firebaseApp)

  const getTeams = async () => {
    const snapshot = await getDocs(collection(db, 'teams'))
    return snapshot.docs
  }

  useEffect(() => {
    getTeams().then(res => setTeams(res))
  })

  const renderTeams = () => {
    return teams.map(team => {
      return <p key={team.id}>{`${team.data().name} ${team.data().level}`}</p>
    })
  }

  return <div>{renderTeams()}</div>
}

export default Teams
