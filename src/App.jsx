import { hot } from 'react-hot-loader/root'
import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RenderSwitchCore from './shared/layouts/CoreLayout'
// import firebase from 'firebase/app'
// import 'firebase/firestore'

const firebase = require("firebase");
require("firebase/firestore");
class App extends Component {

  render() {

    var firebaseConfig = {
      apiKey: "AIzaSyA2bEMqGIXdSF6e2CTHIkXMWWHaZO6kVp0",
      authDomain: "cheerapp-3e3e8.firebaseapp.com",
      databaseURL: "https://cheerapp-3e3e8.firebaseio.com",
      projectId: "cheerapp-3e3e8",
      storageBucket: "cheerapp-3e3e8.appspot.com",
      messagingSenderId: "197931668199",
      appId: "1:197931668199:web:0df100237295b933728842",
      measurementId: "G-FCSYMMZY0N"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    // export var dataBase = firebase.firestore();

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
