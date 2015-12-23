import I from 'immutable'
import actions from './actions'

const defaultState = I.Map({
    route: '/',
    query: {}
})

module.exports = function simpleRouter(state = defaultState, action) {
    if(action.type === actions.SET_ROUTE) {
        return state
            .set('route', action.data.path)
            .set('query', action.data.query)
    }

    return state
}
