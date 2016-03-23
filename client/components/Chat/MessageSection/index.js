import React from 'react'
import MessageComposer from '../MessageComposer'
import MessageListItem from '../MessageListItem'
import style from './style.css'

export default class MessageSection extends React.Component {

  componentDidMount() {
    this._scrollToBottom()
  }

  render() {
    const { currentThread, messages } = this.props;

    if (currentThread) {
      let messageListItems = currentThread.messages.map((messageID) => {
        let message = messages[messageID];
        return (
          <MessageListItem
            key={messageID}
            message={message}
          />
        )
      })

      return (
        <div className={style.messageSection}>
          <h3 className={style.messageThreadHeading}>{currentThread.threadName}</h3>
          <ul className={style.messageList} ref="messageList">
            {messageListItems}
          </ul>
          <MessageComposer
            threadID={currentThread.id}
            actions={this.props.actions}
          />
        </div>
      );
    } else {
      return <div className={style.messageSection}></div>
    }
  }

  componentDidUpdate() {
    this._scrollToBottom()
  }

  _scrollToBottom() {
    let ul = this.refs.messageList
    if (ul) {
      ul.scrollTop = ul.scrollHeight
    }
  }
}