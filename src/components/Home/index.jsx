/**
 * Created by Elsa
 */

import React from 'react'
import { withRouter } from 'react-router-dom'
import logo from '../../assets/cheerLogo.png'

const Home = props => {


    return (
        <div>
            <div className="main-container">
                <h1>Cheerapp suunnittele <br />oma joukkueesi</h1>
                <img src={logo} alt="logo-background" />
            </div>
            <div className="home-box">
            </div>
            <div className="home-box-second">
            </div>
            <div className="home-box-third">
            </div>
        </div>
    )
}

export default withRouter((Home))
