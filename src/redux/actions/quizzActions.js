const ACTIONS = {
  SET_CURRENT_QUIZZ: 'SET_CURRENT_QUIZZ'
};

const setCurrentQuizz = (lessonId) => {
  return {type: ACTIONS.SET_CURRENT_QUIZZ, lessonId};
};

export {
  setCurrentQuizz
}
