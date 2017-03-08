import React, { Component } from 'react'
import { connect } from 'react-redux'
import VisibleJobs from './AllJobs'

class MonitorApplication extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { jobs } = this.props
        console.debug('<application> props', this.props)
        return (
            <div>
                <h1>All Jobs</h1>
                <VisibleJobs jobs={jobs} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { jobs } = state
    console.debug('<application> mapStateToProps', state, jobs)
    return {
        jobs
    }
}

export default connect(mapStateToProps)(MonitorApplication)
