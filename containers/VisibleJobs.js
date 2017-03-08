import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import AllJobs from '../components/AllJobs'

function mapStateToProps(state) {
    return {
        jobs: state.jobs
    }
}

class VisibleJobs extends Component {
    constructor(props) {
        super(props)
    }

    render() {

    }
}

VisibleJobs.propTypes = {
    jobs: PropTypes.any
}

export default connect(mapStateToProps)(AllJobs)
