const Router = require("koa-router")

const { userValidator, verifyUser, cryptPsd, verifyLogin } = require('../middleware/user.middleware')
const { register, login } = require('../controller/user.controller')

const router = new Router({
    prefix: '/users'
})

// 注册请求
router.post('/register', userValidator, verifyUser, cryptPsd, register)

// 登录请求
router.post('/login', userValidator, verifyLogin, login)

// 修改密码
router.patch('/cPsd', (ctx, next) => {
    const { authorization } = ctx.request.header
    const token = authorization.replace('Bearer ', '')
    console.log(token)
    ctx.body = 'success'
})


module.exports = router;