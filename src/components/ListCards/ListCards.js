import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import './ListCards.css';

const ListCards = ({ cards })  => {
  const cardsComponent = cards.map( (card, index) => {
    return <Card card={card} key={card.id}/>
  });
  return (
    <div className={'listCards'}>
      { cardsComponent }
    </div>
  )
};

const mapStateToProps = state => {
  return { cards:  state.cards}
};

export default connect(mapStateToProps)(ListCards);
