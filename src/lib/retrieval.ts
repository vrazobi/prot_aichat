import type { KnowledgeRecord, RetrievalResult, RetrievalResponse, CitationRef } from '@/types';
import { knowledgeBase } from '@/data/knowledgeBase';
import { categories } from '@/data/categories';

const RELEVANCE_THRESHOLD = 2.0;

const STOP_WORDS = new Set([
  'yang', 'dan', 'di', 'ke', 'dari', 'untuk', 'pada', 'dengan', 'atau', 'ini',
  'itu', 'adalah', 'akan', 'tidak', 'juga', 'dalam', 'oleh', 'seperti', 'karena',
  'sehingga', 'namun', 'tetapi', 'apa', 'bagaimana', 'siapa', 'kapan', 'dimana',
  'mengapa', 'apakah', 'saja', 'para', 'sangat', 'lebih', 'sudah', 'belum',
  'bisa', 'dapat', 'adalah', 'ialah', 'merupakan', 'yaitu', ' yakni', 'the', 'a',
  'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'of', 'to', 'in',
  'on', 'at', 'for', 'with', 'by', 'from', 'as', 'and', 'or', 'but', 'not',
  'what', 'how', 'who', 'when', 'where', 'why', 'this', 'that', 'these', 'those',
  'ya', 'ga', 'nya', 'lah', 'kah', 'pun', 'allah', 'ada', 'punya', 'tentang',
  'jelaskan', 'sebutkan', 'ceritakan', 'tampilkan', 'berikan', 'tahu', 'ketahui',
  'saya', 'kita', 'kami', 'anda', 'kalian', 'mereka', 'dia', 'ia', 'kita',
]);

export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function tokenize(text: string): string[] {
  const normalized = normalizeText(text);
  return normalized
    .split(' ')
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

function getAliasMap(record: KnowledgeRecord): Map<string, string> {
  const map = new Map<string, string>();
  for (const alias of record.aliases) {
    const normalized = normalizeText(alias);
    for (const token of normalized.split(' ')) {
      if (token.length > 1) {
        map.set(token, alias);
      }
    }
  }
  return map;
}

export function scoreRecord(
  queryTokens: string[],
  record: KnowledgeRecord
): RetrievalResult | null {
  let score = 0;
  const matchedTerms: string[] = [];

  const keywordSet = new Set(
    record.keywords.map((k) => normalizeText(k).split(' ')).flat()
  );

  const aliasMap = getAliasMap(record);
  const titleTokens = new Set(normalizeText(record.title).split(' '));
  const answerTokens = new Set(normalizeText(record.answer).split(' '));
  const categoryLabel = categories.find((c) => c.id === record.category);
  const categoryTokens = new Set(
    categoryLabel ? normalizeText(categoryLabel.label).split(' ') : []
  );

  for (const token of queryTokens) {
    let tokenScore = 0;

    if (record.keywords.some((kw) => normalizeText(kw).includes(token))) {
      tokenScore += 3;
    }

    if (keywordSet.has(token)) {
      tokenScore += 2;
    }

    if (aliasMap.has(token)) {
      tokenScore += 2.5;
      const alias = aliasMap.get(token)!;
      if (!matchedTerms.includes(alias)) {
        matchedTerms.push(alias);
      }
    }

    if (titleTokens.has(token)) {
      tokenScore += 2;
    }

    if (answerTokens.has(token)) {
      tokenScore += 0.5;
    }

    if (categoryTokens.has(token)) {
      tokenScore += 1.5;
    }

    if (tokenScore > 0) {
      matchedTerms.push(token);
    }

    score += tokenScore;
  }

  const normalizedTitle = normalizeText(record.title);
  const normalizedQuery = queryTokens.join(' ');
  if (normalizedQuery.length > 5 && normalizedTitle.includes(normalizedQuery)) {
    score += 5;
  }

  if (score < RELEVANCE_THRESHOLD) {
    return null;
  }

  return {
    record,
    score,
    matchedTerms: [...new Set(matchedTerms)],
  };
}

export function retrieve(query: string): RetrievalResponse {
  const trimmed = query.trim();

  if (!trimmed) {
    return {
      answer: '',
      citations: [],
      followUps: [],
      results: [],
      isFallback: true,
    };
  }

  const queryTokens = tokenize(trimmed);

  if (queryTokens.length === 0) {
    return {
      answer: '',
      citations: [],
      followUps: [],
      results: [],
      isFallback: true,
    };
  }

  const results: RetrievalResult[] = [];

  for (const record of knowledgeBase) {
    const result = scoreRecord(queryTokens, record);
    if (result) {
      results.push(result);
    }
  }

  results.sort((a, b) => b.score - a.score);

  const topResults = results.slice(0, 3);

  if (topResults.length === 0) {
    return {
      answer:
        'Informasi tersebut belum ditemukan dalam materi yang tersedia. Asisten ini menjawab berdasarkan basis pengetahuan dari presentasi Pusat AI ITB 2026 dan belum terhubung ke sumber informasi eksternal.\n\nAnda dapat mencoba pertanyaan lain dalam kategori berikut: Tentang Pusat AI ITB, Prioritas Riset, Public Services, Surveillance, Education, Healthcare, Finance & Retail, Energy & Environment, NLP & Computer Vision, Academic Programs & Training, atau Advanced AI Research.',
      citations: [],
      followUps: [
        'Apa itu Center for Artificial Intelligence ITB?',
        'Apa prioritas riset AI ITB periode 2024–2029?',
        'Bagaimana cara menghubungi Center for Artificial Intelligence ITB?',
      ],
      results: [],
      isFallback: true,
    };
  }

  const usedRecords = topResults.map((r) => r.record);

  let answer: string;
  if (topResults.length === 1) {
    answer = topResults[0].record.answer;
  } else {
    const parts = topResults.map((r, i) => {
      if (i === 0) return r.record.answer;
      return r.record.answer;
    });
    answer = parts.join('\n\n');
  }

  const citations: CitationRef[] = usedRecords.map((r) => ({
    recordId: r.id,
    title: r.title,
    sourceDocument: r.sourceDocument,
    slideNumber: r.slideNumber,
  }));

  const followUps: string[] = [];
  for (const result of topResults) {
    for (const suggestion of result.record.relatedQuestionSuggestions) {
      if (!followUps.includes(suggestion)) {
        followUps.push(suggestion);
      }
      if (followUps.length >= 4) break;
    }
    if (followUps.length >= 4) break;
  }

  return {
    answer,
    citations,
    followUps,
    results: topResults,
    isFallback: false,
  };
}

export function getRecordsByCategory(categoryId: string): KnowledgeRecord[] {
  return knowledgeBase.filter((r) => r.category === categoryId);
}

export function getRecordById(id: string): KnowledgeRecord | undefined {
  return knowledgeBase.find((r) => r.id === id);
}

export function searchRecords(query: string): KnowledgeRecord[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const scored = knowledgeBase
    .map((record) => scoreRecord(tokens, record))
    .filter((r): r is RetrievalResult => r !== null)
    .sort((a, b) => b.score - a.score);

  return scored.map((r) => r.record);
}

export function getQuickPrompts(): string[] {
  return [
    'Apa itu Center for Artificial Intelligence ITB?',
    'Apa prioritas riset AI ITB periode 2024–2029?',
    'Jelaskan IndoBERT dan NusaCrowd berdasarkan presentasi.',
    'Apa saja contoh proyek computer vision yang ditampilkan?',
    'Bagaimana Autonomous Tram dijelaskan dalam presentasi?',
    'Proyek AI apa yang berkaitan dengan pendidikan?',
    'Apa contoh proyek AI untuk healthcare?',
    'Apa yang dimaksud machine unlearning dalam topik riset yang ditampilkan?',
    'Apa saja program akademik dan topik pelatihan yang dicantumkan?',
    'Bagaimana cara menghubungi Center for Artificial Intelligence ITB?',
  ];
}
