/*
const proxy = {
  'GET /api/user': {id: 1, username: 'kenny', sex: 6},
  'GET /api/user/list': [
    {id: 1, username: 'kenny', sex: 6},
    {id: 2, username: 'kenny', sex: 6}
  ],
  'POST /api/login/account': (req, res) => {
    const {password, username} = req.body;
    console.log('---->', req.body)
    console.log('---->', req.params.id)
    if (password === '888888' && username === 'admin') {
      return res.send({
        status: 'ok',
        code: 0,
        token: "sdfsdfsdfdsf",
        data: {id: 1, username: 'kenny', sex: 6}
      });
    } else {
      return res.send({status: 'error', code: 403});
    }
  },
  'DELETE /api/user/:id': (req, res) => {
    console.log('---->', req.body)
    console.log('---->', req.params.id)
    res.send({status: 'ok', message: '删除成功！'});
  }
}
module.exports = proxy;
*/

/*
const mock = {};

require('fs').readdirSync(require('path').join(__dirname + '/mocker')).forEach(function (file) {
  Object.assign(mock, require('./mocker/' + file))
});
module.exports = mock;
*/

// 根据不同的文件夹读取mock数据
const mock = {};

/* eslint-disable */
require('fs').readdirSync(require('path').resolve('mocker')).forEach(function (file) {
  Object.assign(mock, require('./' + file));
});
module.exports = mock;
