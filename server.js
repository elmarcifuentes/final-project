const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

//const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/auth/auth.routes')
const chatRoutes = require('./routes/chatRoutes')


// const db = require('./models')

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(cors());
// ADD ALL ROUTES
app.use('/auth',authRoutes);
//app.use('/api',apiRoutes);
app.use('/',htmlRoutes);
app.use('/user',userRoutes);
app.use('/chat',chatRoutes);

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/appname"
  // NO LONGER NECESARY ON MONGOOSE 5.x
  // {
  //   useMongoClient: true
  // }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`http://localhost:${PORT}!`)
);
