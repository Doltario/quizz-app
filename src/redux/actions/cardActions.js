const ACTIONS = {
  FLIP_CARD: 'FLIP_CARD',
  SET_VISIBILITY: 'SET_VISIBILITY',
};

const flipCard = (isFlippedOnce, id) => {
  return {type: ACTIONS.FLIP_CARD, isFlippedOnce: !isFlippedOnce, id};
};

const setVisbility = (visible) => {
  return {type: ACTIONS.SET_VISIBILITY, visible: !visible, id};
};

export {
  flipCard,
  setVisbility,
}
