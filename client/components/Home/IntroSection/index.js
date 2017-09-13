import React, { Component } from 'react'
import style from './style.css'

export default class IntroSection extends Component {
  render() {
    const {review} = this.props
    return (
      <div className={style.intro}>
        <div className={style.name}>
          <h1>Car of the week</h1>
           {review}
        </div>
      </div>
    )      
  }
}