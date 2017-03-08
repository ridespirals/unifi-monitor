import uuid from 'uuid/v4'

export const addJob = (name, url, color) => {
    return {
        type: 'ADD_JOB',
        id: uuid(),
        name,
        url,
        color
    }
}
