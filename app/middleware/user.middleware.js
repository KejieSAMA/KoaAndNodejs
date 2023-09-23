const bcrypt = require('bcryptjs')

const { getUser } = require('../service/user.service')
const { userFormateError, userAlreadyExited } = require('../const/err.type')

const userValidator = async (ctx, next) => {
    const { user_name, password } = ctx.request.body

    if (!user_name || !password) {
        console.error('密码或用户名为空', ctx.request.body)
        ctx.app.emit('error', userFormateError, ctx)
        return
    }
    await next()
}

const verifyUser = async (ctx, next) => {
    const { user_name, password } = ctx.request.body
    if (await getUser(user_name)) {
        console.error('用户名已存在', ctx.request.body)
        ctx.app.emit('error', userAlreadyExited, ctx)
        return
    }
    await next()
}

const cryptPsd = async (ctx, next) => {
    const { password } = ctx.request.body

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    ctx.request.body.password = hash
    await next()
}

module.exports = {
    userValidator,
    verifyUser,
    cryptPsd
}