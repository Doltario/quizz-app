const ACTIONS = {
  FLIP_CARD: 'FLIP_CARD',
  SET_VISIBILITY: 'SET_VISIBILITY',
};

const flipCard = (id) => {
  return {type: ACTIONS.FLIP_CARD, id};
};

const setVisbility = (id) => {
  return {type: ACTIONS.SET_VISIBILITY, id};
};

export {
  flipCard,
  setVisbility,
}
