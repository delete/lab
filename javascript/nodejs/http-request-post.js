'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
				name: 'Fellipe Pinheiro'
			,	type: 'aluno'
});
const options = {
				host: 'webschool-io.herokuapp.com'
			, method: 'POST'
			, path: '/api/pokemons'
			, headers: {
					'Content-Type': 'application/x-www-form-urlenconded'
				,	'Content-Length': postData.length
				}
};

function callback (res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: '+ JSON.stringify(res.headers));

	let data = '';

	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		data += chunk;
	});

	res.on('end', () => {
		console.log('Dados finalizados: ', data);
	});
}

const req = http.request(options, callback);

req.on('error', (e) => {
	console.log('ERROR: ' + e.message);
});

req.write(postData);
req.end();
