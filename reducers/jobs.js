import uuid from 'uuid/v4'

const job = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_JOB':
            console.debug('~jobs~ add job', action)
            return {
                id: uuid(),
                name: action.name,
                url: action.url,
                color: action.color
            }
        case 'UPDATE_JOB':
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                color: action.color
            })
        default: return state
    }
}

const jobs = (state = [], action) => {
    switch (action.type) {
        case 'ADD_JOB':
            return [
                ...state,
                job(undefined, Object.assign(action, {
                    id: state.length
                }))
            ]
        case 'UPDATE_JOB':
            return state.map(j =>
                job(j, action)
            )
        case 'GET_ALL_JOBS_COMPLETE':
            return action.data
        default: return state
    }
}

export default jobs
