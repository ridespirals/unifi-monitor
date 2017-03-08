const monitor = (state = {}, action) => {
<<<<<<< HEAD
    state = state || {}
    console.log(`<monitor> ${action.type}`, state, action)
    switch(action.type) {
        case 'GET_ALL_JOBS_COMPLETE':
            console.debug('Got all jobs', state, action);
=======
    switch(action.type) {
        case 'GET_ALL_JOBS_COMPLETE':
>>>>>>> f3ee29b7ce5dc84f1c6edf0a48f7107fbbfaf8fa
            return state
        default: return state
    }
}

export default monitor
