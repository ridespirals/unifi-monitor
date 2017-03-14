const monitor = (state = {}, action) => {
    switch(action.type) {
        case 'GET_ALL_JOBS_COMPLETE':
            return state
        default: return state
    }
}

export default monitor

// const quux = (state = [], action) => {
//     switch(action.type) {
//         case 'foo': return [...state, { word: 'FOO': when: new Date() }]
//         case 'bar': return [...state, { word: 'BAR', when: new Date() }]
//         case 'baz': return [...state, { word: 'BAZ', when: new Date() }]
//         case 'quux': return [...state, { word: 'QUUX', when: new Date(), master: true }]
//         default: return state
//     }
// }
//
// export quux
