import React, { Component } from 'react'
import style from './style.css'

import BlogEntry from '../BlogEntry'

export default class BlogSection extends Component {
  render() {
    const { blogEntries } = this.props
    return (
      <div className="row">
        <div className="col-sm-2">
        </div>
        <div className="col-sm-8">
          {
            blogEntries.map((entry, index) => {
              return <BlogEntry key={index} entry={entry}/>            
            })
          }
        </div>
        <div className="col-sm-2">
        </div>
      </div>
    )          
  }
} 