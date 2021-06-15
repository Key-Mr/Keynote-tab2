// @ts-check
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, function() {
    console.log('Server stsrtred at https://localhost:3000')
})