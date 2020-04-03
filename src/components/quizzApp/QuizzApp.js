import React from 'react'
import './quizzApp.css'

class QuizzApp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span id="quizz-app-container">
        <span className="quizz-app">Quizz app</span>
      </span>
    )
  }
}

export default QuizzApp
