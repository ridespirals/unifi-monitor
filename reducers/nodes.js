import uuid from 'uuid/v4'

const node = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_NODE':
            console.debug('~nodes~ add node', action)
            break;
        default: return state
    }
}

const nodes = (state = [], action) => {
    switch(action.type) {
        case 'GET_ALL_NODES_COMPLETE':
            return action.data
        default: return state
    }
}

export default nodes
