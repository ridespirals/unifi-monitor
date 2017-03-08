import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import bytes from 'bytes'

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
        return (
            <div className="all-nodes-list">
                {nodes.map((node, idx) => {
                    let diskUsage = node.monitorData['hudson.node_monitors.DiskSpaceMonitor']
                    let diskSize = bytes(diskUsage ? diskUsage.size : 0)
                    console.debug("-- node --", node)
                    let idleClass = node.idle
                        ? 'hourglass-o'
                        : 'cog fa-spin'
                    idleClass = `fa fa-${idleClass}`
                    return (
                        <div className="node-item" key={idx}>
                            <h3>{node.displayName}</h3>
                            <table className="table table-inverse table-sm">
                                <thead className="thead-inverse"><tr>
                                    <th>Disk</th>
                                    <th>Idle</th>
                                </tr></thead>
                                <tbody><tr>
                                    <td>{diskSize}</td>
                                    <td><i className={idleClass} /></td>
                                </tr></tbody>
                            </table>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllNodes)
