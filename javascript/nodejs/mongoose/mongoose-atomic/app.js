'use strict';

const http = require('http');
const url = require('url');
const User = require('./organisms/organism-user')

http.createServer((req, res) => {
  const url_parts = url.parse(req.url);

  switch(url_parts){
    case '/api/users/create':
      User.create(req, res);
      break;
    default:
      res.end('Not found');
      break;
  }

}).listen(3000, () => {
  console.log('Server listening on 3000')
});
