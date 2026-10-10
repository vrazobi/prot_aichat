import { X, FileText, Hash, Tag, BookOpen, Quote } from 'lucide-react';
import { getRecordById } from '@/lib/retrieval';
import { categories } from '@/data/categories';
import { getCategoryIcon } from './IconHelper';

interface CitationPreviewProps {
  recordId: string | null;
  onClose: () => void;
}

export function CitationPreview({ recordId, onClose }: CitationPreviewProps) {
  if (!recordId) return null;

  const record = getRecordById(recordId);
  if (!record) return null;

  const cat = categories.find((c) => c.id === record.category);
  const Icon = cat ? getCategoryIcon(cat.icon) : BookOpen;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto scrollbar-thin rounded-2xl glass-strong border border-hub-border shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3.5 border-b border-hub-border bg-hub-bg-deep/95 backdrop-blur-sm">
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-hub-primary/20 border border-hub-primary/30">
              <Icon className="h-3.5 w-3.5 text-hub-primary-bright" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-hub-text-dim">
              Detail Sumber Pengetahuan
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-md text-hub-text-muted hover:text-hub-text hover:bg-hub-surface transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-4 space-y-4">
          {/* Title */}
          <div>
            <h2 className="text-base font-semibold text-hub-text leading-tight">{record.title}</h2>
          </div>

          {/* Category */}
          {cat && (
            <div className="flex items-center gap-1.5">
              <Tag className="h-3 w-3 text-hub-text-dim" />
              <span className="text-xs text-hub-text-muted">{cat.label}</span>
            </div>
          )}

          {/* Answer */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-hub-text-dim mb-1.5">
              Ringkasan Jawaban
            </p>
            <p className="text-sm text-hub-text leading-relaxed">{record.answer}</p>
          </div>

          {/* Supporting excerpt */}
          <div className="rounded-lg bg-hub-surface/40 border border-hub-border p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Quote className="h-3 w-3 text-hub-accent" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-hub-text-dim">
                Kutipan Pendukung
              </span>
            </div>
            <p className="text-xs text-hub-text-muted leading-relaxed italic">
              {record.supportingExcerpt}
            </p>
          </div>

          {/* Source metadata */}
          <div className="space-y-2 pt-2 border-t border-hub-border">
            <div className="flex items-start gap-2">
              <FileText className="h-3.5 w-3.5 text-hub-text-dim flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-hub-text-dim">
                  Dokumen Sumber
                </p>
                <p className="text-xs text-hub-text-muted leading-relaxed mt-0.5">
                  {record.sourceDocument}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Hash className="h-3.5 w-3.5 text-hub-text-dim" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-hub-text-dim">
                  Nomor Slide
                </p>
                <p className="text-xs text-hub-text-muted mt-0.5">Slide {record.slideNumber}</p>
              </div>
            </div>
          </div>

          {/* Keywords */}
          <div className="pt-2 border-t border-hub-border">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-hub-text-dim mb-1.5">
              Kata Kunci
            </p>
            <div className="flex flex-wrap gap-1">
              {record.keywords.slice(0, 8).map((kw, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-hub-surface/60 border border-hub-border px-2 py-0.5 text-[10px] text-hub-text-dim"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
