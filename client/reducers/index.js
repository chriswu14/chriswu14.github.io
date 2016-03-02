
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'

export default combineReducers({
  routing: routerReducer,
  todos
})
