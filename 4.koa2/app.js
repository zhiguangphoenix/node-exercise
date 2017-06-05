'use strict';

require('babel-polyfill');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = new _koa2.default();

app.use((() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {

    console.log("A1");

    yield next();

    console.log("A2");
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

app.use((() => {
  var _ref2 = _asyncToGenerator(function* (ctx, next) {

    console.log("B1");

    yield next();

    console.log("B2");
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})());

app.use((() => {
  var _ref3 = _asyncToGenerator(function* (ctx) {

    ctx.response.body = "Last";
    console.log(ctx.path);
    console.log(ctx.method);
  });

  return function (_x5) {
    return _ref3.apply(this, arguments);
  };
})());

app.listen(3000);
