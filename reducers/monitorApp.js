const monitor = (state = {}, action) => {
    switch(action.type) {
        case 'GET_ALL_JOBS_COMPLETE':
            return state
        default: return state
    }
}

export default monitor
