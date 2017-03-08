import React, { Component } from 'react'
import { connect } from 'react-redux'

import VisibleJobs from './AllJobs'
import AllNodes from './AllNodes'

class MonitorApplication extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { jobs, nodes } = this.props
        return (
            <div>
                <div className="d-flex flex-row">
                    <h1>UNIFI Monitor</h1>
                </div>
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <h2>All Jobs</h2>
                        <VisibleJobs jobs={jobs} />
                    </div>
                    <div className="p-2">
                        <h2>Nodes</h2>
                        <AllNodes nodes={nodes} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { jobs } = state
    return {
        jobs
    }
}

export default connect(mapStateToProps)(MonitorApplication)
