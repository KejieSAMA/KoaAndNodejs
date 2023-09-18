const Router = require("koa-router")

const { register,login } = require('../controller/user.controller')

const router = new Router({
    prefix: '/users'
})

// 注册请求
router.post('/register',register)


// 登录请求
router.post('/login',login)


module.exports = router;