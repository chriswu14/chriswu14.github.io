import React, { Component } from 'react'
import { Link } from 'react-router'
import { Motion, spring } from 'react-motion';
import GithubIconLink from '../../components/Home/GithubIconLink'
import LinkedinIconLink from '../../components/Home/LinkedinIconLink'


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
    const stiffness = 150
    const damping = 26
    return (     
      <div className={style.normal}>
        <Link to='/'>Home</Link>
        <Link to='/todo'>Todo</Link>
        <Link to='/chat'>Chat</Link>
        <Motion style={{x: spring(this.state.size, {stiffness, damping})}}>
          {({x}) => {
            let visibilityStyle = {display: 'inline-block'}
            if(x == 0) {
              visibilityStyle.display = 'none'
            }

            return (            
              <div style={visibilityStyle}>
                <GithubIconLink linkStyle={{fontSize: x,  position: 'absolute', lineHeight: '50px'}}/>
                <LinkedinIconLink linkStyle={{fontSize: x, position: 'absolute', lineHeight: '50px'}}/>
              </div>
            )}
          }
        </Motion>        
      </div>
    )
  }

  scrollListener(e) {
    let offset = window.pageYOffset - 200

    if(offset > 30) {
      offset = 30
    }

    if(offset < 0) {
      offset = 0
    }

    this.setState({size: offset})
  }

  attachScrollListener() {
    window.addEventListener('scroll', this.scrollListener.bind(this))
  }

  detachScrollListener() {
    window.removeEventListener('scroll', this.scrollListener.bind(this))
  }
}
