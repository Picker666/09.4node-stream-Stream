/*
* @Author: Administrator
* @Date:   2018-11-08 17:40:43
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-08 17:48:38
*/

'use strict';

var http = require('http');
var stream = require('stream');

http.createServer(function (request, response) {

	var pathName = request.url;
	if (pathName !== '/favicon.ico') {
		var readable = new stream.Readable();
		var writable = new stream.Writable();

		readable.push('I');
		readable.push('Love');
		readable.push('You');
		readable.push(null);

		writable._write = function (chunk, encodeing, cb) {
			console.log('*****************************');
			console.log(chunk.toString());
			cb && cb();
		};

		readable.pipe(writable)
	}
}).listen(8888);

console.log('server running...')
