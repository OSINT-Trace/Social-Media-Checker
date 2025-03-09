const data = JSON.stringify({
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
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('POST', 'https://social-media-scanner1.p.rapidapi.com/check_bulk');
xhr.setRequestHeader('x-rapidapi-key', 'f8d61a6a57msh9c4087768abfa82p1ca9bajsncbb35955ff55');
xhr.setRequestHeader('x-rapidapi-host', 'social-media-scanner1.p.rapidapi.com');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(data);