'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', 'home.index');
  router.get('/user', controller.user.list);
  router.get('/get/:id', controller.user.get);
  router.get('/add/:name', controller.user.add);
  router.get('/delete/:name', controller.user.delete);
  router.get('/api/verify', controller.home.verify); // 验证码
  router.get('/api/verifyCode/:code', controller.home.verifyCode); // 验证码
};
