import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import MonitorApplication from './components/MonitorApplication'
import monitorApp from './reducers'
import apiService from './services/apiService'
import consoleLogger from './services/ConsoleLogger'

let store = createStore(monitorApp, {}, compose(applyMiddleware(apiService, consoleLogger)))

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
    store.dispatch({ type: 'GET_ALL_QUEUES' })
    // store.dispatch({ type: 'ADD_QUEUE', data: {
    //     items: [
    //         {
    //             'why': 'because i said so',
    //             'id': 20
    //         }
    //     ]
    // } })
    // store.dispatch({ type: 'ADD_QUEUE', data: {
    //     items: [
    //         {
    //             'why': 'Build #2 is already in progress (ETA:N/A)',
    //             'id': 22
    //         }
    //     ]
    // } })
}
