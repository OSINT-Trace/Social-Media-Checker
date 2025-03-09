const http = require('https');

const options = {
	method: 'POST',
	hostname: 'social-media-scanner1.p.rapidapi.com',
	port: null,
	path: '/check_bulk',
	headers: {
		'x-rapidapi-key': 'f8d61a6a57msh9c4087768abfa82p1ca9bajsncbb35955ff55',
		'x-rapidapi-host': 'social-media-scanner1.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.write(JSON.stringify({
  programs: [
    'facebook',
    'google',
    'instagram',
    'snapchat',
    'x'
  ],
  input: [
    'test@gmail.com',
    'john@doe.com'
  ]
}));
req.end();