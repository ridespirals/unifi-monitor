import api from 'jenkins-api'
import Promise from 'bluebird'

const base = 'http://jenkins.inviewcloud.com/'

export function GetAllJobs(cb) {
    // return api.initAsync(base)
    //     .then(jenkinsapi => jenkinsapi.all_jobsAsync())
    //     .then(jobs => {
    //         console.log('the jobs', jobs)
    //         return jobs
    //     })
    //     .catch(err => {
    //         console.error('-jenkins api- all jobs', err)
    //     })
    const jenkins = api.init(base)
    console.log('the api', jenkins)
    jenkins.all_jobs((err, data) => {
        if (err) return console.error('all jobs error', err)
        console.log('all jobs success', data)
        cb(data)
    })
}

// export default class Jenkins {
//
//
//     constructor() {
//         jenkins = api.init(base)
//     }
//
//     GetAllJobs() {
//         console.log(`-jenkins- get all jobs`)
//         return jenkins.all_jobs((err, data) => {
//             if (err) return console.error('all jobs error', err)
//             console.log('all jobs success', data)
//         })
//     }
//
//     GetJob(job) {
//         console.log(`-jenkins- GetJob ${job}`)
//     }
// }
