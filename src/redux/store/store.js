import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import quizzReducer from '../reducers/quizzReducer'
import cardReducer from '../reducers/cardReducer'
import lessonReducer from '../reducers/lessonReducer'

const rootReducer = combineReducers(
  {
    quizz: quizzReducer,
    cards: cardReducer,
    lessons: lessonReducer,
  });
const store = createStore(rootReducer, composeWithDevTools());

export default store
