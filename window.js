import React from 'react'
import ReactDOM from 'react-dom'
import AllJobs from './components/AllJobs'
import jenkins from 'then-jenkins'
// import Promise from 'bluebird'

// let init = Promise.promisify(jenkinsapi.init)
// let getAllJobs = Promise.promisify(jenkinsapi.all_jobs)

const jenkinsBaseUrl = 'http://jenkins.inviewcloud.com/'

// window.onload = function() {
//     const jenkins = jenkinsapi.init(jenkinsBaseUrl)
//     jenkins.all_jobs((err, data) => {
//         console.log('-window all_jobs', err, data)
//         if (err) { console.error('all jobs error', err); return null; }
//         ReactDOM.render(
//             <AllJobs jobs={data} />,
//             document.getElementById('container')
//         )
//     })
// }

window.onload = function() {
    this.jenkins = jenkins(jenkinsBaseUrl)
    this.jenkins.job.list()
        .then(data => {
            console.log('jenkins job list -', data)
            ReactDOM.render(
                <AllJobs jobs={data} />,
                document.getElementById('container')
            )
        })
}
