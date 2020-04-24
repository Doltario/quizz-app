const currentTabMap = {
  LESSONS: 'LESSONS',
  CARDS: 'CARDS',
}

const initialQuizzState = {
  currentTab: currentTabMap.LESSONS,
  currentQuizz: null,
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
    case 'SET_CURRENT_QUIZZ':
      return { ...state, currentQuizz: action.lessonId }
    case 'RESET_CURRENT_QUIZZ':
      return { ...state, currentQuizz: null }
    default:
      return state
  }
}

export default quizzReducer
