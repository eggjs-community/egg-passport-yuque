'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.passportYuque.name;
  });

  app.passport.mount('yuque');
};
