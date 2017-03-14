import { combineReducers } from 'redux'

import monitor from './monitorApp'
import jobs from './jobs'
import nodes from './nodes'
import queues from './queues'

const monitorApp = combineReducers({
    // JenkinsJobs: jobs,
    // JenkinsNodes: nodes,
    jobs,
    nodes,
    queues,
    monitor
})

export default monitorApp
