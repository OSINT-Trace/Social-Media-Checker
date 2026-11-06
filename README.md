# Social Media Scanner & Cross-Platform Intelligence API

[![OSINT Trace - Direct API (Recommended)](https://img.shields.io/badge/OSINT%20Trace-Direct%20API%20(Recommended)-00DF9A?style=for-the-badge&logo=shield)](https://osinttrace.com) [![API.Market](https://img.shields.io/badge/API.Market-8B5CF6?style=for-the-badge)](https://api.market/store/osint-trace-1/social-media-scanner) [![RapidAPI](https://img.shields.io/badge/RapidAPI-black?style=for-the-badge&logo=rapidapi)](https://rapidapi.com/osint-org-osint-org-default/api/social-media-scanner1)

An enterprise-grade, multi-platform OSINT API to verify identifier existence and extract rich profile intelligence simultaneously across **6 core social media platforms** (Google, Microsoft, Facebook, Instagram, Snapchat, and X/Twitter) by username, direct profile URL, email address, or phone number.

> ⚠️ **Metadata Availability & Privacy Notice**:
> Extracted metadata is **conditional and never guaranteed**. Availability strictly depends on:
> 1. **Input Format**: Public profile queries (usernames and vanity profile URLs) inspect public web profiles and OpenGraph tags to extract rich identity and audience metrics (numerical IDs, followers, likes, biographies, avatar URLs). Conversely, email address and phone number queries query authentication gateways, registration collision endpoints, and recovery preflights to confirm deliverability and presence (`live: true`), returning partial metadata (e.g. linked accounts, authentication methods, or masked recovery proofs) or presence only.
> 2. **Platform Constraints**: Upstream APIs and security boundaries limit telemetry (e.g., phone checks on X and Snapchat confirm account presence but never expose public profile biographies or follower counts).
> 3. **Target Privacy Settings**: Private profiles, restricted visibility controls, or accounts without public directories omit public metadata attributes.

---

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [1. Get API Key](#1-get-api-key)
  - [2. Base URL & Authentication](#2-base-url--authentication)
- [API Endpoints](#api-endpoints)
  - [Single Account Multi-Platform Check](#single-account-multi-platform-check)
  - [Code Examples](#code-examples)
- [Supported Platforms & Capability Matrix](#supported-platforms--capability-matrix)
- [Response Format](#response-format)
- [HTTP Status Codes](#http-status-codes)
- [Requirements](#requirements)
- [Pricing](#pricing)
- [Support](#support)
- [Legal Compliance](#legal-compliance)

---

## Features

✅ **Multi-Platform Concurrent Scanning**: Query up to 6 platforms simultaneously in a single API call (Google, Microsoft, Facebook, Instagram, Snapchat, X / Twitter).  
✅ **Multi-Identifier Input**: Accepts vanity handles, direct profile URLs, email addresses, and E.164 international phone numbers.  
✅ **Deep Metadata Extraction**: Extracts numerical User IDs, handles, display names, biographies, follower & following counts, page likes, weekly engagement, 3D Bitmojis, HD avatar URLs, verified badges, and direct profile links.  
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

**Request Body (Username Query):**
```json
{
  "input": "alex_hunter",
  "programs": ["facebook", "instagram", "snapchat", "x", "google", "microsoft"]
}
```

**Request Body (Email Query):**
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
       "input": "alex_hunter",
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
       "input": "alex_hunter",
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
       "input": "alex_hunter",
       "programs": ["facebook", "instagram", "snapchat", "x", "google", "microsoft"]
     }'
```
</details>

> Additional code snippets for Python, Node.js, Go, PHP, C#, Java, and Shell are available in the [`examples/`](./examples) directory.

---

## Supported Platforms & Capability Matrix

| Platform (`programs` code) | Username / Profile URL Query | Email Address Query | Phone Number Query |
|:---|:---|:---|:---|
| **Facebook** (`facebook`) | Numeric FBID (`user_id`), handle, name, bio, followers, page likes, talking about, custom avatar flag, locale, entity type, profile URL | Meta CAA account presence (`live: true`), optional linked Instagram account & avatar | Meta CAA preflight & login presence (`live: true`), optional linked accounts & avatar |
| **Instagram** (`instagram`) | Immutable numeric `user_id`, username, name, bio, avatar URL, followers, following, posts count, verified status, private status, category, profile link | Registration collision check (`live: true`), suggested usernames, and Meta CAA profile data | Fast presence verification via CAA recovery and Mobile Web Bloks |
| **Google** (`google`) | Account existence confirmation (`live: true/false`) | Gmail / Google Workspace deliverability check (`live: true`); with `enrich: true`, GAIA `user_id`, tenant ID, job title, org, name, avatar | Carrier presence check + profile avatar URL and name (if public) |
| **Microsoft** (`microsoft`) | *Not applicable (Email or Phone only)* | Account presence, Personal vs. Azure AD Work/School classification, tenant type, SAML federation redirect URL, auth methods (`passkey`, `fido2`, `authenticator`), masked recovery phone/email | Account presence, tenant type, auth methods, and masked contact proofs |
| **Snapchat** (`snapchat`) | Display name, bio, 3D Bitmoji render URL, banner image, subscriber count, verified Star badge, Snapcode SVG, profile link | Direct mobile gateway verification (`live: true/false`, no profile metadata) | Direct mobile gateway verification (`live: true/false`, no profile metadata) |
| **X / Twitter** (`x`) | Display name, handle, bio, HD avatar URL, followers, following stats, account creation timestamp (`created_at`), verified status, profile link | Presence verification; attached profile metadata if handle matches email prefix | Direct pre-auth gateway presence verification (`live: true/false`, no profile metadata) |

---

## Response Format

### 1. Username Query (Rich Public Metadata)
```json
{
  "google": {
    "live": true,
    "note": null
  },
  "microsoft": {
    "live": false,
    "note": "Identifier not supported for Microsoft (requires email or phone)"
  },
  "facebook": {
    "live": true,
    "note": null,
    "metadata": {
      "user_id": "100044484697508",
      "username": "AlexHonnold",
      "name": "Alex Honnold",
      "bio": "It is what it is. And it's pretty good.",
      "avatar_url": "https://scontent-cdg6-1.xx.fbcdn.net/v/t39.30808-1/example.jpg",
      "has_custom_avatar": true,
      "followers": 1092502,
      "talking_about": 5161,
      "locale": "en_US",
      "entity_type": "PROFILE",
      "profile_url": "https://www.facebook.com/AlexHonnold"
    }
  },
  "instagram": {
    "live": true,
    "note": null,
    "metadata": {
      "user_id": "1234567890",
      "username": "alex_hunter",
      "name": "Alex Hunter",
      "bio": "Security researcher & OSINT enthusiast 🔍",
      "avatar_url": "https://scontent.cdninstagram.com/v/t51.2885-19/example_avatar.jpg",
      "followers": 1420,
      "following": 280,
      "posts": 35,
      "is_private": false,
      "is_verified": true,
      "profile_url": "https://www.instagram.com/alex_hunter"
    }
  },
  "snapchat": {
    "live": true,
    "note": null,
    "metadata": {
      "username": "alex_hunter",
      "name": "Alex Hunter",
      "bio": "Exploring threat intelligence 👻",
      "avatar_url": "https://images.bitmoji.com/3d/avatar/example_bitmoji.png",
      "followers": 4500,
      "is_verified": false,
      "snapcode_url": "https://app.snapchat.com/web/deeplink/snapcode?username=alex_hunter&type=SVG",
      "profile_url": "https://www.snapchat.com/add/alex_hunter"
    }
  },
  "x": {
    "live": true,
    "note": null,
    "metadata": {
      "username": "alex_hunter",
      "name": "Alex Hunter",
      "bio": "Threat intelligence & digital forensics",
      "avatar_url": "https://pbs.twimg.com/profile_images/example_avatar.jpg",
      "followers": 5820,
      "following": 410,
      "created_at": "2018-04-12T10:15:00Z",
      "is_verified": true,
      "profile_url": "https://x.com/alex_hunter"
    }
  }
}
```

### 2. Email Query (Presence & Authentication Diagnostics)
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
      "tenant_type": "Consumer",
      "name": "Jane Doe",
      "masked_phone": "+1 ***-***-1234",
      "masked_email": "j***e@outlook.com",
      "auth_methods": ["Password", "FIDO2", "AuthenticatorApp"]
    }
  },
  "facebook": {
    "live": true,
    "note": null,
    "metadata": {
      "name": "Jane Doe",
      "avatar_url": "https://scontent.xx.fbcdn.net/v/t39.30808-1/example.jpg",
      "has_custom_avatar": true,
      "linked_accounts": [
        {
          "name": "janedoe_ig",
          "avatar_url": "https://scontent.cdninstagram.com/example.jpg",
          "account_type": "Instagram"
        }
      ]
    }
  },
  "instagram": {
    "live": true,
    "note": null,
    "metadata": {
      "suggested_usernames": ["janedoe99", "jane_d2024"]
    }
  },
  "snapchat": {
    "live": true,
    "note": null,
    "metadata": null
  },
  "x": {
    "live": true,
    "note": null
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
| **`429 Too Many Requests`** | Rate Limit Exceeded | Exceeded 1 request/second limit (Trace-Credits queries processed up to 3 req/s). |

---

## Requirements

- **Minimum input length**: 3 characters
- **Supported input formats**:
  - Vanity handles (`alex_hunter`)
  - Direct profile URLs (`https://facebook.com/alexhonnold`, `profile.php?id=...`)
  - Email addresses (`user@example.com`)
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
