import { READALL_QUIZ, CREATE_QUIZ, UPDATE_QUIZ, DELETE_QUIZ } from '../_actions/types'


export default function (state=null, action) {
  switch (action.type){
    case READALL_QUIZ:
      return {...state, quiz: action.payload.data }

    case CREATE_QUIZ:
      state.quiz.push(action.payload.data)
      return { ...state}

    case UPDATE_QUIZ:
      const updatedItem = action.payload
      return { ...state, quiz: state.quiz.map(item => {
        if(item._id === updatedItem._id){
          return updatedItem
        } else {
          return item
        }
      })}
  
    case DELETE_QUIZ:
      const id = action.payload;
      return { ...state, quiz: state.quiz.filter(item => item._id != id)}
  
    default:
      return state;

  }
}