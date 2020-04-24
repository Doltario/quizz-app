import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './review.css'

class Review extends React.Component {
  render() {
    const { currentQuizz, next } = this.props

    const step = currentQuizz.steps[currentQuizz.currentStep]

    return (
      <div id="review-container">
        <div>Review</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Review)
