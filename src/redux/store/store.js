import { createStore, combineReducers } from 'redux'
import quizzReducer from './quizzReducer'

const rootReducer = combineReducers({ quizz: quizzReducer })
const store = createStore(rootReducer)

export default store
