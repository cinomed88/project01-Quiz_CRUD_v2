import { combineReducers } from "redux";
import user from './user_reducer';
import quiz from './quiz_reducer';

const rootReducer = combineReducers({
  user, quiz
})

export default rootReducer