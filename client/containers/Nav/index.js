
import React, { Component } from 'react'
import { Link } from 'react-router'

import style from './style.css'

export default class Nav extends Component {
  render() {
    return (
      <div className={style.normal}>
        <Link to='/'>Home</Link>
        <Link to='/todo'>Todo</Link>
        <Link to='/chat'>Chat</Link>
      </div>
    )
  }
}
