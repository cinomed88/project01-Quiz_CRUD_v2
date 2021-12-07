const userRouter = require('express').Router();
const { User } = require('../models/User')
const { auth } = require('../middleware/auth')

userRouter.post('/register', (req, res) => {
  const user = new User(req.body)
  user.save((err, userInfo)=> {
    if(err) return res.json({ registerSuccess: false, err})
    return res.status(200).json({ registerSuccess: true })
  })
})

userRouter.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user) {
      return res.json({
        isAuth: false,
        message: "No user having this email."
      })
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch) return res.json({ isAuth: false, message: "Wrong password!"})

      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err)

        res.cookie("x_auth", user.token)
        .status(200)
        .json({ isAuth: true, userId: user._id})
      })
    })

  })

})

userRouter.get('/auth', auth, (req, res) => {
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

userRouter.get('/logout', auth, (req, res) => {
  console.log('req.user-->', req.user)
  User.findOneAndUpdate({_id: req.user._id },
    {token: ""},
    (err, user) => {
      if(err) return res.json({ isAuth: false, err })
      return res.status(200).send({
        isAuth: false
      })
    }
  )
})

module.exports = { userRouter }