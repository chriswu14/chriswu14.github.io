import React, { Component } from 'react'
import style from './style.css'
import marked from 'marked'

export default class BlogEntry extends Component {
  render() {
    const { entry } = this.props
    let bodyHTML = {__html: marked(entry.fields.body)}
    return (
      <div>
        <div>{entry.fields.title}</div>
        <div dangerouslySetInnerHTML={bodyHTML} />
        <div>{entry.fields.date}</div>
      </div>
    )          
  }
} 