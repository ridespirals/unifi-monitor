import React from 'react'
import _ from 'lodash'

import JobItem from './JobItem'
import api from '../services/Jenkins'

export default class AllJobs extends React.Component {

    constructor(props) {
        console.log('all jobs created - ', props)
        super(props)
    }

    getAllJobs() {
        this.jobs = api.GetAllJobs()
            .then(jobs => {
                jobs.map((job, idx) => <JobItem job={job} key={idx} />)})
    }

    render() {
        api.GetAllJobs()
            .then(j => {
                 const jobs = _.map(j, (job, idx) => <JobItem job={job} key={idx} />)
                 console.debug('allJobs', jobs)
                 return (
                     <ul className="all-jobs-list">
                        {jobs}
                     </ul>
                 )
            })
    }
}
