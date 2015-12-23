import m from 'mithril'
import navigation from './navigation'

module.exports = {
    controller: function() {
        return {
            onunload: function() {
            }
        }
    },

    view: function(controller) {
        return m('div', {}, [
            m('h1', 'About Page', []),

            m.component(navigation)
        ])
    }
}
