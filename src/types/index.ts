export type CategoryId =
  | 'institusi'
  | 'prioritas-riset'
  | 'public-services'
  | 'surveillance'
  | 'education'
  | 'healthcare'
  | 'finance-retail'
  | 'energy-environment'
  | 'nlp-cv'
  | 'akademik'
  | 'advanced-research'
  | 'kontak';

export interface KnowledgeRecord {
  id: string;
  title: string;
  category: CategoryId;
  answer: string;
  keywords: string[];
  aliases: string[];
  sourceDocument: string;
  slideNumber: string;
  supportingExcerpt: string;
  relatedQuestionSuggestions: string[];
}

export interface KnowledgeCategory {
  id: CategoryId;
  label: string;
  shortLabel: string;
  icon: string;
  description: string;
}

export interface CitationRef {
  recordId: string;
  title: string;
  sourceDocument: string;
  slideNumber: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  citations?: CitationRef[];
  followUps?: string[];
  isFallback?: boolean;
}

export interface Conversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: number;
}

export interface RetrievalResult {
  record: KnowledgeRecord;
  score: number;
  matchedTerms: string[];
}

export interface RetrievalResponse {
  answer: string;
  citations: CitationRef[];
  followUps: string[];
  results: RetrievalResult[];
  isFallback: boolean;
}
