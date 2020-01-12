const express = require('express');
const app = express();
const cookieSession = require('cookie-session')
const PORT = process.env.PORT || 3434
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
const cookieParser = require("cookie-parser"); //puts cookie in req.body;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../assets")));
app.use(cookieParser());
const myURI = 'mongodb+srv://decodingbklyn:ballin04@cluster0-xpihw.gcp.mongodb.net/test?retryWrites=true&w=majority';
const mongoose = require('mongoose')

mongoose.connect(myURI, { useNewUrlParser: true }, () => console.log('connected to db'))
const connection = mongoose.connection;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/index.html"));
})

const messageRouter = require("./routes/messages");
app.use("/messages", messageRouter);


app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`)
})