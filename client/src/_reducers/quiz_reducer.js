import { READALL_QUIZ, CREATE_QUIZ, UPDATE_QUIZ, DELETE_QUIZ } from '../_actions/types'


export default function (state=null, action) {
  switch (action.type){
    case READALL_QUIZ:
      return {...state, quiz: action.payload.data }

    case CREATE_QUIZ:
      return { ...state, quiz: action.payload.data }

    case UPDATE_QUIZ:
      return { ...state, quiz: action.payload.data }
  
    case DELETE_QUIZ:
      return { ...state, quiz: action.payload.data }
  
    default:
      return state;

  }
}