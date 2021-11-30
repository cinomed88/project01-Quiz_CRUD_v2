const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const config = require('./config/key')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const { quizRouter } = require('./routes/quizRouter')
const { userRouter } = require('./routes/userRouter')

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

//---------------------- User Auth -------------------------
app.use('/projects/03/api/v3/users', userRouter)

//---------------------- Quiz ------------------------------
app.use('/projects/03/api/v3/quizzes', quizRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})