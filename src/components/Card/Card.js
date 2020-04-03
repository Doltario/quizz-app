import React, { useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { flipCard, setVisibility } from '../../redux/actions/cardActions';

const Card = ( {card, flipCard, setVisibility} ) => {
  const [isSwitched, setIsSwitched] = useState(false);

  const {
    id,
    isFlippedOnce,
    question,
    answer,
    fakeAnswers,
    isVisible
  } = card;

  const switchFace = () => {
    setIsSwitched(!isSwitched);
    if (!isFlippedOnce) {
      flipCard(id)
    }
  };

  return (
    <>
      <div onClick={switchFace}>
        { !isSwitched ?
          <p>{question}</p>
          :
          <p>{answer}</p>
        }
      </div>
      <button onClick={() => setVisibility(id)}>Change visibility</button>
    </>
  )
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    flipCard: id => flipCard(id),
    setVisibility: id => setVisibility(id)
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Card);
