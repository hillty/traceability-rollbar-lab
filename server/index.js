const express = require('express')
const path = require('path')

// roll bar stuffs
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '8c49d6c1133741539d72c31ba90cf89b',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// generic message for rollbar
rollbar.log('Hello world!')
// roll bar stuffs

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 4204

app.listen(port, () => {
    console.log(`server blazed on ${port}`)
})