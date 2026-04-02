import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Translation } from "../types";

interface Props {
  t: Translation;
}

export default function ChatWidget({ t }: Props) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: t.chat.greeting }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = input;

    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    // typing animation
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: t.chat.serverDown
        }
      ]);
      setTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          background: "#111827",
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
        }}
      >
        💬
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: "90px",
              right: "24px",
              width: "340px",
              height: "480px",
              background: "#0f172a",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              overflow: "hidden"
            }}
          >
            {/* Header */}
            <div style={{
              padding: "16px",
              fontWeight: "600",
              color: "white",
              borderBottom: "1px solid #1f2937"
            }}>
              {t.chat.title}
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              padding: "16px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}>
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                      maxWidth: "80%"
                    }}
                  >
                    <div style={{
                      background: msg.role === "user" ? "#4f46e5" : "#1f2937",
                      color: "white",
                      padding: "10px 14px",
                      borderRadius: "12px"
                    }}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ color: "#9ca3af", fontSize: "13px" }}
                >
                  {t.chat.typing}
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div style={{
              padding: "12px",
              borderTop: "1px solid #1f2937",
              display: "flex",
              gap: "8px"
            }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder={t.chat.placeholder}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  outline: "none",
                  background: "#1f2937",
                  color: "white"
                }}
              />
              <button
                onClick={sendMessage}
                style={{
                  background: "#4f46e5",
                  border: "none",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}