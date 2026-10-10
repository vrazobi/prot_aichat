import type { ChatMessage, Conversation } from '@/types';

export function exportConversationAsMarkdown(conversation: Conversation): string {
  const header = `# EduAI Knowledge Hub — Riwayat Percakapan\n\n`;
  const timestamp = `Dibuat: ${new Date(conversation.createdAt).toLocaleString('id-ID')}\n`;
  const source = `Sumber: Presentasi Pusat AI ITB 2026 — "Driving AI Innovation: The ITB Innovation Ecosystem"\n`;
  const disclaimer = `Prototipe demonstrasi berdasarkan materi presentasi Pusat AI ITB 2026. Bukan kanal informasi resmi untuk pengumuman terbaru.\n\n---\n\n`;

  const messages = conversation.messages
    .map((msg) => formatMessage(msg))
    .join('\n\n---\n\n');

  return header + timestamp + source + disclaimer + messages + '\n';
}

function formatMessage(msg: ChatMessage): string {
  const role = msg.role === 'user' ? '**Pengguna:**' : '**Asisten EduAI:**';
  const time = new Date(msg.timestamp).toLocaleTimeString('id-ID');

  let output = `${role}\n\n${msg.content}`;

  if (msg.citations && msg.citations.length > 0) {
    output += '\n\n**Sumber:**\n';
    for (const cite of msg.citations) {
      output += `- ${cite.title} — ${cite.sourceDocument}, Slide ${cite.slideNumber}\n`;
    }
  }

  if (msg.followUps && msg.followUps.length > 0) {
    output += '\n**Pertanyaan lanjutan:**\n';
    for (const q of msg.followUps) {
      output += `- ${q}\n`;
    }
  }

  output += `\n_( ${time} )_`;

  return output;
}

export function downloadMarkdown(filename: string, content: string): void {
  const safeFilename = filename.replace(/[^\w\-\.]/g, '_');
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = safeFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
