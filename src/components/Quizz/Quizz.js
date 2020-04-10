import React from 'react'
import { connect } from 'react-redux'
import './quizz.css'

class QuizzApp extends React.Component {
  render() {
    const { currentQuizz } = this.props

    if (!currentQuizz) return null

    return <div id="quizz-container">
      <div className="quizz-content">
        Coucou 
      </div>
    </div>
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizzApp)
