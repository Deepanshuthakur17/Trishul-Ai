'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ConversationProvider, useConversation } from '@elevenlabs/react';
import { Mic, PhoneCall, PhoneOff, AlertCircle, Sparkles, Radio, Volume2 } from 'lucide-react';
import MetallicButton from '@/components/MetallicButton';

function VoiceAgentInner({ agentId }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isInitializing, setIsInitializing] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const conversation = useConversation({
    onConnect: () => {
      setIsInitializing(false);
      setErrorMessage(null);
      setHasEnded(false);
    },
    onDisconnect: () => {
      setIsInitializing(false);
      setHasEnded(true);
    },
    onError: (error) => {
      setIsInitializing(false);
      const message = typeof error === 'string' ? error : error?.message || 'A connection error occurred.';
      setErrorMessage(message);
    },
  });

  const { status, isSpeaking } = conversation;
  const isConnected = status === 'connected';
  const isConnecting = status === 'connecting' || isInitializing;

  // Track state in refs for safe unmount cleanup without re-triggering cleanup on state changes
  const isConnectedRef = useRef(isConnected);
  const conversationRef = useRef(conversation);

  useEffect(() => {
    isConnectedRef.current = isConnected;
    conversationRef.current = conversation;
  }, [isConnected, conversation]);

  const handleStartConversation = useCallback(async () => {
    if (isConnecting || isConnected) return;

    setErrorMessage(null);
    setIsInitializing(true);
    setHasEnded(false);

    try {
      // 1. Request signed URL from Trishul secure server route
      const apiUrl = agentId
        ? `/api/elevenlabs/signed-url?agent_id=${encodeURIComponent(agentId)}`
        : '/api/elevenlabs/signed-url';

      const response = await fetch(apiUrl, { cache: 'no-store' });
      const data = await response.json();

      if (!response.ok || !data.signedUrl) {
        throw new Error(data.error || 'Failed to acquire session token for voice agent.');
      }

      // 2. Request microphone permission upfront for smooth user experience
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach((track) => track.stop());
        } catch (micErr) {
          if (micErr.name === 'NotAllowedError' || micErr.name === 'PermissionDeniedError') {
            throw new Error('Microphone permission denied. Please allow microphone access to talk to Trishul AI.');
          } else if (micErr.name === 'NotFoundError' || micErr.name === 'DevicesNotFoundError') {
            throw new Error('No microphone device found. Please connect a microphone to continue.');
          }
        }
      }

      // 3. Start ElevenLabs session using signed URL
      await conversation.startSession({
        signedUrl: data.signedUrl,
      });
    } catch (err) {
      console.error('Trishul Voice Agent error:', err);
      setIsInitializing(false);
      setErrorMessage(err.message || 'Failed to start conversation.');
    }
  }, [agentId, conversation, isConnected, isConnecting]);

  const handleEndConversation = useCallback(async () => {
    try {
      setIsInitializing(false);
      if (typeof conversation?.endSession === 'function') {
        await conversation.endSession();
      }
    } catch (err) {
      console.error('Failed to disconnect session:', err);
    }
  }, [conversation]);

  // Clean up session ONLY when component actually unmounts
  useEffect(() => {
    return () => {
      if (isConnectedRef.current && typeof conversationRef.current?.endSession === 'function') {
        try {
          conversationRef.current.endSession();
        } catch (e) {
          // ignore unmount cleanup error
        }
      }
    };
  }, []);

  // Determine status display text & state badge styling
  const getStatusInfo = () => {
    if (errorMessage) {
      return {
        label: 'Error',
        detail: errorMessage,
        badgeClass: 'bg-red-500/10 text-red-400 border-red-500/30',
        dotClass: 'bg-red-400',
      };
    }
    if (isConnecting) {
      return {
        label: 'Connecting...',
        detail: 'Establishing secure voice stream with Trishul AI...',
        badgeClass: 'bg-gold/10 text-gold border-gold/30',
        dotClass: 'bg-gold animate-ping',
      };
    }
    if (isConnected) {
      if (isSpeaking) {
        return {
          label: 'Trishul AI is speaking...',
          detail: 'Listening to response...',
          badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]',
          dotClass: 'bg-emerald-400 animate-pulse',
        };
      }
      return {
        label: 'Listening...',
        detail: 'Speak now — Trishul AI is listening...',
        badgeClass: 'bg-gold/10 text-gold border-gold/40 shadow-gold-glow',
        dotClass: 'bg-gold animate-pulse',
      };
    }
    if (hasEnded) {
      return {
        label: 'Conversation ended',
        detail: 'Click below to start a new voice session anytime.',
        badgeClass: 'bg-white/5 text-warm-secondary border-white/10',
        dotClass: 'bg-warm-muted',
      };
    }
    return {
      label: 'Ready',
      detail: 'Click "Start Conversation" to begin real-time voice chat.',
      badgeClass: 'bg-gold/10 text-gold border-gold/20',
      dotClass: 'bg-gold',
    };
  };

  const statusInfo = getStatusInfo();

  return (
    <div className="relative z-10 flex flex-col items-center text-center space-y-6">
      {/* Background Subtle Radial Glow */}
      <div
        className={`absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none transition-all duration-700 blur-[120px] ${
          isConnected
            ? isSpeaking
              ? 'bg-emerald-500/15'
              : 'bg-gold/20'
            : 'bg-gold/10'
        }`}
      />

      {/* Header Branding */}
      <div className="flex flex-col items-center space-y-2">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[11px] font-mono tracking-widest uppercase shadow-gold-glow">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>TRISHUL AI VOICE AGENT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-warm-white font-sans mt-2">
          Talk to{' '}
          <span className="font-cursive text-gold font-normal text-4xl sm:text-6xl inline-block ml-1">
            Trishul AI
          </span>
        </h2>

        <p className="text-sm sm:text-base text-warm-secondary max-w-xl leading-relaxed font-sans">
          Have a question about AI automation or web development? Talk with our AI business consultant.
        </p>
      </div>

      {/* Visualizer / Avatar Pulse Area */}
      <div className="relative py-4 my-2 flex items-center justify-center">
        {/* Animated Wave Rings when Connected */}
        {isConnected && (
          <>
            <div
              className={`absolute w-44 h-44 rounded-full border transition-all duration-500 animate-ping ${
                isSpeaking ? 'border-emerald-500/40' : 'border-gold/30'
              }`}
              style={{ animationDuration: isSpeaking ? '1.5s' : '3s' }}
            />
            <div
              className={`absolute w-56 h-56 rounded-full border transition-all duration-500 ${
                isSpeaking ? 'border-emerald-500/20 animate-pulse' : 'border-gold/15'
              }`}
            />
          </>
        )}

        {/* Center Orb Card */}
        <div
          className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border flex items-center justify-center transition-all duration-500 shadow-2xl ${
            isConnected
              ? isSpeaking
                ? 'bg-gradient-to-b from-emerald-950/80 to-obsidian border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.3)]'
                : 'bg-gradient-to-b from-gold/20 to-obsidian border-gold/60 shadow-[0_0_50px_rgba(214,173,85,0.25)]'
              : 'bg-gradient-to-b from-gold/10 to-obsidian-surface border-gold/30 shadow-[0_0_35px_rgba(214,173,85,0.15)]'
          }`}
        >
          {isConnected ? (
            isSpeaking ? (
              <Volume2 className="w-16 h-16 text-emerald-400 animate-bounce" />
            ) : (
              <Mic className="w-16 h-16 text-gold animate-pulse" />
            )
          ) : (
            <div className="relative w-full h-full p-6 flex items-center justify-center">
              <Image
                src="/trishul-logo.png"
                alt="Trishul AI"
                width={140}
                height={140}
                className="w-full h-full object-contain scale-135 filter drop-shadow-[0_0_20px_rgba(214,173,85,0.65)] hover:scale-145 transition-transform duration-300"
              />
            </div>
          )}
        </div>
      </div>

      {/* Status Badge & Helper Message */}
      <div className="flex flex-col items-center space-y-2">
        <div
          className={`inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border text-xs font-mono font-medium transition-all duration-300 ${statusInfo.badgeClass}`}
        >
          <span className={`w-2 h-2 rounded-full ${statusInfo.dotClass}`} />
          <span>{statusInfo.label}</span>
        </div>

        <p className="text-xs text-warm-muted max-w-md h-5">{statusInfo.detail}</p>
      </div>

      {/* Error Alert Box if present */}
      {errorMessage && (
        <div className="w-full max-w-lg bg-red-950/40 border border-red-500/30 rounded-2xl p-4 text-xs text-red-300 flex items-start space-x-3 text-left">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold block text-red-200">Connection Alert</span>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Action Button */}
      <div className="pt-2">
        {!isConnected ? (
          <MetallicButton
            onClick={handleStartConversation}
            disabled={isConnecting}
            variant="gold"
            icon={false}
            className="px-8 py-4 text-sm font-bold rounded-2xl"
          >
            {isConnecting ? (
              <>
                <Sparkles className="w-5 h-5 animate-spin" />
                <span>Connecting to Trishul AI...</span>
              </>
            ) : (
              <>
                <PhoneCall className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>Start Conversation</span>
              </>
            )}
          </MetallicButton>
        ) : (
          <MetallicButton
            onClick={handleEndConversation}
            variant="red"
            icon={false}
            className="px-8 py-4 text-sm font-bold rounded-2xl"
          >
            <PhoneOff className="w-5 h-5" />
            <span>End Conversation</span>
          </MetallicButton>
        )}
      </div>

      {/* Supporting Privacy & Micro-copy */}
      <div className="text-[11px] text-warm-muted font-mono flex items-center gap-2 pt-2">
        <span>🔒 Encrypted Server Session</span>
        <span>•</span>
        <span>Powered by ElevenLabs Conversational AI</span>
      </div>
    </div>
  );
}

export default function TrishulVoiceAgent({ agentId, className = '' }) {
  return (
    <ConversationProvider>
      <div
        className={`w-full max-w-4xl mx-auto rounded-3xl bg-obsidian-card border border-obsidian-border shadow-obsidian-card overflow-hidden p-6 sm:p-10 relative ${className}`}
      >
        <VoiceAgentInner agentId={agentId} />
      </div>
    </ConversationProvider>
  );
}
