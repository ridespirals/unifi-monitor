import React, { Component, PropTypes } from 'react'

export default class JobItem extends Component {
    render() {
        let { id, name, color, url } = this.props
        function jobColorClass() {
            return `job-item ${color}`
        }
        return (
            <li className={jobColorClass()} style={{color: color}}>
                <div className="job-item-status"></div>
                <a href={url} target="_blank">{name}</a>
            </li>
        )

    }
}

JobItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    color: PropTypes.string
}
