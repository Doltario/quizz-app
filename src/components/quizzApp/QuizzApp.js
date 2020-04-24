import React from 'react'
import { connect } from 'react-redux'
import './quizzApp.css'
import Lessons from '../lessons/Lessons'
import ListCards from '../ListCards/ListCards';
import Quizz from '../Quizz/Quizz';

const currentTabMap = {
  LESSONS: 'LESSONS',
  CARDS: 'CARDS'
}

class QuizzApp extends React.Component {

  render() {
    const { currentTab, switchToTab, cards } = this.props;
    let contentComponent = currentTab === currentTabMap.LESSONS ? <Lessons /> : <ListCards />;

    return (
      <div id="quizz-app-container">
        <div className="quizz-app-content">
          <div className="quizz-app-header">
            <span onClick={switchToTab.bind(this, currentTabMap.LESSONS)} className={`quizz-app-header-item ${currentTab === currentTabMap.LESSONS ? 'quizz-app-header-item-active' : ''}`}>Lessons</span>
            <span onClick={switchToTab.bind(this, currentTabMap.CARDS)} className={`quizz-app-header-item ${currentTab === currentTabMap.CARDS ? 'quizz-app-header-item-active' : ''}`}>Cards ({cards.length})</span>
          </div>
          <div className="quizz-app-body">
            {contentComponent}
          </div>
        </div>
        <Quizz />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    currentTab: state.quizz.currentTab,
    cards: state.cards
   }
}


const mapDispatchToProps = dispatch => {
  return {
      switchToTab: tabName => {
        dispatch({ type: 'SWITCH_TO_TAB', tabName })
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizzApp)
