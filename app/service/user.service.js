class UserServer{
    async createUser(user_name,password){
        console.log(`name:${user_name} password:${password}`)
        return '写入数据成功'
    }
}

module.exports = new UserServer()