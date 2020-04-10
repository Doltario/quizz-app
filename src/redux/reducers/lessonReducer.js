import cardData  from '../../lib/cardData';

const initialLessonsReducer = {
  list: [
    {
      id: 0,
      progress: 0,
      cards: [0, 1, 2, 3, 4]
    }
  ]
}

const lessonsReducer = (state = initialLessonsReducer, action) => {
  switch (action.type) {
    case 'GET_POPULATED_LESSONS':
      const newList = []
      state.list.forEach(lesson => {
        const populatedCards = lesson.cards.map(cardIndex => {return cardData[cardIndex]})
        newList.push({...lesson, cards: populatedCards })
      });
      return {...state, list: newList}
    default:
      return state
  }
};

export default lessonsReducer;
