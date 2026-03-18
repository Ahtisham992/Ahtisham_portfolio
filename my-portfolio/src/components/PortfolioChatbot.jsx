// ========================================
// FILE: src/components/PortfolioChatbot.jsx
// TASK 4.1: Replaced Groq/LLM API call with a local rule-based FAQ
//           chatbot. No external requests, no API key in the bundle.
// ========================================
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle, X, Send, Bot, User, Sparkles, RotateCcw,
} from 'lucide-react';

// ── FAQ response map ──────────────────────────────────────────────────────────
const FAQ = {
  skills:
    "Ahtisham specialises in full-stack development (MERN), React Native, and applied AI/ML (Whisper, Transformers, FastAPI). Full list: ahtisham-dev.site/#skills",
  projects:
    "Top projects include SalesCare (enterprise ERP with 50+ APIs), Prismora AI (podcast summarisation with Whisper NLP — Grade A FYP), and a posture assessment agent deployed on Hugging Face. See: ahtisham-dev.site/#projects",
  contact:
    "Email: muhammad.ahtisham.se@gmail.com | LinkedIn: linkedin.com/in/muhammad-ahtisham-6116ba2b2",
  available:
    "Yes! Ahtisham is actively seeking full-time software engineering roles — onsite, hybrid, or remote. He is available from graduation in June 2026 (or earlier).",
  github:
    "github.com/Ahtisham992 — see live projects including SalesCare and the posture assessment agent.",
  experience:
    "Ahtisham has 2 internships: Web Dev Intern at eAccounting360 (2024) and current part-time Software Engineer at Turing Intelligence, Prague (May 2025–Present).",
  education:
    "BS Software Engineering, FAST-NUCES Islamabad, graduating June 2026.",
  salary:
    "Ahtisham is open to discussing compensation based on role and location. Please reach out directly.",
  default:
    "I'm not sure about that — reach Ahtisham directly at muhammad.ahtisham.se@gmail.com for any specific questions!",
};

// ── Keyword → FAQ key mapping ─────────────────────────────────────────────────
const RULES = [
  { pattern: /skill/i,                       key: 'skills'     },
  { pattern: /project/i,                     key: 'projects'   },
  { pattern: /contact|email|phone/i,         key: 'contact'    },
  { pattern: /availab|hire|work|job/i,       key: 'available'  },
  { pattern: /github/i,                      key: 'github'     },
  { pattern: /experience|intern|work/i,      key: 'experience' },
  { pattern: /education|university|degree|fast/i, key: 'education' },
  { pattern: /salary|pay|compens/i,          key: 'salary'     },
];

const getReply = (input) => {
  const matched = RULES.find(({ pattern }) => pattern.test(input));
  return FAQ[matched ? matched.key : 'default'];
};

// ── Quick-suggestion chips shown before the first user message ────────────────
const SUGGESTIONS = [
  "What are your top skills?",
  "Tell me about SalesCare",
  "Are you open to work?",
  "Show me your GitHub",
  "What's your experience?",
];

// ── Sub-components ────────────────────────────────────────────────────────────
const Message = ({ msg }) => {
  const isUser = msg.role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className={`flex items-end gap-2 mb-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div
            className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 ${
              isUser
                ? 'bg-slate-800 text-white'
                : 'bg-primary-600 text-white'
            }`}
          >
            {isUser
              ? <User className="w-4 h-4 text-white" />
              : <Bot  className="w-4 h-4 text-white" />}
          </div>
          <div
            className={`max-w-[78%] px-4 py-2.5 rounded-lg text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
              isUser
                ? 'bg-primary-600 text-white rounded-br-sm'
                : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-sm'
            }`}
          >
        {msg.content}
      </div>
    </motion.div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const PortfolioChatbot = () => {
  const [isOpen,     setIsOpen]     = useState(false);
  const [input,      setInput]      = useState('');
  const [messages,   setMessages]   = useState([]);
  const [hasOpened,  setHasOpened]  = useState(false);
  const [pulse,      setPulse]      = useState(true);

  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  // Greeting on first open
  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      setPulse(false);
      setMessages([{
        role: 'assistant',
        content: "Hi there! 👋 I'm Ahtisham's assistant. Ask me about his skills, projects, experience, or availability!",
      }]);
    }
  }, [isOpen, hasOpened]);

  // Scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const send = (text) => {
    const content = (text ?? input).trim();
    if (!content) return;
    setInput('');

    const userMsg  = { role: 'user',      content };
    const botReply = { role: 'assistant', content: getReply(content) };

    setMessages((prev) => [...prev, userMsg, botReply]);
  };

  const reset = () => {
    setMessages([{
      role: 'assistant',
      content: "Chat cleared! Ask me anything about Ahtisham. 😊",
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
      {/* ── Chat window ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1,   y: 0  }}
            exit={  { opacity: 0, scale: 0.9, y: 20  }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-24px)] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 140px)' }}
          >
            {/* Header */}
            <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-400" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-accent-500 border-2 border-slate-900 rounded-full" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">Ahtisham's Assistant</p>
                  <p className="text-slate-400 text-xs font-mono">Status: Online</p>
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
            <div
              className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900 min-h-0"
              style={{ maxHeight: '380px' }}
            >
              {messages.map((msg, i) => <Message key={i} msg={msg} />)}
              <div ref={bottomRef} />
            </div>

            {/* Suggestion chips (only before first user message) */}
            {messages.length <= 1 && (
              <div className="px-3 pt-2 pb-1 bg-gray-50 dark:bg-gray-900 flex gap-1.5 flex-wrap flex-shrink-0">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-xs px-3 py-1.5 rounded-md bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors font-mono whitespace-nowrap"
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
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask me anything…"
                  className="flex-1 bg-transparent outline-none text-sm font-mono text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500"
                />
                <button
                  onClick={() => send()}
                  disabled={!input.trim()}
                  className="w-7 h-7 rounded-md bg-primary-600 hover:bg-primary-500 flex items-center justify-center disabled:opacity-40 hover:shadow-sm transition-all flex-shrink-0"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAB button ───────────────────────────────────────────────────── */}
      <motion.button
        onClick={() => setIsOpen((o) => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-md bg-primary-600 shadow-lg hover:bg-primary-500 flex items-center justify-center transition-colors border border-primary-500"
        aria-label="Open chat"
      >
        {pulse && (
          <span className="absolute inset-0 rounded-md bg-primary-400 animate-ping opacity-40" />
        )}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={  { rotate:  90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate:  90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={  { rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread dot on first load */}
        {!isOpen && !hasOpened && (
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent-500 border-2 border-slate-900 rounded-full text-[10px] font-bold text-white flex items-center justify-center">
            1
          </span>
        )}
      </motion.button>
    </>
  );
};

export default PortfolioChatbot;