import m from 'mithril'

module.exports = {
    controller: function() {
        return {
            onunload: function() {
            }
        }
    },

    view: function(controller) {
        return m('div', {}, [
            m("a[href='/']", {config: m.route}, ['Home']),
            m("a[href='/about']", {config: m.route}, ['About'])
        ])
    }
}
