
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import Master from './containers'
import Home from './containers/Home'
import Todo from './containers/Todo'
import Chat from './containers/Chat'
import configure from './store'

const store = configure()
const cleanHashHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const history = syncHistoryWithStore(cleanHashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Master}>
        <IndexRoute component={Home}/>
        <Route path="todo" component={Todo}/>
        <Route path="chat" component={Chat}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
