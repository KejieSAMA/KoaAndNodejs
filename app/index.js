const Koa = require('koa');
const { koaBody } = require('koa-body')
const cors = require('koa2-cors')

const errHandler = require('./errHandler')
const userLogin = require('./router/user.router')
const Movie = require('./router/movie.router')
const Cinema = require('./router/cinema.router')
const {CORS_CONFIG } = require('../config/config.cors')

const app = new Koa();

app.use(
    cors(CORS_CONFIG)
)

app.use(koaBody())
app.use(userLogin.routes()).use(userLogin.allowedMethods())
app.use(Cinema.routes()).use(Cinema.allowedMethods())
app.use(Movie.routes()).use(Movie.allowedMethods())

app.on('error', errHandler)

module.exports = app
