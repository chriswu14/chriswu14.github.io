
import { ActionTypes } from '../constants/blog'

const initialState = {
  entries: {
    items: []
  }
}

export default function blog(state = initialState, action) {

  switch (action.type) {
    case ActionTypes.RECEIVE_BLOG_ENTRIES: {  
      let entries = { entries: action.entries }  
      return Object.assign({}, state, entries)
    }

    default:
      return state
  }
}