#!/usr/bin/env bash

# Primary (Recommended): OSINT Trace Direct API
curl --request POST \
  --url https://api.osinttrace.com/v1/check \
  --header 'x-osint-key: YOUR_OSINT_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "input": "test@gmail.com",
    "programs": ["facebook", "google", "instagram", "snapchat", "x", "microsoft"]
  }'

# Alternative (API.Market):
# curl --request POST \
#   --url https://prod.api.market/api/v1/osint-trace-1/social-media-scanner/check \
#   --header 'X-Api-Key: YOUR_API_KEY' \
#   --header 'Content-Type: application/json' \
#   --data '{"input":"test@gmail.com","programs":["facebook","google","instagram","snapchat","x","microsoft"]}'

# Alternative (RapidAPI):
# curl --request POST \
#   --url https://social-media-scanner1.p.rapidapi.com/check \
#   --header 'x-rapidapi-host: social-media-scanner1.p.rapidapi.com' \
#   --header 'x-rapidapi-key: YOUR_RAPIDAPI_KEY' \
#   --header 'Content-Type: application/json' \
#   --data '{"input":"test@gmail.com","programs":["facebook","google","instagram","snapchat","x","microsoft"]}'