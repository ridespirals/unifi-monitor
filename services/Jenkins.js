import jenkins from 'then-jenkins'
import Promise from 'bluebird'

const baseUrl = 'http://jenkins.inviewcloud.com/'

let api = {
    GetAllJobs() {
        let j = jenkins(baseUrl)
        console.log(`-api- get all jobs ${baseUrl}`, j, j.jobs)
        return j.job.list()
    },
    GetJob(job) {
        console.log(`-api- get job ${job}`)
    }
}

export default api

//
// export function GetAllJobs(cb) {
//     // return api.initAsync(base)
//     //     .then(jenkinsapi => jenkinsapi.all_jobsAsync())
//     //     .then(jobs => {
//     //         console.log('the jobs', jobs)
//     //         return jobs
//     //     })
//     //     .catch(err => {
//     //         console.error('-jenkins api- all jobs', err)
//     //     })
//     const jenkins = api.init(base)
//     console.log('the api', jenkins)
//     jenkins.all_jobs((err, data) => {
//         if (err) return console.error('all jobs error', err)
//         console.log('all jobs success', data)
//         cb(data)
//     })
// }

// export function GetAllJobs() {
//     // this.jenkins = jenkins(baseUrl)
//     return this.jenkins.jobs.list()
// }
//
// export function GetJob(job) {
//     console.log(`-jenkins- GetJob ${job}`)
// }
