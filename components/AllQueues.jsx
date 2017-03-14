import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

const mapStateToProps = state => {
    return {
        queues: state.queues
    }
}

class AllQueues extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="all-queues-list">
                queues
            </div>
        )
    }
}

export default connect(
    mapStateToProps
)(AllQueues)
