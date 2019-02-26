// eslint-disable-next-line strict
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    id: {
      type: Number,
    },
    userName: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    hobby: {
      type: Array,
    },
  });
  // 以上定义了表数据的类型
  return mongoose.model('User', UserSchema, 'userInfo');
};
