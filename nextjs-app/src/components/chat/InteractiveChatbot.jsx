'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

// Comprehensive Conversational Flow
const chatFlow = {
  start: {
    message: "Hi there! 👋 Welcome to GPS Spindles. I'm your virtual assistant. How can I help you today?",
    options: [
      { label: "Our Services", next: "services" },
      { label: "Brands We Repair", next: "brands" },
      { label: "Industries We Serve", next: "industries" },
      { label: "Contact an Engineer", next: "contact_menu" }
    ]
  },

  // --- SERVICES PATH ---
  services: {
    message: "We offer a comprehensive range of precision spindle solutions. What specific service are you looking for?",
    options: [
      { label: "VMC / HMC / CNC Repair", next: "srv_vmc" },
      { label: "High-Frequency Grinding", next: "srv_hf" },
      { label: "Custom Manufacturing", next: "srv_custom" },
      { label: "Accessories & Parts", next: "srv_parts" },
      { label: "Go Back", next: "start" }
    ]
  },
  srv_vmc: {
    message: "We specialize in complete restoration and rebuilding of VMC, HMC, and CNC spindles with high precision testing and dynamic balancing.",
    options: [
      { label: "Request a Repair Quote", next: "capture_lead" },
      { label: "View Service Page", action: "link", url: "/services/vmc-hmc-and-cnc-spindles-reconditioning-repairing-services" },
      { label: "Go Back", next: "services" }
    ]
  },
  srv_hf: {
    message: "Our High-Frequency Grinding Spindle repair service ensures extreme RPM stability and precision for delicate grinding operations.",
    options: [
      { label: "Request a Repair Quote", next: "capture_lead" },
      { label: "View Service Page", action: "link", url: "/services/high-frequency-speed-precision-grinding-spindles-repairing-services" },
      { label: "Go Back", next: "services" }
    ]
  },
  srv_custom: {
    message: "Need something unique? We design and manufacture custom spindles based on your exact engineering drawings and specifications.",
    options: [
      { label: "Discuss with an Engineer", next: "contact_menu" },
      { label: "View Service Page", action: "link", url: "/services/customized-spindles-manufacturer" },
      { label: "Go Back", next: "services" }
    ]
  },
  srv_parts: {
    message: "We supply top-tier spindle accessories including precision ceramic bearings, rotary unions, drawbars, and cooling jackets.",
    options: [
      { label: "Inquire about a Part", next: "capture_lead" },
      { label: "View Service Page", action: "link", url: "/services/spindle-accessories-spare-parts-manufacturer" },
      { label: "Go Back", next: "services" }
    ]
  },

  // --- BRANDS PATH ---
  brands: {
    message: "We have deep expertise in repairing over 38 global spindle brands, including industry leaders like Haas, Mazak, Kessler, DMG Mori, and Makino.",
    options: [
      { label: "My Brand Needs Repair", next: "capture_lead" },
      { label: "View All 38+ Brands", action: "link", url: "/brands-we-repair" },
      { label: "Go Back", next: "start" }
    ]
  },

  // --- INDUSTRIES PATH ---
  industries: {
    message: "GPS Spindles serves critical manufacturing sectors, including Automotive, Aerospace, Medical Devices, Heavy Engineering, and Mould & Die.",
    options: [
      { label: "View Industries Page", action: "link", url: "/industries-we-serve" },
      { label: "Discuss Industry Needs", next: "contact_menu" },
      { label: "Go Back", next: "start" }
    ]
  },

  // --- CONTACT & LEAD CAPTURE PATH ---
  contact_menu: {
    message: "We're here to help! Who would you like to speak with?",
    options: [
      { label: "+91 8484898144 (Spindle Repair)", action: "call", phone: "+918484898144" },
      { label: "+91 97642 52188 (Manufacturing)", action: "call", phone: "+919764252188" },
      { label: "Chat on WhatsApp", action: "whatsapp_general" },
      { label: "Go Back", next: "start" }
    ]
  },
  capture_lead: {
    message: "Great! To ensure we assist you accurately, please type the brand of your machine or the specific part you need.",
    input: "text",
    placeholder: "e.g., Haas VMC, Ceramic Bearing...",
    next: "capture_phone"
  },
  capture_phone: {
    message: "Got it! Our technical expert needs to discuss this with you. Please enter your 10-digit mobile number so we can call you immediately.",
    input: "tel",
    placeholder: "Mobile Number",
    next: "finish"
  },
  finish: {
    message: "Thank you! To complete your request and notify our engineers instantly, click the button below.",
    options: [
      { label: "Complete Request via WhatsApp", action: "whatsapp_lead" },
      { label: "Back to Main Menu", next: "start" }
    ]
  }
};

export default function InteractiveChatbot() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState('start');
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState({});
  const messagesEndRef = useRef(null);

  // Open chatbot via external event (e.g. scrolling past metrics)
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };
    window.addEventListener('open-chatbot', handleOpenChat);
    return () => {
      window.removeEventListener('open-chatbot', handleOpenChat);
    };
  }, []);

  // Initialize chat
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(chatFlow.start);
    }
  }, [isOpen]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const addBotMessage = (stepData) => {
    setIsTyping(true);
    // Simulate typing delay based on message length
    const delay = Math.min(Math.max(stepData.message.length * 20, 500), 1500);

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: stepData.message, options: stepData.options, input: stepData.input }]);
      setIsTyping(false);
    }, delay);
  };

  const handleOptionClick = (option) => {
    // Intercept Custom Actions (Link, Call, WhatsApp)
    if (option.action) {
      if (option.action === 'link') {
        router.push(option.url);
        // Optional: Close chat on navigation
        // setIsOpen(false);
      } else if (option.action === 'call') {
        window.location.href = `tel:${option.phone}`;
      } else if (option.action === 'whatsapp_general') {
        window.open('https://wa.me/918484898144?text=Hi%20GPS%20Spindles!%20I%20need%20assistance.', '_blank');
      } else if (option.action === 'whatsapp_lead') {
        const msg = `Hi GPS Spindles! I have an inquiry.\nDetails: ${userData.details || 'N/A'}\nMy Contact Number: ${userData.phone}\n\nPlease assist me.`;
        window.open('https://wa.me/918484898144?text=' + encodeURIComponent(msg), '_blank');
      }

      // Still show the user's choice in chat
      setMessages(prev => {
        const newMessages = [...prev];
        if (newMessages.length > 0 && newMessages[newMessages.length - 1].options) {
          newMessages[newMessages.length - 1].options = [];
        }
        return [...newMessages, { sender: 'user', text: option.label }];
      });

      // If it was the final lead step, say goodbye, else return to start
      if (option.action === 'whatsapp_lead') {
        setCurrentStep('start');
        addBotMessage({ message: "Redirecting you to WhatsApp now! Chat session complete.", options: [{ label: "Start Over", next: "start" }] });
      } else if (option.action === 'link') {
        setCurrentStep('start');
        addBotMessage({ message: "Navigating you to the page now!", options: chatFlow.start.options });
      }
      return;
    }

    // Standard Chat Progression
    setMessages(prev => {
      const newMessages = [...prev];
      if (newMessages.length > 0 && newMessages[newMessages.length - 1].options) {
        newMessages[newMessages.length - 1].options = [];
      }
      return [...newMessages, { sender: 'user', text: option.label }];
    });

    // Move to next step
    setCurrentStep(option.next);
    addBotMessage(chatFlow[option.next]);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => {
      const newMessages = [...prev];
      newMessages[newMessages.length - 1].input = null; // Hide input field
      return [...newMessages, { sender: 'user', text: inputValue }];
    });

    const stepData = chatFlow[currentStep];

    // Save data based on step
    if (currentStep === 'capture_lead') {
      setUserData(prev => ({ ...prev, details: inputValue }));
    } else if (currentStep === 'capture_phone') {
      setUserData(prev => ({ ...prev, phone: inputValue }));
    }

    setInputValue('');
    setCurrentStep(stepData.next);
    addBotMessage(chatFlow[stepData.next]);
  };

  return (
    <>
      <style>{`
        @keyframes chat-slide-up {
          0% { opacity: 0; transform: scale(0.9) translateY(40px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .typing-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: var(--muted);
          border-radius: 50%;
          margin: 0 2px;
          animation: typing 1.4s infinite ease-in-out both;
        }
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        @media (max-width: 768px) {
          /* Move chatbot bubble & window up on mobile to avoid overlapping sticky CTA bar */
          .chatbot-toggle {
            bottom: 92px !important;
            right: 20px !important;
          }
          .chatbot-window {
            width: calc(100vw - 40px) !important;
            max-width: 360px !important;
            right: 20px !important;
            bottom: 165px !important;
          }
        }
      `}</style>

      {/* Chat Bubble Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-toggle"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--orange)',
          color: '#fff',
          border: 'none',
          boxShadow: '0 8px 32px rgba(234,88,12,0.4)',
          cursor: 'pointer',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: isOpen ? 'scale(0.8)' : 'scale(1)'
        }}
        aria-label="Toggle Chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '28px', height: '28px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '32px', height: '32px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window" style={{
          position: 'fixed',
          bottom: '108px',
          right: '28px',
          width: '360px',
          height: '500px',
          maxHeight: 'calc(100vh - 200px)',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(15,23,42,0.15)',
          border: '1px solid rgba(255,255,255,0.4)',
          zIndex: 9998,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'chat-slide-up 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
          transformOrigin: 'bottom right'
        }}>

          {/* Chat Header */}
          <div style={{
            background: 'var(--navy)',
            padding: '20px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}>
                G
              </div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', background: '#22c55e', borderRadius: '50%', border: '2px solid var(--navy)' }}></div>
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>GPS Assistant</h4>
              <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>Typically replies instantly</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{ textAlign: 'center', margin: '10px 0', fontSize: '12px', color: 'var(--muted)' }}>
              Today
            </div>

            {messages.map((msg, idx) => (
              <div key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                width: '100%'
              }}>
                <div style={{
                  maxWidth: '85%',
                  padding: '12px 16px',
                  borderRadius: msg.sender === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                  background: msg.sender === 'user' ? 'var(--orange)' : 'var(--off-white)',
                  color: msg.sender === 'user' ? '#fff' : 'var(--navy)',
                  fontSize: '14.5px',
                  lineHeight: 1.5,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  border: msg.sender === 'bot' ? '1px solid var(--border)' : 'none'
                }}>
                  {msg.text}
                </div>

                {/* Bot Options */}
                {msg.sender === 'bot' && msg.options && msg.options.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px', width: '100%' }}>
                    {msg.options.map((opt, oIdx) => (
                      <button key={oIdx} onClick={() => handleOptionClick(opt)} style={{
                        background: opt.action === 'call' || opt.action === 'whatsapp_lead' ? 'var(--orange)' : '#fff',
                        border: '1px solid var(--orange)',
                        color: opt.action === 'call' || opt.action === 'whatsapp_lead' ? '#fff' : 'var(--orange)',
                        padding: '10px 16px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        textAlign: 'left'
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--orange)'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = opt.action === 'call' || opt.action === 'whatsapp_lead' ? 'var(--orange)' : '#fff'; e.currentTarget.style.color = opt.action === 'call' || opt.action === 'whatsapp_lead' ? '#fff' : 'var(--orange)'; }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '14px 20px',
                  borderRadius: '20px 20px 20px 4px',
                  background: 'var(--off-white)',
                  border: '1px solid var(--border)'
                }}>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Area (Only shown when requested by step) */}
          {messages.length > 0 && messages[messages.length - 1].sender === 'bot' && messages[messages.length - 1].input && !isTyping && (
            <form onSubmit={handleInputSubmit} style={{
              padding: '16px',
              borderTop: '1px solid var(--border)',
              background: '#fff',
              display: 'flex',
              gap: '12px'
            }}>
              <input
                type={messages[messages.length - 1].input}
                placeholder={chatFlow[currentStep].placeholder || "Type your answer..."}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '24px',
                  border: '1px solid var(--border)',
                  outline: 'none',
                  fontSize: '14px',
                  background: 'var(--off-white)'
                }}
                autoFocus
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: inputValue.trim() ? 'var(--orange)' : '#e2e8f0',
                  color: '#fff',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                  transition: 'background 0.3s'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '20px', height: '20px', marginLeft: '2px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          )}

        </div>
      )}
    </>
  );
}
