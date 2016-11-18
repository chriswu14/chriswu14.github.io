import React, { Component } from 'react'
import style from './style.css'

import GithubIconLink from '../GithubIconLink'
import LinkedinIconLink from '../LinkedinIconLink'

export default class IntroSection extends Component {
  render() {
    return (
      <div className={style.intro}>
        <div className={style.name}>
        Hi,
          This is a boilerplate for setting up single page app using React, Redux and Webpack with both HMR for Dev and Static bundle for production sites, as well with routing
        </div>
        <div className={style.projects}>
          <GithubIconLink/>
          <LinkedinIconLink/>
        </div>
      </div>
    )      
  }
}