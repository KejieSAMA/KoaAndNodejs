const Koa = require('koa');
const { koaBody } = require('koa-body')

const userLogin = require('./router/user.router')

const app = new Koa();

app.use(koaBody())
app.use(userLogin.routes()).use(userLogin.allowedMethods())

module.exports = app