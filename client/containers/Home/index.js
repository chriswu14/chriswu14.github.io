
import React, { Component } from 'react'
import style from './style.css'

export default class Home extends Component {
  render() {
    return (
      <div> 
        <div className={style.normal}>
          <div className={style.name}>
            This is a boilerplate for setting up single page app using React, Redux and Webpack with both HMR for Dev and Static bundle for production sites, as well with routing
          </div>
          <div className={style.projects}>
            <button onClick={this.handleClick.bind(this)}>Click to Route</button>
            <a href="//github.com/chriswu14/chriswu14.github.io" target="_blank" className={style.project}><i className="icon icon-github"/></a>
            <a href="//au.linkedin.com/in/chriswu14" target="_blank" className={style.project}><i className="icon icon-linkedin"/></a>
          </div>
        </div>
      </div>
    )
  }

  handleClick() {
   this.context.router.push('/todo')
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
}
