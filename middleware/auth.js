const { User } = require("../models/User")

const auth = (req, res, next) => {

  //get cookie from client
  let token = req.cookies.x_auth

  //decode token in the cookie, and find the user in db
  User.findByToken(token, (err, user) => {
    if(err) throw err
    if(!user) return res.json({ isAuth: false, error: true})

    req.token = token
    req.user = user
    next()
  })

  //user exists -> auth ok

  //user does not exist -> auth fail
}

module.exports = { auth }