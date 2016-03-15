import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/chat'
import MessageSection from '../../components/Chat/MessageSection'
import ThreadSection from '../../components/Chat/ThreadSection'

class Chat extends Component {

  componentDidMount() {
    this.props.dispatch(Actions.getAllMessages())
  }

  render() {
    const { threads, messages, currentThreadID, dispatch } = this.props
    const actions = bindActionCreators(Actions, dispatch)
    return (
      <div className="chatapp">
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
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    threads: state.threads,
    messages: state.messages,
    currentThreadID: state.currentThreadID
  }
}

export default connect(mapStateToProps)(Chat)