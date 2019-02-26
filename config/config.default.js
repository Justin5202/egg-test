'use strict';

module.exports = appInfo => {
  const config = exports = {
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },
    mongoose: {
      url: 'mongodb://127.0.0.1:27017/mongoTest',
      options: {},
    },
    security: {
      csrf: {
        enable: false,
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543194287246_404';

  // add your config here
  config.middleware = [];

  return config;
};
