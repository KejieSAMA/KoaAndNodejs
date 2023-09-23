const { createUser } = require('../service/user.service')

const { userRegisterError } = require('../const/err.type')

class UserController {
    async register(ctx, next) {
        const { user_name, password } = ctx.request.body
        try {
            const res = await createUser(user_name, password);
            ctx.body = {
                code: 0,
                message: '用户注册成功',
                result: {
                    id: res.id,
                    user_name: res.user_name
                }
            };
        } catch (error) {
            console.log(error)
            ctx.app.emit('error', userRegisterError, ctx)
        }
        console.log('running api => /users/register')
    }

    async login(ctx, next) {
        ctx.body = 'hello login!';
        console.log('running api => /users/login')
    }
}

module.exports = new UserController()