import jenkins from 'then-jenkins'
import uuid from 'uuid/v4'

const baseUrl = 'http://jenkins.inviewcloud.com/'

const apiService = store => next => action => {
    next(action)
    switch(action.type) {
        case 'GET_ALL_JOBS':
            let api = jenkins(baseUrl)
            api.job.list()
                .then(jobList => {
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
            console.log(`<apiService ${action.type}`, action)
            break
        default: break
    }
}

export default apiService
