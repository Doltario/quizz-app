import cardData  from '../../lib/cardData';

const cardReducer = (state = {list: cardData}, action) => {
  switch (action.type) {
    case 'FLIP_CARD':
      return state.map((card, index) => {
        if (index === action.id) {
          return {...card, isFlippedOnce: true}
        }
        return card
      });
    case 'SET_VISIBILITY':
      return state.map((card, index) => {
        if (index === action.id) {
          return {...card, visible: !card.isVisible}
        }
        return card
      });
    default:
      return state
  }
};

export default cardReducer;
