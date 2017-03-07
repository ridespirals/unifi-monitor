import React from 'react'

export default class JobItem extends React.Component {

    constructor(props) {
        console.log('job item created - ', props)
        super(props)
    }

    render() {
        return(
            <li className="job-item" style={{color: this.props.job.color}}>
                <a href={this.props.job.url} target="_blank">{this.props.job.name}</a>
            </li>
        )
    }
}
