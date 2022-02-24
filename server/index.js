const express = require('express')
const path = require('path')

// roll bar stuffs
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '8c49d6c1133741539d72c31ba90cf89b',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// generic message for rollbar
rollbar.log('Hello world!')
// roll bar stuffs

const app = express()

app.use(express.json)
app.use(rollbar.errorHandler())

// get endpoints here and shi
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// roll bar stuffs pt 2
app.get('/api/info', (req, res) => {
    res.status(200).send('rollbar got sent some yummy info')
    rollbar.info('here is that rollbar info my guy')
})

app.get('/api/critical', (req, res) => {
    res.status(200).send('rollbar got sent a not so yummy crital error')
    rollbar.critical('rollbar critial senteth')
})

app.get('/api/warning', (req, res) => {
    res.status(200).send('rollbar got sent a not so yummy warning')
    rollbar.warning('here is ya warning g')
})

app.get('/api/error', (req, res) => {
    res.status(200).send('rollbar got sent an error cuz of u')
    rollbar.error('rollbar error sented')
})

// connecting some stuffs
app.get('/public/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.js'))
})

app.get('/public/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/styles.css'))
})


const port = process.env.PORT || 4204

app.listen(port, () => {
    console.log(`server blazed on ${port}`)
})