const Router = require("koa-router")

const { verifyMoive, verifyExitedMoive } = require('../middleware/movie.middleware')
const { addMovie, changeMovie, getMovieInfo } = require('../controller/movie.controller')

const router = new Router({
    prefix: '/movies'
})

//添加电影
router.post('/createMovie', verifyExitedMoive, addMovie)

//修改电影信息
router.post('/changeMovie', verifyMoive, changeMovie)

//获得电影
router.post('/getMovieInfo', getMovieInfo)


module.exports = router;