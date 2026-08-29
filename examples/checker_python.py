import requests

# Primary (Recommended): OSINT Trace Direct API
url = "https://api.osinttrace.com/v1/check"
headers = {
    "x-osint-key": "YOUR_OSINT_KEY",
    "Content-Type": "application/json"
}

# Alternative (API.Market):
# url = "https://prod.api.market/api/v1/osint-trace-1/social-media-scanner/check"
# headers = {"X-Api-Key": "YOUR_API_KEY", "Content-Type": "application/json"}

# Alternative (RapidAPI):
# url = "https://social-media-scanner1.p.rapidapi.com/check"
# headers = {"x-rapidapi-key": "YOUR_RAPIDAPI_KEY", "x-rapidapi-host": "social-media-scanner1.p.rapidapi.com", "Content-Type": "application/json"}

payload = {
    "input": "test@gmail.com",
    "programs": ["facebook", "google", "instagram", "snapchat", "x", "microsoft"]
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())