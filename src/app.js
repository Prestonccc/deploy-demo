const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))

app.use(express.static('public'))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

const port = process.env.PORT || 8081

app.listen(port, () => {
    console.log('server is listening on port', port)
})
