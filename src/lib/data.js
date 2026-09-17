export const BRAND = {
  name: "TRISHUL",
  eyebrow: "TRISHUL / AI AUTOMATION STUDIO",
  headline: "AI employees for modern businesses.",
  subheadline: "We build intelligent AI agents that capture leads, handle conversations, automate repetitive work, and keep your business moving — 24/7.",
  positioning: "AI employees for modern businesses.",
  tagline: "Build AI systems that work while you work.",
  founder: "Founder-led AI Automation Studio",
};

export const THREE_PILLARS = [
  {
    number: "01",
    id: "acquire",
    title: "ACQUIRE",
    subtitle: "Capture and qualify opportunities.",
    description: "Turn anonymous visitors and cold inquiries into warm, pre-qualified sales appointments before your team even wakes up.",
    items: [
      "AI Websites & Landing Page Studio",
      "24/7 Multi-channel Lead Capture",
      "Dynamic Lead Qualification",
      "Autonomous Sales Workflows"
    ]
  },
  {
    number: "02",
    id: "serve",
    title: "SERVE",
    subtitle: "Take care of customer conversations.",
    description: "Provide instantaneous, intelligent customer support across WhatsApp, web chat, and voice calls with zero wait times.",
    items: [
      "WhatsApp Business AI Agent",
      "Tier-1 & Tier-2 Customer Support",
      "Conversational Voice AI",
      "Automated Calendar Booking"
    ]
  },
  {
    number: "03",
    id: "operate",
    title: "OPERATE",
    subtitle: "Automate the work behind the scenes.",
    description: "Eliminate repetitive administrative drag by linking your CRM, spreadsheets, internal databases, and team notifications.",
    items: [
      "Real-time CRM Synchronization",
      "Autonomous Data Processing",
      "Smart Multi-tool Notifications",
      "Custom Operations Workflows"
    ]
  }
];

export const SOLUTIONS = [
  {
    id: "web-studio",
    name: "Websites & Landing Pages Studio",
    tagline: "High-converting, bespoke websites & landing pages built with native AI.",
    description: "We design and engineer luxury, ultra-fast websites, dynamic landing pages, and interactive sales funnels equipped with integrated Trishul AI employees and instant lead capture engines.",
    problem: "Generic template websites load slowly, look generic, fail to qualify visitors, and lack interactive AI capabilities.",
    solution: "Custom obsidian & gold web experiences engineered with Next.js, GSAP animations, responsive typography, and embedded Trishul AI employees for maximum conversion.",
    workflow: ["Brand & Wireframe Architecture", "Bespoke Next.js & GSAP Engineering", "Trishul Voice/Chat AI Integration", "Conversion & Speed Optimization", "Global CDN Launch"],
    integrations: ["Next.js", "GSAP & Framer Motion", "Tailwind / Custom CSS", "Vercel / AWS", "Trishul AI Studio", "Google Analytics"],
    badge: "Acquire"
  },
  {
    id: "lead-agent",
    name: "Lead Agent",
    tagline: "Qualify and convert leads 24/7 across every channel.",
    description: "Engages web visitors, asks qualifying questions based on your ideal customer profile, scores intent, and syncs high-value leads directly into your pipeline.",
    problem: "Sales teams waste 60%+ of their time dealing with tire-kickers, spam inquiries, and delayed manual follow-ups.",
    solution: "Trishul Lead Agent instantly responds within 5 seconds, conducts natural qualification dialogues, and books qualified meetings directly into your calendar.",
    workflow: ["New Website / Ad Enquiry", "AI Lead Qualification Dialogue", "Lead Scoring & CRM Update", "Automated Follow-up Email/SMS", "Hand-off to Human Sales Rep"],
    integrations: ["HubSpot", "Salesforce", "WhatsApp API", "Cal.com", "Make / Zapier", "Gmail"],
    badge: "Acquire"
  },
  {
    id: "support-agent",
    name: "Support Agent",
    tagline: "Instant tier-1 support with zero waiting time.",
    description: "Trained on your knowledge base, documentation, and historic tickets to resolve 75%+ of customer queries instantly without human intervention.",
    problem: "Customer support backlogs lead to poor satisfaction scores, slow response times, and burnt-out support staff.",
    solution: "Trishul Support Agent handles frequent customer queries, order status checks, and troubleshooting round-the-clock while escalating complex issues cleanly.",
    workflow: ["Customer Ticket / Chat", "Knowledge Base Retrieval", "Instant Resolution Response", "Sentiment & Satisfaction Check", "Escalation to Human if Needed"],
    integrations: ["Zendesk", "Intercom", "Shopify", "Notion DB", "Slack", "Freshdesk"],
    badge: "Serve"
  },
  {
    id: "booking-agent",
    name: "Booking Agent",
    tagline: "Fill calendars automatically without phone tag.",
    description: "Handles complex scheduling, checks real-time availability, sends multi-channel reminders, and dramatically reduces no-show rates.",
    problem: "Back-and-forth email scheduling and phone tag cause lost leads and empty appointment slots.",
    solution: "Conversational booking AI negotiates available slots with leads, handles rescheduling requests, and sends automated WhatsApp/SMS reminders.",
    workflow: ["Booking Request Received", "Real-time Calendar Sync", "Slot Negotiation & Confirmation", "Automated SMS / WhatsApp Reminder", "CRM Event Creation"],
    integrations: ["Google Calendar", "Outlook", "Calendly", "Cal.com", "Twilio SMS", "WhatsApp"],
    badge: "Serve"
  },
  {
    id: "whatsapp-agent",
    name: "WhatsApp Agent",
    tagline: "Turn WhatsApp into your most productive sales & support channel.",
    description: "Official WhatsApp Business API integration that communicates naturally, shares media catalog assets, and drives revenue over chat.",
    problem: "Businesses miss opportunities on WhatsApp because manual replies are too slow or disjointed.",
    solution: "Trishul WhatsApp Agent responds instantly, guides prospects through interactive options, sends catalog items, and collects customer details seamlessly.",
    workflow: ["Inbound WhatsApp Message", "Context & Intent Recognition", "Rich Media & Catalog Sharing", "Data Collection & Qualification", "Live Agent Handoff"],
    integrations: ["WhatsApp Cloud API", "Interakt", "Wati", "HubSpot", "Google Sheets"],
    badge: "Serve"
  },
  {
    id: "voice-agent",
    name: "Voice Agent",
    tagline: "Human-grade conversational AI over traditional phone calls.",
    description: "Conducts realistic outbound calls for appointment confirmations and handles inbound calls with near-zero latency and natural voice cadence.",
    problem: "Missed phone calls cost service businesses thousands of dollars in lost contracts every month.",
    solution: "Trishul Voice Agent answers calls on the first ring, captures caller intent, collects details, and updates your CRM automatically.",
    workflow: ["Inbound / Outbound Call", "Natural Language Voice AI", "Real-time Intent Processing", "Information Capture", "Call Summary & CRM Sync"],
    integrations: ["Twilio Voice", "Bland AI", "Retell AI", "Vapi", "Salesforce", "Google Workspace"],
    badge: "Serve"
  },
  {
    id: "operations-agent",
    name: "Operations Agent",
    tagline: "Automate repetitive data transfer and internal logistics.",
    description: "Invisible background intelligence that extracts data from invoices, updates databases, triggers notifications, and syncs disjointed software platforms.",
    problem: "Operational drag and manual copy-pasting between disparate software tools slow down growth.",
    solution: "Autonomous workflows process documents, structure unstructured emails, run calculations, and keep every system synchronized continuously.",
    workflow: ["Document / Data Trigger", "AI OCR & Data Extraction", "Validation & Rule Verification", "Database Update", "Team Slack / Email Alert"],
    integrations: ["Make", "n8n", "Airtable", "PostgreSQL", "Google Sheets", "Slack"],
    badge: "Operate"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "Understand",
    title: "We map your workflow friction",
    description: "We analyze your existing team processes, communication channels, and software stack to pinpoint high-volume repetitive tasks."
  },
  {
    step: "02",
    name: "Build",
    title: "Custom AI agent architecture",
    description: "We configure specialized LLMs, prompt guardrails, knowledge retrieval systems, and conversational flows tailored strictly to your business guidelines."
  },
  {
    step: "03",
    name: "Connect",
    title: "Seamless API & stack integration",
    description: "We connect the AI agent directly to your CRM, WhatsApp Business API, calendars, support desks, and internal databases with strict security."
  },
  {
    step: "04",
    name: "Automate",
    title: "Autonomous execution & human handoff",
    description: "Your AI workforce goes live—handling thousands of conversations and background operations 24/7 with graceful human fallback triggers."
  },
  {
    step: "05",
    name: "Improve",
    title: "Continuous monitoring & refinement",
    description: "We monitor conversation logs, edge cases, and accuracy metrics to optimize prompts and expand agent capabilities over time."
  }
];

export const INDUSTRIES = [
  {
    id: "real-estate",
    title: "Real Estate",
    tagline: "Qualify property enquiries before your sales team responds.",
    problem: "Agents spend hours answering basic buyer questions regarding price, location, and property specs instead of closing deals.",
    solution: "Automated WhatsApp and web agents screen buyer budgets, match property criteria, and schedule viewing walkthroughs 24/7.",
    stats: "Screen 100% of property portals instantly",
    link: "/industries#real-estate"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    tagline: "Handle routine questions and appointment requests.",
    problem: "Front desk receptionists are overwhelmed with call volume, patient intake forms, and appointment rescheduling requests.",
    solution: "AI booking and support assistants handle patient inquiries, intake pre-screening, and automated SMS reminders.",
    stats: "Drastically reduce missed consultation slots",
    link: "/industries#healthcare"
  },
  {
    id: "education",
    title: "Education",
    tagline: "Turn student enquiries into qualified counselling appointments.",
    problem: "Prospective students inquire at all hours but delay enrolling when responses take more than 15 minutes.",
    solution: "Instant admission guidance AI answers course detail questions, verifies eligibility requirements, and books counselor sessions.",
    stats: "Instant response across global timezones",
    link: "/industries#education"
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    tagline: "Answer product and order questions automatically.",
    problem: "WISMO ('Where is my order?') tickets and pre-purchase product questions flood customer service teams during peak seasons.",
    solution: "Order-tracking AI connects to Shopify to instantly look up shipping status, handle returns processing, and recommend products.",
    stats: "Resolve 80% of routine tracking tickets instantly",
    link: "/industries#ecommerce"
  },
  {
    id: "hospitality",
    title: "Hospitality & Dining",
    tagline: "Streamline reservation inquiries & guest concierge.",
    problem: "Staff spend valuable shift time answering repetitive phone calls regarding availability, menu items, and private event packages.",
    solution: "24/7 Voice and messaging AI manages table reservations, sends instant confirmation links, and answers event queries.",
    stats: "Never miss a high-value private event lead",
    link: "/industries#hospitality"
  },
  {
    id: "professional-services",
    title: "Professional Services",
    tagline: "Qualify legal, accounting, and consulting inquiries.",
    problem: "Consultants waste valuable billable hours in un-qualified initial discovery calls with clients who lack appropriate budget.",
    solution: "Smart lead screening AI collects project scope, budget parameters, and timeline requirements prior to consultation.",
    stats: "Eliminate low-intent discovery meetings",
    link: "/industries#professional-services"
  },
  {
    id: "local-businesses",
    title: "Local Services",
    tagline: "Capture local service requests when you are on the job site.",
    problem: "Plumbers, HVAC specialists, and contractors lose jobs to competitors when they cannot answer calls while on job sites.",
    solution: "Automated voice and SMS AI captures service addresses, urgency, job details, and schedules dispatch calls.",
    stats: "Capture 100% of missed call opportunities",
    link: "/industries#local-businesses"
  },
  {
    id: "other",
    title: "Custom Enterprise",
    tagline: "Tailored AI agents built specifically for niche enterprise workflows.",
    problem: "Proprietary legacy workflows cannot be solved with cookie-cutter SaaS products.",
    solution: "Custom multi-agent architectures engineered specifically around your legacy software APIs and operational requirements.",
    stats: "Custom API & Database Integrations",
    link: "/contact"
  }
];

export const PRICING_PLANS = [
  {
    name: "STARTER",
    tagline: "For businesses getting started with single-channel AI automation.",
    setup: "₹25,000 – ₹50,000",
    monthly: "₹5,000 – ₹10,000 / mo",
    setupSub: "One-time build & configuration",
    featured: false,
    features: [
      "1 Specialized AI Agent (Lead or Support)",
      "Single Channel Integration (Web Chat or WhatsApp)",
      "Standard Knowledge Base Training (Up to 50 pages)",
      "CRM / Google Sheets Lead Sync",
      "Human Handoff & Notification Alerts",
      "1 Month of Post-Deployment Refinement",
      "Basic Analytics Dashboard"
    ],
    cta: "Build Starter Agent"
  },
  {
    name: "GROWTH",
    tagline: "For scaling businesses automating multiple customer & internal workflows.",
    setup: "₹60,000 – ₹1.5 Lakh",
    monthly: "₹10,000 – ₹25,000 / mo",
    setupSub: "Custom system architecture & setup",
    featured: true,
    badge: "Most Popular",
    features: [
      "Up to 3 Specialized AI Agents",
      "Multi-Channel (WhatsApp, Web, Voice & Email)",
      "Advanced Dynamic Knowledge Base & Vector Retrieval",
      "Complex CRM & Calendar Integrations (HubSpot/Salesforce/Cal)",
      "Automated Multi-step Follow-up Campaigns",
      "Priority SLA & Continuous Prompt Optimization",
      "Custom Workflow Trigger Webhooks"
    ],
    cta: "Build Growth System"
  },
  {
    name: "CUSTOM",
    tagline: "For complex enterprise operations requiring custom AI infrastructure.",
    setup: "Custom Setup",
    monthly: "Custom Monthly",
    setupSub: "Tailored contract & enterprise SLA",
    featured: false,
    features: [
      "Unlimited Specialized AI Workforce",
      "Full API & Proprietary Database Integration",
      "Voice AI Outbound & Inbound Telephony Systems",
      "On-Premise / Private Cloud LLM Deployment Options",
      "Dedicated AI Solutions Engineer Support",
      "Enterprise Security & Custom Compliance Guardrails",
      "Custom Agent Training & Fine-Tuning"
    ],
    cta: "Consult Founder"
  }
];

export const FAQS = [
  {
    q: "What is an AI agent?",
    a: "An AI agent is a domain-trained intelligent system capable of understanding natural human language, making logical decisions based on your business rules, executing actions across software platforms (like booking calendars or updating CRMs), and communicating autonomously."
  },
  {
    q: "How long does setup take?",
    a: "A Starter AI agent takes between 5 to 10 business days from discovery to live deployment. Growth and Multi-agent systems typically take 2 to 3 weeks depending on the complexity of your custom CRM and API integrations."
  },
  {
    q: "Can you connect WhatsApp Business?",
    a: "Yes. We integrate directly with the official WhatsApp Business Cloud API. Your AI agent can handle incoming chats, present interactive buttons, send catalog items, collect lead details, and hand off conversations to human agents inside WhatsApp."
  },
  {
    q: "Can you connect our existing CRM?",
    a: "Absolutely. We connect with HubSpot, Salesforce, Zoho, Pipedrive, Airtable, Notion, and Google Sheets using native APIs, webhooks, or automation middleware like Make and n8n."
  },
  {
    q: "Can the AI hand off conversations to human team members?",
    a: "Yes! Automation should feel invisible, and human handoff is a non-negotiable principle at Trishul. When an inquiry requires human intervention, low confidence, or a high-value customer requests a real human, the AI immediately alerts your team on WhatsApp, Slack, or email with full transcript context."
  },
  {
    q: "Can we customize the AI agent's tone and brand guidelines?",
    a: "Completely. We program every AI agent with strict system instructions, brand tone rules, forbidden topics, guardrails, and company specific guidelines so it represents your brand with high sophistication."
  },
  {
    q: "What happens after deployment?",
    a: "We do not leave you with a raw tool. Trishul includes continuous monitoring, log auditing, prompt updates, and accuracy tuning in all monthly maintenance plans to ensure your system evolves seamlessly."
  }
];

export const WHY_TRISHUL_PRINCIPLES = [
  {
    title: "Simple",
    desc: "No complex dashboards or bloated interfaces to learn. Trishul operates silently in the channels your team already uses."
  },
  {
    title: "Powerful",
    desc: "Built using state-of-the-art LLMs, fast vector stores, and custom action APIs for instant execution."
  },
  {
    title: "Reliable",
    desc: "Rigorous system guardrails prevent hallucinations, off-topic conversations, and unapproved commitments."
  },
  {
    title: "Human when necessary",
    desc: "AI should handle repetitive friction, then gracefully hand off to your team when real human empathy is needed."
  },
  {
    title: "Built around your workflow",
    desc: "We don't force you to change how you work. We engineer AI around your existing business processes."
  },
  {
    title: "Designed to scale",
    desc: "Handle 10 or 10,000 inquiries simultaneously without increasing headcount or degrading quality."
  }
];
