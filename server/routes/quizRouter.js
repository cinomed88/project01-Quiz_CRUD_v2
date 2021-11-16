const quizRouter = require('express').Router();
const { Quiz } = require('../models/Quiz')

// Read all quizzes
quizRouter.get('/', (req, res) => {
  Quiz.find(function(err, quizzes){
    if(err) return res.status(500).send({ quizGetAllSuccess: false, error: err});
    if(!quizzes) return res.status(404).send({ quizGetAllSuccess: false, error: 'No quiz data to retrieve!'});
    res.status(200).json({ quizGetAllSuccess: true, data: quizzes});
  })
})

// Create a quiz
quizRouter.post('/', (req, res) => {
  const quiz = new Quiz(req.body)
  quiz.save((err, quizInfo)=> {
    console.log("save router", quizInfo)
    if(err) return res.json({ quizPostSuccess: false, error: err})
    return res.status(200).json({ quizPostSuccess: true })
  })
})

// Update a quiz by id
quizRouter.put('/:id', (req, res) => {
  Quiz.updateOne({ _id: req.params.id }, { $set: req.body }, function(err, result){
    if(err) return res.status(500).json({ quizPutSuccess: false, error: err});
    if(!result.acknowledged) return res.status(404).json({ quizPutSuccess: false, error: 'No quiz data to update!'});
    return res.status(200).json({ quizPutSuccess: true});
  })
});

// Delete a quiz by id
quizRouter.delete('/:id', (req, res) => {
  Quiz.deleteOne({ _id: req.params.id }, function(err, result){
    if(err) return res.status(500).json({ quizDeleteSuccess: false, error: err});
    // console.log("result", result)
    if(result.deletedCount == 0) return res.status(404).json({ quizDeleteSuccess: false, error: 'No quiz data to delete!'});
    return res.status(200).json({ quizDeleteSuccess: true, error: err})
  })  
})

module.exports = { quizRouter }