import React, { PropTypes } from 'react'
import style from './style.css'

class MessageListItem extends React.Component {

  render() {
    let {message} = this.props
    return (
      <li className={style.messageListItem}>
        <h5 className={style.messageAuthorName}>{message.authorName}</h5>
        <div className={style.messageTime}>
          {message.date.toLocaleTimeString()}
        </div>
        <div className={style.messageText}>{message.text}</div>
      </li>
    )
  }
}

MessageListItem.propTypes = {
  message: PropTypes.object
}

export default MessageListItem