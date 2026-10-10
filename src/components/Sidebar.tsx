import { useState } from 'react';
import {
  Plus, MessageSquare, BookOpen, Presentation, Info,
  Download, Trash2, X, Sparkles, ChevronRight,
} from 'lucide-react';
import { categories } from '@/data/categories';
import { getCategoryIcon } from './IconHelper';
import type { Conversation, CategoryId } from '@/types';

interface SidebarProps {
  conversations: Conversation[];
  activeConversationId: string | null;
  onNewChat: () => void;
  onSelectConversation: (id: string) => void;
  onDeleteConversation: (id: string) => void;
  onCategorySelect: (categoryId: CategoryId) => void;
  onToggleKnowledgeExplorer: () => void;
  onTogglePresenter: () => void;
  onShowAbout: () => void;
  onExport: () => void;
  activeView: 'chat' | 'category' | 'about';
  activeCategory: CategoryId | null;
  knowledgeExplorerOpen: boolean;
  presenterOpen: boolean;
}

export function Sidebar({
  conversations,
  activeConversationId,
  onNewChat,
  onSelectConversation,
  onDeleteConversation,
  onCategorySelect,
  onToggleKnowledgeExplorer,
  onTogglePresenter,
  onShowAbout,
  onExport,
  activeView,
  activeCategory,
  knowledgeExplorerOpen,
  presenterOpen,
}: SidebarProps) {
  const [showConversations, setShowConversations] = useState(true);

  return (
    <div className="flex h-full flex-col bg-hub-bg-deep border-r border-hub-border">
      {/* Brand */}
      <div className="px-4 pt-4 pb-3 border-b border-hub-border">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-hub-primary to-hub-primary-bright shadow-lg shadow-hub-primary/30">
            <Sparkles className="h-5 w-5 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-sm font-semibold text-hub-text leading-tight">
              EduAI Knowledge Hub
            </h1>
            <p className="text-[11px] text-hub-text-muted leading-tight">Pusat AI ITB</p>
          </div>
        </div>
        <div className="mt-2.5 flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-hub-accent/10 border border-hub-accent/30 px-2 py-0.5 text-[10px] font-medium text-hub-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-hub-accent animate-pulse-subtle" />
            Live Demo · Exhibition Edition
          </span>
        </div>
      </div>

      {/* New Chat */}
      <div className="px-3 pt-3">
        <button
          onClick={onNewChat}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-hub-primary to-hub-primary-bright px-4 py-2.5 text-sm font-medium text-white transition-all hover:from-hub-primary-bright hover:to-hub-primary-light hover:shadow-lg hover:shadow-hub-primary/30 focus:outline-none focus:ring-2 focus:ring-hub-primary-bright/50"
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
          Percakapan Baru
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto scrollbar-thin px-3 pt-3">
        {/* Recent conversations */}
        {conversations.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setShowConversations(!showConversations)}
              className="flex w-full items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-hub-text-dim hover:text-hub-text-muted transition-colors mb-1.5"
            >
              <span>Riwayat Sesi</span>
              <ChevronRight
                className={`h-3 w-3 transition-transform ${showConversations ? 'rotate-90' : ''}`}
              />
            </button>
            {showConversations && (
              <div className="space-y-0.5">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    className={`group flex items-center gap-2 rounded-md px-2.5 py-2 text-xs transition-colors cursor-pointer ${
                      activeConversationId === conv.id && activeView === 'chat'
                        ? 'bg-hub-surface text-hub-text'
                        : 'text-hub-text-muted hover:bg-hub-surface/60 hover:text-hub-text'
                    }`}
                    onClick={() => onSelectConversation(conv.id)}
                  >
                    <MessageSquare className="h-3.5 w-3.5 flex-shrink-0 opacity-60" />
                    <span className="flex-1 truncate">{conv.title}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteConversation(conv.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-hub-text-dim hover:text-red-400"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Knowledge topics */}
        <div className="mb-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-hub-text-dim mb-1.5">
            Topik Pengetahuan
          </p>
          <div className="space-y-0.5">
            {categories.map((cat) => {
              const Icon = getCategoryIcon(cat.icon);
              const isActive = activeView === 'category' && activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onCategorySelect(cat.id)}
                  className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-xs transition-colors ${
                    isActive
                      ? 'bg-hub-primary/20 text-hub-text border border-hub-primary/30'
                      : 'text-hub-text-muted hover:bg-hub-surface/60 hover:text-hub-text border border-transparent'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 flex-shrink-0 opacity-70" />
                  <span className="flex-1 text-left truncate">{cat.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom actions */}
      <div className="border-t border-hub-border px-3 py-3 space-y-0.5">
        <button
          onClick={onToggleKnowledgeExplorer}
          className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-xs transition-colors ${
            knowledgeExplorerOpen
              ? 'bg-hub-primary/20 text-hub-text border border-hub-primary/30'
              : 'text-hub-text-muted hover:bg-hub-surface/60 hover:text-hub-text border border-transparent'
          }`}
        >
          <BookOpen className="h-3.5 w-3.5 opacity-70" />
          <span>Knowledge Explorer</span>
        </button>
        <button
          onClick={onTogglePresenter}
          className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-xs transition-colors ${
            presenterOpen
              ? 'bg-hub-primary/20 text-hub-text border border-hub-primary/30'
              : 'text-hub-text-muted hover:bg-hub-surface/60 hover:text-hub-text border border-transparent'
          }`}
        >
          <Presentation className="h-3.5 w-3.5 opacity-70" />
          <span>Presenter Mode</span>
        </button>
        <button
          onClick={onExport}
          disabled={conversations.length === 0}
          className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-xs transition-colors text-hub-text-muted hover:bg-hub-surface/60 hover:text-hub-text disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Download className="h-3.5 w-3.5 opacity-70" />
          <span>Export Percakapan</span>
        </button>
        <button
          onClick={onShowAbout}
          className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-xs transition-colors ${
            activeView === 'about'
              ? 'bg-hub-primary/20 text-hub-text border border-hub-primary/30'
              : 'text-hub-text-muted hover:bg-hub-surface/60 hover:text-hub-text border border-transparent'
          }`}
        >
          <Info className="h-3.5 w-3.5 opacity-70" />
          <span>Tentang & Metodologi</span>
        </button>
      </div>

      {/* Source attribution */}
      <div className="border-t border-hub-border px-4 py-2.5">
        <p className="text-[10px] text-hub-text-dim leading-relaxed">
          Based on the ITB AI Center presentation, 2026
        </p>
      </div>
    </div>
  );
}

export function SidebarMobileHeader({
  onOpen,
}: {
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="fixed top-3 left-3 z-30 flex h-10 w-10 items-center justify-center rounded-lg glass-strong text-hub-text lg:hidden"
      aria-label="Open menu"
    >
      <BookOpen className="h-5 w-5" />
    </button>
  );
}

export function MobileSidebarOverlay({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="absolute left-0 top-0 h-full w-72 animate-slide-right">
        <div className="relative h-full">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-hub-surface text-hub-text-muted hover:text-hub-text"
          >
            <X className="h-4 w-4" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
