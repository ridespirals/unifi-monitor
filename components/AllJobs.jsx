import React from 'react'
import _ from 'lodash'

import JobItem from './JobItem'
import { GetAllJobs } from '../services/Jenkins'

export default class AllJobs extends React.Component {
    constructor(props) {
        console.log('all jobs created - ', props)
        super(props)
    }

    render() {
        // let allJobs = _.map(GetAllJobs(jobs => jobs), (j, idx) => <JobItem job={j} key={idx} />)
        // let allJobs = GetAllJobs((jobs) => {
        //     console.log('-- got all jobs', jobs)
        //     return _.map(jobs, j =>  <JobItem job={j} key={j.url} />)
        // })
        // let allJobs = GetAllJobs(jobs => jobs)
        // console.log('-all jobs from jenkins-', allJobs)
        return (
            <ul className="all-jobs-list">
                {this.props.jobs.map((j, idx) => <JobItem job={j} key={idx} />)}
            </ul>
        )
    }
}
