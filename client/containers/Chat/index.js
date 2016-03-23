import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/chat'
import MessageSection from '../../components/Chat/MessageSection'
import ThreadSection from '../../components/Chat/ThreadSection'

import style from './style.css'

class Chat extends Component {

  componentDidMount() {
    this.props.actions.getAllMessages()
  }

  render() {
    const { threads, messages, currentThreadID, actions } = this.props
    return (
      <div className={style.chatapp}>
        <ThreadSection
          threads={threads}
          messages={messages}
          currentThreadID={currentThreadID}
          actions={actions}
        />
        <MessageSection
          currentThread={threads[currentThreadID]}
          messages={messages}
          actions={actions}
        />
      </div>
    )
  }
}

Chat.propTypes = {
  threads: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  currentThreadID: PropTypes.string,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    threads: state.threads,
    messages: state.messages,
    currentThreadID: state.currentThreadID
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
  )(Chat)