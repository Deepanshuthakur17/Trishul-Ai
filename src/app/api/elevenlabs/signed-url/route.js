import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * Server-side API route to generate an ElevenLabs Conversational AI signed URL.
 * Securely proxies request to ElevenLabs using the server-side API key.
 * Never exposes ELEVENLABS_API_KEY to the client.
 */
export async function GET(request) {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server configuration error: ElevenLabs API key is not configured.' },
        { status: 500 }
      );
    }

    // Support query parameter agent_id for multi-agent capability, fallback to env variable
    const { searchParams } = new URL(request.url);
    const agentId = searchParams.get('agent_id') || process.env.ELEVENLABS_AGENT_ID;

    if (!agentId) {
      return NextResponse.json(
        { error: 'Bad request: Missing ElevenLabs agent ID.' },
        { status: 400 }
      );
    }

    const elevenlabsUrl = `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${encodeURIComponent(agentId)}`;

    const response = await fetch(elevenlabsUrl, {
      method: 'GET',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('ElevenLabs API returned error status:', response.status);
      const errMsg =
        errorData?.detail?.message ||
        (typeof errorData?.detail === 'string' ? errorData.detail : null) ||
        errorData?.message ||
        'Failed to obtain signed URL from ElevenLabs.';
      return NextResponse.json(
        { error: errMsg },
        { status: response.status >= 400 && response.status < 600 ? response.status : 500 }
      );
    }

    const data = await response.json();
    const signedUrl = data.signed_url || data.signedUrl;

    if (!signedUrl) {
      return NextResponse.json(
        { error: 'Invalid response from ElevenLabs API: Signed URL not received.' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { signedUrl },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching ElevenLabs signed URL:', error.message);
    return NextResponse.json(
      { error: 'Internal server error while initiating voice agent session.' },
      { status: 500 }
    );
  }
}
