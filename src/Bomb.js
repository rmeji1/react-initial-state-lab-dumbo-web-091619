// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {
  constructor (props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  message = (timeInSeconds) => {
    if (timeInSeconds === 0) {
      return 'Boom!'
    }
    return `${timeInSeconds} seconds left before I go boom!`
  }

  render () {
    return this.message(this.state.secondsLeft)
  }
}

export default Bomb
