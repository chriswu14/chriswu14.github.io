import React, { Component } from 'react'
import style from './style.css'

export default class GithubIconLink extends Component {
  render() {
    return <a href="//github.com/chriswu14/chriswu14.github.io" target="_blank" className={style.project}><i style={this.props.linkStyle} className="icon icon-github"/></a>          
  }
}