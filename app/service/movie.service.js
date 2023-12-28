const Movie = require('../model/movie.model')

class MovieServer {
    async createMoive(movie_name, movie_enName, movie_img, movie_img2) {

        const res = await Movie.create({ movie_name, movie_enName, movie_img, movie_img2 })

        return res.dataValues
    }
    async changeMoive(movie_name, movie_enName,movie_price, movie_priceAll, integral_all, integral_count, collect, playback_count, movie_img, movie_img2, newMovie_name, movie_time, movie_type, movie_plot, movie_crew, movie_producer, movie_country) {
        const Moviedata = await Movie.findOne({
            where: {
                movie_name: movie_name
            }
        })
        const res = Movie.update({
            movie_name: newMovie_name ? newMovie_name : Moviedata.movie_name,
            movie_enName: movie_enName ? movie_enName : Moviedata.movie_enName,
            movie_price: movie_price ? movie_price : Moviedata.movie_price,
            movie_priceAll: movie_priceAll ? movie_priceAll : Moviedata.movie_priceAll,
            integral_all: integral_all ? integral_all : Moviedata.integral_all,
            integral_count: integral_count ? integral_count : Moviedata.integral_count,
            collect: collect ? collect : Moviedata.collect,
            playback_count: playback_count ? playback_count : Moviedata.playback_count,
            movie_img: movie_img ? movie_img : Moviedata.movie_img,
            movie_img2: movie_img2 ? movie_img2 : Moviedata.movie_img2,
            movie_time: movie_time ? movie_time : Moviedata.movie_time,
            movie_plot: movie_plot ? movie_plot : Moviedata.movie_plot,
            movie_crew: movie_crew ? movie_crew : Moviedata.movie_crew,
            movie_producer: movie_producer ? movie_producer : Moviedata.movie_producer,
            movie_country: movie_country ? movie_country : Moviedata.movie_country
        }, {
            where: {
                movie_name: movie_name
            }
        })
        return res
    }
    async getMovie(movie_name) {
        const res = await Movie.findOne({
            where: {
                movie_name: movie_name
            }
        })
        return res ? res.dataValues : null
    }
    async getMovieById(movie_id) {
        const res = await Movie.findOne({
            where: {
                id: movie_id
            }
        })
        return res ? res.dataValues : null
    }
}

module.exports = new MovieServer()