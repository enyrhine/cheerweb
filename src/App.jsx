import { hot } from 'react-hot-loader/root'
import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss'
import RenderSwitchCore from './shared/layouts/CoreLayout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <RenderSwitchCore />
          </Router>
        </Suspense>
      </div>
    );
  }
}

export default hot(App);
