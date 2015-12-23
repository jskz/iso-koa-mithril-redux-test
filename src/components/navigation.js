import m from 'mithril'

module.exports = {
    controller: function() {
        return {
            onunload: function() {
            }
        }
    },

    view: function(controller) {
        return m('nav', {id: 'navigation'}, [
            m('ul', {}, [
                m('li', {}, [
                    m("a[href='/']", {config: m.route}, ['Home'])
                ]),
                m('li', {}, [
                    m("a[href='/about']", {config: m.route}, ['About'])
                ])
            ]),
            m('hr')
        ])
    }
}
