const Koa = require('koa');
const Router = require('koa-router');
const body = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

router.use('/api/user', require('./router/api/user'))

app.use(body());
app.use(router.routes()).use(router.allowedMethods());

app.listen(8082, () => console.log('server is staring...'));