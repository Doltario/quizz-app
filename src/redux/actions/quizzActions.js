const ACTIONS = {
  SET_CURRENT_QUIZZ_LESSON: 'SET_CURRENT_QUIZZ_LESSON',
  INCREMENT_CURRENT_STEP: 'INCREMENT_CURRENT_STEP',
  RESET_CURRENT_QUIZZ: 'RESET_CURRENT_QUIZZ',
}

const setCurrentQuizzLesson = (lesson) => {
  return { type: ACTIONS.SET_CURRENT_QUIZZ_LESSON, lesson }
}
const incrementCurrentStep = () => {
  return { type: ACTIONS.INCREMENT_CURRENT_STEP }
}
const resetCurrentQuizz = () => {
  return { type: ACTIONS.RESET_CURRENT_QUIZZ }
}

export { setCurrentQuizzLesson, incrementCurrentStep, resetCurrentQuizz }
