const ACTIONS = {
  GET_POPULATED_LESSONS: 'GET_POPULATED_LESSONS'
};

const getPopulatedLessons = (isFlippedOnce, id) => {
  return {type: ACTIONS.GET_POPULATED_LESSONS, isFlippedOnce: false, id: 2};
};

export {
  getPopulatedLessons
}
