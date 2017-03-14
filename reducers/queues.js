const queues = (state = [], action) => {
    switch(action.type) {
        case 'GET_ALL_QUEUES_COMPLETE':
            return action.data
        default: return state
    }
}

export default queues
