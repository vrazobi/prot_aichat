import { useState, useMemo } from 'react';
import { Search, X, BookOpen, FileText, ChevronRight, Hash } from 'lucide-react';
import { knowledgeBase } from '@/data/knowledgeBase';
import { categories } from '@/data/categories';
import { getCategoryIcon } from './IconHelper';
import { searchRecords } from '@/lib/retrieval';
import type { KnowledgeRecord, CategoryId } from '@/types';

interface KnowledgeExplorerProps {
  onCitationClick: (recordId: string) => void;
  initialCategoryId?: CategoryId | null;
}

export function KnowledgeExplorer({
  onCitationClick,
  initialCategoryId,
}: KnowledgeExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(
    initialCategoryId ?? null
  );

  const filteredRecords = useMemo(() => {
    let records = knowledgeBase;
    if (selectedCategory) {
      records = records.filter((r) => r.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const searched = searchRecords(searchQuery);
      const searchedIds = new Set(searched.map((r) => r.id));
      records = records.filter((r) => searchedIds.has(r.id));
    }
    return records;
  }, [searchQuery, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const record of knowledgeBase) {
      counts.set(record.category, (counts.get(record.category) ?? 0) + 1);
    }
    return counts;
  }, []);

  return (
    <div className="flex h-full flex-col bg-hub-bg-deep border-l border-hub-border">
      {/* Header */}
      <div className="px-4 py-3 border-b border-hub-border">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="h-4 w-4 text-hub-primary-bright" />
          <h2 className="text-sm font-semibold text-hub-text">Knowledge Explorer</h2>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-hub-text-dim" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari topik..."
            className="w-full rounded-lg bg-hub-surface border border-hub-border pl-8 pr-3 py-2 text-xs text-hub-text placeholder:text-hub-text-dim focus:outline-none focus:border-hub-primary-bright/50 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-hub-text-dim hover:text-hub-text"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category filter */}
      <div className="px-3 py-2.5 border-b border-hub-border overflow-x-auto scrollbar-thin">
        <div className="flex gap-1.5 flex-wrap">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
              !selectedCategory
                ? 'bg-hub-primary text-white'
                : 'bg-hub-surface text-hub-text-muted hover:text-hub-text'
            }`}
          >
            Semua ({knowledgeBase.length})
          </button>
          {categories.map((cat) => {
            const count = categoryCounts.get(cat.id) ?? 0;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-hub-primary text-white'
                    : 'bg-hub-surface text-hub-text-muted hover:text-hub-text'
                }`}
              >
                {cat.shortLabel} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Source document info */}
      <div className="px-4 py-2.5 border-b border-hub-border">
        <div className="flex items-start gap-2 rounded-lg bg-hub-surface/40 border border-hub-border p-2.5">
          <FileText className="h-3.5 w-3.5 text-hub-accent flex-shrink-0 mt-0.5" />
          <div className="min-w-0">
            <p className="text-[10px] font-semibold text-hub-text-muted">Sumber Utama</p>
            <p className="text-[10px] text-hub-text-dim leading-relaxed mt-0.5">
              Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Records list */}
      <div className="flex-1 overflow-y-auto scrollbar-thin px-3 py-3">
        <p className="text-[10px] text-hub-text-dim mb-2 px-1">
          {filteredRecords.length} entri {selectedCategory ? 'dalam kategori ini' : 'total'}
        </p>
        <div className="space-y-1.5">
          {filteredRecords.map((record) => (
            <KnowledgeRecordCard
              key={record.id}
              record={record}
              onClick={() => onCitationClick(record.id)}
            />
          ))}
          {filteredRecords.length === 0 && (
            <div className="text-center py-8">
              <p className="text-xs text-hub-text-dim">Tidak ada entri yang cocok.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function KnowledgeRecordCard({
  record,
  onClick,
}: {
  record: KnowledgeRecord;
  onClick: () => void;
}) {
  const cat = categories.find((c) => c.id === record.category);
  const Icon = cat ? getCategoryIcon(cat.icon) : BookOpen;

  return (
    <button
      onClick={onClick}
      className="group w-full text-left rounded-lg bg-hub-surface/40 border border-hub-border p-3 transition-all hover:border-hub-primary-bright/40 hover:bg-hub-surface/70"
    >
      <div className="flex items-start gap-2 mb-1.5">
        <Icon className="h-3.5 w-3.5 text-hub-primary-bright flex-shrink-0 mt-0.5 opacity-70" />
        <h3 className="text-xs font-medium text-hub-text leading-tight flex-1">{record.title}</h3>
      </div>
      <p className="text-[11px] text-hub-text-muted leading-relaxed line-clamp-2 mb-2">
        {record.answer.slice(0, 120)}...
      </p>
      <div className="flex items-center gap-2 text-[10px] text-hub-text-dim">
        <span className="inline-flex items-center gap-1">
          <Hash className="h-2.5 w-2.5" />
          Slide {record.slideNumber}
        </span>
        <span>·</span>
        <span>{cat?.shortLabel}</span>
        <ChevronRight className="h-3 w-3 ml-auto text-hub-text-dim group-hover:text-hub-primary-bright transition-colors" />
      </div>
    </button>
  );
}
