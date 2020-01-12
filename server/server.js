//grabs express package from the node modules directory 
const express = require('express');
//initializes express 
const app = express();
//run chosen server / server 3434 
const cookieSession = require('cookie-session')
const PORT = process.env.PORT || 3434
//import body parser 
const bodyParser = require('body-parser');
//import path module 
const path = require('path');
const cors = require('cors')
const cookieParser = require("cookie-parser"); //puts cookie in req.body;

app.use(cors());
//initiates body-parser 
app.use(bodyParser.json()) 
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../assets")));
app.use(cookieParser());

//creating routes for server to communicate with DB

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/index.html"));
})

const messageRouter = require("./routes/route");
app.use("/", messageRouter);


app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`)
})