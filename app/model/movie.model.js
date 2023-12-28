const { DataTypes } = require('sequelize')

const seq = require('../db/db')

//创建movie模型

const Movie = seq.define('Movie', {
    movie_name: {
        type: DataTypes.STRING,
        allowNull: false, // 是否为空
        unique: true, // 是否唯一
        comment: '用户名 不为空且唯一'
    },
    movie_enName: {
        type: DataTypes.STRING,
        allowNull: false, // 是否为空
        unique: true, // 是否唯一
        comment: '用户名 不为空且唯一'
    },
    movie_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 99,
        comment: '电影价格 不为空 默认为99'
    },
    movie_priceAll: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '累计观看人次 不为空 默认为0'
    },
    integral_all: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '电影总评 不为空 默认为0'
    },
    integral_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '评价人次 不为空 默认为0'
    },
    collect: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '收藏人数 不为空 默认为0'
    },
    playback_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '播放次数 不为空 默认为0'
    },
    movie_img: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "null",
        comment: '电影图片地址 不为空 默认为NULL'
    },
    movie_img2: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "null",
        comment: '电影高清图片地址 不为空 默认为NULL'
    },
    movie_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '电影时长 不为空 默认为0 单位为秒'
    },
    movie_type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "无",
        comment: '电影类型 不为空 默认为无'
    },
    movie_plot: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '无',
        comment: '电影大致剧情 不为空 默认为无'
    },
    movie_crew: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '无',
        comment: '电影演职人员 不为空 默认为无'
    },
    movie_producer: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '无',
        comment: '电影出品方 不为空 默认为无'
    },
    movie_country: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '无',
        comment: '电影出品国 不为空 默认为无'
    },
    movie_release: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '2002-08-27',
        comment: '电影发布时间 不为空 默认为2002-08-27'
    }
  },
)


/* Movie.sync({ force: true })  */
// 如果存在这张表，就强制删除 https://www.sequelize.cn/core-concepts/model-basics#%E6%A8%A1%E5%9E%8B%E5%90%8C%E6%AD%A5

module.exports = Movie