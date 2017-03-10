import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import MonitorApplication from './components/MonitorApplication'
import monitorApp from './reducers'
import apiService from './services/apiService'

let store = createStore(monitorApp, {}, compose(applyMiddleware(apiService)))

window.onload = function() {
    render(
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/(:filter)" component={MonitorApplication} />
            </Router>
        </Provider>,
        document.getElementById('container')
    )
    store.dispatch({ type: 'GET_ALL_JOBS' })
    // store.dispatch({ type: 'GET_QUEUE' })
    // store.dispatch({ type: 'GET_JOB', data: 'dev-portal' })
    store.dispatch({ type: 'GET_ALL_NODES' })
}
