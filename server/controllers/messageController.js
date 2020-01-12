//message is requiring model for database
const MessagesSchema = require("../models/MessageModel");
const MessageController = {

  getMessages: (req, res) => {
    this.saveMessages(req.body, res.body).then(result => {
      console.log(result)
    })
    //   connection.once('open', () => {
    //       console.log('connected to db')
    //       // let test = Messages.find().all().where('message boards')
    //         connection.db.collection
    //         connection.db.listCollections().toArray(function (err, messages) {
    //         ; // [{ name: 'dbname.myCollection' }]
    //         console.log()
    //         module.exports.Collection = messages;
    //        });
    // })
  },

  saveMessages: (pass, msg) => {
    const newMessage = new MessagesSchema({
      message: msg,
      password: pass,
      created_at: Date.now()
    });

    newMessage.save(function (err) {
      if (err) return console.log(err);
      mongoose.connection.close()
      console.log('Message created successfully')
    })

  },

  deleteMessages: (req, res) => {
    Message.findByIdAndDelete(req.params.id)
      .then(data => res.json(data))
      .catch(err => console.log(err));
  }
}
module.exports = MessageController;
