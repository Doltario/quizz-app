import cardData from '../../lib/cardData'

const initialLessonsReducer = {
  list: [
    {
      id: 0,
      progress: 0,
      cards: [5]
    }
  ]
}

const lessonsReducer = (state = initialLessonsReducer, action) => {
  switch (action.type) {
    case 'END_LESSON':
      const newList1 = [...state.list]
      newList1.forEach(list => {
        if (list.id === action.id) {
          list.progress = 1
        }
      })
      
      return { ...state, list: newList1 }
    case 'GET_POPULATED_LESSONS':
      const newList = [];
      state.list.forEach(lesson => {
        const populatedCards = lesson.cards.map(cardIndex => {
          cardData[cardIndex].fakeAnswers = [];
          let notIndex = [cardIndex];
          let indexToGet;

          for (let i = 0; i < 2; i++) {
            do {
              indexToGet = Math.floor(Math.random() * (26));
            }
            while (notIndex.includes(indexToGet));

            notIndex.push(indexToGet);
            cardData[cardIndex].fakeAnswers.push(cardData[indexToGet].answer);
          }

          return cardData[cardIndex]
        });
        newList.push({...lesson, cards: populatedCards })
      });
      return {...state, list: newList}
    default:
      return state
  }
}

export default lessonsReducer
