const ACTIONS = {
  GET_POPULATED_LESSONS: 'GET_POPULATED_LESSONS',
  END_LESSON: 'END_LESSON'
};

const getPopulatedLessons = () => {
  return {type: ACTIONS.GET_POPULATED_LESSONS};
};
const endLesson = (id) => {
  return {type: ACTIONS.END_LESSON, id};
};

export {
  getPopulatedLessons,
  endLesson
}
