
import React, { Component } from 'react'
import style from './style.css'
import Slider from 'react-slick'

import Nav from './Nav'

export default class Master extends Component {
  render() {
    return (
      <div>
        <Nav/>
        {this.props.children}
      </div>
    )
  }
}
