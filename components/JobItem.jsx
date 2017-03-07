import React from 'react'

const JobItem = (job) => {
    console.debug('<jobItem', job)
    let { color, url, name } = job
    return (<li className="job-item {color}" style={{color: color}}>
        <a href={url} target="_blank">{name}</a>
    </li>)
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
