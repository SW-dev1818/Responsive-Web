'use strict';

function a(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' }); // �ؽ�Ʈ, 200 : ���� �ڵ�
    res.end('Hello World\n'); // ���
}

    var http = require('http'); // ����
    var port = process.env.PORT || 1337; // ��Ʈ�� ������ �⺻ 1337
    var server = http.createServer(a)

    server.listen(port); // listen : ������ ���� ����ϴ� ����


