import React, { Component } from 'react'
import style from './style.css'

export default class NextSlideButton extends Component {
  render() {
    return <a className={style.normal} onClick={this.props.onClick}>Next</a>  
  }
}