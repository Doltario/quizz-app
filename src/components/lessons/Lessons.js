import React from 'react'
import { connect } from 'react-redux'
import './lessons.css'

class Lessons extends React.Component {
  render() {
    return (
      <div id="lessons-container">
        Lessons will be here
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  switchToTab: () => {}
})

export default Lessons
