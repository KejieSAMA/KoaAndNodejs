const { getMovie } = require('../service/movie.service')
const { movieNotExited,movieAlreadExited } = require('../const/err.type')

const verifyMoive = async (ctx, next) => {
    const { movie_name } = ctx.request.body
    const res = await getMovie(movie_name)
    if (!res) {
        console.error('电影不存在', ctx.request.body)
        ctx.app.emit('error', movieNotExited, ctx)
        return
    }
    ctx.request.info = res
    await next()
}

const verifyExitedMoive = async (ctx, next) => {
    const { movie_name } = ctx.request.body
    if (await getMovie(movie_name)) {
        console.error('电影已存在', ctx.request.body)
        ctx.app.emit('error', movieAlreadExited, ctx)
        return
    }
    await next()
}

module.exports = {
    verifyMoive,
    verifyExitedMoive
}