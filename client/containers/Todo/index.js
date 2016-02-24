
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions/todos'
import style from './style.css'

class Todo extends Component {
  render() {
    const { todos, actions, children } = this.props
    return (
      <div className={style.wrapper}>
        <div className={style.normal}>
          <Header addTodo={actions.addTodo} />
          <MainSection todos={todos} actions={actions} />
          {children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
