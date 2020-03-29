
import React from 'react'
import NewTeamForm from './NewTeamForm'
import Teams from './Teams'

const Team = props => {
    return (
        <div>
            <div className="team-container">
                <h1>Cheerapp suunnittele <br />oma joukkueesi</h1>
                <NewTeamForm />
                <h1>Joukkueet</h1>
                <Teams/>
            </div>
        </div>
    )
}

export default (Team)