import { READALL_QUIZ, CREATE_QUIZ, UPDATE_QUIZ, DELETE_QUIZ } from '../_actions/types'


export default function (state=null, action) {
  switch (action.type){
    case READALL_QUIZ:
      console.log("read all reducer", action.payload.data)
      return {...state, quiz: action.payload.data }

    case CREATE_QUIZ:
      return { ...state}

    case UPDATE_QUIZ:
      return { ...state}
  
    case DELETE_QUIZ:
      return { ...state}
  
    default:
      return state;

  }
}