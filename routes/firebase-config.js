const config = {
  apiKey: "AIzaSyCoaHD6BdDYMVQq-3U2ikPU3BHRBvpki1c",
  authDomain: "https://school-peeking-v2.firebaseapp.com/",
  databaseURL: "https://school-peeking-v2.firebaseio.com/",
};

firebase.initializeApp(config);

firebase
  .auth()
  .setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function () {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
