const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 5000
const config = require('./config/key')
const mongoose = require('mongoose')
const { User } = require('./models/User')
const { Quiz } = require('./models/Quiz')
const cookieParser = require('cookie-parser')
const { auth } = require('./middleware/auth')


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

app.get('/api/v3/hello', (req, res) => {
  res.send("Test!")
})
//---------------------- Authentication -------------------------
app.post('/api/v3/users/register', (req, res) => {
  const user = new User(req.body)
  user.save((err, userInfo)=> {
    if(err) return res.json({ registerSuccess: false, err})
    return res.status(200).json({ registerSuccess: true })
  })
})

app.post('/api/v3/users/login', (req, res) => {
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
        .json({ loginSuccess: true, userId: user._id})
      })
    })

  })

})

app.get('/api/v3/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})

app.get('/api/v3/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({_id: req.user._id },
    {token: ""},
    (err, user) => {
      if(err) return res.json({ logoutSuccess: false, err })
      return res.status(200).send({
        logoutSuccess: true
      })
    }
  )
})
//---------------------- Quiz ---------------------------------------
app.get('/api/v3/quizzes', (req, res) => {

})

app.post('/api/v3/quizzes', (req, res) => {
  const quiz = new Quiz(req.body)
  quiz.save((err, quizInfo)=> {
    if(err) return res.json({ quizPostSuccess: false, err})
    return res.status(200).json({ quizPostSuccess: true })
  })
})

app.put('/api/v3/quizzes', (req, res) => {
  
})

app.delete('/api/v3/quizzes', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})