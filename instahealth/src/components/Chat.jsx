import React, { useState, useEffect, useRef } from "react";
import "../CSS/chat.css";
import { a, div } from "framer-motion/client";
import axios from "axios";
import js from "@eslint/js";
// import { json } from "react-router-dom";

const chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    // let res;

    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true); 

    
try {
    const res = await axios.post("http://localhost:1729/chatbot", {
        userqury: input,
      });
  
      const botReply = {
        sender: "bot",
        text: String(res.data),
      };
  
      // Remove loading and add reply
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
        const errorReply = {
          sender: "bot",
          text: "Oops! Something went wrong.",
        };
        setMessages((prev) => [...prev, errorReply]);
        console.error("Error sending message:", error);
      } finally {
        setLoading(false);
      }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatmaindiv">
        <div className="headingtitle"><h1>Mental Health Companian</h1></div>
          <div className="chat-container">
      <div className="chat-box" ref={chatRef}>
        {messages.length === 0 ? (
          <div className="center-input">
            <textarea
              className="chat-input big"
              rows={1}
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSend} className="send-button">
            &#8593;
            </button>
          </div>
        ) : (
          <>
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender} slide-in`} >
                {msg.text}
                
              </div>
              
            ))}
            {loading && (
  <div className="message bot slide-in loading-msg">Typing...</div>
)}
          </>
        )}
      </div>

      {messages.length > 0 && (
        <div className="input-section">
          <textarea
            className="chat-input"
            rows={1}
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSend} className="send-button1">
          &#8593;


          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default chat;
