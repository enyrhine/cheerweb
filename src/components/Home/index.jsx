import React from 'react'
import logo from '../../assets/cheerLogo.png'

const Home = props => {
  return (
    <div className="home">
      <div className="home-title">
        <h1>
          Cheerapp <br /> kaikki <br /> kilpailutuloksistasi
        </h1>
        <img src={logo} alt="logo-background" />
      </div>
      <div className="home-box"></div>
      <div className="home-box-second"></div>
      <div className="home-box-third"></div>
    </div>
  )
}

export default Home
