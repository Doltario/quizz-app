import cardData  from '../../lib/cardData';

const cardReducer = (state = cardData, action) => {
  switch (action.type) {
    case 'FLIP_CARD':
      return state.map((card, index) => {
        if (index === action.id) {
          return {...card, isFlippedOnce: action.isFlippedOnce}
        }
        return card
      });
    case 'SET_VISIBILITY':
      return state.map((card, index) => {
        if (index === action.id) {
          return {...card, visible: action.visible}
        }
        return card
      });
    default:
      return state
  }
};

export default cardReducer;
