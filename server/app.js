const express = require('express')
const app = express()

app.get('/', function(){
    res.send('Hello from express')
})

app.listen(3000, function() {
    console.log('Server stsrtred at https://localhost:3000')
})