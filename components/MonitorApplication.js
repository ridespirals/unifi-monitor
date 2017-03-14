import React, { Component } from 'react'
import { connect } from 'react-redux'

import VisibleJobs from './AllJobs'
import AllNodes from './AllNodes'
import AllQueues from './AllQueues'
import Footer from './Footer'
import RefreshLink from '../containers/RefreshLink'

class MonitorApplication extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { jobs, nodes, queues } = this.props
        return (
            <div>
                <div id="header" className="d-flex justify-content-start">
                    <div className="p-2">
                        <span className="title">UNIFI Monitor</span>
                    </div>
                    <div className="ml-auto p-2">
                        <RefreshLink />
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <h2>All Jobs</h2>
                        <VisibleJobs jobs={jobs} />
                    </div>
                    <div className="p-2">
                        <h2>Nodes</h2>
                        <AllNodes nodes={nodes} />
                        <hr />
                        <h2>Build Queue</h2>
                        <AllQueues queues={queues} />
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <Footer />
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
