# egg-passport-yuque

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-yuque.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-yuque
[travis-image]: https://img.shields.io/travis/eggjs-community/egg-passport-yuque.svg?style=flat-square
[travis-url]: https://travis-ci.com/eggjs-community/egg-passport-yuque
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs-community/egg-passport-yuque.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs-community/egg-passport-yuque?branch=master
[david-image]: https://img.shields.io/david/eggjs-community/egg-passport-yuque.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs-community/egg-passport-yuque
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

## APIs

See egg-passport apis https://github.com/eggjs/egg-passport#apis

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE.txt)
<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars0.githubusercontent.com/u/156269?v=4" width="100px;"/><br/><sub><b>fengmk2</b></sub>](https://github.com/fengmk2)<br/>|[<img src="https://avatars2.githubusercontent.com/u/2127199?v=4" width="100px;"/><br/><sub><b>okoala</b></sub>](https://github.com/okoala)<br/>|
| :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Wed May 08 2019 21:03:00 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->
