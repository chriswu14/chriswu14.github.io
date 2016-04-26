
import React, { Component } from 'react'
import style from './style.css'

import Blog from '../Blog'
import IntroSection from '../../components/Home/IntroSection'

export default class Home extends Component {
  render() {
    return (
      <div>
        <IntroSection/>
        <Blog/>
      </div>
    )
  }
}
