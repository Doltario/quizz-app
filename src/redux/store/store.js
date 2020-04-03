import { createStore, combineReducers } from 'redux'
import quizzReducer from '../reducers/quizzReducer'
import cardReducer from '../reducers/cardReducer'

const rootReducer = combineReducers(
  {
    quizz: quizzReducer,
    cards: cardReducer,
  });
const store = createStore(rootReducer);

export default store
