import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { flipCard, setVisibility } from '../../redux/actions/cardActions';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

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
    <div>
      <div className={`card ${isVisible ? '' : 'visible'}`}>
        <div className={`cardInner ${isSwitched ? 'rotate' : ''}`} onClick={switchFace}>
          <div className={`cardContentFront`}>
            <p className={'text'}>{question}</p>
          </div>
          <div className={`cardContentBack`}>
            <p className={'text'}>{answer}</p>
          </div>
        </div>
      </div>
      <div className={'option'}>
        {isVisible ?
          <FontAwesomeIcon onClick={() => setVisibility(id)} icon={faEye} />
          :
          <FontAwesomeIcon onClick={() => setVisibility(id)} icon={faEyeSlash} />
        }
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    flipCard: id => flipCard(id),
    setVisibility: id => setVisibility(id)
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Card);
