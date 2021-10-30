const mongoose = require('mongoose')

const quizSchema = mongoose.Schema({
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
  choice: {
    type: [String],
  }
})

const Quiz = mongoose.model('Quiz', quizSchema)

module.exports = { Quiz }
