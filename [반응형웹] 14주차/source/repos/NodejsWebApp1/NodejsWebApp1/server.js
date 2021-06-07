'use strict';

function a(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' }); // 텍스트, 200 : 상태 코드
    res.end('Hello World\n'); // 출력
}

    var http = require('http'); // 소켓
    var port = process.env.PORT || 1337; // 포트가 없으면 기본 1337
    var server = http.createServer(a)

    server.listen(port); // listen : 소켓을 열고 대기하는 상태


