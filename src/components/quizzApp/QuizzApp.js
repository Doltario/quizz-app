import React from 'react'
import { connect } from 'react-redux'
import './quizzApp.css'

const currentTabMap = {
  LESSONS: 'lessons',
  CARDS: 'cards'
}

class QuizzApp extends React.Component {
  render() {
    const { currentTab } = this.props

    return (
      <div id="quizz-app-container">
        <div className="quizz-app-header">
          <span className={`quizz-app-header-item ${currentTab === currentTabMap.LESSONS ? 'quizz-app-header-item-active' : ''}`}>Lessons</span>
          <span className={`quizz-app-header-item ${currentTab === currentTabMap.CARDS ? 'quizz-app-header-item-active' : ''}`}>Cards (@TODO: cards number)</span>
        </div>
        <div className="quizz-app-body">Lessons or cards will go here</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentTab: state.quizz.currentTab }
}

export default connect(mapStateToProps)(QuizzApp)
