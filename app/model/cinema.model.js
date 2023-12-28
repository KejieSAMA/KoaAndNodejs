const { DataTypes } = require('sequelize')

const seq = require('../db/db')

//创建Cinema模型

const Cinema = seq.define('Cinema', {
    Cinema_name: {
        type: DataTypes.STRING,
        allowNull: false, // 是否为空
        unique: false, // 是否唯一
        defaultValue: "null",
        comment: '影院名 不一定唯一'
    },
    Cinema_brand: {
        type: DataTypes.STRING,
        allowNull: false, // 是否为空
        unique: false, // 是否唯一
        defaultValue: "null",
        comment: '影院品牌 不一定唯一'
    },
    Cinema_area: {
        type: DataTypes.STRING,
        allowNull: false, // 是否为空
        unique: false, // 是否唯一
        defaultValue: "null",
        comment: '影院地区 不一定唯一'
    },
    Cinema_type: {
        type: DataTypes.STRING,
        allowNull: false, // 是否为空
        unique: false, // 是否唯一
        defaultValue: "null",
        comment: `['IMAX厅','CGS中国巨幕厅','杜比全景声厅'] 影院类型填写如右`
    },
    Cinema_address: {
        type: DataTypes.STRING,
        defaultValue: "null",
        comment: '影院地址 默认为null'
    },
    Cinema_ListArr: {
        type: DataTypes.STRING,
        defaultValue: 'null',
        comment: '影院所包含播放的电影'
    }
},
)
/* const test = [
    {
        cnName: '好像也没那么热血沸腾',
        enName: 'Lose To Win',
        price: 39,
        time: [
            '2023-12-21 17:30-19:30',
            '2023-12-22 17:30-19:30',
        ],
        rebook: true,
        returnTick: true
    },
] */
/* Cinema.sync({ force: true }) */
// 如果存在这张表，就强制删除 https://www.sequelize.cn/core-concepts/model-basics#%E6%A8%A1%E5%9E%8B%E5%90%8C%E6%AD%A5

module.exports = Cinema