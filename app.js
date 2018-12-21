// 引入express模块
const express = require('express')
// 创建app 对象
const app = new express()
// 引入mongoose模块
const mongoose = require("mongoose");
// 引入body-parser模块
const bodyParser = require("body-parser");
// 引入user路由
const user = require('./router/user')

var db = mongoose.connect('mongodb://localhost:27017/test');

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: false }))

app.use('/api', user)
app.use('/', (req, res) => {
  res.send('hello express')
})
app.listen(2020, () => {
  console.log('app listening on port 2020')  
})