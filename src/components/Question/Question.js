import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './question.css'

class Question extends React.Component {
  render() {
    const { currentQuizz, next } = this.props

    const step = currentQuizz.steps[currentQuizz.currentStep]

    return (
      <div id="question-container">
        <div>Question</div>
        <div onClick={next}>NEXT()</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentQuizz: state.quizz.currentQuizz,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
