//message is requiring model for database
const MessagesSchema = require("../models/MessageModel");
const myURI = 'mongodb+srv://decodingbklyn:ballin04@cluster0-xpihw.gcp.mongodb.net/test?retryWrites=true&w=majority';
//initializing an object to store controller functionality 
const mongoose = require('mongoose')
const Messages = mongoose.connect(myURI, {useNewUrlParser: true})
const connection = mongoose.connection;
function find (name, query, cb) {
  mongoose.connection.db.collection(name, function (err, collection) {
     collection.find(query).toArray(cb);
 });
}
const MessageController = {
 
  getMessages: () => {
        connection.once('open', () => {
            console.log('connected to db')
            // let test = Messages.find().all().where('message boards')
              connection.db.collection
              connection.db.listCollections().toArray(function (err, messages) {
              ; // [{ name: 'dbname.myCollection' }]
              console.log()
              module.exports.Collection = messages;
             });
      })
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
