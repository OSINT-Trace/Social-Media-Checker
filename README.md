# Social Media Checker API

[![RapidAPI Badge](https://img.shields.io/badge/Available%20on-RapidAPI-black?style=for-the-badge&logo=rapidapi)](https://rapidapi.com/osint-org-osint-org-default/api/social-media-scanner1)

A multi-platform API to verify social media account existence by username, email, or phone number across Facebook, Instagram, X (Twitter), Snapchat, and Google.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [Single Check](#single-account-check)
  - [Bulk Check](#bulk-account-check)
- [Response Format](#response-format)
- [Requirements](#requirements)
- [Pricing](#pricing)
- [Support](#support)
- [Legal Compliance](#legal-compliance)

## Features

✅ Single account verification across 5+ platforms  
✅ Bulk check up to 10 accounts at once  
✅ Customizable platform selection
✅ Supports emails, usernames, and phone numbers  
✅ Detailed JSON responses with platform-specific status  
✅ Enterprise-grade reliability  

## Getting Started
1. **Get API Key**
   - Subscribe via [RapidAPI Hub](https://rapidapi.com/osint-org-osint-org-default/api/social-media-scanner1)
   - Get your `X-RapidAPI-Key` from your dashboard

2. **Base URL**
```text
https://social-media-scanner1.p.rapidapi.com
```
## API Endpoints
### Single Account Check

**Endpoint**
> POST /check

***Request***  
   ```json
{  
    "input": "test@example.com",  
    "programs": ["facebook", "x", "google"]  
}  
```

**cURL Example**
```bash
curl --request POST \  
     --url https://social-media-scanner.p.rapidapi.com/check \  
     --header 'X-RapidAPI-Host: social-media-scanner.p.rapidapi.com' \  
     --header 'X-RapidAPI-Key: YOUR_API_KEY' \  
     --header 'Content-Type: application/json' \  
     --data '{  
        "input": "test@example.com",  
        "programs": ["facebook", "x"]  
     }'  
```
### Bulk Account Check
**Endpoint**  
> POST /check_bulk

**Request**
```json
{  
    "input": ["test@example.com", "username123", "+19295551234"],  
    "programs": ["instagram", "snapchat"]  
}
```

**Python Example**

```python
import requests

url = "https://social-media-scanner.p.rapidapi.com/check_bulk"  
payload = {  
    "input": ["test@example.com", "username123", "+19295551234"],  
    "programs": ["instagram", "snapchat"]  
}  
headers = {  
    "X-RapidAPI-Key": "YOUR_API_KEY",  
    "X-RapidAPI-Host": "social-media-scanner.p.rapidapi.com",  
    "Content-Type": "application/json"  
}  

response = requests.post(url, json=payload, headers=headers)  
print(response.json())  
```

## Response Format
**Single Check Response**
```json
{  
  "facebook": {"live": true},  
  "x": {"live": true},  
  "google": {"live": false}  
}  
```
**Bulk Response**
```json
[  
  {  
    "identifier": "othman@hotmail.com",  
    "results": {  
      "facebook": {"live": true},  
      "snapchat": {"live": true},  
      "instagram": {"live": true}  
    }  
  },  
  {  
    "identifier": "test@gmail.com",  
    "results": {  
      "facebook": {"live": true},  
      "snapchat": {"live": false},  
      "instagram": {"live": true}  
    }  
  }  
]
```

## Requirements
- Minimum input length: 3 characters

- Bulk requests limited to 10 items per call

- Valid input types:
  - Email addresses
  - Usernames
  - Phone numbers (E.164 format recommended)
  
- Platform Options
  - programs array must use these values (case-sensitive):
    "facebook", "instagram", "snapchat", "x", "google"
  - Omit programs to check all platforms
 
## Pricing
Flexible plans available through [RapidAPI](https://rapidapi.com/osint-org-osint-org-default/api/social-media-scanner1/pricing).   
Free tier available for testing and low-volume usage.

## Support

For technical issues or enterprise inquiries:  
📧 <info@osinttrace.com>
## Legal Compliance

This API is intended for legitimate use cases only. Users are responsible for:

- Comply with all platform Terms of Service (Facebook, Instagram, etc.)
- Adhere to GDPR, CCPA, and other data privacy regulations
- Obtain proper consent for data processing

_Not affiliated with or endorsed by any social media platform._