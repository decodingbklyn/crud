const mongoose = require('mongoose')
const dbURI = 'mongodb+srv://decodingbklyn:ballin04@cluster0-xpihw.gcp.mongodb.net/test?retryWrites=true&w=majority';
const Messages = require('../models/MessageModel')
mongoose.connect(dbURI,  { useNewUrlParser: true })
const db = mongoose.connection
db.once('open', (err)=> {
    if ( err ) return handleError(err)
    console.log('Your are connected to the database')
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const messages = {
    getMessages: () => {
        Messages.find({}, (err, message) => {
            if ( err ) return handleError(err)
            console.log(message)
            return message
        })
    }, 

    postMessage: (msg, pass) => {
        let newMessage = new Messages({ 
            message: msg, 
            password: pass 
        })

        newMessage.save( (err, message) => {
            if (err) return handleError(err);
            console.log(`New message has been saved. ${message}`)
        })
    },

    deleteMessage: (id) => {
        Messages.findByIdAndRemove(id, (err, message) => {
            if (err) return handleError(err);
            console.log(`Message has been removed ${message}`)
        })
    }
}

module.exports =  messages;