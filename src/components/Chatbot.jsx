import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSend } from "react-icons/fi";
import { botProfile, knowledgeBase, fallbackAnswer, suggestedQuestions } from "../data/chatbot";
import BotAvatar from "./BotAvatar";

function findAnswer(query) {
  const q = query.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;
  for (const entry of knowledgeBase) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (q.includes(kw.toLowerCase())) score += kw.length;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }
  return bestScore > 0 ? bestMatch.answer : fallbackAnswer;
}

function BotMessage({ blocks }) {
  return (
    <div className="chat-msg chat-msg-bot">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return <div key={i} className="chat-heading">{block.content}</div>;
          case "text":
            return <div key={i} className="chat-text">{block.content}</div>;
          case "list":
            return (
              <ul key={i} className="chat-list">
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            );
          case "quote":
            return <div key={i} className="chat-quote">"{block.content}"</div>;
          default:
            return null;
        }
      })}
    </div>
  );
}

const msgVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: botProfile.greeting },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text) => {
    const q = (text || input).trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const answer = findAnswer(q);
      setMessages((m) => [...m, { role: "bot", blocks: answer }]);
      setTyping(false);
    }, 600 + Math.random() * 400);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="chat-header">
              <span className="chat-header-title">
                <BotAvatar size={28} />
                <span>
                  <span className="chat-bot-name">{botProfile.name}</span>
                  <span className="chat-bot-tagline">{botProfile.tagline}</span>
                </span>
              </span>
              <button className="chat-close" onClick={() => setOpen(false)}>
                <FiX />
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((m, i) =>
                m.role === "user" ? (
                  <motion.div
                    key={i}
                    className="chat-msg chat-msg-user"
                    variants={msgVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {m.text}
                  </motion.div>
                ) : m.blocks ? (
                  <motion.div
                    key={i}
                    variants={msgVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <BotMessage blocks={m.blocks} />
                  </motion.div>
                ) : (
                  <motion.div
                    key={i}
                    className="chat-msg chat-msg-bot"
                    variants={msgVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {m.text}
                  </motion.div>
                )
              )}
              {messages.length === 1 && !typing && (
                <motion.div
                  className="chat-suggestions"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      className="chat-chip"
                      onClick={() => send(q)}
                    >
                      {q}
                    </button>
                  ))}
                </motion.div>
              )}
              {typing && (
                <motion.div
                  className="chat-msg chat-msg-bot chat-typing"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <span /><span /><span />
                </motion.div>
              )}
              <div ref={endRef} />
            </div>

            <form
              className="chat-input-wrap"
              onSubmit={(e) => { e.preventDefault(); send(); }}
            >
              <input
                className="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Nimbus anything..."
                autoFocus
              />
              <button type="submit" className="chat-send">
                <FiSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="chat-fab-wrap">
        {!open && (
          <motion.span
            className="chat-fab-label"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.4, duration: 0.4 }}
          >
            Ask Nimbus
          </motion.span>
        )}
        <motion.button
          className="chat-fab"
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Open chat"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 2, duration: 0.6, type: "spring", stiffness: 200 }}
        >
          <span className="chat-fab-inner">
            {open ? <FiX /> : <BotAvatar size={38} variant="fab" />}
          </span>
        </motion.button>
      </div>
    </>
  );
}
