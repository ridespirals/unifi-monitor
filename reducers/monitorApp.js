const monitor = (state = {}, action) => {
    state = state || {}
    console.log(`<monitor> ${action.type}`, state, action)
    switch(action.type) {
        case 'GET_ALL_JOBS_COMPLETE':
            console.debug('Got all jobs', state, action);
            return state
        default: return state
    }
}

export default monitor
