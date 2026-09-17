# ElevenLabs Conversational AI Integration — Developer Documentation

This document explains the integration of the ElevenLabs Conversational AI voice agent into the Trishul AI platform.

---

## 1. Overview & Architecture

The Trishul AI platform integrates ElevenLabs Conversational AI to allow website visitors to talk directly to Trishul AI's voice consultant.

### Architecture Flow

```
Browser (React Client Component)
  │
  │ 1. GET /api/elevenlabs/signed-url
  ▼
Next.js Server API Route (app/api/elevenlabs/signed-url/route.js)
  │
  │ 2. GET https://api.elevenlabs.io/v1/convai/conversation/get-signed-url (xi-api-key)
  ▼
ElevenLabs Conversational AI API
  │
  │ 3. Returns temporary WebSocket/WebRTC Signed URL
  ▼
Browser connects directly to ElevenLabs WebSocket/WebRTC audio stream
```

---

## 2. Environment Variables

Store these variables in `.env.local` for local development or set them in your hosting provider (e.g. Vercel / Netlify / AWS).

| Variable | Description | Exposure |
|---|---|---|
| `ELEVENLABS_API_KEY` | Secret API key from ElevenLabs account settings | **SERVER ONLY** (Never expose to client) |
| `ELEVENLABS_AGENT_ID` | Default Agent ID (`agent_2301m2nty6wkf26bz2ed2znb3v3r`) | Server / Config |
| `ELEVENLABS_BRANCH_ID` | Default Branch ID (`agtbrch_1401m2nty8tneny9fyhpevs68561`) | Server / Config |

> [!WARNING]
> **Never** prefix `ELEVENLABS_API_KEY` with `NEXT_PUBLIC_`. Secret keys must never be reachable by client JS bundles.

---

## 3. Installation Command

To install the official ElevenLabs React SDK:

```bash
npm install @elevenlabs/react
```

---

## 4. API Endpoint Specification

### `GET /api/elevenlabs/signed-url`

Generates a single-use signed URL for starting a Conversational AI session.

#### Parameters (Query)
- `agent_id` (optional): Override the default agent ID defined in `ELEVENLABS_AGENT_ID`.

#### Response (Success - 200 OK)
```json
{
  "signedUrl": "wss://api.elevenlabs.io/v1/convai/conversation?agent_id=...&token=..."
}
```

#### Response (Error - 500 / 400)
```json
{
  "error": "Server configuration error: ElevenLabs API key is not configured."
}
```

---

## 5. Security Principles

1. **Zero Secret Exposure**: The client application requests a temporary signed URL from `/api/elevenlabs/signed-url`. The ElevenLabs API key is attached in the server-to-server request via the `xi-api-key` header.
2. **Short-lived Credentials**: Signed URLs expire after a short window (typically 15 minutes), preventing session reuse or hijacking.
3. **Microphone Permissions**: The React component handles microphone device discovery and explicit user permissions before launching WebRTC audio streams.
4. **Git Safety**: `.env.local` is listed in `.gitignore` to prevent committing secrets to source repositories.

---

## 6. Multi-Agent & Multi-Client Support

The integration is designed to support multiple agents and business clients without architectural changes.

### Usage in Components

Pass a custom `agentId` prop to `TrishulVoiceAgent`:

```jsx
import TrishulVoiceAgent from '@/components/TrishulVoiceAgent';

// Default agent (uses process.env.ELEVENLABS_AGENT_ID)
<TrishulVoiceAgent />

// Specific client agent
<TrishulVoiceAgent agentId="agent_custom_12345" />
```

---

## 7. Local Development Instructions

1. Add your real ElevenLabs API key to `.env.local`:
   ```env
   ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
   ELEVENLABS_AGENT_ID=agent_2301m2nty6wkf26bz2ed2znb3v3r
   ELEVENLABS_BRANCH_ID=agtbrch_1401m2nty8tneny9fyhpevs68561
   ```
2. Start local dev server:
   ```bash
   npm run dev
   ```
3. Navigate to `http://localhost:3000/demo` and click **Start Conversation**.

---

## 8. Production Deployment Instructions

1. Set `ELEVENLABS_API_KEY`, `ELEVENLABS_AGENT_ID`, and `ELEVENLABS_BRANCH_ID` in your environment variables dashboard (Vercel, Netlify, Docker, etc.).
2. Build and verify:
   ```bash
   npm run build
   ```
3. Ensure HTTPS is enabled in production (browser WebRTC microphone APIs require a secure context `https://`).

---

## 9. Troubleshooting

### API Key Permission Error: `missing permission convai_write`

If you receive the alert:
> `"The API key you used is missing the permission convai_write to execute this operation."`

#### Cause
Your ElevenLabs API key has restricted permissions and lacks the required Conversational AI scope.

#### Solution
1. Log into your [ElevenLabs Dashboard](https://elevenlabs.io/).
2. Navigate to **Profile** (bottom left) -> **API Keys** (or **Workspace Settings** -> **API Keys**).
3. Select your API Key or click **Create New API Key**.
4. Ensure **Conversational AI** (`convai_write`) permissions are enabled (or grant Full Access to the key).
5. Copy the updated API Key into `.env.local`:
   ```env
   ELEVENLABS_API_KEY=xi_api_key_with_convai_write_permission
   ```
6. Restart your Next.js server (`npm run dev`) and test again.

