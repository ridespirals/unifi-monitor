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
        let { queues } = this.props
        console.warn('-- queues render --', this.props)
        if (queues.length === 0) {
            return <div className="all-queues-list no-queues">No queues</div>
        } else {
            return (
                <div className="all-queues-list">
                    {queues.map(q => {
                        return q.items.map(item => {
                            return (<div key={item.id}>{item.id} - {item.why}</div>)
                        })
                        // return (<div key={q.id}>{q.id} - {q.why}</div>)
                    })}
                </div>
            )
        }
    }
}

export default connect(
    mapStateToProps
)(AllQueues)
