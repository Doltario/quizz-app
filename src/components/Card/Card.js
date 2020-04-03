import React from 'react'

const Card = ( {card} ) => {
  const {
    id,
    isFlippedOnce,
    question,
    answer,
    fakeAnswers,
    isVisible
  } = card;

  return (
    <div>
      <p>{question}</p>
    </div>
  )
};

export default Card;
