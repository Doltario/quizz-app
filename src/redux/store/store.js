import { createStore, combineReducers } from 'redux'
import quizzReducer from '../reducers/quizzReducer'
import cardReducer from '../reducers/cardReducer'

const rootReducer = combineReducers(
  {
    quizz: quizzReducer,
    card: cardReducer,
  });
const store = createStore(rootReducer);

export default store
