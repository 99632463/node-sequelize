const Router = require('koa-router');
const isValidate_register = require('../../validation/user/register');
const User = require('../../models/user');

const router = new Router();

router.post('/register', async ctx => {
  const { username, password } = ctx.request.body;
  const { errors, isValid } = isValidate_register(username, password);
  const findUser = await User.findOne({ where: { username } });
  
  if (findUser) {
    return ctx.body = {
      status: 400,
      msg: 'this user exist yet !'
    }
  }

  if (isValid) {
    await User.create({ username, password })

    return ctx.body = {
      status: 200,
      msg: 'register success !'
    }
  }

  ctx.body = errors;
})

module.exports = router.routes();