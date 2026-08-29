const data = JSON.stringify({
  input: 'test@gmail.com',
  programs: [
    'facebook',
    'google',
    'instagram',
    'snapchat',
    'x',
    'microsoft'
  ]
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

// Primary (Recommended): OSINT Trace Direct API
xhr.open('POST', 'https://api.osinttrace.com/v1/check');
xhr.setRequestHeader('x-osint-key', 'YOUR_OSINT_KEY');
xhr.setRequestHeader('Content-Type', 'application/json');

// Alternative (API.Market):
// xhr.open('POST', 'https://prod.api.market/api/v1/osint-trace-1/social-media-scanner/check');
// xhr.setRequestHeader('X-Api-Key', 'YOUR_API_KEY');

// Alternative (RapidAPI):
// xhr.open('POST', 'https://social-media-scanner1.p.rapidapi.com/check');
// xhr.setRequestHeader('x-rapidapi-key', 'YOUR_RAPIDAPI_KEY');
// xhr.setRequestHeader('x-rapidapi-host', 'social-media-scanner1.p.rapidapi.com');

xhr.send(data);