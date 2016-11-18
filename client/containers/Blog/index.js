
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/blog'
import style from './style.css'

import BlogSection from '../../components/Blog/BlogSection'

class Blog extends Component {
  componentDidMount() {
    this.props.actions.getBlogEntries()
  }

  render() {
    const { blog } = this.props
    return (
      <div className={style.normal}>        
        <BlogSection blogEntries={blog.items} />        
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    blog: state.blog.entries
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Blog)
