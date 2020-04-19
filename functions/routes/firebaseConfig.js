// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");
require("firebase/auth");

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoaHD6BdDYMVQq-3U2ikPU3BHRBvpki1c",
  authDomain: "school-peeking-v2.firebaseapp.com",
  databaseURL: "https://school-peeking-v2.firebaseio.com",
  projectId: "school-peeking-v2",
  storageBucket: "school-peeking-v2.appspot.com",
  messagingSenderId: "721836929184",
  appId: "1:721836929184:web:6dd5a56df8f6e7f79e99c5",
  measurementId: "G-WE0TDS1J6R",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
