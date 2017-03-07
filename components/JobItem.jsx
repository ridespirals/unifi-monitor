import React from 'react'

export default class JobItem extends React.Component {
    constructor(props) {
        console.log('job item created - ', props)
        super(props)
    }

    render() {
        const job = this.props.job
        return <li className="job-item" style={{color: job.color}}>{this.props.job.color} &mdash; {this.props.job.name}</li>
    }
}
