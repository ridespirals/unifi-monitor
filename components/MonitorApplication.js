import React, { Component } from 'react'
import { connect } from 'react-redux'

import VisibleJobs from './AllJobs'
import AllNodes from './AllNodes'
import Footer from './Footer'

class MonitorApplication extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { jobs, nodes } = this.props
        return (
            <div>
                <div id="header" className="d-flex justify-content-start">
                    <div className="p-2">
                        <span className="title">UNIFI Monitor</span>
                    </div>
                    <div className="ml-auto p-2">
                        <i className="fa fa-refresh"></i>
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
