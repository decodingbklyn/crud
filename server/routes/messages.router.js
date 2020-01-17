const express = require('express')
const MsgRouter = express.Router()
const messages = require('../controllers/messageController')

MsgRouter.get('/', function (req, res) {
    let msg = messages.getMessages()
    res.send(msg)
  })

  MsgRouter.post('/save', function (req, res) {
    let msg = messages.postMessages()
    res.send(msg)
  })

  MsgRouter.delete('/delete', function (req, res) {
    let msg = messages.deleteMessages()
    res.send(msg)
  })

module.exports = MsgRouter;