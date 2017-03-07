import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import JobItem from './JobItem'
import api from '../services/Jenkins'

const getVisibleJobs = (jobs) => {
    return jobs
}

const mapStateToProps = (state) => {
    return {
        jobs: getVisibleJobs(state.jobs)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const AllJobs = ({ jobs }) => {
    console.debug('all jobs', jobs)
    return (
        <ul className="all-jobs-list">
            {jobs.map(job => {
                console.log('mapping a job', job)
                return <JobItem key={job.url} job={job} />
            })}
        </ul>
    )
}

const VisibleJobs = connect(
    mapStateToProps,
    mapDispatchToProps
)(AllJobs)

export default VisibleJobs

// export default class AllJobs extends React.Component {
//
//     constructor(props) {
//         console.log('all jobs created - ', props)
//         super(props)
//     }
//
//     getAllJobs() {
//         this.jobs = api.GetAllJobs()
//             .then(jobs => {
//                 jobs.map((job, idx) => <JobItem job={job} key={idx} />)})
//     }
//
//     render() {
//         api.GetAllJobs()
//             .then(j => {
//                  const jobs = _.map(j, (job, idx) => <JobItem job={job} key={idx} />)
//                  console.debug('allJobs', jobs)
//                  return (
//                      <ul className="all-jobs-list">
//                         {jobs}
//                      </ul>
//                  )
//             })
//     }
// }
