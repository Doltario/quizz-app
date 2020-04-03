import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import quizzReducer from '../reducers/quizzReducer'
import cardReducer from '../reducers/cardReducer'

const rootReducer = combineReducers(
  {
    quizz: quizzReducer,
    cards: cardReducer,
  });
const store = createStore(rootReducer, composeWithDevTools());

export default store
