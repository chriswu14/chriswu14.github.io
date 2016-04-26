import { ActionTypes } from '../constants/blog'
import contentful from 'contentful'

export function getBlogEntries() {
  return dispatch => {
    dispatch(requestBlogEntries())

    var client = contentful.createClient({
      space: 'lco63tcr65mw',      
      accessToken: 'ade9ef5c12d9cecacda93c205e63bb2882e263233089b13e6993a3a339db71ee'
    })

    client.getEntries().then(entries => {
      console.log(entries)
      dispatch(receiveBlogEntries(entries))
    })
  };
}

export function requestBlogEntries() {
  return {
    type: ActionTypes.REQUEST_BLOG_ENTRIES
  };
}

export function receiveBlogEntries(entries) {
  return {
    type: ActionTypes.RECEIVE_BLOG_ENTRIES,
    entries: entries
  };
}