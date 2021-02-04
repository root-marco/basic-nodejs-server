import http from 'http';
const port = 3000;

const server = http.createServer((req, res) => {

	res.write('Hello Node');
	res.end();

});

