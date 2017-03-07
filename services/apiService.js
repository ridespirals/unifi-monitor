import jenkins from 'then-jenkins'

const baseUrl = 'http://jenkins.inviewcloud.com/'

const apiService = store => next => action => {
    next(action)
    console.log(`<apiService> ${action.type}`, action)
    switch(action.type) {
        case 'GET_ALL_JOBS':
            this.jenkins = jenkins(baseUrl)
            this.jenkins.job.list()
                .then(jobList => {
                    console.log('<apiService> got jobs from jenkins', jobList)
                    next({
                        type: 'GET_ALL_JOBS_COMPLETE',
                        data
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
