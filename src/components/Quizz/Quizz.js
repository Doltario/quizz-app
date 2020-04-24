import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetCurrentQuizz } from '../../redux/actions/quizzActions'
import './quizz.css'

class QuizzApp extends React.Component {
  render() {
    const { currentQuizz, resetCurrentQuizz } = this.props

    if (!currentQuizz) return null

    // felix@TODO: add quit prevention before resetCurrentQuizz

    const closeQuizz = () => {
      const input = window.confirm('Voulez vous vraiment quitter le quizz ?')
      if (input === true) resetCurrentQuizz()
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
          <div className="quizz-body">Content</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // Here, currentQuizz equals a lesson object
  return {
    currentQuizz: state.lessons.list.filter((lesson) => {
      return lesson.id === state.quizz.currentQuizz
    })[0],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      resetCurrentQuizz,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizzApp)
