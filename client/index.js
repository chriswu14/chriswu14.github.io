
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import Master from './containers'
import CarOfTheWeekContainer from './containers/CarOfTheWeekContainer'
import SearchContainer from './containers/SearchContainer'
import CarDetailsContainer from './containers/CarDetailsContainer'
import configure from './store'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Master}>
        <IndexRoute component={CarOfTheWeekContainer}/>
        <Route path="search" component={SearchContainer}/>
        <Route path="make/model/">
          <Route path=":id" component={CarDetailsContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
