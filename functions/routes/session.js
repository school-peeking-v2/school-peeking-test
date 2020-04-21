const firebase = require("./firebaseConfig");

const sessionCheck = () => {
  firebase
    .auth()
    .onAuthStateChanged((user) => {
      if (user) {
        console.log("user is login");
      } else {
        console.log("user is logout");
      }

      return true;
    })
    .catch((err) => {
      var errorCode = err.errorCode;
      var errorMessege = err.errorMessege;
      console.log(
        "login error : errorCode is %s, errorMessege is %s",
        errorCode,
        errorMessege
      );
      return false;
    });
};

module.exports = sessionCheck;
