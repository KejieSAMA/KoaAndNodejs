const { NUMBER } = require('sequelize')
const { createMoive, changeMoive, getMovie, getMovieById } = require('../service/movie.service')

class MovieController {
    async addMovie(ctx, next) {
        const { movie_name, movie_enName, movie_img, movie_img2 } = ctx.request.body
        try {
            const res = await createMoive(movie_name, movie_enName, movie_img, movie_img2)
            ctx.body = {
                code: 0,
                result: res
            }
        } catch (error) {
            console.log(error)
        }
        console.log('running api => /movies/addMoive')
    }
    async changeMovie(ctx, next) {
        const { movie_name, movie_enName, movie_price, movie_priceAll, integral_all, integral_count, collect, playback_count, movie_img, movie_img2, newMovie_name, movie_time, movie_type, movie_plot, movie_crew, movie_producer, movie_country } = ctx.request.body
        try {
            const res = await changeMoive(movie_name, movie_enName, movie_price, movie_priceAll, integral_all, integral_count, collect, playback_count, movie_img, movie_img2, newMovie_name, movie_time, movie_type, movie_plot, movie_crew, movie_producer, movie_country)
            ctx.body = {
                code: 0,
                message: '修改电影信息成功',
                result: {
                    count: res,
                    changeName: movie_name
                }
            }
        } catch (error) {
            console.log(error)

        }
        console.log('running api => /movies/changeMovie')
    }
    async getMovieInfo(ctx, next) {
        const { id } = ctx.request.body
        try {
            if (typeof (id) != 'number') {
                ctx.body = {
                    code: '-1',
                    message: '电影信息',
                    result: {
                    }
                }
                return
            }
            const res = await getMovieById(id)
            ctx.body = {
                code: '0',
                message: '电影信息',
                result: res
            }
        } catch (error) {
            console.log(error)
        }
        console.log('running api => /movies/getMovieInfo')
    }
}

module.exports = new MovieController()