
import React, { Component } from 'react'
import style from './style.css'

export default class Home extends Component {
  render() {
    return (
      <div> 
        <div className={style.normal}>
          <div className={style.name}>
            <h1>昊</h1> 
          </div>
          <div className={style.projects}>
            <a href="//github.com/chriswu14/chriswu14.github.io" target="_blank" className={style.project}><i className="icon icon-github"/></a>
            <a href="//au.linkedin.com/in/chriswu14" target="_blank" className={style.project}><i className="icon icon-linkedin"/></a>
          </div>
        </div>
      </div>
    )
  }
}
