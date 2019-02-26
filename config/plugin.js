'use strict';

// had enabled by egg
// exports.static = true;

exports.nunjucks = {
  enabled: true,
  package: 'egg-view-nunjucks',
};

exports.mongoose = {
  enabled: false,
  package: 'egg-mongoose',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
