const { createUser, getUser } = require('../service/user.service')

class UserController {
    async register(ctx, next) {
        // 获取数据
        const { user_name, password } = ctx.request.body
        // 合法性
        if (!user_name || !password) {
            console.error('密码或用户名为空', ctx.request.body)
            ctx.status = 400
            ctx.body = {
                code: '10001',
                message: '密码或用户名为空',
                result: '',
            }
            return
        }
        // 合理性
        if (getUser(user_name)) {
            console.error('用户名已存在', ctx.request.body)
            ctx.status = 409
            ctx.body = {
                code: '10002',
                message: '用户名已存在',
                result: '',
            }
            return
        }
        // 操作数据库
        const res = await createUser(user_name, password);
        // 返回数据
        ctx.body = {
            code: 0,
            message: '用户注册成功',
            result: {
                id: res.id,
                user_name: res.user_name
            }
        };
        console.log('running api => /users/register')
    }

    async login(ctx, next) {
        ctx.body = 'hello login!';
        console.log('running api => /users/login')
    }
}

module.exports = new UserController()