
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import cars from './cars'

export default combineReducers({
  routing: routerReducer,
  cars
})
