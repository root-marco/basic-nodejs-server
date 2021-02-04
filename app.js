import http from 'http';
const port = 3000;

const server = http.createServer((req, res) => {

	res.write('Hello Node');
	res.end();

});

server.listen(port, (error) => {
	if (error) {
		console.log(`Something went wrong ${error}`);
	} else {
		console.log(`Server running on port ${port}`);
	}
});