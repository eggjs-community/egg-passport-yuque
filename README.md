# egg-passport-github

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-yuque.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-yuque
[travis-image]: https://img.shields.io/travis/eggjs/egg-passport-yuque.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-passport-yuque
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-passport-yuque.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-passport-yuque?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-passport-yuque.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-passport-yuque
[snyk-image]: https://snyk.io/test/npm/egg-passport-yuque/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-yuque
[download-image]: https://img.shields.io/npm/dm/egg-passport-yuque.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-yuque

yuque passport plugin for egg, base [YuQue's OAuth API](https://www.yuque.com/yuque/developer/about-oauth-apps).

## Example

See https://github.com/eggjs/examples/tree/master/passport

## Install

```bash
$ npm i egg-passport-yuque --save
```

## Usage

```js
// config/plugin.js
exports.passportYuque = {
  enable: true,
  package: 'egg-passport-yuque',
};
```

## Configuration

```js
// config/config.default.js
exports.passportYuque = {
  key: 'your oauth key',
  secret: 'your oauth secret',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE.txt)
