import { useState, useCallback } from 'react';
import { Sidebar, MobileSidebarOverlay } from '@/components/Sidebar';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { ChatInterface } from '@/components/ChatInterface';
import { KnowledgeExplorer } from '@/components/KnowledgeExplorer';
import { CitationPreview } from '@/components/CitationPreview';
import { PresenterControls } from '@/components/PresenterControls';
import { AboutView } from '@/components/AboutView';
import { CategoryView } from '@/components/CategoryView';
import type { Conversation, CategoryId } from '@/types';

type View = 'welcome' | 'chat' | 'category' | 'about';

function createConversation(): Conversation {
  return {
    id: `conv-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: 'Percakapan Baru',
    messages: [],
    createdAt: Date.now(),
  };
}

export default function App() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [view, setView] = useState<View>('welcome');
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
  const [knowledgeExplorerOpen, setKnowledgeExplorerOpen] = useState(false);
  const [presenterOpen, setPresenterOpen] = useState(false);
  const [citationRecordId, setCitationRecordId] = useState<string | null>(null);
  const [pendingQuestion, setPendingQuestion] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeConversation = conversations.find((c) => c.id === activeConversationId) ?? null;

  const handleNewChat = useCallback(() => {
    const conv = createConversation();
    setConversations((prev) => [conv, ...prev]);
    setActiveConversationId(conv.id);
    setView('chat');
    setSidebarOpen(false);
  }, []);

  const handleSelectConversation = useCallback((id: string) => {
    setActiveConversationId(id);
    setView('chat');
    setSidebarOpen(false);
  }, []);

  const handleDeleteConversation = useCallback(
    (id: string) => {
      setConversations((prev) => prev.filter((c) => c.id !== id));
      if (activeConversationId === id) {
        setActiveConversationId(null);
        setView('welcome');
      }
    },
    [activeConversationId]
  );

  const handleConversationUpdate = useCallback(
    (updated: Conversation) => {
      setConversations((prev) => {
        const exists = prev.some((c) => c.id === updated.id);
        if (exists) {
          return prev.map((c) => (c.id === updated.id ? updated : c));
        }
        return [updated, ...prev];
      });
    },
    []
  );

  const handleClearChat = useCallback(() => {
    if (!activeConversationId) return;
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeConversationId
          ? { ...c, messages: [], title: 'Percakapan Baru' }
          : c
      )
    );
  }, [activeConversationId]);

  const handleCategorySelect = useCallback((categoryId: CategoryId) => {
    setActiveCategory(categoryId);
    setView('category');
    setSidebarOpen(false);
  }, []);

  const handleShowAbout = useCallback(() => {
    setView('about');
    setSidebarOpen(false);
  }, []);

  const handleAskQuestion = useCallback(
    (question: string) => {
      if (!activeConversationId) {
        const conv = createConversation();
        setConversations((prev) => [conv, ...prev]);
        setActiveConversationId(conv.id);
      }
      setView('chat');
      setPendingQuestion(question);
      setSidebarOpen(false);
    },
    [activeConversationId]
  );

  const handleWelcomeQuestion = useCallback(
    (question: string) => {
      handleAskQuestion(question);
    },
    [handleAskQuestion]
  );

  const handleExport = useCallback(() => {
    if (!activeConversation) return;
    if (activeConversation.messages.length === 0) return;
    import('@/lib/export').then(({ exportConversationAsMarkdown, downloadMarkdown }) => {
      const markdown = exportConversationAsMarkdown(activeConversation);
      const filename = `eduai-conversation-${new Date().toISOString().slice(0, 10)}.md`;
      downloadMarkdown(filename, markdown);
    });
  }, [activeConversation]);

  const handleResetPresenter = useCallback(() => {
    handleNewChat();
  }, [handleNewChat]);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-hub-bg">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-shrink-0">
        <Sidebar
          conversations={conversations}
          activeConversationId={activeConversationId}
          onNewChat={handleNewChat}
          onSelectConversation={handleSelectConversation}
          onDeleteConversation={handleDeleteConversation}
          onCategorySelect={handleCategorySelect}
          onToggleKnowledgeExplorer={() => {
            setKnowledgeExplorerOpen(!knowledgeExplorerOpen);
            if (!knowledgeExplorerOpen && presenterOpen) setPresenterOpen(false);
          }}
          onTogglePresenter={() => {
            setPresenterOpen(!presenterOpen);
            if (!presenterOpen && knowledgeExplorerOpen) setKnowledgeExplorerOpen(false);
          }}
          onShowAbout={handleShowAbout}
          onExport={handleExport}
          activeView={view === 'welcome' ? 'chat' : view}
          activeCategory={activeCategory}
          knowledgeExplorerOpen={knowledgeExplorerOpen}
          presenterOpen={presenterOpen}
        />
      </aside>

      {/* Mobile sidebar */}
      <MobileSidebarOverlay open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
        <Sidebar
          conversations={conversations}
          activeConversationId={activeConversationId}
          onNewChat={handleNewChat}
          onSelectConversation={handleSelectConversation}
          onDeleteConversation={handleDeleteConversation}
          onCategorySelect={handleCategorySelect}
          onToggleKnowledgeExplorer={() => {
            setKnowledgeExplorerOpen(!knowledgeExplorerOpen);
            setSidebarOpen(false);
          }}
          onTogglePresenter={() => {
            setPresenterOpen(!presenterOpen);
            setSidebarOpen(false);
          }}
          onShowAbout={handleShowAbout}
          onExport={handleExport}
          activeView={view === 'welcome' ? 'chat' : view}
          activeCategory={activeCategory}
          knowledgeExplorerOpen={knowledgeExplorerOpen}
          presenterOpen={presenterOpen}
        />
      </MobileSidebarOverlay>

      {/* Mobile header bar */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-3 left-3 z-30 flex h-10 w-10 items-center justify-center rounded-lg glass-strong text-hub-text lg:hidden"
        aria-label="Buka menu"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Main content */}
      <main className="flex-1 flex min-w-0 relative">
        {/* Center content */}
        <div className="flex-1 flex flex-col min-w-0">
          {view === 'welcome' && (
            <WelcomeScreen
              onQuestionSelect={handleWelcomeQuestion}
              onCategorySelect={handleCategorySelect}
            />
          )}
          {view === 'chat' && activeConversation && (
            <ChatInterface
              conversation={activeConversation}
              onConversationUpdate={handleConversationUpdate}
              onClearChat={handleClearChat}
              onNewChat={handleNewChat}
              onCitationClick={setCitationRecordId}
              pendingQuestion={pendingQuestion}
              onPendingQuestionConsumed={() => setPendingQuestion(null)}
            />
          )}
          {view === 'chat' && !activeConversation && (
            <WelcomeScreen
              onQuestionSelect={handleWelcomeQuestion}
              onCategorySelect={handleCategorySelect}
            />
          )}
          {view === 'category' && activeCategory && (
            <CategoryView
              categoryId={activeCategory}
              onCitationClick={setCitationRecordId}
              onAskQuestion={handleAskQuestion}
            />
          )}
          {view === 'about' && (
            <AboutView onBackToChat={() => setView(activeConversation ? 'chat' : 'welcome')} />
          )}
        </div>

        {/* Right panel: Knowledge Explorer or Presenter */}
        {knowledgeExplorerOpen && (
          <aside className="hidden md:flex w-80 flex-shrink-0 animate-slide-right">
            <KnowledgeExplorer
              onCitationClick={setCitationRecordId}
              initialCategoryId={activeCategory}
            />
          </aside>
        )}
        {presenterOpen && (
          <aside className="hidden md:flex w-80 flex-shrink-0 animate-slide-right">
            <PresenterControls onAskQuestion={handleAskQuestion} onReset={handleResetPresenter} />
          </aside>
        )}
      </main>

      {/* Mobile right panel overlay */}
      {knowledgeExplorerOpen && (
        <MobileRightPanel title="Knowledge Explorer" onClose={() => setKnowledgeExplorerOpen(false)}>
          <KnowledgeExplorer
            onCitationClick={(id) => {
              setCitationRecordId(id);
              setKnowledgeExplorerOpen(false);
            }}
            initialCategoryId={activeCategory}
          />
        </MobileRightPanel>
      )}
      {presenterOpen && (
        <MobileRightPanel title="Presenter Mode" onClose={() => setPresenterOpen(false)}>
          <PresenterControls
            onAskQuestion={(q) => {
              handleAskQuestion(q);
              setPresenterOpen(false);
            }}
            onReset={handleResetPresenter}
          />
        </MobileRightPanel>
      )}

      {/* Citation preview modal */}
      <CitationPreview recordId={citationRecordId} onClose={() => setCitationRecordId(null)} />
    </div>
  );
}

function MobileRightPanel({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-40 md:hidden animate-fade-in">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] animate-slide-right">
        <button
          onClick={onClose}
          className="absolute top-3 left-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-hub-surface text-hub-text-muted hover:text-hub-text"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
