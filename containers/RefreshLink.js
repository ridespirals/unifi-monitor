import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        onRefreshClick: () => {
            dispatch({ type: 'GET_ALL_JOBS' })
            dispatch({ type: 'GET_ALL_NODES' })
            dispatch({ type: 'GET_ALL_QUEUES' })
        }
    }
}

class RefreshLink extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <a onClick={this.props.onRefreshClick} href="#"><i className="fa fa-refresh"></i></a>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RefreshLink)
