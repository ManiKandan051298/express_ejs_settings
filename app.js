const express = require('express')
const expressLayouts = require("express-ejs-layouts")
const app = express()
const port = 3000


// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// set templating engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

// navigation

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'about Page', layout: './layouts/sidebar' })
})

// listen on port 3000
// http://localhost:3000/
app.listen(port, () => {
    console.info(`App listening on port ${port}`)
})