const Router = require("koa-router")

const { addCinema, getCinemaInfo } = require('../controller/cinema.controller')
const { getScheduleInfo,changeScheduleInfo } = require('../controller/movieSchedule.controller')

const router = new Router({
    prefix: '/cinema'
})


//获得影院列表
router.post('/getCinemaList', (ctx, next) => {
    console.log('success')
    ctx.body = '获取影院列表成功'
})

//添加影院
router.post('/addCinema', addCinema)

//查询影院信息(通过电影名字)
router.post('/getCinemaInfo', getCinemaInfo)

//为某影院添加电影
/* router.post('/addCinemaMovie', addCinemaMovie) */

//为某影院某场电影添加场次

//查询某个电影场次信息
router.post('/getSchedule',getScheduleInfo)

//修改某个电影场次座位信息
router.post('/changeScheduleInfo',changeScheduleInfo)

module.exports = router;