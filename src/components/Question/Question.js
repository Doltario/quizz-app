import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './question.css'
import Card from '../Card/Card';

class Question extends React.Component {
  render() {
    const { currentQuizz, next, cards } = this.props

    const step = currentQuizz.steps[currentQuizz.currentStep]
    const currentCard = cards.filter( card => card.id === step.id)[0];

    return (
      <div id="question-container">
        <div className={'title'}>Question</div>
        <Card card={currentCard} />
        {currentCard.isFlippedOnce && <div className={'continue'} onClick={next}>Continue</div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentQuizz: state.quizz.currentQuizz,
    cards: state.cards,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
