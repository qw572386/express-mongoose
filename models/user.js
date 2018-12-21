// 引入mongoose模块
const mongoose = require('mongoose')

// 定义数据模型
const userSchema = mongoose.Schema({
  name: String,
  age: String,
  sex: String,
  address: String,
  job: String,
  favourite: [],
  company: String
},{ collection: 'user' })

// 导出model模块
const User = module.exports = mongoose.model('user', userSchema)