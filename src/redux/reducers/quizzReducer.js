import { computeSteps } from '../../utils/stepsUtil'

const currentTabMap = {
  LESSONS: 'LESSONS',
  CARDS: 'CARDS',
}

const initialQuizzState = {
  currentTab: currentTabMap.LESSONS,
  currentQuizz: {
    lesson: null,
    steps: [],
    currentStep: 0,
  },
}

const quizzReducer = (state = initialQuizzState, action) => {
  switch (action.type) {
    case 'SWITCH_TO_TAB':
      if (currentTabMap[action.tabName]) {
        return { ...state, currentTab: currentTabMap[action.tabName] }
      } else {
        // Unknown tab name
        return state
      }
    case 'SET_CURRENT_QUIZZ_LESSON':
      return { ...state, currentQuizz: { ...state.currentQuizz, lesson: action.lesson, steps: computeSteps(action.lesson) } }
    case 'INCREMENT_CURRENT_STEP':
      
      return { ...state, currentQuizz: { ...state.currentQuizz, currentStep: state.currentQuizz.currentStep + 1 } }
    case 'RESET_CURRENT_QUIZZ':
      return { ...state, currentQuizz: { lesson: null, steps: [], currentStep: 0 } }
    default:
      return state
  }
}

export default quizzReducer
