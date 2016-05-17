import React, { Component } from 'react'
import { Link } from 'react-router'
import { Motion, spring } from 'react-motion';


import style from './style.css'

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {size: 0}
  }

  componentDidMount () {
    this.attachScrollListener()
  }

  componentWillUnmount () {
    this.detachScrollListener()
  }

  render() {
    return (
      <div className={style.normal}>
        <Link to='/'>Home</Link>
        <Link to='/todo'>Todo</Link>
        <Link to='/chat'>Chat</Link>
        {this.state.size}

        <Motion style={{x: spring(this.state.size)}}>
          {({x}) =>
            <div style={{fontSize: x}}>
              FONT
            </div>
          }
        </Motion>

      </div>
    )
  }

  scrollListener() {
    this.setState({size: this.state.size + 1})
    console.log(this.state.size)
  }

  attachScrollListener() {
    window.addEventListener('scroll', this.scrollListener.bind(this))
  }

  detachScrollListener() {
    window.removeEventListener('scroll', this.scrollListener.bind(this))
  }
}
