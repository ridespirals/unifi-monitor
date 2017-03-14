const consoleLogger = store => next => action => {
    next(action)
    console.debug(`<logger> ${action.type}`, { action, store, state: store.getState() })
}

export default consoleLogger
