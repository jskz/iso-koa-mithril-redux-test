import m from 'mithril'
import post from './post'

module.exports = {
    controller: function() {
        return {
            posts: [
                {
                    id: 0,
                    title: 'This is an example post',
                    content: 'Lorem ipsum dolor sit amet!'
                },
                {
                    id: 1,
                    title: 'This is another example post',
                    content: 'Ipsum dolor amet amit consectetur dolor sit amet!'
                }
            ],
            onunload: function() {
            }
        }
    },

    view: function(controller) {
        return m('div', {class: 'feed'}, [
            controller.posts.map(p => m.component(post, p))
        ])
    }
}
