import m from 'mithril'
import navigation from './navigation'

module.exports = {
    controller: function(args, extras) {
        return {
            id: args.id,
            title: args.title,
            content: args.content,
            onunload: function() {
            }
        }
    },

    view: function(controller) {
        return m('article', {id: 'article-' + controller.id}, [
            m('header', {class: 'post-header'}, [
                m('h2', {class: 'post-title'}, [controller.title])
            ]),
            m('main', {class: 'post-content'}, [
                m.trust(controller.content)
            ])
        ])
    }
}
