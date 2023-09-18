const { createUser } = require('../service/user.service')

class UserController {
    async register(ctx, next) {
        ctx.body = 'hello register!';
        // 获取数据
        const { user_name, password } = ctx.request.body
        // 操作数据库
        const res = await createUser(user_name, password);
        console.log(res)
        // 返回数据
        console.log('running api => /users/register')
    }

    async login(ctx, next) {
        ctx.body = 'hello login!';
        console.log('running api => /users/login')
    }
}

module.exports = new UserController()