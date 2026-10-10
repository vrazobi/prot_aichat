import { useState } from 'react';
import { Presentation, ChevronDown, Play, RotateCcw, ArrowRight } from 'lucide-react';
import { getQuickPrompts } from '@/lib/retrieval';

interface PresenterControlsProps {
  onAskQuestion: (question: string) => void;
  onReset: () => void;
}

const demoFlow = [
  'Pilih pertanyaan demonstrasi dari daftar di bawah.',
  'Klik "Isi Pertanyaan" untuk memasukkan ke kolom chat.',
  'Klik "Kirim Pertanyaan" untuk mengeksekusi.',
  'Periksa jawaban dan sitasi yang ditampilkan.',
  'Klik sitasi untuk melihat detail sumber.',
  'Jelajahi kategori terkait melalui sidebar.',
  'Mulai pertanyaan baru untuk demonstrasi berikutnya.',
];

export function PresenterControls({ onAskQuestion, onReset }: PresenterControlsProps) {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [showFlow, setShowFlow] = useState(false);
  const quickPrompts = getQuickPrompts();

  const handleFill = () => {
    if (selectedQuestion) {
      onAskQuestion(selectedQuestion);
    }
  };

  return (
    <div className="flex h-full flex-col bg-hub-bg-deep border-l border-hub-border">
      {/* Header */}
      <div className="px-4 py-3 border-b border-hub-border">
        <div className="flex items-center gap-2">
          <Presentation className="h-4 w-4 text-hub-accent" />
          <h2 className="text-sm font-semibold text-hub-text">Presenter Mode</h2>
        </div>
        <p className="text-[11px] text-hub-text-dim mt-1.5 leading-relaxed">
          Alat bantu demonstrasi untuk presentasi langsung. Menggunakan mesin retrieval yang sama dengan chat biasa.
        </p>
      </div>

      {/* Demo flow */}
      <div className="px-4 py-3 border-b border-hub-border">
        <button
          onClick={() => setShowFlow(!showFlow)}
          className="flex w-full items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-hub-text-dim hover:text-hub-text-muted transition-colors"
        >
          <span>Alur Demonstrasi</span>
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showFlow ? 'rotate-180' : ''}`} />
        </button>
        {showFlow && (
          <ol className="mt-2.5 space-y-1.5 animate-fade-in">
            {demoFlow.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[11px] text-hub-text-muted">
                <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-hub-primary/20 border border-hub-primary/30 text-[9px] font-semibold text-hub-primary-bright">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        )}
      </div>

      {/* Question selector */}
      <div className="flex-1 overflow-y-auto scrollbar-thin px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-hub-text-dim mb-2">
          Pertanyaan Demonstrasi
        </p>
        <div className="space-y-1.5">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedQuestion(prompt)}
              className={`w-full text-left rounded-lg p-2.5 text-xs transition-all border ${
                selectedQuestion === prompt
                  ? 'bg-hub-primary/20 border-hub-primary/40 text-hub-text'
                  : 'bg-hub-surface/40 border-hub-border text-hub-text-muted hover:text-hub-text hover:bg-hub-surface/70'
              }`}
            >
              <div className="flex items-start gap-2">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded text-[10px] font-semibold text-hub-primary-bright bg-hub-primary/15">
                  {idx + 1}
                </span>
                <span className="flex-1 leading-relaxed">{prompt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="border-t border-hub-border px-4 py-3 space-y-2">
        <button
          onClick={handleFill}
          disabled={!selectedQuestion}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-hub-primary to-hub-primary-bright px-4 py-2 text-xs font-medium text-white transition-all hover:shadow-lg hover:shadow-hub-primary/30 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Play className="h-3.5 w-3.5" />
          Kirim Pertanyaan
        </button>
        <button
          onClick={onReset}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-hub-surface border border-hub-border px-4 py-2 text-xs font-medium text-hub-text-muted hover:text-hub-text hover:bg-hub-surface/70 transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset Demonstrasi
        </button>
        {selectedQuestion && (
          <div className="rounded-lg bg-hub-surface/40 border border-hub-border p-2.5">
            <p className="text-[10px] text-hub-text-dim mb-1">Pertanyaan terpilih:</p>
            <p className="text-[11px] text-hub-text-muted leading-relaxed flex items-start gap-1.5">
              <ArrowRight className="h-3 w-3 flex-shrink-0 mt-0.5 text-hub-primary-bright" />
              {selectedQuestion}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
