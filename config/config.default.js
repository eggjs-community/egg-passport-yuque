'use strict';

exports.passportYuque = {
  key: '', // your oauth key
  secret: '', // your oauth secret
  callbackURL: '/passport/yuque/callback',
  // https://github.com/jaredhanson/passport-oauth2
  // https://www.yuque.com/yuque/developer/authorizing-oauth-apps
  authorizationURL: 'https://www.yuque.com/oauth2/authorize',
  tokenURL: 'https://www.yuque.com/oauth2/token',
  apiURL: 'https://www.yuque.com/api/v2',
};
