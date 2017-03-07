import React from 'react'
import ReactDOM from 'react-dom'
import AllJobs from './components/AllJobs'
import jenkinsapi from 'jenkins-api'

const jenkinsBaseUrl = 'http://jenkins.inviewcloud.com/'

window.onload = function() {
    const jenkins = jenkinsapi.init(jenkinsBaseUrl)
    jenkins.all_jobs((err, data) => {
        console.log('-window all_jobs', err, data)
        if (err) { console.error('all jobs error', err); return null; }
        ReactDOM.render(
            <AllJobs jobs={data} />,
            document.getElementById('container')
        )
    })
}
