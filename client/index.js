
import { Router, Route, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import Master from './containers'
import Home from './containers/Home'
import Todo from './containers/Todo'
import configure from './store'

const store = configure()

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })




ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory}>
      <Route path="/" component={Master}>
        <Route path="home" component={Home}/>
        <Route path="about" component={Todo}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
