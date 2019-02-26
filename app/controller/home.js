'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    // 获取session上的内容
    const userId = ctx.session.userId;
    const posts = await ctx.service.post.fetch(userId);
    // 修改session的值
    ctx.session.visited = ctx.session.visited ? ctx.session.visited++ : 1;
    ctx.body = {
      success: true,
      posts,
    };

  }

  async verify() {
    const ctx = this.ctx;
    const captcha = await this.service.tools.captcha(); // 服务里面的方法
    ctx.response.type = 'image/svg+xml'; // 返回的类型
    ctx.body = captcha.data; // 返回一张图片
  }

  async verifyCode() {
    const ctx = this.ctx;
    const { code } = ctx.params;
    const login_code = ctx.cookies.get('code');
    const result_success = { status: 0, message: 'success' };
    const result_error = { status: 1, message: '验证码错误' };
    ctx.body = code === login_code ? result_success : result_error;
  }
}

module.exports = HomeController;
