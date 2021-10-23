const express = require('express')
const app = express()
const port = 3000
const DB_URI = 'mongodb+srv://lucaswgong:hihumi2301@cluster0.3kx5a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const mongoose = require('mongoose')
mongoose.connect(DB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})