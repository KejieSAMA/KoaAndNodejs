const Router = require("koa-router")

const { userValidator, verifyUser, cryptPsd } = require('../middleware/user.middleware')
const { register, login } = require('../controller/user.controller')

const router = new Router({
    prefix: '/users'
})

// 注册请求
router.post('/register', userValidator, verifyUser, cryptPsd, register)

// 登录请求
router.post('/login', login)


module.exports = router;