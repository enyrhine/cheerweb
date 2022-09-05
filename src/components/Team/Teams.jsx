import React, { useEffect, useCallback } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { firebaseApp } from '../../App'
import { useTeams } from '../../contexts/teamContext'

const Teams = () => {
  const [teams, setTeams] = useTeams([])

  const fetchTeams = useCallback(() => {
      // const getTeams = ()
    const db = getFirestore(firebaseApp)
    return getDocs(collection(db, 'teams'))
  }, [])

  useEffect(() => {
    const getTeams = async () => {
      try {
        const snapshot = await fetchTeams()
        const array = []
        snapshot.docs.map(team => {
          return array.push({
            id: team.id,
            name: team.data().name,
            level: team.data().level,
          })
        })
        setTeams(array)
      } catch (e) {
        console.error('Error getting teams data: ', e)
      }
    }

    getTeams()
  }, [fetchTeams, setTeams])

  const renderTeams = () => {
    return teams.map(team => {
      return <p key={team.id}>{`${team.name} ${team.level}`}</p>
    })
  }

  return <div>{renderTeams()}</div>
}

export default Teams
