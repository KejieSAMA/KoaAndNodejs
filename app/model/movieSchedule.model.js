const { DataTypes } = require('sequelize')

const seq = require('../db/db')

//创建movie模型

const movieSchedule = seq.define('movieSchedule', {
    hashID: {
        type: DataTypes.STRING,
        allowNull: false, // 是否为空
        unique: true, // 是否唯一
        comment: '电影HashID md5(movieName+Cinema_address+mAre)  不为空且唯一'
    },
    movieName: {
        type: DataTypes.STRING,
        allowNull: false, // 是否为空
        comment: '电影名 不为空不唯一'
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '日期'
    },
    startTime: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '开始时间'
    },
    endTime: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '结束时间'
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '语言'
    },
    hall: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '放映厅'
    },
    seatInfo:{
        type: DataTypes.STRING,
        allowNull: false,
        comment: '该场次的位置信息'
    }
},
)


/* movieSchedule.sync({ force: true })  */
// 如果存在这张表，就强制删除 https://www.sequelize.cn/core-concepts/model-basics#%E6%A8%A1%E5%9E%8B%E5%90%8C%E6%AD%A5

module.exports = movieSchedule