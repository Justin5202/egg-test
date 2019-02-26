// eslint-disable-next-line strict
module.exports = option => {
  return async (ctx, next) => {
    const url = ctx.request.url;

    const isIgnored = false;
    if (isIgnored) {
      return next();
    }

    const recordTime = Date.now();
    await next();

    const format = '';
    ctx.app.logger[option.level.toLowerCase()](format);
  };
};
