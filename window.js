import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './modules/Hello'

window.onload = function() {
    ReactDOM.render(
        <Hello />,
        document.getElementById('container')
    )
}
