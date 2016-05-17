import React, { Component } from 'react'
import style from './style.css'
import marked from 'marked'

export default class BlogEntry extends Component {
  render() {
    const { entry } = this.props
    let bodyHTML = {__html: marked(entry.fields.body)}
    return (
      <div className={style.normal}>
        <div className={style.title}>{entry.fields.title}</div>
        <div className={style.date}>{entry.fields.date}</div>
        <div className={style.content} dangerouslySetInnerHTML={bodyHTML} />        
      </div>
    )          
  }
} 