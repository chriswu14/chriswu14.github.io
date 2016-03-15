
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'
import currentThreadID from './currentThreadID'
import messages from './messages'
import threads from './threads'

export default combineReducers({
  routing: routerReducer,
  todos,
  currentThreadID,
  messages,
  threads
})
