import React from 'react'
import { render } from 'react-dom'
import jenkins from 'then-jenkins'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import MonitorApplication from './components/MonitorApplication'
import monitorApp from './reducers'
import apiService from './services/apiService'

let store = createStore(monitorApp, {}, compose(applyMiddleware(apiService)))

window.onload = function() {
    render(
        <Provider store={store}>
            <MonitorApplication />
        </Provider>,
        document.getElementById('container')
    )
    store.dispatch({ type: 'GET_ALL_JOBS' })
}
