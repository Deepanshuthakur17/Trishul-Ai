'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react';
import MetallicButton from '@/components/MetallicButton';

const PRESET_OPTIONS = [
  { id: 'leads', label: 'Get more leads', prompt: 'I want to automate lead capture and qualification for my website.' },
  { id: 'support', label: 'Automate support', prompt: 'We spend too much time answering repetitive customer questions.' },
  { id: 'whatsapp', label: 'Automate WhatsApp', prompt: 'I need an AI agent to handle incoming WhatsApp customer inquiries.' },
  { id: 'booking', label: 'Book appointments', prompt: 'How can an AI agent schedule meetings directly into my Google Calendar?' },
  { id: 'custom', label: 'Something else', prompt: 'Can Trishul automate internal operations and CRM updates?' },
];

const SIMULATED_RESPONSES = {
  leads: {
    text: "Here is how your Trishul Lead Agent handles web & ad traffic:",
    actions: [
      { step: "01", text: "Instant 5-second greeting on web chat or WhatsApp" },
      { step: "02", text: "Asks 3 smart budget & timeline qualification questions" },
      { step: "03", text: "Pushes qualified lead directly into your HubSpot CRM" },
      { step: "04", text: "Sends instant Cal.com link for discovery booking" }
    ],
    handOff: "If the lead asks for custom enterprise terms, Trishul immediately alerts your team on Slack with full context."
  },
  support: {
    text: "Here is how your Trishul Support Agent eliminates ticket backlogs:",
    actions: [
      { step: "01", text: "Retrieves instant answers from your Notion & PDF docs" },
      { step: "02", text: "Resolves 75%+ of routine queries with zero wait time" },
      { step: "03", text: "Fetches live order/status updates directly via API" },
      { step: "04", text: "Logs customer sentiment and satisfaction score" }
    ],
    handOff: "When a complex technical ticket arises, the agent tags a human specialist inside Zendesk."
  },
  whatsapp: {
    text: "Here is your official WhatsApp Business AI workflow:",
    actions: [
      { step: "01", text: "Receives incoming WhatsApp messages round-the-clock" },
      { step: "02", text: "Sends rich media catalogs & interactive button options" },
      { step: "03", text: "Captures customer address & specs inside WhatsApp" },
      { step: "04", text: "Triggers automated follow-up reminders after 24 hours" }
    ],
    handOff: "Human agents can step into the chat anytime directly from the Interakt or Wati inbox."
  },
  booking: {
    text: "Here is your automated appointment scheduling flow:",
    actions: [
      { step: "01", text: "Checks real-time availability in Google/Outlook Calendar" },
      { step: "02", text: "Proposes optimal time slots based on customer timezone" },
      { step: "03", text: "Sends calendar invite with Zoom / Google Meet link" },
      { step: "04", text: "Dispatches automated WhatsApp reminder 2 hours prior" }
    ],
    handOff: "Reduces no-shows by up to 65% with automated multi-channel reminders."
  },
  custom: {
    text: "Custom internal operations workflow:",
    actions: [
      { step: "01", text: "Extracts invoice data from incoming client emails" },
      { step: "02", text: "Runs verification rules and updates PostgreSQL DB" },
      { step: "03", text: "Triggers automated Slack notification to finance team" },
      { step: "04", text: "Generates daily operational summary report" }
    ],
    handOff: "Built specifically around your custom business rules and legacy APIs."
  }
};

export default function InteractiveDemo() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi. I'm Trishul. What would you like to automate in your business?",
      options: PRESET_OPTIONS,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Auto-scroll to bottom of chat whenever messages change or typing state updates
  const scrollToBottom = (smooth = true) => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: smooth ? 'smooth' : 'auto',
      });
    }
  };

  useEffect(() => {
    scrollToBottom(true);
    const t1 = setTimeout(() => scrollToBottom(true), 50);
    const t2 = setTimeout(() => scrollToBottom(true), 250);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [messages, isTyping]);

  const handleSelectOption = (option) => {
    const newMessages = [
      ...messages,
      { sender: 'user', text: option.prompt }
    ];
    setMessages(newMessages);
    setIsTyping(true);

    setTimeout(() => {
      const respData = SIMULATED_RESPONSES[option.id] || SIMULATED_RESPONSES.leads;
      setMessages([
        ...newMessages,
        {
          sender: 'bot',
          text: respData.text,
          actions: respData.actions,
          handOff: respData.handOff,
          showRestart: true
        }
      ]);
      setIsTyping(false);
    }, 800);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue('');
    const newMessages = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setIsTyping(true);

    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          sender: 'bot',
          text: `Got it. For "${userText}", Trishul can engineer a specialized agent that listens on your primary channel, connects to your tools, and executes this workflow automatically.`,
          actions: [
            { step: "01", text: "Map process rules & edge cases" },
            { step: "02", text: "Integrate native APIs & databases" },
            { step: "03", text: "Deploy 24/7 autonomous monitoring" }
          ],
          handOff: "Would you like us to design this specific AI workflow during a 15-minute consultation?",
          showRestart: true
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: 'bot',
        text: "Hi. I'm Trishul. What would you like to automate in your business?",
        options: PRESET_OPTIONS,
      },
    ]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-obsidian-card border border-obsidian-border shadow-obsidian-card overflow-hidden">
      {/* Demo Header */}
      <div className="bg-obsidian-surface px-6 py-4 border-b border-obsidian-border flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 relative flex items-center justify-center bg-gold/10 rounded-full border border-gold/30 shrink-0">
            <Image src="/trishul-logo.png" alt="Trishul Demo" width={26} height={26} className="object-contain" />
          </div>
          <div>
            <span className="font-sans font-bold text-sm tracking-wider text-warm-white block">
              TRISHUL AI SIMULATOR
            </span>
            <span className="text-[10px] font-mono text-gold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
              Live Agent Sandbox
            </span>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="text-xs font-mono text-warm-secondary hover:text-warm-white flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Demo</span>
        </button>
      </div>

      {/* Chat Conversation Area */}
      <div ref={chatContainerRef} className="p-6 sm:p-8 space-y-6 min-h-[380px] max-h-[500px] overflow-y-auto bg-obsidian/60 scroll-smooth">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-3`}
          >
            <div className="flex items-start space-x-3 max-w-2xl">
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-gold" />
                </div>
              )}
              
              <div
                className={`rounded-2xl p-4 sm:p-5 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gold text-obsidian font-medium rounded-tr-none'
                    : 'bg-obsidian-surface border border-obsidian-border text-warm-white rounded-tl-none shadow-sm'
                }`}
              >
                <p>{msg.text}</p>

                {/* Simulated Actions Breakdown */}
                {msg.actions && (
                  <div className="mt-4 space-y-2 border-t border-white/10 pt-3">
                    <span className="text-[10px] font-mono uppercase text-gold tracking-widest block font-semibold">
                      Automated Action Steps:
                    </span>
                    {msg.actions.map((act, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-warm-secondary bg-obsidian/40 p-2 rounded border border-white/5">
                        <span className="font-mono text-gold font-bold">{act.step}</span>
                        <span>{act.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Human Handoff note */}
                {msg.handOff && (
                  <div className="mt-3 text-xs text-warm-secondary italic border-l-2 border-gold/60 pl-3 py-1">
                    💡 <strong className="text-warm-white not-italic font-medium">Human Handoff Guarantee:</strong> {msg.handOff}
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4 text-warm-white" />
                </div>
              )}
            </div>

            {/* Quick Option Buttons */}
            {msg.options && (
              <div className="flex flex-wrap gap-2.5 pl-11 pt-2">
                {msg.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt)}
                    className="px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-warm-white text-xs font-medium hover:bg-gold hover:text-obsidian transition-all duration-300 shadow-sm hover:scale-[1.02]"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center space-x-3 pl-2">
            <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-gold animate-bounce" />
            </div>
            <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl px-4 py-3 text-xs text-warm-secondary flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-gold animate-spin" />
              <span className="font-mono">Trishul AI is analyzing workflow parameters...</span>
            </div>
          </div>
        )}

        {/* Auto-scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <form onSubmit={handleCustomSubmit} className="p-4 bg-obsidian-surface border-t border-obsidian-border flex items-center gap-3">
        <input
          id="demo-prompt-input"
          name="demoPrompt"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask Trishul anything about your business workflow..."
          className="flex-1 bg-obsidian border border-obsidian-border rounded-xl px-4 py-3 text-sm text-warm-white focus:outline-none focus:border-gold/50 transition-colors placeholder:text-warm-muted font-sans"
        />
        <MetallicButton
          type="submit"
          variant="gold"
          icon={false}
          className="!px-6 !py-3 !rounded-xl shrink-0 text-sm"
        >
          <span>Send</span>
          <Send className="w-4 h-4" />
        </MetallicButton>
      </form>
    </div>
  );
}
