import {
  Info, Search, BookOpen, Shield, FileText, Lightbulb,
  AlertTriangle, RefreshCw, Database, Code,
} from 'lucide-react';

interface AboutViewProps {
  onBackToChat: () => void;
}

export function AboutView({ onBackToChat }: AboutViewProps) {
  return (
    <div className="flex h-full flex-col overflow-y-auto scrollbar-thin">
      <div className="px-6 lg:px-10 py-8 max-w-3xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-hub-primary/20 to-hub-accent/10 border border-hub-border">
              <Info className="h-5 w-5 text-hub-primary-bright" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-hub-text">Tentang & Metodologi</h1>
              <p className="text-xs text-hub-text-muted">EduAI Knowledge Hub — Pusat AI ITB</p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {/* Purpose */}
          <Section icon={<Lightbulb className="h-4 w-4 text-hub-accent" />} title="Tujuan Prototipe">
            <p>
              EduAI Knowledge Hub adalah prototipe asisten informasi interaktif yang dirancang untuk
              membantu pengunjung pameran menjelajahi riset, proyek, dan program Artificial Intelligence
              di Institut Teknologi Bandung. Aplikasi ini menjawab pertanyaan berdasarkan materi
              presentasi Pusat AI ITB dan memberikan sitasi slide yang dapat ditelusuri.
            </p>
          </Section>

          {/* Source document */}
          <Section icon={<FileText className="h-4 w-4 text-hub-accent" />} title="Dokumen Sumber">
            <p>
              Seluruh jawaban dalam aplikasi ini berdasarkan satu dokumen sumber utama:
            </p>
            <div className="mt-2 rounded-lg bg-hub-surface/40 border border-hub-border p-3">
              <p className="text-sm text-hub-text font-medium">
                "Driving AI Innovation: The ITB Innovation Ecosystem"
              </p>
              <p className="text-xs text-hub-text-muted mt-1">
                Center for Artificial Intelligence, Institut Teknologi Bandung, 2026.
              </p>
            </div>
            <p className="mt-2">
              Aplikasi tidak mengambil informasi dari internet atau sumber eksternal lain.
              Setiap jawaban disertai nomor slide yang sesuai dari presentasi tersebut.
            </p>
          </Section>

          {/* Topics covered */}
          <Section icon={<BookOpen className="h-4 w-4 text-hub-accent" />} title="Topik yang Dibahas">
            <p>Aplikasi ini mencakup topik-topik berikut dari presentasi:</p>
            <ul className="mt-2 space-y-1">
              <li>• Profil institusi dan peneliti utama Pusat AI ITB</li>
              <li>• Prioritas riset AI 2024–2029</li>
              <li>• Proyek AI untuk layanan publik dan transportasi</li>
              <li>• Proyek surveillance dan industri</li>
              <li>• Proyek AI untuk pendidikan</li>
              <li>• Proyek AI untuk kesehatan</li>
              <li>• Proyek AI untuk keuangan, ritel, energi, dan lingkungan</li>
              <li>• Model NLP bahasa Indonesia (IndoBERT, IndoGPT, dll.)</li>
              <li>• Program akademik dan topik pelatihan</li>
              <li>• Penelitian AI tingkat lanjut (machine unlearning, SNN, dll.)</li>
            </ul>
          </Section>

          {/* Retrieval methodology */}
          <Section icon={<Search className="h-4 w-4 text-hub-accent" />} title="Cara Kerja Retrieval">
            <p>
              Aplikasi menggunakan mesin retrieval berbasis kata kunci — bukan model bahasa generatif
              (LLM) atau pipeline RAG berbasis embedding. Prosesnya:
            </p>
            <ol className="mt-2 space-y-1">
              <li>1. Pertanyaan pengguna dinormalisasi (huruf kecil, hapus tanda baca).</li>
              <li>2. Teks dipecah menjadi token dan kata penghenti (stop words) dihapus.</li>
              <li>3. Token dicocokkan dengan kata kunci, alias, judul, dan isi setiap rekaman.</li>
              <li>4. Setiap rekaman diberi skor berdasarkan kecocokan: kata kunci (3 poin), alias (2.5 poin), judul (2 poin), kategori (1.5 poin), isi (0.5 poin).</li>
              <li>5. Rekaman dengan skor di atas ambang batas (2.0) diurutkan dan diambil teratas.</li>
              <li>6. Jawaban dirakit dari rekaman terpilih dengan sitasi yang sesuai.</li>
              <li>7. Jika tidak ada rekaman yang mencapai ambang batas, sistem memberikan respons fallback yang jujur.</li>
            </ol>
          </Section>

          {/* Citation assignment */}
          <Section icon={<Shield className="h-4 w-4 text-hub-accent" />} title="Penentuan Sitasi">
            <p>
              Setiap jawaban disertai chip sitasi yang menampilkan judul rekaman dan nomor slide.
              Sitasi hanya ditampilkan untuk rekaman yang benar-benar digunakan dalam menjawab
              pertanyaan. Pengguna dapat mengklik chip sitasi untuk melihat detail lengkap rekaman,
              termasuk kutipan pendukung dan kata kunci.
            </p>
          </Section>

          {/* Limitations */}
          <Section icon={<AlertTriangle className="h-4 w-4 text-hub-accent" />} title="Keterbatasan">
            <ul className="space-y-1">
              <li>• Aplikasi hanya menjawab berdasarkan materi presentasi yang tersedia.</li>
              <li>• Tidak terhubung ke internet atau sumber informasi eksternal.</li>
              <li>• Tidak menggunakan model bahasa generatif (LLM) untuk menghasilkan teks.</li>
              <li>• Jawaban terbatas pada informasi yang tercatat dalam basis pengetahuan lokal.</li>
              <li>• Tidak dapat memberikan informasi terkini tentang pendaftaran, jadwal, atau pengumuman resmi.</li>
              <li>• Pencocokan kata kunci mungkin tidak menemukan jawaban jika pertanyaan menggunakan frasa yang sangat berbeda dari kata kunci yang tercatat.</li>
            </ul>
          </Section>

          {/* Updating knowledge base */}
          <Section icon={<Database className="h-4 w-4 text-hub-accent" />} title="Memperbarui Basis Pengetahuan">
            <p>
              Basis pengetahuan disimpan sebagai data TypeScript terstruktur di{' '}
              <code className="text-xs rounded bg-hub-surface px-1.5 py-0.5 text-hub-accent">src/data/knowledgeBase.ts</code>.
              Untuk menambahkan entri baru, tambahkan objek baru ke array dengan format:
              id, title, category, answer, keywords, aliases, sourceDocument, slideNumber,
              supportingExcerpt, dan relatedQuestionSuggestions. Pastikan kata kunci dan alias
              cukup komprehensif untuk mendukung variasi pertanyaan.
            </p>
          </Section>

          {/* Privacy */}
          <Section icon={<Shield className="h-4 w-4 text-hub-accent" />} title="Privasi dan Keamanan">
            <p>
              Aplikasi ini berjalan sepenuhnya di sisi klien (browser). Pertanyaan pengguna tidak
              dikirim ke server eksternal. Tidak ada akun pengguna, tidak ada penyimpanan data pribadi,
              dan riwayat percakapan hanya tersimpan dalam sesi browser saat ini. Menutup atau
              memuat ulang halaman akan menghapus riwayat percakapan.
            </p>
          </Section>

          {/* Tech stack */}
          <Section icon={<Code className="h-4 w-4 text-hub-accent" />} title="Teknologi">
            <p>
              Dibangun dengan React, TypeScript, Vite, Tailwind CSS, dan Lucide React icons.
              Tidak memerlukan backend, database, API key, atau layanan eksternal.
            </p>
          </Section>
        </div>

        {/* Back button */}
        <div className="mt-8 mb-4">
          <button
            onClick={onBackToChat}
            className="flex items-center gap-2 rounded-lg bg-hub-surface border border-hub-border px-4 py-2 text-sm text-hub-text-muted hover:text-hub-text hover:bg-hub-surface/70 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Kembali ke Chat
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 mb-8 rounded-lg bg-hub-surface/30 border border-hub-border p-4">
          <p className="text-[11px] text-hub-text-dim leading-relaxed text-center">
            Prototipe demonstrasi berdasarkan materi presentasi Pusat AI ITB 2026.
            Bukan kanal informasi resmi untuk pengumuman terbaru.
          </p>
        </div>
      </div>
    </div>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl glass border border-hub-border p-5 animate-slide-up">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h2 className="text-sm font-semibold text-hub-text">{title}</h2>
      </div>
      <div className="text-sm text-hub-text-muted leading-relaxed space-y-1">
        {children}
      </div>
    </div>
  );
}
