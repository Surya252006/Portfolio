import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Send,
  X,
  Sparkles,
  Download,
  ExternalLink,
  Trash2,
  Minimize2,
  ChevronRight,
  MessageSquare,
  ArrowRight,
  FileDown,
} from 'lucide-react';
import { Button } from './ui/button';
import {
  ChatMessage,
  initialSuggestions,
  getSpoofyResponse,
} from '@/lib/spoofyEngine';
import {
  logChatMessageToBackend,
  exportSessionAsMarkdown,
} from '@/lib/supabaseService';

export function SpoofyChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Persistent unique session ID for backend logging & git archiving
  const sessionId = useMemo(
    () => `session_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 7)}`,
    []
  );

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'spoofy',
      text: "👋 **Hi! I am Spoofy**, Surya S.'s dedicated **24/7 AI Representative**.\n\nI can assist you with details about Surya's **software engineering background**, **live platforms** (PosterKadai, KisanConnect, TN Scheme AI), **technical skills**, or help you **download his verified resume**.\n\nHow can I help you today?",
      timestamp: 'Just now',
      actions: [
        { label: 'View Featured Projects', actionType: 'scroll', targetId: 'projects' },
        { label: 'Download ATS Resume', actionType: 'download', url: '/resume/Surya_S_Software_Developer_Resume.pdf' },
        { label: 'What is his Tech Stack?', actionType: 'scroll', targetId: 'skills' },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasOpenedBefore(true);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  useEffect(() => {
    const handleOpenChat = (e: Event) => {
      setIsOpen(true);
      const customEvent = e as CustomEvent<{ query?: string }>;
      if (customEvent.detail?.query) {
        // Small delay to ensure chatbot open animation has begun
        setTimeout(() => {
          handleSend(customEvent.detail?.query);
        }, 200);
      }
    };
    window.addEventListener('open-spoofy-chat', handleOpenChat);
    return () => window.removeEventListener('open-spoofy-chat', handleOpenChat);
  }, []);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Asynchronously log user message to Supabase & session cache
    logChatMessageToBackend(sessionId, 'user', text);

    // Realistic AI token streaming delay
    const responseDelay = Math.min(800, Math.max(350, text.length * 15));

    setTimeout(() => {
      const response = getSpoofyResponse(text);
      const botMsg: ChatMessage = {
        id: `spoofy-${Date.now()}`,
        sender: 'spoofy',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: response.actions,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);

      // Asynchronously log bot message to Supabase & session cache
      logChatMessageToBackend(sessionId, 'spoofy', response.text);
    }, responseDelay);
  };

  const handleExportChat = () => {
    const md = exportSessionAsMarkdown(sessionId);
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `conversation_${sessionId}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleActionClick = (action: NonNullable<ChatMessage['actions']>[number]) => {
    if (action.actionType === 'scroll' && action.targetId) {
      const el = document.getElementById(action.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // On mobile, close widget so user sees the section
        if (window.innerWidth < 640) {
          setIsOpen(false);
        }
      }
    } else if (action.actionType === 'download' && action.url) {
      const link = document.createElement('a');
      link.href = action.url;
      link.download = 'Surya_S_AI_Engineer_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (action.url) {
      window.open(action.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: `reset-${Date.now()}`,
        sender: 'spoofy',
        text: "🧹 Conversation history cleared. Ask me anything about Surya's **software engineering experience**, **projects**, or **tech stack**!",
        timestamp: 'Just now',
        actions: [
          { label: 'View Featured Projects', actionType: 'scroll', targetId: 'projects' },
          { label: 'Download Resume', actionType: 'download', url: '/resume/Surya_S_Software_Developer_Resume.pdf' },
        ],
      },
    ]);
  };

  // Helper to format basic markdown-like bolding and lists
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, idx) => {
      if (!line.trim()) {
        return <div key={idx} className="h-1.5" />;
      }

      // Check for bullet lines
      const isBullet = line.trim().startsWith('• ') || line.trim().startsWith('- ');
      const cleanLine = isBullet ? line.trim().substring(2) : line;

      // Replace bold **text**
      const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
      const renderedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (isBullet) {
        return (
          <div key={idx} className="flex items-start gap-2 pl-1 my-0.5 text-xs sm:text-[13px] leading-relaxed">
            <span className="text-primary mt-1 text-[8px]">&bull;</span>
            <span className="flex-1 text-slate-300">{renderedParts}</span>
          </div>
        );
      }

      return (
        <p key={idx} className="text-xs sm:text-[13px] leading-relaxed text-slate-300 my-0.5">
          {renderedParts}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Launcher Button (Bottom-Right) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
        {/* Subtle proactive helper bubble if not opened yet */}
        {!isOpen && !hasOpenedBefore && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-primary/40 text-xs font-mono text-slate-200 shadow-xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Ask <strong>Spoofy AI</strong> 24/7</span>
          </motion.div>
        )}

        {/* Main Floating Trigger Button */}
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? 'Close Spoofy AI Chat' : 'Open Spoofy AI Chat'}
          className="relative group flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary via-cyan-600 to-emerald-500 p-[2px] shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          {/* Pulsing ambient aura */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500 pointer-events-none animate-pulse" />

          {/* Button Face */}
          <div className="relative w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-slate-200" />
                </motion.div>
              ) : (
                <motion.div
                  key="bot"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <Bot className="w-6 h-6 text-primary group-hover:text-cyan-400 transition-colors" />
                  {/* Green Online Dot */}
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      </div>

      {/* Floating Chat Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-2 sm:inset-x-auto bottom-20 sm:bottom-24 sm:right-6 z-50 sm:w-[420px] h-[580px] max-h-[calc(100dvh-95px)] rounded-2xl sm:rounded-3xl border border-border/80 bg-slate-950/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden font-body"
          >
            {/* Window Header */}
            <div className="px-4 py-3.5 bg-slate-900/80 border-b border-border/70 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-inner">
                  <Bot className="w-5 h-5" />
                  <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-sm text-foreground">
                      Spoofy AI
                    </h3>
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      24/7 Active
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground font-mono">
                    Surya's Engineering Representative
                  </p>
                </div>
              </div>

              {/* Actions Header */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleExportChat}
                  title="Export chat transcript (Markdown)"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClearHistory}
                  title="Clear conversation"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl p-3.5 shadow-sm text-left ${
                      msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-sm'
                        : 'bg-card/90 border border-border/80 text-foreground rounded-bl-sm backdrop-blur-md'
                    }`}
                  >
                    {msg.sender === 'spoofy' && (
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-primary font-semibold mb-1">
                        <Sparkles className="w-3 h-3" />
                        Spoofy
                      </div>
                    )}

                    {/* Text Message Content */}
                    <div className="space-y-1">
                      {renderFormattedText(msg.text)}
                    </div>

                    {/* Interactive Action Chips */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2.5 mt-2 border-t border-border/50">
                        {msg.actions.map((act, aIdx) => (
                          <button
                            key={aIdx}
                            onClick={() => handleActionClick(act)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                          >
                            {act.actionType === 'download' && <Download className="w-3 h-3" />}
                            {act.actionType === 'scroll' && <ChevronRight className="w-3 h-3" />}
                            {act.actionType === 'link' && <ExternalLink className="w-3 h-3" />}
                            <span>{act.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] font-mono text-muted-foreground/70 px-1 mt-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-card/80 border border-border/70 max-w-[130px] rounded-bl-sm">
                  <span className="text-[11px] font-mono text-primary flex items-center gap-1">
                    <Sparkles className="w-3 h-3 animate-spin" />
                    Thinking
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Shelf */}
            <div className="px-3.5 py-2 bg-slate-900/60 border-t border-border/50 overflow-x-auto scrollbar-none flex items-center gap-1.5 shrink-0">
              <span className="text-[10px] font-mono text-muted-foreground shrink-0 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-primary" />
                Suggestions:
              </span>
              {initialSuggestions.slice(0, 4).map((sug, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => handleSend(sug)}
                  disabled={isTyping}
                  className="shrink-0 px-3 py-1.5 rounded-full text-[11px] font-mono border border-border/80 bg-slate-950/80 text-slate-300 hover:border-primary/50 hover:bg-secondary active:scale-95 transition-all disabled:opacity-50"
                >
                  {sug}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-slate-950 border-t border-border/70 flex items-center gap-2 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                enterKeyHint="send"
                autoComplete="off"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Spoofy about AI projects, resume..."
                className="flex-1 bg-secondary/50 border border-border/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:bg-secondary/80 transition-all font-body"
              />
              <Button
                type="submit"
                size="sm"
                disabled={!inputValue.trim() || isTyping}
                className="h-9 w-9 p-0 rounded-xl shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
