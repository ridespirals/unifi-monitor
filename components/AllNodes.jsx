import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

const mapStateToProps = (state) => {
    return {
        nodes: state.nodes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

class AllNodes extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { nodes } = this.props
        console.debug('<all nodes>', this.props)
        return (
            <ul className="all-nodes-list">
                {nodes.map((node, idx) => {
                    console.debug('~map node~', node)
                    return (
                        <li className="node-item" key={idx}>{node.displayName}</li>
                    )
                })}
            </ul>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllNodes)
