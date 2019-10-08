var express = require('express');
var router = express.Router();
var User = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  //设置判断有没有cookie
  if(req.signedCookies.userInfo) {
    try{
      res.json(req.signedCookies.userInfo);
    }catch(e){
      next();
    }
  }
});

//定义一个返回的数据,来判断成功与否
let responseData;

//不管以什么样的路由形式进来,都要处理一下
router.use(function(req,res,next){
  responseData = {
    code: 0,
    message: ''
  }

  next();
})

//用户注册
router.post('/register',function(req,res,next){
  let username = req.body.username;
  let password = req.body.password;
  
  if(username == '') {
    responseData.code = 1;
    responseData.message = '用户名不能为空';
    res.json(responseData); //让其以json格式返回出去
    return;
  } else if(password == ''){
    responseData.code = 2;
    responseData.message = '密码不能为空';
    res.json(responseData);
    return;
  }

  User.findOne({
    username: username
  }).then(function(userInfo){
    if(userInfo) {
      responseData.code = 3;
      responseData.message = '此用户名已经注册过了';
      res.json(responseData);
      return;
    } else {
      responseData.code = 4;
      responseData.message = '注册成功';
      res.json(responseData);
      new User({
        username: username,
        password: password
      })
      return;
    }
  })
})

/*
* 登录
* */
router.post('/login',function(req,res,next){
  let username = req.body.username;
  let password = req.body.password;
  if(username === '' || password === '') {
    responseData.code = 1;
    responseData.message = '用户名和密码不能为空';
    res.json(responseData);
    return;
  }
  User.findOne({
    username: username,
    password: password
  }).then(function(userInfo){
    if(!userInfo) {
      responseData.code = 2;
      responseData.message = '用户名或密码输入错误';
      res.json(responseData);
      return;
    } else {
      responseData.code = 4;
      responseData.message = '登录成功';
      responseData.userInfo = {
        _id: userInfo._id,
        username: userInfo.username
      }
      res.cookies('userInfo',JSON.stringify({
        _id: userInfo.id,
        username: userInfo.username
      }))
      res.json(responseData);
      return;
    }
  })
})

/*
*退出
**/
router.get('/logout',function(req,res,next){
  res.clearCookie('userInfo');
})

module.exports = router;
