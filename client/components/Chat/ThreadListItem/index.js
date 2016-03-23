import * as Actions from '../../../actions/chat'
import React, { PropTypes } from 'react'
import classNames from 'classnames/bind'
import style from './style.css'

let cx = classNames.bind(style);

console.log(classNames.bind)

class ThreadListItem extends React.Component {

  render() {
    let thread = this.props.thread;
    let lastMessage = this.props.lastMessage;

    return (
      <li
        className={cx({
          threadListItem: true,
          active: thread.id === this.props.currentThreadID
        })}
        onClick={this._onClick.bind(this)}>
        <h5 className={style.threadName}>{thread.threadName}</h5>
        <div className={style.threadTime}>
          {lastMessage.date.toLocaleTimeString()}
        </div>
        <div className={style.threadLastMessage}>
          {lastMessage.text}
        </div>
      </li>
    )
  }

  _onClick() {
    this.props.actions.clickThread(this.props.thread.id)
  }

};

ThreadListItem.propTypes = {
  thread: PropTypes.object.isRequired,
  lastMessage: PropTypes.object.isRequired,
  currentThreadID: PropTypes.string.isRequired
}

export default ThreadListItem