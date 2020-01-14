const express = require('express');
const app = express();
const port = process.env.PORT || 3434;
const path = require('path');

app.use('/', express.static(path.join(__dirname, '../views/index.html')))

app.get('/messages', (req, res)=>{
  res.json([
    {
      id: 1, 
      msg: "test msg",
      pass: "lskjaflkjs"
    }
  ])
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
