import requests

url = "https://social-media-scanner1.p.rapidapi.com/check_bulk"

payload = {
	"programs": ["facebook", "google", "instagram", "snapchat", "x"],
	"input": ["test@gmail.com", "john@doe.com"]
}
headers = {
	"x-rapidapi-key": "f8d61a6a57msh9c4087768abfa82p1ca9bajsncbb35955ff55",
	"x-rapidapi-host": "social-media-scanner1.p.rapidapi.com",
	"Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())