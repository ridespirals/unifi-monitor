import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import AllJobs from '../components/AllJobs'
import _ from 'lodash'

function getVisibleJobs(todos, filter) {
    console.debug('>> get visible todos', todos, filter)
    switch (filter) {
        case 'all': return todos;
        case 'active':
            return _.filter(todos, t => t.name.indexOf('dev-') >= 0)
        case 'completed':
            return _.filter(todos, t => t.name.indexOf('dev-') === -1)
        default: return todos
    }
}

function mapStateToProps(state, ownProps) {
    console.debug('>> mapping state to props', state, ownProps)
    return {
        // jobs: getVisibleJobs(state.jobs, ownProps.filter)
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
