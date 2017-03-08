import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import JobItem from './JobItem'
import api from '../services/Jenkins'

const AllJobs = ({ jobs }) => {
    console.debug('all jobs', jobs, arguments)
    let j = { id: require('uuid/v4')(), name: 'name-test', url: 'http://unifilabs.com', color: 'blue' }
    return (
        <ul className="all-jobs-list">
            <JobItem key={j.id} {...j} />
        </ul>
    )
    // return (
    //     <ul className="all-jobs-list">
    //         {jobs.map(job => {
    //             console.log('mapping a job', job)
    //             return <JobItem key={job.url} job={job} />
    //         })}
    //     </ul>
    // )
}

AllJobs.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    }))
}

export default AllJobs

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
