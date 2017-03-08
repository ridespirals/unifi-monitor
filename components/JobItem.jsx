import React, { PropTypes } from 'react'

const JobItem = ({ id, name, color, url }) => {
    console.debug('<jobItem', id, name, color, url)
    return (<li className="job-item {color}" style={{color: color}}>
        <a href={url} target="_blank">{name}</a>
    </li>)
}

JobItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default JobItem

// export default class JobItem extends React.Component {
//
//     constructor(props) {
//         console.log('job item created - ', props)
//         super(props)
//     }
//
//     render() {
//         return(
//             <li className="job-item" style={{color: this.props.job.color}}>
//                 <a href={this.props.job.url} target="_blank">{this.props.job.name}</a>
//             </li>
//         )
//     }
// }
