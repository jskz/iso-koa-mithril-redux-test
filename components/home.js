import m from 'mithril'
import navigation from './navigation'

module.exports = {
    controller: function() {
        console.log('Initializing Home...')
        return {
            onunload: function() {
                console.log('Unloading Home.')
            }
        }
    },

    view: function(controller) {
        return m('div', {}, [
            m('h1', 'Home Page', []),
            
            m.component(navigation)
        ])
    }
}
