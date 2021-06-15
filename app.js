// @ts-check
const express = require('express')
const app = express()
const path = require('path')
const { Sequelize, DataTypes, Model } = require('sequelize');

const port = process.env.PORT || 3000

const sequelize = new Sequelize('t7n1f5tdg8k91gu3', 'x7flgnknnd2tqek2', 'aw8z7nesbr72tnwl', {
    host: 'yvu4xahse0smimsc.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    dialect: "mysql"
} )

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, function() {
    console.log('Server stsrtred at https://localhost:3000')
})