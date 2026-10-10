import { ChevronRight, BookOpen, Hash } from 'lucide-react';
import { getRecordsByCategory } from '@/lib/retrieval';
import { categories } from '@/data/categories';
import { getCategoryIcon } from './IconHelper';
import type { CategoryId } from '@/types';

interface CategoryViewProps {
  categoryId: CategoryId;
  onCitationClick: (recordId: string) => void;
  onAskQuestion: (question: string) => void;
}

export function CategoryView({ categoryId, onCitationClick, onAskQuestion }: CategoryViewProps) {
  const cat = categories.find((c) => c.id === categoryId);
  const records = getRecordsByCategory(categoryId);

  if (!cat) return null;
  const Icon = getCategoryIcon(cat.icon);

  return (
    <div className="flex h-full flex-col overflow-y-auto scrollbar-thin">
      <div className="px-6 lg:px-10 py-8 max-w-3xl mx-auto w-full">
        {/* Header */}
        <div className="mb-6 animate-slide-up">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-hub-primary/20 to-hub-accent/10 border border-hub-border">
              <Icon className="h-6 w-6 text-hub-primary-bright" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-hub-text">{cat.label}</h1>
              <p className="text-xs text-hub-text-muted mt-0.5">{cat.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-hub-text-dim">
            <BookOpen className="h-3 w-3" />
            <span>{records.length} entri pengetahuan</span>
          </div>
        </div>

        {/* Records */}
        <div className="space-y-3">
          {records.map((record, idx) => (
            <div
              key={record.id}
              className="group rounded-xl glass border border-hub-border p-4 transition-all hover:border-hub-primary-bright/40 animate-slide-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <button
                onClick={() => onCitationClick(record.id)}
                className="block w-full text-left"
              >
                <h2 className="text-sm font-semibold text-hub-text leading-tight mb-2 group-hover:text-hub-primary-bright transition-colors">
                  {record.title}
                </h2>
                <p className="text-xs text-hub-text-muted leading-relaxed">
                  {record.answer}
                </p>
              </button>

              {/* Footer */}
              <div className="mt-3 pt-3 border-t border-hub-border/50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] text-hub-text-dim">
                  <span className="inline-flex items-center gap-1">
                    <Hash className="h-2.5 w-2.5" />
                    Slide {record.slideNumber}
                  </span>
                </div>
                <button
                  onClick={() => onCitationClick(record.id)}
                  className="flex items-center gap-1 text-[10px] text-hub-primary-bright hover:text-hub-primary-light transition-colors"
                >
                  Lihat detail
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>

              {/* Related questions */}
              {record.relatedQuestionSuggestions.length > 0 && (
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {record.relatedQuestionSuggestions.slice(0, 2).map((q, i) => (
                    <button
                      key={i}
                      onClick={() => onAskQuestion(q)}
                      className="rounded-full bg-hub-surface/40 border border-hub-border px-2.5 py-1 text-[10px] text-hub-text-muted hover:text-hub-text hover:border-hub-primary-bright/40 transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
