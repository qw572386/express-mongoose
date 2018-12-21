// 引入express模块
const express = require('express')
// 定义路由级中间件
const router = express.Router();
// 引入数据模型模块
const User = require('../models/user')


// 查询所有用户信息路由
router.get('/user', (req, res) => {
  User.find({}).sort({ update_at: -1 }).then(users => {
    res.json(users)
  }).catch(err => {
    res.json(err)
  })
})

// 查询ID单个用户信息
router.get('/user/:id', (req, res) => {
  User.findById(req.params.id).then(user => {
        res.json(user)
	  }).cath(err => {
		res.json(err)
	  })
})

// 新增一个用户的路由
router.post('/user', (req, res) => {
  User.create(req.body, (err, user) => {
    if (err) {
	  res.json(err)
	} else {
	  res.json(user)  
	}
  })
})

// 更新一条用户信息
router.put('/user/:id', (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id },{
    $set: {
	  name: req.body.name,
	  age: req.body.age,
	  sex: req.body.sex,
	  address: req.body.address,
	  job: req.body.job,
	  favourite: req.body.favourite,
	  company: req.body.company
	}
  }, { new: true }).then(user => {
	res.json(user)
  }).catch(err => {
    res.json(err)	
  })
})

// 删除一条用户信息
router.delete('/user/:id', (req, res) => {
  User.findOneAndRemove({ _id: req.params.id }).then(user => {
    res.send(`${user.name}删除成功`)
  }).catch(err => {
    res.json(err)	
  })
})
module.exports = router;