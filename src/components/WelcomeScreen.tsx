import { Sparkles, ArrowRight, FileText, BookOpen, Shield } from 'lucide-react';
import { getQuickPrompts } from '@/lib/retrieval';
import { categories } from '@/data/categories';
import { getCategoryIcon } from './IconHelper';

interface WelcomeScreenProps {
  onQuestionSelect: (question: string) => void;
  onCategorySelect: (categoryId: string) => void;
}

const featuredCategoryIds = [
  'institusi',
  'prioritas-riset',
  'nlp-cv',
  'public-services',
  'healthcare',
  'education',
];

export function WelcomeScreen({ onQuestionSelect, onCategorySelect }: WelcomeScreenProps) {
  const quickPrompts = getQuickPrompts();
  const featuredCategories = categories.filter((c) => featuredCategoryIds.includes(c.id));

  return (
    <div className="flex h-full flex-col overflow-y-auto scrollbar-thin">
      <div className="relative flex-1">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hub-bg" />

        <div className="relative px-6 py-10 lg:px-12 lg:py-16 max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-10 animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-hub-surface/60 border border-hub-border px-3 py-1.5 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-hub-accent" />
              <span className="text-xs text-hub-text-muted">AI Research, Knowledge & Education Assistant</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-hub-text leading-tight mb-4">
              Kenali Riset dan Inovasi AI ITB
            </h1>

            <p className="text-base lg:text-lg text-hub-text-muted leading-relaxed max-w-2xl mx-auto">
              Jelajahi bidang keahlian, riset, dan contoh penerapan Artificial Intelligence
              melalui satu asisten informasi interaktif.
            </p>
          </div>

          {/* Source-backed explanation */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
            <div className="flex items-center gap-1.5 rounded-full bg-hub-surface/40 border border-hub-border px-3 py-1">
              <Shield className="h-3 w-3 text-hub-primary-bright" />
              <span className="text-[11px] text-hub-text-muted">Jawaban Berbasis Sumber</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-hub-surface/40 border border-hub-border px-3 py-1">
              <FileText className="h-3 w-3 text-hub-accent" />
              <span className="text-[11px] text-hub-text-muted">Sitasi Slide Presentasi</span>
            </div>
          </div>

          {/* Featured categories */}
          <div className="mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-hub-text-dim mb-3 text-center">
              Kategori Pengetahuan
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
              {featuredCategories.map((cat, idx) => {
                const Icon = getCategoryIcon(cat.icon);
                return (
                  <button
                    key={cat.id}
                    onClick={() => onCategorySelect(cat.id)}
                    className="group flex flex-col items-start gap-2 rounded-xl glass p-3.5 transition-all hover:border-hub-primary-bright/40 hover:bg-hub-surface/80 animate-slide-up"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-hub-primary/20 border border-hub-primary/30">
                      <Icon className="h-4 w-4 text-hub-primary-bright" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-hub-text leading-tight">{cat.shortLabel}</p>
                      <p className="text-[11px] text-hub-text-dim leading-tight mt-0.5 line-clamp-2">
                        {cat.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick prompts */}
          <div className="mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-hub-text-dim mb-3 text-center">
              Pertanyaan Mulai Cepat
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => onQuestionSelect(prompt)}
                  className="group flex items-center gap-3 rounded-lg glass p-3 text-left transition-all hover:border-hub-primary-bright/40 hover:bg-hub-surface/80 animate-slide-up"
                  style={{ animationDelay: `${idx * 40 + 200}ms` }}
                >
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-hub-primary/15 border border-hub-primary/25 text-[11px] font-semibold text-hub-primary-bright">
                    {idx + 1}
                  </div>
                  <span className="flex-1 text-xs text-hub-text-muted group-hover:text-hub-text leading-relaxed">
                    {prompt}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-hub-text-dim group-hover:text-hub-primary-bright transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <p className="text-xs text-hub-text-dim">
              Ketik pertanyaan Anda di kolom chat di bawah, atau pilih salah satu pertanyaan di atas untuk memulai.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-1.5 text-[10px] text-hub-text-dim max-w-2xl">
              <BookOpen className="h-3 w-3 flex-shrink-0" />
              <span className="leading-relaxed text-center">
                Prototipe demonstrasi berdasarkan materi presentasi Pusat AI ITB 2026.
                Bukan kanal informasi resmi untuk pengumuman terbaru.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
