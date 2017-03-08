import jenkins from 'then-jenkins'
import uuid from 'uuid/v4'

const baseUrl = 'http://jenkins.inviewcloud.com/'

const apiService = store => next => action => {
    next(action)
    console.log(`<apiService> ${action.type}`, action)
    switch(action.type) {
        case 'GET_ALL_JOBS':
            let api = jenkins(baseUrl)
            api.job.list()
                .then(jobList => {
                    console.log('<apiService> got jobs from jenkins', jobList)
                    // let jobData = jobList
                    //     .map(job => return {
                    //         id: uuid(),
                    //         ...job
                    //     })
                    next({
                        type: 'GET_ALL_JOBS_COMPLETE',
                        data: jobList
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
