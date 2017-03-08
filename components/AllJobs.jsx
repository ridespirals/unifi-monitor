import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import JobItem from './JobItem'
import api from '../services/Jenkins'

const mapStateToProps = (state) => {
    console.debug('<vis> map state to props', state)
    return {
        jobs: state.jobs
    }
}

const mapDispatchToProps = (dispatch) => {
    console.debug('<vis> map dispatch', dispatch)
    return {}
}

export default class AllJobs extends Component {
    render() {
        let { jobs } = this.props
        return (
            <ul className="all-jobs-list">
                {jobs.map(job => {
                    console.log('mapping a job', job)
                    return <JobItem key={job.id} {...job} />
                })}
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
