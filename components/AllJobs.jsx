import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import JobItem from './JobItem'

export default class AllJobs extends Component {
    render() {
        let { jobs } = this.props
        console.debug('all jobs props', this.props)
        return (
            <ul className="all-jobs-list">
                {jobs.map(job => <JobItem key={job.id} {...job} />)}
            </ul>
        )

    }
}

AllJobs.propTypes = {
    jobs: PropTypes.any
    // jobs: PropTypes.arrayOf(PropTypes.shape({
    //     id: PropTypes.string.isRequired,
    //     name: PropTypes.string.isRequired,
    //     url: PropTypes.string.isRequired,
    //     color: PropTypes.string.isRequired
    // }))
}
