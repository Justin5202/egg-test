'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async list() {
    const ctx = this.ctx;
    return ctx.model.User.find({});
  }

  async add(name) {
    const ctx = this.ctx;
    let index = 0;
    ctx.model.User.find({}, function(r, u) {
      index = u.length;
      return ctx.model.User.create({
        id: index + 1,
        userName: name,
        age: 19,
        gender: 'nan',
        hobby: [ 'eating', 'joking' ],
      }).then(res => {
        return {
          success: true,
          msg: '添加成功',
          code: 0,
        };
      }).catch(err => {
        return {
          success: false,
          err,
        };
      });
    });
  }

  async get(id) {
    const ctx = this.ctx;
    return ctx.model.User.findOne({
      id,
    }).then(res => {
      return {
        success: true,
        msg: '成功',
        code: 0,
      };
    }).catch(err => {
      return {
        success: false,
        err,
      };
    });
  }

  async delete(name) {
    const ctx = this.ctx;
    return ctx.model.User.deleteOne({
      userName: name,
    }).then(res => {
      return {
        success: true,
        msg: '删除成功',
        code: 0,
      };
    }).catch(err => {
      return {
        success: false,
        err,
      };
    });
  }
}

module.exports = UserService;
