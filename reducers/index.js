import { combineReducers } from 'redux'

import monitor from './monitorApp'
import jobs from './jobs'
import nodes from './nodes'

const monitorApp = combineReducers({
    jobs,
    nodes,
    monitor
})

export default monitorApp
