import { combineReducers } from 'redux'

import monitor from './monitorApp'
import jobs from './jobs'

const monitorApp = combineReducers({
    jobs,
    monitor
})

export default monitorApp
