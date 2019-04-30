'use strict';

const mm = require('egg-mock');

describe('test/passport-yuque.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/passport-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, passportYuque')
      .expect(200);
  });

  it('should GET /passport/yuque redirect to auth url', () => {
    return app.httpRequest()
      .get('/passport/yuque')
      .expect('Location', /^https:\/\/www\.yuque\.com\/oauth2\/authorize\?response_type=code&redirect_uri=http/)
      .expect(302);
  });

  it('should GET /passport/yuque/callback redirect to auth url', () => {
    return app.httpRequest()
      .get('/passport/yuque/callback')
      .expect('Location', /^https:\/\/www\.yuque\.com\/oauth2\/authorize\?response_type=code&redirect_uri=http/)
      .expect(302);
  });
});
