import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './review.css'

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedAnswers: []
    };
  }

  componentWillMount() {
    const { currentQuizz, cards } = this.props
    const step = currentQuizz.steps[currentQuizz.currentStep]
    const card = cards.find( cardItem => cardItem.id === step.card.id)

    const answers = card.fakeAnswers.map(fakeAnswer => {
      return { isWrong: true, content: fakeAnswer }
    })

    answers.push({isWrong: false, content: card.answer})

    //shuffle the answers
    answers.sort(() => Math.random() - 0.5)

    this.answers = answers
  }

  render() {
    const { currentQuizz, next, cards } = this.props
    const step = currentQuizz.steps[currentQuizz.currentStep]
    const card = cards.find( cardItem => cardItem.id === step.card.id)
    

    const wrongAnswer = (index) => {
      this.setState({clickedAnswers: [...this.state.clickedAnswers, index]})
    }

    const answersContent = this.answers.map((answer, index) => {
      const onClick = answer.isWrong === true ? () => wrongAnswer(index) : next
      
      return <div key={index} onClick={onClick} className={`review-anwser-item ${answer.isWrong === true && this.state.clickedAnswers.includes(index) ? 'wrong' : ''}`}>- {answer.content}</div>
    })

    return (
      <div id="review-container">
        <div className="review-card-container">
          {card.question}
        </div>
        <div className="review-anwsers">
          {answersContent}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentQuizz: state.quizz.currentQuizz,
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Review)
