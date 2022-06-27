const express = require('express')
const app = express()
const morgan = require('morgan')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

// Used Component
dotenv.config({ path: './Config/Config.env' })
const port = process.env.PORT
app.use(bodyParser.urlencoded({ extended: true }))

// Log Server
app.use(morgan('dev'))

// View Engine
app.set('view engine', 'ejs')

// Routes
const Routes = require('./Routes/Routes')
app.use('/', Routes)

app.listen(port, () => {
    console.log(`Server has been running in port ${ port }`)
})