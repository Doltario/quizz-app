import React from 'react'
import { connect } from 'react-redux'
import './quizzApp.css'

class QuizzApp extends React.Component {
  render() {
    const { currentTab } = this.props

    return (
      <span id="quizz-app-container">
        <span className="quizz-app">{currentTab}</span>
      </span>
    )
  }
}

const mapStateToProps = state => {
  return { currentTab: state.quizz.currentTab }
}

export default connect(mapStateToProps)(QuizzApp)
