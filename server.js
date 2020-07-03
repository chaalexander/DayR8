const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const db = require('./models');
const app = express();
var session = require('express-session')
// Requiring passport as we've configured it
var passport = require('./config/passport')
const timeout = require('connect-timeout')

var corsOptions = {
  origin: "http://localhost:8081"
};

// Allows connection to JawsDB without timing out
function haltOnTimeout (req, res, next) {
  if (!req.timedout) next()
}
app.use(timeout(15000))
app.use(haltOnTimeout)


// We need to use sessions to keep track of our user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true, cookie: { maxAge: 100000 } }))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

// Requiring our routes
require('./routes/html_routes')(app)
require('./routes/restaurant_routes')(app)

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back our index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// set port, listen for requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});