const queues = (state = [], action) => {
    switch(action.type) {
        case 'ADD_QUEUE':
            const abcd = [...state, action.data]
            console.debug('~queues~ add queue', abcd)
            return abcd
        case 'GET_ALL_QUEUES_COMPLETE':
            return action.data
        default: return state
    }
}

export default queues
