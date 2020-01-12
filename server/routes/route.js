const router = require('express').Router();
const messageController = require("../controllers/messageController");
const authController = require("../controllers/authController");

//get messages
router.get("/messages", (req, res) => {
  messageController.getMessages()
  console.log('msg route')
  res.status(200).send('get all');
});

//save messages 
router.post( "/save-info", (req, res) => {
    let data = req.body
    messageController.saveMessages(JSON.stringify(data.pass), JSON.stringify(data.msg))
    res.cookie("pass", JSON.stringify(data.pass) )
    res.status(201).send(data.msg);
  }
);

//delete messages 
router.delete("/delete/:id", messageController.deleteMessages, (req, res) => {
  res.status(200).send("Message deleted!");
});

module.exports = router;