
import React from 'react'
import NewTeamForm from './NewTeamForm'

const Team = props => {


    return (
        <div>
            <div className="team-container">
                <h1>Cheerapp suunnittele <br />oma joukkueesi</h1>
                <NewTeamForm />
            </div>
        </div>
    )
}

export default (Team)