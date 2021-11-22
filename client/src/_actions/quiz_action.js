import axios from "axios";
import { READALL_QUIZ, CREATE_QUIZ, UPDATE_QUIZ, DELETE_QUIZ } from './types'

export function readAllQuiz() {
  const request = axios.get('/api/v3/quizzes')
    .then(res => res.data)

  return {
    type: READALL_QUIZ,
    payload: request
  }
}

export function createQuiz(item) {
  const request = axios.post('/api/v3/quizzes', item)
    .then(res => res.data)

  return {
    type: CREATE_QUIZ,
    payload: request
  }
}

export function updateQuiz(item) {
  console.log("action update", item)
  const request = axios.put(`/api/v3/quizzes/${item._id}`, {
    question: item.question,
    answer: item.answer,
    choice: item.choice
  })
    .then(res => res.data)
  return {
    type: UPDATE_QUIZ,
    payload: {...item, __v: 0}
  }
}

export function deleteQuiz(id) {
  const request = axios.delete(`/api/v3/quizzes/${id}`)
    .then(res => res.data)
  return {
    type: DELETE_QUIZ,
    payload: id
  }
}
