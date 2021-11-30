import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from './types'

export function loginUser(dataToSubmit) {
  const request = axios.post('/projects/03/api/v3/users/login', dataToSubmit)
    .then(res => res.data)

  return {
    type: LOGIN_USER,
    payload: request
  }
}

export function registerUser(dataToSubmit) {
  const request = axios.post('/projects/03/api/v3/users/register', dataToSubmit)
    .then(res => res.data)

  return {
    type: REGISTER_USER,
    payload: request
  }
}

export function authUser() {
  const request = axios.get('/projects/03/api/v3/users/auth')
    .then(res => res.data)

  return {
    type: AUTH_USER,
    payload: request
  }
}