const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const config = require('./config/key')
const mongoose = require('mongoose')
const { User } = require('./models/User')
const cookieParser = require('cookie-parser')


app.use(bodyParser.urlencoded({entended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

mongoose.connect(config.mongoURI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.post('/register', (req, res) => {
  const user = new User(req.body)
  user.save((err, userInfo)=> {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({ success: true })
  })
})

app.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user) {
      return res.json({
        loginSuccess: false,
        message: "No user having this email."
      })
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch) return res.json({ loginSuccess: false, message: "Wrong password!"})

      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err)

        res.cookie("x_auth", user.token)
        .status(200)
        .json({ loginSucccess: true, userId: user._id})
      })
    })

  })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})