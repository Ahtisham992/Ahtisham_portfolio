// ========================================
// FILE: src/components/PortfolioChatbot.jsx
// ========================================
// SETUP:
//   1. Drop this file into src/components/
//   2. Add <PortfolioChatbot /> inside App.jsx (alongside <KonamiCode />)
//   3. Set your Anthropic API key in the ANTHROPIC_API_KEY constant below
//      (or pass it via an environment variable: import.meta.env.VITE_ANTHROPIC_API_KEY)
// ========================================

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles, RotateCcw } from 'lucide-react';

// ── Config ──────────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are an AI assistant embedded in M. Ahtisham's personal portfolio website. 
Your job is to answer visitor questions about Ahtisham in a friendly, enthusiastic, and concise way.

ABOUT AHTISHAM:
- Full name: Muhammad Ahtisham
- Final-year BS Software Engineering student at FAST-NUCES Islamabad (2022–2026)
- Based in Satellite Town, Rawalpindi, Pakistan
- Email: shamimuhammad77@gmail.com | Phone: +92 320 5999041

SKILLS:
- Frontend: React.js (80%), React Native (75%), HTML/CSS/JS (95%)
- Backend: Node.js/Express (88%), MongoDB (82%), PostgreSQL (85%)
- AI/ML: Python (78%), Machine Learning Models (72%)
- Cloud: AWS Foundational (70%)

EXPERIENCE:
- Web Development Intern at E-Counting 360 Pvt Ltd, Islamabad (Jul–Aug 2024)
  • Front-end dev with HTML, CSS, JS; MERN stack; MySQL

KEY PROJECTS:
1. SalesCare Service Center – full-stack enterprise ERP (React + Node + PostgreSQL) with 25+ DB tables, 50+ API endpoints, role-based access, invoice PDF generation
2. Smart Dua Companion – React Native Islamic app (TypeScript + Redux) with bilingual EN/UR support, offline-first, 100+ duas
3. Prismora AI – AI podcast summariser using Whisper AI, BERT, FastAPI, React Native
4. Ergonomic Posture Assessment Agent – FastAPI + MediaPipe + Docker on Hugging Face
5. AWS Photo Gallery – React + Node + AWS (S3, EC2, RDS, Elastic Beanstalk)
6. AI-Powered Code Assistant – Python/CodeT5 for bug detection, docstring generation, test creation
7. University Management System – MERN stack academic platform

CERTIFICATIONS:
- IBM: Developing Front-End Apps with React
- AWS Academy Cloud Foundations
- Udemy: Flutter & Dart Development
- Coursera: User Experience Design

SOCIAL:
- GitHub: https://github.com/Ahtisham992
- LinkedIn: https://www.linkedin.com/in/muhammad-ahtisham-6116ba2b2/
- Instagram: https://www.instagram.com/_m_ahtish.05/

AVAILABILITY: Open to work — internships, freelance, full-time roles.

RESPONSE RULES:
- Keep replies SHORT (2–4 sentences max) unless a detailed list is genuinely needed.
- Be warm, professional, and enthusiastic about Ahtisham's work.
- For links, output them as plain URLs (not markdown).
- If asked something you don't know, say so honestly and suggest emailing Ahtisham directly.
- Never make up facts. Stick to what's above.`;

const SUGGESTIONS = [
  "What are your top skills?",
  "Tell me about SalesCare",
  "Are you open to work?",
  "What's your tech stack?",
  "Show me your GitHub",
];

// ── Helpers ──────────────────────────────────────────────────────────────────

async function askAI(messages) {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      max_tokens: 400,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ]
    })
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? 'Sorry, try again!';
}

// ── Sub-components ────────────────────────────────────────────────────────────
const TypingIndicator = () => (
  <div className="flex items-end gap-2 mb-3">
    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
      <Bot className="w-4 h-4 text-white" />
    </div>
    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
      <div className="flex gap-1 items-center h-4">
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s`, animationDuration: '0.8s' }}
          />
        ))}
      </div>
    </div>
  </div>
);

const Message = ({ msg }) => {
  const isUser = msg.role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex items-end gap-2 mb-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Avatar */}
      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
        isUser
          ? 'bg-gradient-to-br from-gray-700 to-gray-900'
          : 'bg-gradient-to-br from-purple-600 to-fuchsia-500'
      }`}>
        {isUser
          ? <User className="w-4 h-4 text-white" />
          : <Bot className="w-4 h-4 text-white" />}
      </div>

      {/* Bubble */}
      <div className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
        isUser
          ? 'bg-gradient-to-br from-purple-600 to-fuchsia-500 text-white rounded-br-sm'
          : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-bl-sm'
      }`}>
        {msg.content}
      </div>
    </motion.div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const PortfolioChatbot = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [input, setInput]       = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading]   = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [pulse, setPulse]       = useState(true);
  const bottomRef               = useRef(null);
  const inputRef                = useRef(null);

  // Stop pulsing after first open
  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      setPulse(false);
      // Greeting
      setMessages([{
        role: 'assistant',
        content: "Hi there! 👋 I'm Ahtisham's AI assistant. Ask me anything about his skills, projects, or availability!"
      }]);
    }
  }, [isOpen, hasOpened]);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const send = async (text) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    setInput('');

    const userMsg = { role: 'user', content };
    const next = [...messages, userMsg];
    setMessages(next);
    setLoading(true);

    try {
      // Only send role + content to the API
      const apiMessages = next.map(({ role, content }) => ({ role, content }));
      const reply = await askAI(apiMessages);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Oops, something went wrong. Please try again or email Ahtisham directly at shamimuhammad77@gmail.com"
      }]);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setMessages([{
      role: 'assistant',
      content: "Chat cleared! Ask me anything about Ahtisham. 😊"
    }]);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* ── Chat Window ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-24px)] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 140px)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">Ahtisham's Assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={reset}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                  title="Clear chat"
                >
                  <RotateCcw className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900 min-h-0"
                 style={{ maxHeight: '380px' }}>
              {messages.map((msg, i) => <Message key={i} msg={msg} />)}
              {loading && <TypingIndicator />}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions (only before first user message) */}
            {messages.length <= 1 && (
              <div className="px-3 pt-2 pb-1 bg-gray-50 dark:bg-gray-900 flex gap-1.5 flex-wrap flex-shrink-0">
                {SUGGESTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-xs px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/70 transition-colors font-medium whitespace-nowrap"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-3 pb-3 pt-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex-shrink-0">
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 focus-within:border-purple-400 dark:focus-within:border-purple-500 transition-colors shadow-sm">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask me anything…"
                  disabled={loading}
                  className="flex-1 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 disabled:opacity-50"
                />
                <button
                  onClick={() => send()}
                  disabled={!input.trim() || loading}
                  className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center disabled:opacity-40 hover:shadow-md transition-all flex-shrink-0"
                >
                  {loading
                    ? <Loader2 className="w-3.5 h-3.5 text-white animate-spin" />
                    : <Send className="w-3.5 h-3.5 text-white" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAB Button ──────────────────────────────────────────────────────── */}
      <motion.button
        onClick={() => setIsOpen(o => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-fuchsia-500 shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow"
        aria-label="Open chat"
      >
        {/* Pulse ring when never opened */}
        {pulse && (
          <span className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-60" />
        )}
        <AnimatePresence mode="wait">
          {isOpen
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="w-6 h-6 text-white" />
              </motion.div>
            : <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>}
        </AnimatePresence>

        {/* Unread dot when closed & greeted */}
        {!isOpen && hasOpened === false && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full text-[9px] font-bold text-white flex items-center justify-center">1</span>
        )}
      </motion.button>
    </>
  );
};

export default PortfolioChatbot;