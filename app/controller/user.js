'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
    const ctx = this.ctx
    var list = await ctx.service.user.list()
    ctx.body = list
  }

  async get() {
    const ctx = this.ctx
    const id = ctx.params.id
    ctx.body = await ctx.service.user.get(id)
  }

  async add() {
    const ctx = this.ctx
    const name = ctx.params.name
    ctx.body = await ctx.service.user.add(name)
  }

  async delete() {
    const ctx = this.ctx
    const name = ctx.params.name
    ctx.body = await ctx.service.user.delete(name)
  }
}

module.exports = UserController;
