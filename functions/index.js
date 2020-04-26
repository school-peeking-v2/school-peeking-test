const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors')({ origin: true });

const firebase = require('./routes/firebaseConfig');
const login = require('./routes/login');
const inventory = require('./routes/inventory');

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://school-peeking-v2.firebaseio.com',
});

const app = express();

app.use(cors);

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(path.dirname(__dirname), 'public'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(path.dirname(__dirname), 'public')));

//set Router
// app.get('/', (req, res) => {
//   firebase
//     .auth()
//     .onAuthStateChanged((user) => {
//       if (user) {
//         console.log('user is login');
//       } else {
//         console.log('user is logout');
//       }
//     })
//     .catch((err) => {
//       var errorCode = err.errorCode;
//       var errorMessege = err.errorMessege;
//       console.log(
//         'login error : errorCode is %s, errorMessege is %s',
//         errorCode,
//         errorMessege
//       );
//     });
//   res.send(console.log('connected index'));
// });
app.use('/login', login);
app.use('/inventory', inventory);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ error: err.status });
});

exports.app = functions.https.onRequest(app);
