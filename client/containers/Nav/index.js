
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import style from './style.css'

export default class Nav extends Component {
  render() {
    const { actions, children } = this.props
    return (
      <div id="nav" className={style.normal}>
        <Link to='/'>Home</Link>
        <Link to='/todo'>Todo</Link>
        <Link to='/chat'>Chat</Link>
      </div>
    )
  }
}
