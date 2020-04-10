const routes = require('next-routes');

// Setup router.
module.exports = routes()
    .add('index', '/')
    .add('about')
    .add('projects')
    .add('fitness')
    .add('travel')
    .add('blogs')
    // .add('blog', '/blogs/:slug');