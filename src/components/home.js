import m from 'mithril'
import navigation from './navigation'
import feed from './feed'

module.exports = {
    controller: function() {
        return {
            onunload: function() {
            }
        }
    },

    view: function(controller) {
        return m('div', {}, [
            m('h1', 'Home Page', []),

            m.component(navigation),
            m.component(feed)
        ])
    }
}
