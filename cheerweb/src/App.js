import React from 'react';
import './App.scss';
import logo from './assets/cheerLogo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="img-logo" alt="logo" />
        <p>Etusivu</p>
      </header>
      <main>
        <div className="main-container">
          <h1>Cheerapp suunnittele <br/>oma joukkueesi</h1>
          <img src={logo} alt="logo-background" />
        </div>
        <div className="home-box">
        </div>
        <div className="home-box-second">
        </div>
        <div className="home-box-third">
        </div>
      </main>
    </div>
  );
}

export default App;
