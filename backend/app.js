const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const serverless = require('serverless-http')
const app = express()

app.use(cors())

const permissions = require('./permissions.js')

app.get('/', (req, res) => {
  fetch('https://api.trello.com/1/lists/5d7ea5676a028b4f4f2ca284/archiveAllCards?key='+permissions.key+'&token='+permissions.token, {
  method: 'POST'
  }).then(response => {
    res.json({success: true})
  }).catch(err => {
    res.json({success: false})
  })
})

module.exports.handler = serverless(app)
