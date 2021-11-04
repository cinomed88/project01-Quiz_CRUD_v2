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

export function createQuiz(dataToSubmit) {
  const request = axios.post('/api/v3/quizzes', dataToSubmit)
    .then(res => res.data)

  return {
    type: CREATE_QUIZ,
    payload: request
  }
}

export function updateQuiz(dataToSubmit) {
  const request = axios.update('/api/v3/quizzes', dataToSubmit)
    .then(res => res.data)

  return {
    type: UPDATE_QUIZ,
    payload: request
  }
}

export function deleteQuiz(dataToSubmit) {
  const request = axios.delete('/api/v3/quizzes', dataToSubmit)
    .then(res => res.data)

  return {
    type: DELETE_QUIZ,
    payload: request
  }
}
