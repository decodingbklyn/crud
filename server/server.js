const express = require('express');
const app = express();
const port = process.env.PORT || 3434;
const path = require('path');
const messages = require('./routes/messages.router')
app.use(express.static('assets'))


app.use('/', (req, res)=> {
  res.sendFile(path.resolve(__dirname, '../views/index.html'))
})

app.use('/messages', messages)



app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
