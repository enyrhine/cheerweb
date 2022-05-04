import React, { createContext, useContext, useState } from 'react'

export const TeamsContext = createContext(null)

const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState([])

  return (
    <TeamsContext.Provider value={[teams, setTeams]}>
      {children}
    </TeamsContext.Provider>
  )
}

export const useTeams = () => {
  const ctx = useContext(TeamsContext)
  if (ctx === undefined) {
    throw new Error('useTeams can only be used inside TeamsContext')
  }
  return ctx
}

export default TeamsProvider
