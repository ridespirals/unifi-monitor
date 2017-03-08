import { connect } from 'react-redux'
import AllJobs from '../components/AllJobs'

// const getVisibleJobs = (jobs) => {
//     return jobs
// }

const mapStateToProps = (state) => {
    // return {
    //     jobs: getVisibleJobs(state.jobs)
    // }
    console.debug('<vis> map state to props', state)
    return {
        jobs: state.jobs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const VisibleJobs = connect(
    mapStateToProps,
    mapDispatchToProps
)(AllJobs)

export default VisibleJobs
