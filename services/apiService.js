import jenkins from 'then-jenkins'
import uuid from 'uuid/v4'

const baseUrl = 'http://jenkins.inviewcloud.com/'

const apiService = store => next => action => {
    next(action)
    let api = jenkins(baseUrl)
    switch(action.type) {
        case 'GET_QUEUE':
            api.queue.list()
                .then(queue => {
                    console.debug('<api> queue', queue)
                    next({
                        type: 'GET_QUEUE_COMPLETE',
                        data: queue
                    })
                })
                break
        case 'GET_ALL_QUEUES':
            api.queue.list()
                .then(queues => {
                    console.debug('<api> queues', queues)
                    next({
                        type: 'GET_ALL_QUEUES_COMPLETE',
                        data: queues
                    })
                })
                break
        case 'GET_ALL_JOBS':
            window.api = api
            api.job.list()
                .then(jobList => {
                    console.debug('<api> job list', jobList)
                    let jobData = jobList.map((job, idx) => {
                        return {
                            id: uuid(),
                            url: job.url,
                            name: job.name,
                            color: job.color || 'unknown'
                        }})
                    next({
                        type: 'GET_ALL_JOBS_COMPLETE',
                        data: jobData
                    })
                })
            break
        case 'GET_JOB':
            api.job.get(action.data)
                .then(data => {
                    console.debug('<api> get job', action, data)
                    next({
                        type: 'GET_JOB_COMPLETE',
                        data
                    })
                })
            break
        case 'GET_ALL_NODES':
            api.node.list()
                .then(data => {
                    console.debug('<api> get nodes', data)
                    next({
                        type: 'GET_ALL_NODES_COMPLETE',
                        data
                    })
                })
            break
        default: break
    }
}

export default apiService
