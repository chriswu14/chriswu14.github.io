
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import style from './style.css'

export default class Nav extends Component {
  render() {
    const { actions, children } = this.props
    return (
      <div id="nav" className={style.normal}>
        <a href="#home">Home</a>
        <a href="#todo">Todo</a>
      </div>
    )
  }
}
