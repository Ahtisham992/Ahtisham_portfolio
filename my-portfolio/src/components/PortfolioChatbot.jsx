import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, RotateCcw } from 'lucide-react';

const FAQ = {
  skills: "Ahtisham specialises in full-stack development (MERN), React Native, and applied AI/ML (Whisper, Transformers, FastAPI).",
  projects: "Top projects include SalesCare (enterprise ERP with 50+ APIs), Prismora AI (podcast summarisation), and a posture assessment agent.",
  contact: "Email: muhammad.ahtisham.se@gmail.com | LinkedIn: linkedin.com/in/muhammad-ahtisham-6116ba2b2",
  available: "Yes! Ahtisham is actively seeking full-time software engineering roles — onsite, hybrid, or remote.",
  github: "github.com/Ahtisham992 — see live projects including SalesCare and AI agents.",
  experience: "Ahtisham has 2 internships and works as a Software Engineer at Turing Intelligence, Prague (Remote).",
  education: "BS Software Engineering, FAST-NUCES Islamabad, graduating June 2026.",
  salary: "Ahtisham is open to discussing compensation based on role and location. Please reach out directly.",
  default: "I'm a simple rule-based bot. Reach Ahtisham directly at muhammad.ahtisham.se@gmail.com for specific questions!",
};

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

const SUGGESTIONS = [
  "Skills?", "Projects", "Available?", "Experience",
];

const Message = ({ msg }) => {
  const isUser = msg.role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col mb-4 ${isUser ? 'items-end' : 'items-start'}`}
    >
      <span className="text-[10px] uppercase tracking-widest font-bold text-ink-light mb-1">
        {isUser ? 'You' : 'System'}
      </span>
      <div className={`px-4 py-3 text-sm leading-relaxed max-w-[85%] border ${
        isUser 
          ? 'bg-ink text-bone border-ink' 
          : 'bg-surface text-ink border-border'
      }`}>
        {msg.content}
      </div>
    </motion.div>
  );
};

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [hasOpened, setHasOpened] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      setMessages([{
        role: 'assistant',
        content: "System online. Ask about skills, experience, or availability.",
      }]);
    }
  }, [isOpen, hasOpened]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  const send = (text) => {
    const content = (text ?? input).trim();
    if (!content) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content }, { role: 'assistant', content: getReply(content) }]);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') send();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] flex flex-col bg-bone border border-border shadow-2xl"
            style={{ maxHeight: 'calc(100vh - 140px)' }}
          >
            <div className="bg-surface border-b border-border px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-ember animate-pulse" />
                <p className="text-ink font-bold text-xs uppercase tracking-widest">Query System</p>
              </div>
              <div className="flex items-center gap-3 text-ink-light">
                <button onClick={() => setMessages([{ role: 'assistant', content: 'Session cleared.' }])} className="hover:text-ink transition-colors">
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button onClick={() => setIsOpen(false)} className="hover:text-ink transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 min-h-0" style={{ maxHeight: '380px' }}>
              {messages.map((msg, i) => <Message key={i} msg={msg} />)}
              <div ref={bottomRef} />
            </div>

            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex gap-2 flex-wrap">
                {SUGGESTIONS.map(s => (
                  <button key={s} onClick={() => send(s)} className="text-xs px-2 py-1 border border-border text-ink hover:bg-surface transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="p-4 border-t border-border bg-surface">
              <div className="flex items-center gap-2 border border-border bg-bone px-3 py-2 focus-within:border-ink transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Query..."
                  className="flex-1 bg-transparent outline-none text-sm text-ink placeholder-ink-light"
                />
                <button
                  onClick={() => send()}
                  disabled={!input.trim()}
                  className="text-ember hover:text-[#e04518] disabled:opacity-30 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(o => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-ember text-white flex items-center justify-center transition-colors hover:bg-[#e04518]"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </motion.button>
    </>
  );
};

export default PortfolioChatbot;