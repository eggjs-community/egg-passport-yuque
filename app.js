'use strict';

const debug = require('debug')('egg-passport-yuque');
const assert = require('assert');
const OAuth2Strategy = require('passport-oauth2');

module.exports = app => {
  const config = app.config.passportYuque;
  config.passReqToCallback = true;
  assert(config.key, '[egg-passport-yuque] config.passportYuque.key required');
  assert(config.secret, '[egg-passport-yuque] config.passportYuque.secret required');
  config.clientID = config.key;
  config.clientSecret = config.secret;
  // https://github.com/jaredhanson/passport-oauth2
  // https://www.yuque.com/yuque/developer/authorizing-oauth-apps
  config.authorizationURL = 'https://www.yuque.com/oauth2/authorize';
  config.tokenURL = 'https://www.yuque.com/oauth2/token';

  // must require `req` params
  app.passport.use('yuque', new OAuth2Strategy(config, (req, accessToken, refreshToken, params, profile, done) => {
    const url = 'https://www.yuque.com/api/v2/user';
    app.httpclient.request(url, {
      headers: {
        'X-Auth-Token': accessToken,
      },
      dataType: 'json',
    }).then(result => {
      profile = result.data.data;
      // format user
      const user = {
        provider: 'yuque',
        id: profile.id,
        name: profile.login,
        displayName: profile.name,
        photo: profile.small_avatar_url,
        accessToken,
        refreshToken,
        params,
        profile,
      };

      debug('%s %s get user: %j', req.method, req.url, user);

      // let passport do verify and call verify hook
      app.passport.doVerify(req, user, done);
    }, done);
  }));
};
