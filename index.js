const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const { DB_URI } = require('./config')
// const DB_URI = 'mongodb+srv://lucaswgong:hihumi2301@cluster0.3kx5a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose')
const { User } = require('./models/User')

app.use(bodyParser.urlencoded({entended: true}))
app.use(bodyParser.json())

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

app.post('/register', (req, res) => {
  const user = new User(req.body)
  user.save((err, userInfo)=> {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({ success: true })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})