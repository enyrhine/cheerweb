import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RenderSwitchCore from './shared/layouts/CoreLayout'
import { initializeApp } from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_CONFIG_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_CONFIG_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_CONFIG_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_CONFIG_MEASUREMENT_ID,
}

export const firebaseApp = initializeApp(firebaseConfig)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <RenderSwitchCore />
        </Router>
      </div>
    )
  }
}

export default hot(App)
