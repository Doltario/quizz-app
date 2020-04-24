import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetCurrentQuizz, incrementCurrentStep } from '../../redux/actions/quizzActions'
import { endLesson } from '../../redux/actions/lessonActions'
import Review from '../Review/Review'
import Question from '../Question/Question'
import './quizz.css'

class Quizz extends React.Component {

  render() {
    const { currentQuizz, resetCurrentQuizz, endLesson } = this.props

    if (!currentQuizz.lesson) return null
    
    const closeQuizz = () => {
      // felix@TODO: Visually improve that
      const input = window.confirm('Voulez vous vraiment quitter le quizz ?')
      if (input === true) resetCurrentQuizz()
    }

    const next = () => {
      if (currentQuizz.steps[currentQuizz.currentStep + 1]) {
        this.props.incrementCurrentStep()
      } else {
        endLesson(currentQuizz.lesson.id);
        resetCurrentQuizz();
      }
      
    }

    let content = null
    if (currentQuizz.steps[currentQuizz.currentStep].isReview === true) {
      content = <Review next={next}></Review>
    } else {
      content = <Question next={next}></Question>
    }

    return (
      <div id="quizz-container">
        <div className="quizz-overlay" onClick={closeQuizz}></div>
        <div className="quizz-content">
          <div className="quizz-header">
            <div className="quizz-header-item">
              <span onClick={closeQuizz}>X</span>
            </div>
          </div>
          <div className="quizz-body">{content}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  
  return {
    currentQuizz: state.quizz.currentQuizz,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      resetCurrentQuizz,
      incrementCurrentStep,
      endLesson
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Quizz)
