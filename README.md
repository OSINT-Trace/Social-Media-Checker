# Social Media Scanner & Cross-Platform Intelligence API

[![OSINT Trace - Direct API (Recommended)](https://img.shields.io/badge/OSINT%20Trace-Direct%20API%20(Recommended)-00DF9A?style=for-the-badge&logo=shield)](https://osinttrace.com) [![API.Market](https://img.shields.io/badge/API.Market-8B5CF6?style=for-the-badge)](https://api.market/store/osint-trace-1/social-media-scanner) [![RapidAPI](https://img.shields.io/badge/RapidAPI-black?style=for-the-badge&logo=rapidapi)](https://rapidapi.com/osint-org-osint-org-default/api/social-media-scanner1)

An enterprise-grade, multi-platform OSINT API to verify identifier existence and extract rich profile intelligence simultaneously across **6 core social media platforms** (Google, Microsoft, Facebook, Instagram, Snapchat, and X/Twitter) by email address, username, or phone number.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [1. Get API Key](#1-get-api-key)
  - [2. Base URL & Authentication](#2-base-url--authentication)
- [API Endpoints](#api-endpoints)
  - [Single Account Multi-Platform Check](#single-account-multi-platform-check)
  - [Code Examples](#code-examples)
- [Supported Platforms & Metadata](#supported-platforms--metadata)
- [Response Format](#response-format)
- [HTTP Status Codes](#http-status-codes)
- [Requirements](#requirements)
- [Pricing](#pricing)
- [Support](#support)
- [Legal Compliance](#legal-compliance)

---

## Features

✅ **Multi-Platform Concurrent Scanning**: Query up to 6 platforms simultaneously in a single API call (Google, Microsoft, Facebook, Instagram, Snapchat, X / Twitter).  
✅ **Multi-Identifier Input**: Accepts email addresses, usernames, and E.164 phone numbers.  
✅ **Deep Metadata Extraction**: Extracts numerical User IDs, display names, biographies, follower & following counts, 3D Bitmojis, HD avatar URLs, verified badges, and direct profile links.  
✅ **Custom Platform Filtering**: Query all 6 platforms by default or provide a selective `programs` array.  
✅ **High Performance**: Asynchronous architecture with high-speed proxy cycling and anti-bot bypass.  
✅ **Developer-Friendly**: Available via direct REST API on [OSINT Trace](https://osinttrace.com) (Recommended) and major developer marketplaces.

---

## Getting Started

### 1. Get API Key

- **OSINT Trace Direct (Recommended)**: Create an account on [OSINT Trace](https://osinttrace.com) and generate your API Key from the [Workspace Dashboard](https://app.osinttrace.com).
- **API.Market**: Subscribe via [API.Market Social Media Scanner](https://api.market/store/osint-trace-1/social-media-scanner).
- **RapidAPI**: Subscribe via [RapidAPI Social Media Scanner](https://rapidapi.com/osint-org-osint-org-default/api/social-media-scanner1).

### 2. Base URL & Authentication

Authentication headers and endpoints vary by provider:

| Provider | Base URL | Auth Header | Endpoint |
|:---|:---|:---|:---|
| **OSINT Trace (Direct - Recommended)** | `https://api.osinttrace.com/v1` | `x-osint-key: YOUR_OSINT_KEY` | `POST /check` |
| **API.Market** | `https://prod.api.market/api/v1/osint-trace-1/social-media-scanner` | `X-Api-Key: YOUR_API_KEY` | `POST /check` |
| **RapidAPI** | `https://social-media-scanner1.p.rapidapi.com` | `X-RapidAPI-Key: YOUR_API_KEY`<br>`X-RapidAPI-Host: social-media-scanner1.p.rapidapi.com` | `POST /check` |

---

## API Endpoints

### Single Account Multi-Platform Check

**Endpoint (OSINT Trace Direct - Recommended):**
> `POST https://api.osinttrace.com/v1/check`

**Request Body:**
```json
{
  "input": "target@example.com",
  "programs": ["facebook", "instagram", "snapchat", "x", "google", "microsoft"]
}
```

> **Note**: Omit `programs` or pass `null` to automatically scan **all 6 platforms** simultaneously.

### Code Examples

<details open>
<summary><b>OSINT Trace Direct API (cURL) — Recommended</b></summary>

```bash
curl --request POST \
     --url https://api.osinttrace.com/v1/check \
     --header 'x-osint-key: YOUR_OSINT_KEY' \
     --header 'Content-Type: application/json' \
     --data '{
       "input": "target@example.com",
       "programs": ["facebook", "instagram", "snapchat", "x", "google", "microsoft"]
     }'
```
</details>

<details>
<summary><b>API.Market (cURL)</b></summary>

```bash
curl --request POST \
     --url https://prod.api.market/api/v1/osint-trace-1/social-media-scanner/check \
     --header 'X-Api-Key: YOUR_API_KEY' \
     --header 'Content-Type: application/json' \
     --data '{
       "input": "target@example.com",
       "programs": ["facebook", "instagram", "snapchat", "x", "google", "microsoft"]
     }'
```
</details>

<details>
<summary><b>RapidAPI (cURL)</b></summary>

```bash
curl --request POST \
     --url https://social-media-scanner1.p.rapidapi.com/check \
     --header 'X-RapidAPI-Host: social-media-scanner1.p.rapidapi.com' \
     --header 'X-RapidAPI-Key: YOUR_API_KEY' \
     --header 'Content-Type: application/json' \
     --data '{
       "input": "target@example.com",
       "programs": ["facebook", "instagram", "snapchat", "x", "google", "microsoft"]
     }'
```
</details>

> Additional code snippets for Python, Node.js, Go, PHP, C#, Java, and Shell are available in the [`examples/`](./examples) directory.

---

## Supported Platforms & Metadata

| Platform (`programs` code) | Extracted Metadata & Diagnostics |
|:---|:---|
| **Google** (`google`) | Account existence, active vs. suspended status notes, Gmail / Workspace deliverability |
| **Microsoft** (`microsoft`) | Account type (Personal / Azure AD), tenant classification, masked email / phone |
| **Facebook** (`facebook`) | Numerical User ID, display name, HD avatar photo, custom avatar flag, linked accounts |
| **Instagram** (`instagram`) | User ID, username, display name, bio, avatar URL, followers/following/posts counts, verified status |
| **Snapchat** (`snapchat`) | Display name, bio, 3D Bitmoji render URL, banner image, subscriber count, verified Star badge, Snapcode |
| **X / Twitter** (`x`) | Display name, handle, bio, avatar URL, followers/following stats, creation date (`created_at`), verified status |

---

## Response Format

```json
{
  "google": {
    "live": true,
    "note": null
  },
  "microsoft": {
    "live": true,
    "note": null,
    "metadata": {
      "account_type": "Personal",
      "name": "Jane Doe",
      "masked_phone": "+1 ***-***-1234",
      "masked_email": "j***e@outlook.com",
      "tenant_type": "Consumer"
    }
  },
  "facebook": {
    "live": true,
    "note": null,
    "metadata": {
      "name": "Jane Doe",
      "user_id": "100012345678901",
      "avatar_url": "https://scontent.xx.fbcdn.net/v/t39.30808-1/example_avatar.jpg",
      "has_custom_avatar": true,
      "profile_url": "https://www.facebook.com/janedoe"
    }
  },
  "instagram": {
    "live": true,
    "note": null,
    "metadata": {
      "user_id": "1234567890",
      "username": "janedoe_ig",
      "name": "Jane Doe",
      "bio": "Security researcher & OSINT enthusiast",
      "avatar_url": "https://scontent.cdninstagram.com/v/t51.2885-19/example_avatar.jpg",
      "followers": 1420,
      "following": 280,
      "posts": 35,
      "is_private": false,
      "is_verified": false,
      "profile_url": "https://www.instagram.com/janedoe_ig"
    }
  },
  "snapchat": {
    "live": true,
    "note": null,
    "metadata": {
      "username": "janedoe_snap",
      "name": "Jane Doe",
      "avatar_url": "https://images.bitmoji.com/3d/avatar/example_bitmoji.png",
      "is_verified": false,
      "profile_url": "https://www.snapchat.com/add/janedoe_snap"
    }
  },
  "x": {
    "live": true,
    "note": null,
    "metadata": {
      "username": "janedoe_x",
      "name": "Jane Doe",
      "bio": "Threat intelligence & digital forensics",
      "avatar_url": "https://pbs.twimg.com/profile_images/example_avatar.jpg",
      "followers": 5820,
      "following": 410,
      "created_at": "2018-04-12T10:15:00Z",
      "is_verified": true,
      "profile_url": "https://x.com/janedoe_x"
    }
  }
}
```

---

## HTTP Status Codes

| Status Code | Description | Rationale |
|:---|:---|:---|
| **`200 OK`** | Success | Multi-platform query processed and aggregated results returned. |
| **`400 Bad Request`** | Validation Error | Malformed request body or input under minimum length. |
| **`401 Unauthorized`** | Authentication Required | Missing, invalid, or expired API key header. |
| **`403 Forbidden`** | Quota / Subscription Error | Quota balance exhausted or subscription inactive. |
| **`408 Request Timeout`** | Timeout | Upstream verification exceeded maximum execution window. |
| **`429 Too Many Requests`** | Rate Limit Exceeded | Exceeded 1 request/second limit. |

---

## Requirements

- **Minimum input length**: 3 characters
- **Supported input formats**:
  - Email addresses (`user@example.com`)
  - Usernames (`john_doe`)
  - Phone numbers (E.164 standard recommended: `+1234567890`)
- **Supported `programs` values**: `"google"`, `"microsoft"`, `"facebook"`, `"instagram"`, `"snapchat"`, `"x"`
- **Rate Limit**: 1 request per second per active API key.

---

## Pricing

- **Direct Plans (Recommended)**: Flexible subscription tiers and bulk volume pricing available on [OSINT Trace Pricing](https://osinttrace.com/pricing).
- **Marketplace Plans**: Subscriptions also available through [API.Market](https://api.market/store/osint-trace-1/social-media-scanner) and [RapidAPI](https://rapidapi.com/osint-org-osint-org-default/api/social-media-scanner1/pricing).
- **Free Tier**: Free tier available for evaluation and testing.

---

## Support

For technical inquiries, enterprise SLA plans, or integration assistance:  
📧 Email: [support@osinttrace.com](mailto:support@osinttrace.com)  
🌐 Website: [osinttrace.com](https://osinttrace.com)

---

## Legal Compliance

This API is designed for legitimate cybersecurity investigation, fraud prevention, brand monitoring, and threat intelligence. Users must:
- Comply with applicable local and international data protection regulations (e.g., GDPR, CCPA).
- Adhere to each platform's Terms of Service and acceptable use policies.
- Ensure lawful basis for investigative data processing.

*This service is independently operated by OSINT Trace and is not affiliated with or endorsed by Meta Platforms, Google LLC, Microsoft Corp, Snap Inc., or X Corp.*
