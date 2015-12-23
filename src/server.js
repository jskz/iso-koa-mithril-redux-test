import I from 'immutable'
import koa from 'koa'
import koaMount from 'koa-mount'
import koaStatic from 'koa-static'
import m from 'mithril'
import render from 'mithril-node-render'
import { createStore } from 'redux'
import simpleRouter from './router'
import url from 'url'

import actions from './actions'
import home from './components/home.js'
import routes from './routes.js'

let app = koa()

let scaffolding = (meta, inner) =>
    m('html', {}, [
        m('head', {}, [
            m('title', {}, 'Iso-Koa-Mithril-Redux Test (whew!)')
        ]),

        m('body', {}, [
            m('div', {id: 'origin'}, [inner]),
            m('script', {type: 'text/javascript'}, [m.trust(meta)]),
            m('script', {src: '/bundle.js', type: 'text/javascript'})
        ])
    ])

app.use(koaStatic(__dirname + '/../static'))

app.use(function *(next) {
    this.store = createStore(simpleRouter)

    this.store.subscribe(() => {
        const state = this.store.getState()

        const route = state.get('route')
        const query = state.get('query')
        const metaString = `window.ROUTE_PATHNAME='${route}';`
        let found = null

        for(let r in routes) {
            if(r == route) {
                found = routes[r]
            }
        }

        this.body = render(scaffolding(metaString, found))
    })

    yield next;
})

app.use(function *(next) {
    let result = url.parse(this.req.url, true)

    this.store.dispatch({
        type: actions.SET_ROUTE,
        data: {
            path: result.pathname,
            query: result.query
        }})
    yield next;
})

app.listen(8080)
