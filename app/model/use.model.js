const { DataTypes } = require('sequelize')

const seq = require('../db/db')

//创建use模型

const User = seq.define('User', {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false, // 是否为空
        unique: true, // 是否唯一
        comment: '用户名 不为空且唯一'
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: '不为空'
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '是否为管理员,默认为否'
    },
  },
)

// User.sync({ force: true }) 
// 如果存在这张表，就强制删除 https://www.sequelize.cn/core-concepts/model-basics#%E6%A8%A1%E5%9E%8B%E5%90%8C%E6%AD%A5

module.exports = User