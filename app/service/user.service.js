const User = require('../model/use.model')

class UserServer {
    async createUser(user_name, password) {

        const res = await User.create({ user_name, password })

        return res.dataValues
    }
    async getUser(user_name) {
        const res = await User.findOne({
            where: {
                user_name: user_name
            }
        })

        return res ? res.dataValues : null
    }
}

module.exports = new UserServer()