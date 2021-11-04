import { READALL_QUIZ, CREATE_QUIZ, UPDATE_QUIZ, DELETE_QUIZ } from '../_actions/types'


export default function (state=null, action) {
  switch (action.type){
    case READALL_QUIZ:
      return { quiz: action.payload.data }

    case CREATE_QUIZ:
      return { ...state, createSuccess: action.payload }

    case UPDATE_QUIZ:
      return { ...state, updateSuccess: action.payload }
  
    case DELETE_QUIZ:
      return { ...state, deleteSuccess: action.payload }
  
    default:
      return null;

  }
}