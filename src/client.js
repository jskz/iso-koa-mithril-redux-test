import m from 'mithril'
import actions from './actions'
import { createStore } from 'redux'
import simpleRouter from './router'
import routes from './routes'

window.addEventListener('load', function load(event) {
    let origin = document.getElementById('origin')
    let store = createStore(simpleRouter)
    let lastRoute = null

    if(origin !== null) {
        m.route.mode = 'pathname'
        m.route(origin, window.ROUTE_PATHNAME, routes)
    }

    store.subscribe(() => {
        let route = null
        const state = store.getState()

        if(lastRoute != (route = state.get('route'))) {
            m.route.mode = 'pathname'
            m.route(route)

            lastRoute = route
        }
    })

    store.dispatch({ type: actions.SET_ROUTE, data: { path: window.ROUTE_PATHNAME }})
    window.removeEventListener('load', load, false)
}, false)
