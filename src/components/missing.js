import m from 'mithril'

module.exports = {
    controller: function() {
        console.log('Initializing 404...')
        return {
            onunload: function() {
                console.log('Unloading 404.')
            }
        }
    },

    view: function(controller) {
        return m('div', {}, [
            `404: Page not found`
        ])
    }
}
