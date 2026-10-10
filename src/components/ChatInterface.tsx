import { useState, useRef, useEffect, useCallback } from 'react';
import {
  Send, Copy, Check, Trash2, FileDown, BookOpen, ChevronRight,
  Sparkles, RefreshCw,
} from 'lucide-react';
import type { ChatMessage, CitationRef, Conversation } from '@/types';
import { retrieve } from '@/lib/retrieval';
import { getRecordById } from '@/lib/retrieval';
import { exportConversationAsMarkdown, downloadMarkdown } from '@/lib/export';

interface ChatInterfaceProps {
  conversation: Conversation;
  onConversationUpdate: (conversation: Conversation) => void;
  onClearChat: () => void;
  onNewChat: () => void;
  onCitationClick: (recordId: string) => void;
  pendingQuestion: string | null;
  onPendingQuestionConsumed: () => void;
}

export function ChatInterface({
  conversation,
  onConversationUpdate,
  onClearChat,
  onNewChat,
  onCitationClick,
  pendingQuestion,
  onPendingQuestionConsumed,
}: ChatInterfaceProps) {
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [conversation.messages, isThinking, scrollToBottom]);

  useEffect(() => {
    if (pendingQuestion) {
      submitQuestion(pendingQuestion);
      onPendingQuestionConsumed();
    }
  }, [pendingQuestion]);

  const submitQuestion = useCallback(
    (question: string) => {
      const trimmed = question.trim();
      if (!trimmed || isThinking) return;

      const userMessage: ChatMessage = {
        id: `msg-${Date.now()}-u`,
        role: 'user',
        content: trimmed,
        timestamp: Date.now(),
      };

      const updatedMessages = [...conversation.messages, userMessage];
      const titleForNew = conversation.messages.length === 0 ? trimmed.slice(0, 40) : conversation.title;

      onConversationUpdate({
        ...conversation,
        title: titleForNew,
        messages: updatedMessages,
      });

      setInput('');
      setIsThinking(true);

      setTimeout(() => {
        const result = retrieve(trimmed);

        const assistantMessage: ChatMessage = {
          id: `msg-${Date.now()}-a`,
          role: 'assistant',
          content: result.answer,
          timestamp: Date.now(),
          citations: result.citations,
          followUps: result.followUps,
          isFallback: result.isFallback,
        };

        const currentConv = {
          ...conversation,
          title: titleForNew,
          messages: [...updatedMessages, assistantMessage],
        };

        onConversationUpdate(currentConv);
        setIsThinking(false);
      }, 450);
    },
    [conversation, isThinking, onConversationUpdate]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitQuestion(input);
    }
  };

  const handleCopy = async (message: ChatMessage) => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopiedId(message.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // clipboard not available
    }
  };

  const handleExport = () => {
    const markdown = exportConversationAsMarkdown(conversation);
    const filename = `eduai-conversation-${new Date().toISOString().slice(0, 10)}.md`;
    downloadMarkdown(filename, markdown);
  };

  const handleFollowUp = (question: string) => {
    submitQuestion(question);
  };

  const isEmpty = conversation.messages.length === 0;

  return (
    <div className="flex h-full flex-col">
      {/* Chat header */}
      <div className="flex items-center justify-between px-4 lg:px-6 py-3 border-b border-hub-border bg-hub-bg/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 min-w-0">
          <Sparkles className="h-4 w-4 text-hub-accent flex-shrink-0" />
          <span className="text-sm font-medium text-hub-text truncate">{conversation.title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleExport}
            disabled={isEmpty}
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-hub-text-muted hover:text-hub-text hover:bg-hub-surface transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            title="Export sebagai Markdown"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button
            onClick={onClearChat}
            disabled={isEmpty}
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-hub-text-muted hover:text-hub-text hover:bg-hub-surface transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            title="Bersihkan percakapan"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Bersihkan</span>
          </button>
          <button
            onClick={onNewChat}
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-hub-text-muted hover:text-hub-text hover:bg-hub-surface transition-colors"
            title="Percakapan baru"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Baru</span>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-thin px-4 lg:px-6 py-6">
        {isEmpty ? (
          <EmptyChatState />
        ) : (
          <div className="max-w-3xl mx-auto space-y-6">
            {conversation.messages.map((msg) => (
              <MessageBubble
                key={msg.id}
                message={msg}
                onCopy={() => handleCopy(msg)}
                copied={copiedId === msg.id}
                onCitationClick={onCitationClick}
                onFollowUp={handleFollowUp}
              />
            ))}
            {isThinking && <ThinkingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-hub-border bg-hub-bg/50 backdrop-blur-sm px-4 lg:px-6 py-3">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-end gap-2 rounded-xl glass border border-hub-border focus-within:border-hub-primary-bright/50 transition-colors">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tulis pertanyaan Anda tentang riset AI ITB..."
              rows={1}
              className="flex-1 resize-none bg-transparent px-4 py-3 text-sm text-hub-text placeholder:text-hub-text-dim focus:outline-none max-h-32 scrollbar-thin"
              style={{ minHeight: '44px' }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = Math.min(target.scrollHeight, 128) + 'px';
              }}
            />
            <button
              onClick={() => submitQuestion(input)}
              disabled={!input.trim() || isThinking}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-hub-primary to-hub-primary-bright text-white transition-all hover:shadow-lg hover:shadow-hub-primary/30 disabled:opacity-30 disabled:cursor-not-allowed mb-1.5 mr-1.5"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-1.5 text-center text-[10px] text-hub-text-dim">
            Enter untuk mengirim · Shift+Enter untuk baris baru
          </p>
        </div>
      </div>
    </div>
  );
}

function EmptyChatState() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center px-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-hub-primary/20 to-hub-accent/10 border border-hub-border mb-4">
        <Sparkles className="h-7 w-7 text-hub-accent" />
      </div>
      <p className="text-sm text-hub-text-muted max-w-md leading-relaxed">
        Mulai percakapan dengan mengetik pertanyaan tentang riset, proyek, atau program AI di ITB.
        Jawaban akan disertai sitasi dari slide presentasi Pusat AI ITB 2026.
      </p>
    </div>
  );
}

function ThinkingIndicator() {
  return (
    <div className="flex items-center gap-3 animate-fade-in">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-hub-primary to-hub-primary-bright">
        <Sparkles className="h-4 w-4 text-white" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-hub-primary-bright animate-pulse-subtle" />
        <span className="h-2 w-2 rounded-full bg-hub-primary-bright animate-pulse-subtle" style={{ animationDelay: '200ms' }} />
        <span className="h-2 w-2 rounded-full bg-hub-primary-bright animate-pulse-subtle" style={{ animationDelay: '400ms' }} />
        <span className="text-xs text-hub-text-muted ml-2">Mencari dalam basis pengetahuan...</span>
      </div>
    </div>
  );
}

function MessageBubble({
  message,
  onCopy,
  copied,
  onCitationClick,
  onFollowUp,
}: {
  message: ChatMessage;
  onCopy: () => void;
  copied: boolean;
  onCitationClick: (recordId: string) => void;
  onFollowUp: (question: string) => void;
}) {
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <div className="flex justify-end animate-slide-up">
        <div className="max-w-[80%] rounded-xl rounded-tr-sm bg-gradient-to-br from-hub-primary to-hub-primary-bright px-4 py-3 text-sm text-white leading-relaxed">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 animate-slide-up">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-hub-surface to-hub-surface-2 border border-hub-border">
        <Sparkles className="h-4 w-4 text-hub-accent" />
      </div>
      <div className="flex-1 min-w-0">
        <div
          className={`rounded-xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed ${
            message.isFallback
              ? 'bg-hub-surface/40 border border-hub-border'
              : 'glass'
          }`}
        >
          <p className="text-hub-text whitespace-pre-wrap">{message.content}</p>
        </div>

        {/* Citations */}
        {message.citations && message.citations.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            <span className="text-[10px] text-hub-text-dim self-center mr-1">Sumber:</span>
            {message.citations.map((cite, idx) => (
              <CitationChip
                key={idx}
                citation={cite}
                onClick={() => onCitationClick(cite.recordId)}
              />
            ))}
          </div>
        )}

        {/* Follow-ups */}
        {message.followUps && message.followUps.length > 0 && (
          <div className="mt-3 space-y-1.5">
            <p className="text-[10px] text-hub-text-dim">Pertanyaan lanjutan:</p>
            {message.followUps.map((q, idx) => (
              <button
                key={idx}
                onClick={() => onFollowUp(q)}
                className="group flex w-full items-center gap-2 rounded-lg bg-hub-surface/40 border border-hub-border px-3 py-2 text-xs text-hub-text-muted hover:text-hub-text hover:border-hub-primary-bright/40 hover:bg-hub-surface/70 transition-all text-left"
              >
                <ChevronRight className="h-3 w-3 flex-shrink-0 text-hub-primary-bright opacity-60 group-hover:opacity-100" />
                <span className="flex-1">{q}</span>
              </button>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={onCopy}
            className="flex items-center gap-1 text-[10px] text-hub-text-dim hover:text-hub-text-muted transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-green-400" />
                <span className="text-green-400">Tersalin</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Salin jawaban</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function CitationChip({
  citation,
  onClick,
}: {
  citation: CitationRef;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full bg-hub-surface/60 border border-hub-border px-2.5 py-1 text-[10px] text-hub-text-muted hover:text-hub-text hover:border-hub-accent/40 hover:bg-hub-surface transition-all"
    >
      <BookOpen className="h-2.5 w-2.5 text-hub-accent" />
      <span className="truncate max-w-[200px]">{citation.title}</span>
      <span className="text-hub-text-dim">· Slide {citation.slideNumber}</span>
    </button>
  );
}

export { exportConversationAsMarkdown, downloadMarkdown, getRecordById };
