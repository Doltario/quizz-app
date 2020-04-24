const ACTIONS = {
  SET_CURRENT_QUIZZ: 'SET_CURRENT_QUIZZ',
  RESET_CURRENT_QUIZZ: 'RESET_CURRENT_QUIZZ'
};

const setCurrentQuizz = (lessonId) => {
  return {type: ACTIONS.SET_CURRENT_QUIZZ, lessonId};
};
const resetCurrentQuizz = (lessonId) => {
  return {type: ACTIONS.RESET_CURRENT_QUIZZ};
};

export {
  setCurrentQuizz,
  resetCurrentQuizz
}
