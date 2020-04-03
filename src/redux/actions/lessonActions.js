const ACTIONS = {
  GET_POPULATED_LESSONS: 'GET_POPULATED_LESSONS'
};

const getPopulatedLessons = (isFlippedOnce, id) => {
  return {type: ACTIONS.GET_POPULATED_LESSONS, isFlippedOnce: !isFlippedOnce, id};
};

export {
  getPopulatedLessons
}
