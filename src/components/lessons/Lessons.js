import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPopulatedLessons } from '../../redux/actions/lessonActions'
import { setCurrentQuizz } from '../../redux/actions/quizzActions'
import './lessons.css'

class Lessons extends React.Component {
  componentWillMount() {
    this.props.getPopulatedLessons()
  }

  render() {
    const { lessons, setCurrentQuizz } = this.props

    let lessonsList = lessons.reduce((lessonsList, lesson, index) => {      
      lessonsList.push(<div className="lessons-item" key={index} onClick={setCurrentQuizz.bind(this, lesson.id)}>{index + 1}</div>)
      return lessonsList
    }, [])

    return <div id="lessons-container">{lessonsList}</div>
  }
}

const mapStateToProps = state => {
  return {
    lessons: state.lessons.list
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getPopulatedLessons: getPopulatedLessons,
      setCurrentQuizz: setCurrentQuizz
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Lessons)
