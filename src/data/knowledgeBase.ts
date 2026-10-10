import type { KnowledgeRecord } from '@/types';

export const knowledgeBase: KnowledgeRecord[] = [
  // ============================================================
  // A. INSTITUSI
  // ============================================================
  {
    id: 'inst-001',
    title: 'Center for Artificial Intelligence ITB — Profil Institusi',
    category: 'institusi',
    answer:
      'Center for Artificial Intelligence (CAI) ITB merupakan pusat riset dan pendidikan Artificial Intelligence di Institut Teknologi Bandung. Kegiatan riset dan pendidikan AI di ITB telah berlangsung sejak tahun 1980-an. Pusat AI ITB secara formal didirikan pada bulen Agustus 2019. Pusat ini menjalankan kegiatan riset dan pendidikan AI yang bersifat multidisiplin serta menjalin kolaborasi dengan industri, pemerintah, dan institusi riset.',
    keywords: ['center for artificial intelligence', 'pusat ai itb', 'cai itb', 'institusi', 'profil', 'sejarah', 'didirikan', '1980', '2019', 'multidisiplin', 'kolaborasi'],
    aliases: ['center for ai', 'pusat kecerdasan buatan itb', 'ai center itb', 'caI itb', 'pusat ai'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '3',
    supportingExcerpt:
      'AI research and education activities at ITB dating back to the 1980s. Formal establishment of the Center for Artificial Intelligence ITB in August 2019. Multidisciplinary AI research and collaboration with industry, government, and research institutions.',
    relatedQuestionSuggestions: [
      'Apa saja kegiatan inti Pusat AI ITB?',
      'Siapa peneliti utama di Pusat AI ITB?',
      'Apa visi dan misi Pusat AI ITB?',
    ],
  },
  {
    id: 'inst-002',
    title: 'Visi dan Misi Pusat AI ITB',
    category: 'institusi',
    answer:
      'Pusat AI ITB memiliki visi untuk menjadi pusat unggulan dalam riset, pendidikan, dan penerapan Artificial Intelligence yang berdampak bagi masyarakat. Misi institusi mencakup pengembangan ilmu pengetahuan dan teknologi AI, pelaksanaan pendidikan dan pelatihan, pemberian layanan konsultasi, serta penguatan kolaborasi multidisiplin dengan industri, pemerintah, dan institusi riset.',
    keywords: ['visi', 'misi', 'tujuan', 'amanat', 'arahan', ' pusat ai', 'innovation ecosystem'],
    aliases: ['visi misi', 'tujuan pusat ai', 'rencana strategis'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '3',
    supportingExcerpt:
      'Institutional vision and missions described in the presentation, covering research, education, consulting, and multidisciplinary collaboration.',
    relatedQuestionSuggestions: [
      'Apa saja kegiatan inti Pusat AI ITB?',
      'Apa prioritas riset AI ITB periode 2024–2029?',
      'Siapa peneliti utama di Pusat AI ITB?',
    ],
  },
  {
    id: 'inst-003',
    title: 'Kegiatan Inti Pusat AI ITB',
    category: 'institusi',
    answer:
      'Pusat AI ITB menjalankan enam kegiatan inti: (1) Education and Training — pendidikan dan pelatihan AI; (2) Consulting and Customization Service — layanan konsultasi dan kustomisasi solusi AI; (3) Licensing and Intellectual Property — lisensi dan pengelolaan kekayaan intelektual; (4) Research and Development Collaboration — kolaborasi riset dan pengembangan; (5) Data Services — layanan data; (6) Events and Networking — acara dan jejaring.',
    keywords: ['kegiatan inti', 'core activities', 'education', 'training', 'consulting', 'customization', 'licensing', 'intellectual property', 'research', 'development', 'data services', 'events', 'networking', 'pelatihan', 'konsultasi', 'lisensi', 'riset', 'data', 'acara'],
    aliases: ['aktivitas utama', 'layanan pusat ai', 'core activities pusat ai', '6 kegiatan'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '6',
    supportingExcerpt:
      'Core activities: Education and Training, Consulting and Customization Service, Licensing and Intellectual Property, Research and Development Collaboration, Data Services, Events and Networking.',
    relatedQuestionSuggestions: [
      'Apa itu Center for Artificial Intelligence ITB?',
      'Apa saja program akademik dan topik pelatihan yang dicantumkan?',
      'Bagaimana cara menghubungi Center for Artificial Intelligence ITB?',
    ],
  },
  {
    id: 'inst-004',
    title: 'Peneliti Utama Pusat AI ITB',
    category: 'institusi',
    answer:
      'Presentasi mencantumkan beberapa peneliti utama beserta bidang keahliannya: Dr. Ayu Purwarianti — Natural Language Processing; Prof. Bambang Riyanto — Computer Vision; Nugraha Priya Utama, Ph.D. — Computer Vision. Daftar ini berasal dari slide profil institusi dan tidak mencakup seluruh peneliti di Pusat AI ITB.',
    keywords: ['peneliti', 'riset', 'riset', 'ayu purwarianti', 'bambang riyanto', 'nugraha priya utama', 'nlP', 'computer vision', 'keahlian', 'expertise', 'researcher'],
    aliases: ['tim riset', 'fakultas ai', 'dosen ai itb', 'researchers'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '4',
    supportingExcerpt:
      'Dr. Ayu Purwarianti — Natural Language Processing; Prof. Bambang Riyanto — Computer Vision; Nugraha Priya Utama, Ph.D. — Computer Vision.',
    relatedQuestionSuggestions: [
      'Apa itu Center for Artificial Intelligence ITB?',
      'Apa prioritas riset AI ITB periode 2024–2029?',
      'Jelaskan IndoBERT dan NusaCrowd berdasarkan presentasi.',
    ],
  },

  // ============================================================
  // B. PRIORITAS RISET
  // ============================================================
  {
    id: 'rs-001',
    title: 'Prioritas Riset AI ITB 2024–2029',
    category: 'prioritas-riset',
    answer:
      'Prioritas riset AI ITB periode 2024–2029 mencakup teknologi inti dan area aplikasi. Teknologi inti: Computer Vision dan Natural Language Processing (untuk teks dan ucapan) serta Big Data Analytics. Area aplikasi meliputi layanan publik, surveillance, kesehatan (healthcare), pendidikan, keuangan dan ritel (finance and retail), serta energi (energy).',
    keywords: ['prioritas riset', '2024', '2029', 'computer vision', 'natural language processing', 'nlp', 'big data analytics', 'public services', 'surveillance', 'healthcare', 'education', 'finance', 'retail', 'energy', 'teknologi inti', 'area aplikasi'],
    aliases: ['arah riset', 'fokus riset', 'research priorities', 'roadmap riset', 'bidang riset utama'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '7',
    supportingExcerpt:
      'AI research priorities 2024–2029: Computer Vision, Natural Language Processing for text and speech, Big Data Analytics. Application areas: public services, surveillance, healthcare, education, finance and retail, energy.',
    relatedQuestionSuggestions: [
      'Apa saja contoh proyek computer vision yang ditampilkan?',
      'Apa contoh proyek AI untuk healthcare?',
      'Proyek AI apa yang berkaitan dengan pendidikan?',
    ],
  },

  // ============================================================
  // C. PUBLIC SERVICES & TRANSPORTATION
  // ============================================================
  {
    id: 'ps-001',
    title: 'Autonomous Tram dan Autonomous Driving',
    category: 'public-services',
    answer:
      'Pusat AI ITB menampilkan riset Autonomous Tram dan autonomous driving (kendaraan otonom) sebagai bagian dari penerapan AI pada layanan publik dan transportasi. Riset ini mengeksplorasi kemampuan kendaraan untuk beroperasi secara otonom dengan dukungan teknologi computer vision dan pengambilan keputusan AI.',
    keywords: ['autonomous tram', 'autonomous driving', 'kendaraan otonom', 'tram', 'transportasi', 'public services', 'self-driving', 'mobil otonom'],
    aliases: ['tram otonom', 'kendaraan tanpa sopir', 'self driving car', 'autonomous vehicle'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '11',
    supportingExcerpt:
      'Autonomous Tram and autonomous driving research as part of public services and transportation applications.',
    relatedQuestionSuggestions: [
      'Apa itu Advanced Driver Assistance Systems?',
      'Apa saja proyek AI untuk layanan publik?',
      'Apa itu Illegal Parking Detection?',
    ],
  },
  {
    id: 'ps-002',
    title: 'Advanced Driver Assistance Systems (ADAS)',
    category: 'public-services',
    answer:
      'Advanced Driver Assistance Systems (ADAS) adalah sistem bantuan pengemudi yang menggunakan AI untuk meningkatkan keselamatan dan kenyamanan berkendara. Riset ini ditampilkan sebagai bagian dari penerapan AI pada transportasi dan layanan publik.',
    keywords: ['advanced driver assistance', 'adas', 'driver assistance', 'bantuan pengemudi', 'keselamatan berkendara', 'transportasi'],
    aliases: ['sistem bantuan sopir', 'sistem bantuan pengemudi', 'adas itb'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '12',
    supportingExcerpt:
      'Advanced Driver Assistance Systems (ADAS) — AI-based driver assistance for transportation safety.',
    relatedQuestionSuggestions: [
      'Apa itu Autonomous Tram?',
      'Apa itu Automated License Plate Recognition?',
      'Apa prioritas riset AI ITB periode 2024–2029?',
    ],
  },
  {
    id: 'ps-003',
    title: 'Illegal Parking Detection',
    category: 'public-services',
    answer:
      'Illegal Parking Detection adalah proyek AI untuk mendeteksi pelanggaran parkir secara otomatis. Sistem ini menggunakan computer vision untuk mengidentifikasi kendaraan yang parkir di lokasi terlarang, mendukung penegakan disiplin lalu lintas pada layanan publik.',
    keywords: ['illegal parking', 'parkir liar', 'parkir terlarang', 'deteksi parkir', 'pelanggaran parkir', 'computer vision', 'transportasi', 'public services'],
    aliases: ['deteksi parkir liar', 'parking violation detection', 'deteksi parkir gelap'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '13',
    supportingExcerpt:
      'Illegal Parking Detection — automated detection of parking violations using computer vision.',
    relatedQuestionSuggestions: [
      'Apa itu Automated Vehicle Classification?',
      'Apa itu Automated License Plate Recognition?',
      'Apa saja proyek AI untuk layanan publik?',
    ],
  },
  {
    id: 'ps-004',
    title: 'Automated Vehicle Classification',
    category: 'public-services',
    answer:
      'Automated Vehicle Classification adalah proyek AI yang mengklasifikasikan jenis kendaraan secara otomatis menggunakan computer vision. Sistem ini dapat membedakan kategori kendaraan seperti mobil, motor, atau truk untuk keperluan manajemen lalu lintas dan layanan publik.',
    keywords: ['automated vehicle classification', 'klasifikasi kendaraan', 'jenis kendaraan', 'computer vision', 'transportasi', 'public services'],
    aliases: ['klasifikasi otomatis kendaraan', 'vehicle type classification', 'pengenalan jenis kendaraan'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '14',
    supportingExcerpt:
      'Automated Vehicle Classification — automatic vehicle type classification using computer vision.',
    relatedQuestionSuggestions: [
      'Apa itu Illegal Parking Detection?',
      'Apa itu Automated License Plate Recognition?',
      'Apa itu Advanced Driver Assistance Systems?',
    ],
  },
  {
    id: 'ps-005',
    title: 'Automated License Plate Recognition',
    category: 'public-services',
    answer:
      'Automated License Plate Recognition (ALPR) adalah teknologi AI untuk membaca dan mengenali plat nomor kendaraan secara otomatis. Riset ini memanfaatkan computer vision dan optical character recognition (OCR) untuk ekstraksi plat nomor, mendukung aplikasi seperti manajemen lalu lintas dan pengawasan.',
    keywords: ['automated license plate recognition', 'alpr', 'plat nomor', 'pelat kendaraan', 'ocr', 'computer vision', 'pengenalan plat', 'transportasi'],
    aliases: ['pengenalan plat nomor', 'license plate reader', 'anpr', 'automatic number plate recognition'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '15',
    supportingExcerpt:
      'Automated License Plate Recognition — AI-based license plate reading using computer vision and OCR.',
    relatedQuestionSuggestions: [
      'Apa itu Automated Vehicle Classification?',
      'Apa itu Illegal Parking Detection?',
      'Apa saja proyek AI untuk layanan publik?',
    ],
  },
  {
    id: 'ps-006',
    title: 'Meeting Transcription and Summarization',
    category: 'public-services',
    answer:
      'Pusat AI ITB menampilkan riset Meeting Transcription and Summarization, yaitu sistem AI yang mentranskripsikan rapat secara otomatis dan menghasilkan ringkasan. Riset ini memanfaatkan teknologi speech recognition dan natural language processing untuk mendukung efisiensi layanan publik.',
    keywords: ['meeting transcription', 'summarization', 'transkripsi rapat', 'ringkasan rapat', 'speech recognition', 'nlp', 'public services'],
    aliases: ['transkripsi otomatis', 'ringkasan otomatis', 'meeting summary', 'catatan rapat otomatis'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '16',
    supportingExcerpt:
      'Meeting transcription and summarization — automatic transcription and summarization of meetings using speech recognition and NLP.',
    relatedQuestionSuggestions: [
      'Apa itu Hoax Classification?',
      'Proyek AI apa yang berkaitan dengan pendidikan?',
      'Jelaskan IndoBERT dan NusaCrowd berdasarkan presentasi.',
    ],
  },
  {
    id: 'ps-007',
    title: 'Hoax Classification',
    category: 'public-services',
    answer:
      'Hoax Classification adalah proyek AI untuk mengklasifikasikan berita atau informasi sebagai hoax atau tidak. Sistem ini memanfaatkan natural language processing untuk analisis teks dan mendukung upaya penanggulangan misinformasi pada layanan publik.',
    keywords: ['hoax', 'classification', 'klasifikasi hoax', 'misinformasi', 'fake news', 'nlp', 'berita palsu', 'public services'],
    aliases: ['deteksi hoax', 'hoax detection', 'klasifikasi berita palsu', 'fake news detection'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '17',
    supportingExcerpt:
      'Hoax Classification — NLP-based classification of hoax/misinformation content.',
    relatedQuestionSuggestions: [
      'Apa itu Meeting Transcription and Summarization?',
      'Apa prioritas riset AI ITB periode 2024–2029?',
      'Jelaskan IndoBERT dan NusaCrowd berdasarkan presentasi.',
    ],
  },

  // ============================================================
  // D. SURVEILLANCE & INDUSTRIAL
  // ============================================================
  {
    id: 'sv-001',
    title: 'Log Anomaly Detection with Transformers',
    category: 'surveillance',
    answer:
      'Log Anomaly Detection with Transformers adalah riset AI yang menggunakan arsitektur Transformer untuk mendeteksi anomali pada log sistem. Pendekatan ini mendukung pengawasan keamanan dan keandalan sistem secara otomatis.',
    keywords: ['log anomaly', 'anomaly detection', 'transformer', 'log system', 'deteksi anomali', 'surveillance', 'keamanan sistem'],
    aliases: ['deteksi anomali log', 'log anomaly transformer', 'anomaly detection transformer'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '21',
    supportingExcerpt:
      'Log Anomaly Detection with Transformers — detecting system log anomalies using Transformer architecture.',
    relatedQuestionSuggestions: [
      'Apa itu Crowd Detection and People Tracking?',
      'Apa itu Fire and Smoke Detection?',
      'Apa itu PPE Detection?',
    ],
  },
  {
    id: 'sv-002',
    title: 'Crowd Detection and People Tracking',
    category: 'surveillance',
    answer:
      'Crowd Detection and People Tracking adalah proyek computer vision untuk mendeteksi kepadatan kerumunan dan melacak pergerakan orang. Riset ini mendukung pengawasan keamanan publik dan manajemen kerumunan.',
    keywords: ['crowd detection', 'people tracking', 'kerumunan', 'pelacakan orang', 'computer vision', 'surveillance', 'keamanan publik'],
    aliases: ['deteksi kerumunan', 'pelacakan manusia', 'crowd tracking', 'people counting'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '22',
    supportingExcerpt:
      'Crowd Detection and People Tracking — computer vision for crowd density detection and people movement tracking.',
    relatedQuestionSuggestions: [
      'Apa itu Log Anomaly Detection?',
      'Apa itu Aerial Object Detection and Vehicle Counting?',
      'Apa itu Fire and Smoke Detection?',
    ],
  },
  {
    id: 'sv-003',
    title: 'Aerial Object Detection and Vehicle Counting',
    category: 'surveillance',
    answer:
      'Aerial Object Detection and Vehicle Counting adalah proyek AI yang mendeteksi objek dari citra udara dan menghitung jumlah kendaraan. Riset ini memanfaatkan computer vision pada gambar aerial atau drone untuk pengawasan dan analisis lalu lintas.',
    keywords: ['aerial object detection', 'vehicle counting', 'citra udara', 'drone', 'computer vision', 'penghitungan kendaraan', 'surveillance', 'deteksi objek udara'],
    aliases: ['deteksi objek aerial', 'hitung kendaraan dari udara', 'aerial detection', 'vehicle counting drone'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '23',
    supportingExcerpt:
      'Aerial Object Detection and Vehicle Counting — detecting objects and counting vehicles from aerial imagery.',
    relatedQuestionSuggestions: [
      'Apa itu Crowd Detection and People Tracking?',
      'Apa itu Automated Textile Defect Detection?',
      'Apa itu Automated License Plate Recognition?',
    ],
  },
  {
    id: 'sv-004',
    title: 'Automated Textile Defect Detection',
    category: 'surveillance',
    answer:
      'Automated Textile Defect Detection adalah proyek AI industri yang mendeteksi cacat pada kain secara otomatis menggunakan computer vision. Sistem ini mendukung kontrol kualitas dalam industri tekstil.',
    keywords: ['textile defect', 'deteksi cacat kain', 'industri tekstil', 'computer vision', 'quality control', 'kontrol kualitas', 'defect detection', 'industri'],
    aliases: ['deteksi cacat tekstil', 'textile quality', 'fabric defect detection', 'deteksi cacat kain otomatis'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '24',
    supportingExcerpt:
      'Automated Textile Defect Detection — computer vision for automatic textile defect detection in industrial quality control.',
    relatedQuestionSuggestions: [
      'Apa itu Industrial Defect Detection?',
      'Apa itu Aerial Object Detection?',
      'Apa saja contoh proyek computer vision yang ditampilkan?',
    ],
  },
  {
    id: 'sv-005',
    title: 'Fire and Smoke Detection',
    category: 'surveillance',
    answer:
      'Fire and Smoke Detection adalah proyek AI untuk mendeteksi kebakaran dan asap secara otomatis menggunakan computer vision. Sistem ini mendukung sistem peringatan dini untuk keselamatan publik dan industri.',
    keywords: ['fire detection', 'smoke detection', 'kebakaran', 'asap', 'deteksi api', 'computer vision', 'surveillance', 'keselamatan', 'peringatan dini'],
    aliases: ['deteksi kebakaran', 'deteksi api dan asap', 'fire smoke detection', 'sistem deteksi kebakaran'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '25',
    supportingExcerpt:
      'Fire and Smoke Detection — AI-based fire and smoke detection using computer vision for early warning.',
    relatedQuestionSuggestions: [
      'Apa itu PPE Detection?',
      'Apa itu Crowd Detection and People Tracking?',
      'Apa itu Log Anomaly Detection?',
    ],
  },
  {
    id: 'sv-006',
    title: 'Personal Protective Equipment (PPE) Detection',
    category: 'surveillance',
    answer:
      'Personal Protective Equipment (PPE) Detection adalah proyek AI yang mendeteksi penggunaan alat pelindung diri (APD) seperti helm, rompi, atau sarung tangan secara otomatis. Riset ini memanfaatkan computer vision untuk mendukung keselamatan kerja di lingkungan industri.',
    keywords: ['ppe', 'personal protective equipment', 'alat pelindung diri', 'apd', 'helm', 'keselamatan kerja', 'computer vision', 'surveillance', 'industri'],
    aliases: ['deteksi apd', 'deteksi alat pelindung diri', 'safety helmet detection', 'ppe detection'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '26',
    supportingExcerpt:
      'Personal Protective Equipment Detection — computer vision for detecting PPE usage in industrial safety.',
    relatedQuestionSuggestions: [
      'Apa itu Fire and Smoke Detection?',
      'Apa itu Automated Textile Defect Detection?',
      'Apa itu Crowd Detection and People Tracking?',
    ],
  },

  // ============================================================
  // E. EDUCATION
  // ============================================================
  {
    id: 'edu-001',
    title: 'Classroom Transcription',
    category: 'education',
    answer:
      'Classroom Transcription adalah proyek AI yang mentranskripsikan pembelajaran di kelas secara otomatis. Riset ini memanfaatkan teknologi speech recognition untuk membantu dokumentasi dan aksesibilitas pendidikan.',
    keywords: ['classroom transcription', 'transkripsi kelas', 'speech recognition', 'pendidikan', 'education', 'pembelajaran', 'dOCUMENTASI kelas'],
    aliases: ['transkripsi pembelajaran', 'transkripsi otomatis kelas', 'classroom speech to text'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '29',
    supportingExcerpt:
      'Classroom Transcription — automatic transcription of classroom learning using speech recognition.',
    relatedQuestionSuggestions: [
      'Apa itu Chatbot for Education using LLM and RAG?',
      'Apa itu Personalized Learning?',
      'Apa itu Text-to-Speech?',
    ],
  },
  {
    id: 'edu-002',
    title: 'Chatbot for Education using LLM and RAG',
    category: 'education',
    answer:
      'Pusat AI ITB menampilkan riset Chatbot for Education yang memanfaatkan Large Language Model (LLM) dan Retrieval-Augmented Generation (RAG). Pendekatan RAG memungkinkan chatbot menjawab pertanyaan edukatif dengan dasar sumber pengetahuan yang relevan, mendukung pembelajaran yang lebih akurat dan terdokumentasi.',
    keywords: ['chatbot education', 'llm', 'rag', 'retrieval augmented generation', 'large language model', 'pendidikan', 'education', 'chatbot edukasi'],
    aliases: ['chatbot pendidikan', 'edu chatbot', 'rag chatbot education', 'chatbot llm rag'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '30',
    supportingExcerpt:
      'Chatbot for Education using LLM and RAG — educational chatbot leveraging Large Language Models and Retrieval-Augmented Generation.',
    relatedQuestionSuggestions: [
      'Apa itu Classroom Transcription?',
      'Apa itu Chatbot Informasi Akademik?',
      'Apa itu Personalized Learning?',
    ],
  },
  {
    id: 'edu-003',
    title: 'Text-to-Speech untuk Pendidikan',
    category: 'education',
    answer:
      'Text-to-Speech (TTS) adalah teknologi AI yang mengubah teks menjadi ucapan. Dalam konteks pendidikan, TTS mendukung aksesibilitas dan pembelajaran dengan menyediakan versi audio dari materi tekstual.',
    keywords: ['text-to-speech', 'tts', 'teks ke ucapan', 'audio', 'voice', 'suara', 'pendidikan', 'education', 'aksesibilitas'],
    aliases: ['teks ke suara', 'text to voice', 'speech synthesis', 'sintesis ucapan'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '29',
    supportingExcerpt:
      'Text-to-Speech — AI technology converting text to speech, supporting accessibility in education.',
    relatedQuestionSuggestions: [
      'Apa itu Classroom Transcription?',
      'Apa itu Indonesian Speech Recognition?',
      'Apa itu Personalized Learning?',
    ],
  },
  {
    id: 'edu-004',
    title: 'Personalized Learning',
    category: 'education',
    answer:
      'Personalized Learning adalah pendekatan AI untuk menyesuaikan pembelajaran dengan kebutuhan individu. Riset ini memanfaatkan AI untuk menganalisis pola belajar dan memberikan rekomendasi konten yang sesuai dengan setiap pembelajar.',
    keywords: ['personalized learning', 'pembelajaran personal', 'pembelajaran tersesuaikan', 'ai education', 'rekomendasi pembelajaran', 'pendidikan', 'education'],
    aliases: ['pembelajaran personalisasi', 'adaptive learning', 'pembelajaran adaptif', 'customized learning'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '30',
    supportingExcerpt:
      'Personalized Learning — AI-driven adaptation of learning content to individual learner needs.',
    relatedQuestionSuggestions: [
      'Apa itu Chatbot for Education using LLM and RAG?',
      'Apa itu Classroom Transcription?',
      'Apa saja program akademik dan topik pelatihan yang dicantumkan?',
    ],
  },
  {
    id: 'edu-005',
    title: 'Chatbot Informasi Akademik',
    category: 'education',
    answer:
      'Chatbot Informasi Akademik adalah chatbot AI untuk memberikan informasi akademik kepada mahasiswa dan pengguna. Sistem ini memanfaatkan natural language processing untuk memahami pertanyaan dan memberikan jawaban terkait informasi akademik.',
    keywords: ['chatbot informasi akademik', 'chatbot akademik', 'informasi akademik', 'nlp', 'pendidikan', 'education', 'mahasiswa'],
    aliases: ['chatbot info akademik', 'academic chatbot', 'chatbot kampus', 'asisten akademik'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '30',
    supportingExcerpt:
      'Chatbot Informasi Akademik — NLP-based chatbot for providing academic information to students.',
    relatedQuestionSuggestions: [
      'Apa itu Chatbot for Education using LLM and RAG?',
      'Apa itu Personalized Learning?',
      'Apa itu Hoax Classification?',
    ],
  },

  // ============================================================
  // F. HEALTHCARE
  // ============================================================
  {
    id: 'hc-001',
    title: 'Mental Health Screening',
    category: 'healthcare',
    answer:
      'Mental Health Screening adalah proyek AI untuk skrining kesehatan mental. Riset ini memanfaatkan AI untuk membantu identifikasi dini indikasi masalah kesehatan mental, mendukung upaya pencegahan dan intervensi.',
    keywords: ['mental health', 'skrining mental', 'kesehatan mental', 'screening', 'ai healthcare', 'kesehatan', 'healthcare', 'intervensi dini'],
    aliases: ['skrining kesehatan mental', 'mental health ai', 'deteksi kesehatan mental', 'mental screening'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '32',
    supportingExcerpt:
      'Mental Health Screening — AI-based screening for mental health conditions to support early identification.',
    relatedQuestionSuggestions: [
      'Apa itu Stunting Prediction?',
      'Apa itu Chatbot Swamedikasi?',
      'Apa itu DNA Sequence Mutation Detection?',
    ],
  },
  {
    id: 'hc-002',
    title: 'Stunting Prediction',
    category: 'healthcare',
    answer:
      'Stunting Prediction adalah proyek AI untuk memprediksi risiko stunting pada anak. Riset ini memanfaatkan data dan model machine learning untuk mendukung upaya pencegahan stunting melalui identifikasi dini.',
    keywords: ['stunting', 'prediction', 'prediksi stunting', 'anak', 'kesehatan', 'healthcare', 'machine learning', 'gizi', 'pertumbuhan'],
    aliases: ['prediksi stunting', 'stunting ai', 'stunting risk prediction', 'deteksi stunting'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '33',
    supportingExcerpt:
      'Stunting Prediction — AI/machine learning prediction of stunting risk in children for early prevention.',
    relatedQuestionSuggestions: [
      'Apa itu Mental Health Screening?',
      'Apa itu Chatbot Swamedikasi?',
      'Apa itu Speech Recognition for Dental Medical Records?',
    ],
  },
  {
    id: 'hc-003',
    title: 'Chatbot Swamedikasi',
    category: 'healthcare',
    answer:
      'Chatbot Swamedikasi adalah chatbot AI untuk membantu masyarakat mendapatkan informasi terkait swamedikasi (pengobatan mandiri). Sistem ini memanfaatkan natural language processing untuk memberikan rekomendasi yang relevan terkait pengobatan ringan secara mandiri.',
    keywords: ['swamedikasi', 'chatbot swamedikasi', 'pengobatan mandiri', 'obat', 'kesehatan', 'healthcare', 'nlp', 'chatbot', 'medis'],
    aliases: ['chatbot pengobatan mandiri', 'self medication chatbot', 'chatbot kesehatan', 'chatbot obat'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '33',
    supportingExcerpt:
      'Chatbot Swamedikasi — NLP-based chatbot for self-medication guidance and health information.',
    relatedQuestionSuggestions: [
      'Apa itu Mental Health Screening?',
      'Apa itu DNA Sequence Mutation Detection?',
      'Apa itu Chatbot Informasi Akademik?',
    ],
  },
  {
    id: 'hc-004',
    title: 'DNA Sequence Mutation Detection',
    category: 'healthcare',
    answer:
      'DNA Sequence Mutation Detection adalah proyek AI yang mendeteksi mutasi pada sekuens DNA. Riset ini memanfaatkan pendekatan machine learning untuk analisis genetik dan mendukung aplikasi biomedis.',
    keywords: ['dna', 'sequence', 'mutation', 'mutasi dna', 'sekuens dna', 'genetik', 'biomedis', 'machine learning', 'healthcare', 'kesehatan'],
    aliases: ['deteksi mutasi dna', 'dna mutation ai', 'genetic mutation detection', 'deteksi mutasi genetik'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '34',
    supportingExcerpt:
      'DNA Sequence Mutation Detection — AI/machine learning for detecting mutations in DNA sequences.',
    relatedQuestionSuggestions: [
      'Apa itu Mental Health Screening?',
      'Apa itu Stunting Prediction?',
      'Apa itu Chatbot Swamedikasi?',
    ],
  },
  {
    id: 'hc-005',
    title: 'Speech Recognition for Dental Medical Records',
    category: 'healthcare',
    answer:
      'Speech Recognition for Dental Medical Records adalah proyek AI yang menggunakan pengenalan ucapan untuk mendokumentasikan rekam medis gigi secara otomatis. Riset ini memanfaatkan teknologi speech recognition untuk efisiensi pendokumentasian medis di bidang kedokteran gigi.',
    keywords: ['speech recognition', 'dental', 'medical records', 'rekam medis gigi', 'pengenalan ucapan', 'kesehatan', 'healthcare', 'dokter gigi', 'rekam medis'],
    aliases: ['rekam medis gigi otomatis', 'dental speech recognition', 'rekam medis otomatis', 'dental records ai'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '34',
    supportingExcerpt:
      'Speech Recognition for Dental Medical Records — speech recognition for automatic dental medical record documentation.',
    relatedQuestionSuggestions: [
      'Apa itu DNA Sequence Mutation Detection?',
      'Apa itu Stunting Prediction?',
      'Apa itu Indonesian Speech Recognition?',
    ],
  },

  // ============================================================
  // G. FINANCE & RETAIL
  // ============================================================
  {
    id: 'fr-001',
    title: 'Rating Process System and Sentiment Analysis',
    category: 'finance-retail',
    answer:
      'Rating Process System and Sentiment Analysis of Review Texts adalah proyek AI yang menganalisis sentimen dari ulasan (review) teks. Sistem ini memanfaatkan natural language processing untuk memahami opini dan penilaian konsumen, mendukung pengambilan keputusan di sektor keuangan dan ritel.',
    keywords: ['rating', 'sentiment analysis', 'analisis sentimen', 'review', 'ulasan', 'nlp', 'finance', 'retail', 'keuangan', 'ritel', 'opini konsumen'],
    aliases: ['analisis sentimen ulasan', 'sentiment analysis review', 'rating sentiment', 'review sentiment analysis'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '36',
    supportingExcerpt:
      'Rating Process System and Sentiment Analysis of Review Texts — NLP-based sentiment analysis of consumer review texts.',
    relatedQuestionSuggestions: [
      'Apa itu Automatic Product Title Generation?',
      'Apa itu Hoax Classification?',
      'Apa prioritas riset AI ITB periode 2024–2029?',
    ],
  },
  {
    id: 'fr-002',
    title: 'Automatic Product Title Generation',
    category: 'finance-retail',
    answer:
      'Automatic Product Title Generation adalah proyek AI yang menghasilkan judul produk secara otomatis. Riset ini memanfaatkan natural language processing untuk generasi teks, mendukung efisiensi katalog produk di sektor ritel dan e-commerce.',
    keywords: ['automatic product title', 'judul produk otomatis', 'product title generation', 'nlp', 'generasi teks', 'retail', 'ritel', 'e-commerce', 'katalog produk'],
    aliases: ['generasi judul produk', 'auto product title', 'title generation', 'judul produk ai'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '36',
    supportingExcerpt:
      'Automatic Product Title Generation — NLP-based automatic generation of product titles for retail/e-commerce.',
    relatedQuestionSuggestions: [
      'Apa itu Rating Process System and Sentiment Analysis?',
      'Jelaskan IndoBERT dan IndoGPT berdasarkan presentasi.',
      'Apa itu Generative AI?',
    ],
  },

  // ============================================================
  // H. ENERGY & ENVIRONMENT
  // ============================================================
  {
    id: 'en-001',
    title: 'AI-Based Large Diesel Engine Monitoring',
    category: 'energy-environment',
    answer:
      'AI-Based Large Diesel Engine Monitoring adalah proyek AI untuk memantau kondisi mesin diesel besar secara otomatis. Riset ini memanfaatkan AI untuk deteksi anomali dan pemantauan kinerja, mendukung efisiensi dan keandalan operasional di sektor energi.',
    keywords: ['diesel engine', 'engine monitoring', 'mesin diesel', 'pemantauan mesin', 'ai energy', 'energi', 'deteksi anomali', 'keandalan', 'monitoring'],
    aliases: ['pemantauan mesin diesel', 'diesel monitoring ai', 'engine health monitoring', 'monitoring mesin besar'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '38',
    supportingExcerpt:
      'AI-Based Large Diesel Engine Monitoring — AI for monitoring large diesel engine condition and anomaly detection.',
    relatedQuestionSuggestions: [
      'Apa itu Gas Source Localization using UAV?',
      'Apa itu Ground and Aerial Robot Collaboration?',
      'Apa itu Log Anomaly Detection?',
    ],
  },
  {
    id: 'en-002',
    title: 'Gas Source Localization using UAV',
    category: 'energy-environment',
    answer:
      'Gas Source Localization using UAV adalah proyek AI yang memanfaatkan Unmanned Aerial Vehicle (UAV/drone) untuk melokalisasi sumber gas. Riset ini mendukung pemantauan lingkungan dan keselamatan di area yang berpotensi berbahaya.',
    keywords: ['gas source localization', 'uav', 'drone', 'sumber gas', 'lokalisasi gas', 'lingkungan', 'energi', 'environment', 'keselamatan', 'unmanned aerial vehicle'],
    aliases: ['deteksi sumber gas', 'gas localization drone', 'uav gas detection', 'drone gas source'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '40',
    supportingExcerpt:
      'Gas Source Localization using UAV — UAV-based AI for localizing gas sources in environmental monitoring.',
    relatedQuestionSuggestions: [
      'Apa itu AI-Based Large Diesel Engine Monitoring?',
      'Apa itu Ground and Aerial Robot Collaboration?',
      'Apa itu Aerial Object Detection?',
    ],
  },
  {
    id: 'en-003',
    title: 'Ground and Aerial Robot Collaboration for Hazardous-Area Mapping',
    category: 'energy-environment',
    answer:
      'Ground and Aerial Robot Collaboration for Hazardous-Area Mapping adalah proyek AI yang menggabungkan robot darat dan robot udara (aerial) untuk pemetaan area berbahaya. Riset ini mendukung eksplorasi dan pemantauan lingkungan yang berisiko tinggi bagi manusia.',
    keywords: ['ground robot', 'aerial robot', 'robot collaboration', 'hazardous area', 'pemetaan area berbahaya', 'robot darat', 'robot udara', 'environment', 'lingkungan', 'energi'],
    aliases: ['kolaborasi robot darat udara', 'robot mapping', 'hazardous area mapping', 'ground aerial robot'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '40',
    supportingExcerpt:
      'Ground and Aerial Robot Collaboration for Hazardous-Area Mapping — combining ground and aerial robots for mapping hazardous areas.',
    relatedQuestionSuggestions: [
      'Apa itu Gas Source Localization using UAV?',
      'Apa itu AI-Based Large Diesel Engine Monitoring?',
      'Apa itu Aerial Object Detection?',
    ],
  },

  // ============================================================
  // I. NLP & COMPUTER VISION — MODELS & RESOURCES
  // ============================================================
  {
    id: 'nlp-001',
    title: 'IndoBERT — Model Bahasa Indonesia',
    category: 'nlp-cv',
    answer:
      'IndoBERT adalah model bahasa berbasis arsitektur BERT yang dilatih khusus untuk bahasa Indonesia. Model ini dikembangkan untuk mendukung berbagai tugas natural language processing (NLP) berbahasa Indonesia seperti klasifikasi teks, analisis sentimen, dan question answering. IndoBERT merupakan salah satu kontribusi NLP Pusat AI ITB yang ditampilkan dalam presentasi.',
    keywords: ['indobert', 'bert', 'model bahasa indonesia', 'nlp', 'natural language processing', 'teks indonesia', 'klasifikasi teks', 'analisis sentimen', 'question answering'],
    aliases: ['indo bert', 'indonesian bert', 'bert indonesia', 'model bahasa indo'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '43',
    supportingExcerpt:
      'IndoBERT — BERT-based language model trained specifically for the Indonesian language, supporting NLP tasks.',
    relatedQuestionSuggestions: [
      'Jelaskan IndoBERT dan NusaCrowd berdasarkan presentasi.',
      'Apa itu IndoGPT?',
      'Apa itu IndoBART?',
    ],
  },
  {
    id: 'nlp-002',
    title: 'IndoGPT — Model Generatif Bahasa Indonesia',
    category: 'nlp-cv',
    answer:
      'IndoGPT adalah model bahasa generatif berbasis arsitektur GPT yang dikembangkan untuk bahasa Indonesia. Model ini mendukung tugas generasi teks berbahasa Indonesia. IndoGPT ditampilkan sebagai bagian dari kontribusi NLP Pusat AI ITB.',
    keywords: ['indogpt', 'gpt', 'model generatif', 'generasi teks', 'bahasa indonesia', 'nlp', 'natural language processing', 'language model'],
    aliases: ['indo gpt', 'indonesian gpt', 'gpt indonesia', 'generative model indonesia'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '44',
    supportingExcerpt:
      'IndoGPT — GPT-based generative language model for Indonesian text generation.',
    relatedQuestionSuggestions: [
      'Apa itu IndoBERT?',
      'Apa itu IndoBART?',
      'Apa itu Generative AI?',
    ],
  },
  {
    id: 'nlp-003',
    title: 'IndoBART — Model Bahasa Indonesia',
    category: 'nlp-cv',
    answer:
      'IndoBART adalah model bahasa berbasis arsitektur BART yang dikembangkan untuk bahasa Indonesia. Model ini mendukung tugas NLP seperti rangkuman (summarization) dan terjemahan (translation). IndoBART ditampilkan sebagai bagian dari kontribusi NLP Pusat AI ITB.',
    keywords: ['indobart', 'bart', 'model bahasa indonesia', 'summarization', 'rangkuman', 'terjemahan', 'translation', 'nlp', 'natural language processing'],
    aliases: ['indo bart', 'indonesian bart', 'bart indonesia'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '45',
    supportingExcerpt:
      'IndoBART — BART-based language model for Indonesian, supporting summarization and translation tasks.',
    relatedQuestionSuggestions: [
      'Apa itu IndoBERT?',
      'Apa itu IndoGPT?',
      'Apa itu Cendol?',
    ],
  },
  {
    id: 'nlp-004',
    title: 'Cendol — Dataset NLP Indonesia',
    category: 'nlp-cv',
    answer:
      'Cendol adalah sumber daya NLP yang dikembangkan untuk bahasa Indonesia. Cendol ditampilkan dalam presentasi sebagai salah satu kontribusi Pusat AI ITB dalam pengembangan sumber daya NLP berbahasa Indonesia.',
    keywords: ['cendol', 'dataset', 'nlp', 'sumber daya nlp', 'bahasa indonesia', 'indonesian nlp'],
    aliases: ['cendol dataset', 'cendol nlp', 'dataset cendol'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '46',
    supportingExcerpt:
      'Cendol — Indonesian NLP resource developed and presented by Pusat AI ITB.',
    relatedQuestionSuggestions: [
      'Apa itu NusaCrowd?',
      'Apa itu NusaWrites?',
      'Apa itu IndoBERT?',
    ],
  },
  {
    id: 'nlp-005',
    title: 'NusaCrowd — Platform Data NLP Indonesia',
    category: 'nlp-cv',
    answer:
      'NusaCrowd adalah platform crowdsourcing data untuk NLP bahasa Indonesia dan bahasa daerah di Indonesia. NusaCrowd ditampilkan sebagai bagian dari kontribusi Pusat AI ITB dalam pengembangan sumber daya data NLP, mendukung ketersediaan data berbahasa Indonesia dan bahasa lokal.',
    keywords: ['nusacrowd', 'crowdsourcing', 'data nlp', 'bahasa indonesia', 'bahasa daerah', 'sumber daya nlp', 'dataset', 'indonesian nlp'],
    aliases: ['nusa crowd', 'crowdsourcing nlp', 'platform data nlp', 'nusa crowd dataset'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '47',
    supportingExcerpt:
      'NusaCrowd — crowdsourcing platform for Indonesian and local-language NLP data resources.',
    relatedQuestionSuggestions: [
      'Jelaskan IndoBERT dan NusaCrowd berdasarkan presentasi.',
      'Apa itu NusaWrites?',
      'Apa itu Cendol?',
    ],
  },
  {
    id: 'nlp-006',
    title: 'NusaWrites — Penulisan Data Bahasa Daerah',
    category: 'nlp-cv',
    answer:
      'NusaWrites adalah inisiatif pengumpulan dan penulisan data untuk bahasa daerah di Indonesia. NusaWrites ditampilkan sebagai bagian dari kontribusi Pusat AI ITB dalam pengembangan sumber daya NLP untuk bahasa lokal Indonesia.',
    keywords: ['nusawrites', 'bahasa daerah', 'penulisan data', 'sumber daya nlp', 'bahasa lokal', 'indonesia', 'nlp', 'low-resource language'],
    aliases: ['nusa writes', 'nusa write', 'penulisan bahasa daerah', 'local language nlp'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '48',
    supportingExcerpt:
      'NusaWrites — initiative for collecting and writing NLP data for Indonesian local languages.',
    relatedQuestionSuggestions: [
      'Apa itu NusaCrowd?',
      'Apa itu Nusa Dialogue?',
      'Apa itu IndoBERT-Nusa?',
    ],
  },
  {
    id: 'nlp-007',
    title: 'Nusa Dialogue — Sistem Dialog Bahasa Indonesia',
    category: 'nlp-cv',
    answer:
      'Nusa Dialogue adalah sistem dialog berbasis AI untuk bahasa Indonesia. Nusa Dialogue ditampilkan sebagai bagian dari kontribusi NLP Pusat AI ITB dalam pengembangan sistem percakapan (conversational AI) berbahasa Indonesia.',
    keywords: ['nusa dialogue', 'sistem dialog', 'conversational ai', 'chatbot', 'bahasa indonesia', 'nlp', 'dialogue system'],
    aliases: ['nusa dialog', 'dialogue system indonesia', 'sistem percakapan', 'conversational ai indonesia'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '49',
    supportingExcerpt:
      'Nusa Dialogue — AI dialogue system for Indonesian language conversational AI.',
    relatedQuestionSuggestions: [
      'Apa itu NusaWrites?',
      'Apa itu Conversational Analytics?',
      'Apa itu Chatbot Informasi Akademik?',
    ],
  },
  {
    id: 'nlp-008',
    title: 'IndoBERT-Nusa — Model Bahasa untuk Bahasa Daerah',
    category: 'nlp-cv',
    answer:
      'IndoBERT-Nusa adalah varian model IndoBERT yang diperluas untuk mendukung bahasa daerah di Indonesia. Model ini ditampilkan sebagai bagian dari kontribusi Pusat AI ITB dalam pengembangan model bahasa untuk bahasa lokal Indonesia.',
    keywords: ['indobert-nusa', 'indobert nusa', 'bahasa daerah', 'model bahasa lokal', 'nlp', 'indonesia', 'local language model'],
    aliases: ['indo bert nusa', 'indobert local', 'indobert bahasa daerah'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '50',
    supportingExcerpt:
      'IndoBERT-Nusa — extended IndoBERT variant supporting Indonesian local languages.',
    relatedQuestionSuggestions: [
      'Apa itu IndoBERT?',
      'Apa itu NusaWrites?',
      'Apa itu NusaCrowd?',
    ],
  },
  {
    id: 'nlp-009',
    title: 'Indonesian Speech Recognition',
    category: 'nlp-cv',
    answer:
      'Indonesian Speech Recognition adalah teknologi pengenalan ucapan berbahasa Indonesia yang dikembangkan oleh Pusat AI ITB. Riset ini mendukung aplikasi seperti transkripsi otomatis dan sistem percakapan berbahasa Indonesia.',
    keywords: ['speech recognition', 'pengenalan ucapan', 'bahasa indonesia', 'indonesian speech', 'asr', 'automatic speech recognition', 'transkripsi', 'nlp', 'suara'],
    aliases: ['pengenalan suara indonesia', 'asr indonesia', 'speech to text indonesia', 'indonesian asr'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '51',
    supportingExcerpt:
      'Indonesian Speech Recognition — ASR technology for Indonesian language developed by Pusat AI ITB.',
    relatedQuestionSuggestions: [
      'Apa itu Speech Recognition for Dental Medical Records?',
      'Apa itu Classroom Transcription?',
      'Apa itu Text-to-Speech?',
    ],
  },
  {
    id: 'nlp-010',
    title: 'Conversational Analytics',
    category: 'nlp-cv',
    answer:
      'Conversational Analytics adalah riset AI yang menganalisis percakapan (conversation) untuk mengekstrak wawasan. Riset ini memanfaatkan NLP untuk analisis data percakapan dan ditampilkan sebagai bagian dari kontribusi NLP Pusat AI ITB.',
    keywords: ['conversational analytics', 'analisis percakapan', 'conversation analysis', 'nlp', 'analisis dialog', 'chat analytics', 'indonesia'],
    aliases: ['analisis percakapan ai', 'conversation analytics', 'dialog analytics', 'chat analysis'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '51',
    supportingExcerpt:
      'Conversational Analytics — NLP-based analysis of conversation data for insight extraction.',
    relatedQuestionSuggestions: [
      'Apa itu Nusa Dialogue?',
      'Apa itu Hoax Classification?',
      'Apa itu Rating Process System and Sentiment Analysis?',
    ],
  },
  {
    id: 'nlp-011',
    title: 'Brain Decoding: Brain Signals to Image',
    category: 'nlp-cv',
    answer:
      'Brain Decoding: Brain Signals to Image adalah riset AI yang menerjemahkan sinyal otak menjadi citra (image). Riset ini berada pada persimpangan computer vision dan neuroscience, dan ditampilkan sebagai bagian dari penelitian NLP dan computer vision Pusat AI ITB.',
    keywords: ['brain decoding', 'brain signals', 'sinyal otak', 'image', 'citra', 'neuroscience', 'computer vision', 'brain to image', 'neuroAI'],
    aliases: ['decoding sinyal otak', 'brain signal to image', 'otak ke citra', 'brain decoding ai'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '51',
    supportingExcerpt:
      'Brain Decoding: Brain Signals to Image — AI research translating brain signals into images.',
    relatedQuestionSuggestions: [
      'Apa itu Brain-inspired Visual Processing?',
      'Apa itu Spiking Neural Networks?',
      'Apa itu Image Dehazing?',
    ],
  },
  {
    id: 'nlp-012',
    title: 'Industrial Defect Detection',
    category: 'nlp-cv',
    answer:
      'Industrial Defect Detection adalah riset computer vision untuk mendeteksi cacat pada produk industri secara otomatis. Riset ini mendukung kontrol kualitas industri dan ditampilkan sebagai bagian dari penelitian NLP dan computer vision Pusat AI ITB.',
    keywords: ['industrial defect', 'deteksi cacat industri', 'computer vision', 'kontrol kualitas', 'quality control', 'industri', 'defect detection'],
    aliases: ['deteksi cacat industri', 'industrial defect detection', 'defect detection industry', 'quality inspection ai'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '51',
    supportingExcerpt:
      'Industrial Defect Detection — computer vision for automatic industrial defect detection in quality control.',
    relatedQuestionSuggestions: [
      'Apa itu Automated Textile Defect Detection?',
      'Apa itu Image Dehazing?',
      'Apa saja contoh proyek computer vision yang ditampilkan?',
    ],
  },
  {
    id: 'nlp-013',
    title: 'Generative AI',
    category: 'nlp-cv',
    answer:
      'Generative AI adalah bidang riset AI yang berfokus pada pembangkitan konten baru — seperti teks, gambar, atau audio — menggunakan model AI. Pusat AI ITB menampilkan Generative AI sebagai salah satu area penelitian NLP dan computer vision yang dikembangkan.',
    keywords: ['generative ai', 'ai generatif', 'pembangkitan konten', 'generasi teks', 'generasi gambar', 'generasi audio', 'nlp', 'computer vision'],
    aliases: ['ai generatif', 'generative model', 'content generation ai', 'genai'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '51',
    supportingExcerpt:
      'Generative AI — AI research focused on generating new content (text, images, audio) using AI models.',
    relatedQuestionSuggestions: [
      'Apa itu IndoGPT?',
      'Apa itu Automatic Product Title Generation?',
      'Apa itu Image Dehazing?',
    ],
  },
  {
    id: 'nlp-014',
    title: 'Image Dehazing',
    category: 'nlp-cv',
    answer:
      'Image Dehazing adalah riset computer vision yang mengurangi efek kabut (haze) pada citra untuk meningkatkan visibilitas. Riset ini ditampilkan sebagai bagian dari penelitian computer vision Pusat AI ITB.',
    keywords: ['image dehazing', 'dehazing', 'kabut', 'haze removal', 'computer vision', 'visibilitas citra', 'image enhancement', 'peningkatan citra'],
    aliases: ['penghilang kabut', 'dehaze', 'haze removal', 'image fog removal', 'dehazing citra'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '51',
    supportingExcerpt:
      'Image Dehazing — computer vision research for reducing haze in images to improve visibility.',
    relatedQuestionSuggestions: [
      'Apa itu Brain Decoding?',
      'Apa itu Industrial Defect Detection?',
      'Apa itu Generative AI?',
    ],
  },

  // ============================================================
  // J. ADVANCED RESEARCH
  // ============================================================
  {
    id: 'ar-001',
    title: 'Brain-inspired Visual Processing',
    category: 'advanced-research',
    answer:
      'Brain-inspired Visual Processing adalah riset AI yang mengambil inspirasi dari cara kerja otak biologis untuk memproses informasi visual. Pendekatan ini bertujuan mengembangkan model computer vision yang lebih efisien dan efektif dengan meniru mekanisme penglihatan biologis.',
    keywords: ['brain-inspired', 'visual processing', 'pemrosesan visual', 'otak biologis', 'neuroscience', 'computer vision', 'bio-inspired', 'neuromorphic'],
    aliases: ['pemrosesan visual berbasis otak', 'brain inspired vision', 'neuromorphic vision', 'bio-inspired visual'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '52',
    supportingExcerpt:
      'Brain-inspired visual processing — AI research drawing inspiration from biological brain mechanisms for visual processing.',
    relatedQuestionSuggestions: [
      'Apa itu Spiking Neural Networks?',
      'Apa itu Brain Decoding?',
      'Apa itu Attention Matrix Sparsification?',
    ],
  },
  {
    id: 'ar-002',
    title: 'Attention Matrix Sparsification',
    category: 'advanced-research',
    answer:
      'Attention Matrix Sparsification adalah riset yang mengoptimalkan mekanisme attention pada model AI dengan membuat matriks attention lebih sparse (jarang). Pendekatan ini bertujuan mengurangi beban komputasi pada model berbasis attention tanpa mengorbankan kualitas secara signifikan.',
    keywords: ['attention matrix', 'sparsification', 'sparse', 'attention', 'optimasi', 'komputasi', 'transformer', 'efisiensi model'],
    aliases: ['sparse attention', 'attention sparsification', 'matriks attention sparse', 'sparse attention matrix'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '52',
    supportingExcerpt:
      'Attention Matrix Sparsification — optimizing attention mechanisms by sparsifying attention matrices for computational efficiency.',
    relatedQuestionSuggestions: [
      'Apa itu Brain-inspired Visual Processing?',
      'Apa itu Spiking Neural Networks?',
      'Apa itu Log Anomaly Detection with Transformers?',
    ],
  },
  {
    id: 'ar-003',
    title: 'Spiking Neural Networks',
    category: 'advanced-research',
    answer:
      'Spiking Neural Networks (SNN) adalah jenis neural network yang meniru cara kerja neuron biologis dengan menggunakan pulsa (spike) sebagai sinyal. SNN ditampilkan sebagai riset AI tingkat lanjut Pusat AI ITB, mengeksplorasi paradigma komputasi yang lebih dekat dengan cara kerja otak biologis.',
    keywords: ['spiking neural networks', 'snn', 'neuron biologis', 'spike', 'pulsa', 'neuromorphic', 'komputasi biologis', 'neural network'],
    aliases: ['snn', 'spiking network', 'jaringan saraf berpulsa', 'spiking neuron'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '52',
    supportingExcerpt:
      'Spiking Neural Networks — neural networks mimicking biological neurons using spike-based signals.',
    relatedQuestionSuggestions: [
      'Apa itu Brain-inspired Visual Processing?',
      'Apa itu Machine Unlearning?',
      'Apa itu Attention Matrix Sparsification?',
    ],
  },
  {
    id: 'ar-004',
    title: 'Machine Unlearning and Privacy Auditing',
    category: 'advanced-research',
    answer:
      'Machine Unlearning dan Privacy Auditing adalah riset AI yang berfokus pada kemampuan model untuk "melupakan" data tertentu (machine unlearning) serta mengaudit aspek privasi model. Riset ini mendukung pengembangan AI yang lebih aman dari sisi privasi dan kepatuhan terhadap regulasi data.',
    keywords: ['machine unlearning', 'privacy auditing', 'audit privasi', 'lupa data', 'unlearning', 'privasi', 'privacy', 'regulasi data', 'gdpr'],
    aliases: ['machine unlearning ai', 'unlearning privacy', 'audit privasi model', 'forgetting machine learning'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '53',
    supportingExcerpt:
      'Machine Unlearning and Privacy Auditing — research on model forgetting and privacy auditing for safer AI.',
    relatedQuestionSuggestions: [
      'Apa itu Model Inversion Auditing?',
      'Apa itu SISA Sharding?',
      'Apa itu Spiking Neural Networks?',
    ],
  },
  {
    id: 'ar-005',
    title: 'Model Inversion Auditing',
    category: 'advanced-research',
    answer:
      'Model Inversion Auditing adalah riset yang mengaudit kerentanan model AI terhadap serangan model inversion — di mana penyerang berusaha merekonstruksi data pelatihan dari output model. Riset ini mendukung pengembangan model AI yang lebih aman dan menjaga privasi data pelatihan.',
    keywords: ['model inversion', 'inversion auditing', 'audit model', 'serangan model inversion', 'privasi', 'security', 'keamanan model', 'privacy attack'],
    aliases: ['audit inversion', 'model inversion attack', 'inversion audit', 'model inversion privacy'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '53',
    supportingExcerpt:
      'Model Inversion Auditing — auditing AI model vulnerability to model inversion attacks for data privacy protection.',
    relatedQuestionSuggestions: [
      'Apa itu Machine Unlearning?',
      'Apa itu SISA Sharding?',
      'Apa itu Attention Matrix Sparsification?',
    ],
  },
  {
    id: 'ar-006',
    title: 'SISA Sharding',
    category: 'advanced-research',
    answer:
      'SISA Sharding (Sharded, Isolated, Sliced, Aggregated) adalah teknik machine unlearning yang membagi data pelatihan menjadi shard untuk mempermudah proses "melupakan" data tertentu tanpa harus melatih ulang seluruh model. Riset ini ditampilkan sebagai bagian dari penelitian privasi AI Pusat AI ITB.',
    keywords: ['sisa', 'sisa sharding', 'sharded isolated sliced aggregated', 'machine unlearning', 'shard', 'data partitioning', 'privasi', 'privacy'],
    aliases: ['sisa training', 'sharded training', 'sisa technique', 'sisa unlearning'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '53',
    supportingExcerpt:
      'SISA Sharding — technique for machine unlearning by partitioning training data into shards for efficient forgetting.',
    relatedQuestionSuggestions: [
      'Apa itu Machine Unlearning?',
      'Apa itu Model Inversion Auditing?',
      'Apa itu Spiking Neural Networks?',
    ],
  },

  // ============================================================
  // K. ACADEMIC PROGRAMS & TRAINING
  // ============================================================
  {
    id: 'ak-001',
    title: 'Program Akademik AI di ITB',
    category: 'akademik',
    answer:
      'Presentasi mencantumkan beberapa program akademik terkait AI di ITB: International Undergraduate Program in Computer Science — AI Track, program Sarjana (undergraduate) Computer Science/Informatics, program Master of Artificial Intelligence (S2 AI), program doktoral (S3) dengan riset AI, serta program interdisipliner lain yang terkait AI. Presentasi tidak menyatakan bahwa pendaftaran saat ini terbuka — untuk informasi pendaftaran terkini, perlu menghubungi kanal resmi ITB.',
    keywords: ['program akademik', 'undergraduate', 'international undergraduate program', 'computer science', 'ai track', 'master', 's2 ai', 'master of artificial intelligence', 'doctoral', 's3', 'informatics', 'informatika', 'interdisipliner'],
    aliases: ['program studi ai', 'jurusan ai itb', 'kuliah ai itb', 'pendidikan ai', 'degree program ai'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '55',
    supportingExcerpt:
      'International Undergraduate Program in Computer Science — AI Track, undergraduate Computer Science/Informatics, Master of Artificial Intelligence, doctoral research, and other AI-related interdisciplinary programs.',
    relatedQuestionSuggestions: [
      'Apa saja topik pelatihan yang dicantumkan?',
      'Apa itu Center for Artificial Intelligence ITB?',
      'Bagaimana cara menghubungi Center for Artificial Intelligence ITB?',
    ],
  },
  {
    id: 'ak-002',
    title: 'Topik Pelatihan AI di Pusat AI ITB',
    category: 'akademik',
    answer:
      'Presentasi mencantumkan berbagai topik pelatihan AI yang tersedia di Pusat AI ITB, antara lain: Introduction to AI, Python Programming Basics, Machine Learning, Data Exploration, Classification, Clustering, NLP and Chatbots, AI Ethics, dan AI Model Evaluation. Topik-topik ini mendukung kegiatan Education and Training Pusat AI ITB.',
    keywords: ['pelatihan', 'training', 'introduction to ai', 'python', 'python programming', 'machine learning', 'data exploration', 'classification', 'clustering', 'nlp', 'chatbots', 'ai ethics', 'ai model evaluation', 'edukasi', 'topik pelatihan'],
    aliases: ['materi pelatihan ai', 'training topics', 'kursus ai', 'workshop ai', 'materi training ai'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '55',
    supportingExcerpt:
      'Training topics: Introduction to AI, Python Programming Basics, Machine Learning, Data Exploration, Classification, Clustering, NLP and Chatbots, AI Ethics, AI Model Evaluation.',
    relatedQuestionSuggestions: [
      'Apa saja program akademik AI di ITB?',
      'Apa itu Chatbot for Education using LLM and RAG?',
      'Apa itu Personalized Learning?',
    ],
  },

  // ============================================================
  // L. KONTAK
  // ============================================================
  {
    id: 'kon-001',
    title: 'Informasi Kontak Center for Artificial Intelligence ITB',
    category: 'kontak',
    answer:
      'Berdasarkan presentasi, Center for Artificial Intelligence ITB dapat dihubungi melalui: Email: aicenter@itb.ac.id; Website: aicenter.itb.ac.id. Untuk informasi terkini mengenai program, pendaftaran, atau kerja sama, disarankan untuk menghubungi kanal resmi tersebut.',
    keywords: ['kontak', 'contact', 'email', 'aicenter', 'website', 'hubungi', 'informasi', 'alamat', 'communication'],
    aliases: ['cara menghubungi', 'contact info', 'email pusat ai', 'hubungi pusat ai', 'kontak resmi'],
    sourceDocument: 'Driving AI Innovation: The ITB Innovation Ecosystem — Center for Artificial Intelligence, ITB, 2026',
    slideNumber: '57',
    supportingExcerpt:
      'Contact: aicenter@itb.ac.id, aicenter.itb.ac.id.',
    relatedQuestionSuggestions: [
      'Apa itu Center for Artificial Intelligence ITB?',
      'Apa saja program akademik dan topik pelatihan yang dicantumkan?',
      'Apa saja kegiatan inti Pusat AI ITB?',
    ],
  },
];
