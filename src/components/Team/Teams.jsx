import React, { useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { firebaseApp } from '../../App'
import { useTeams } from '../../contexts/teamContext'

const Teams = () => {
  const [teams, setTeams] = useTeams()

  useEffect(() => {
    const db = getFirestore(firebaseApp)

    const getTeams = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'teams'))
        setTeams(snapshot.docs)
      } catch (e) {
        console.error('Error getting teams data: ', e)
      }
    }
    getTeams()
  }, [])

  const renderTeams = () => {
    return teams.map(team => {
      return <p key={team.id}>{`${team.data().name} ${team.data().level}`}</p>
    })
  }

  return <div>{renderTeams()}</div>
}

export default Teams
