import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const ListCards = ({ cards })  => {
  console.log(cards);
  const cardsComponent = cards.map( (card, index) => {
    return <Card card={card} key={card.id}/>
  });
  return (
    <>
      { cardsComponent }
    </>
  )
};

const mapStateToProps = state => {
  return { cards:  state.cards}
};

export default connect(mapStateToProps)(ListCards);
