let mongoose = require('mongoose');
let usersSchamas = require('../schemas/users')

//之后就是使用这个模型来操作
module.exports = mongoose.model('User',usersSchamas);
