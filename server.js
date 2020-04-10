const express = require('express')
const next = require('next')

const routes = require('./routes')

// const port = parseInt(process.env.PORT, 10) || 3000
// const port = parseInt(process.env.PORT) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express()

    // Use our handler for requests.
    // server.use(handler);

    server.get('/a', (req, res) => {
        return app.render(req, res, '/a', req.query)
    })

    // server.get('/b', (req, res) => {
    //     return app.render(req, res, '/b', req.query)
    // })

    // server.get('/posts/:id', (req, res) => {
    //     return app.render(req, res, '/posts', { id: req.params.id })
    // })

    // Get current port.
    const port = process.env.PORT || 3000;

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})