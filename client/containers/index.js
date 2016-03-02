
import React, { Component } from 'react'
import style from './style.css'
import Slider from 'react-slick'

import PreviousSlideButton from '../components/PreviousSlideButton'
import NextSlideButton from '../components/NextSlideButton' 
import Todo from './Todo'
import Home from './Home'
import Nav from './Nav'

export default class Master extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      nextArrow: NextSlideButton,
      prevArrow: PreviousSlideButton
    };

    return (
      <div>
        <Nav/>
        {this.props.children}
      </div>
    )
  }
}
