// ========================================
// FILE: src/data/portfolio.js - UPDATED WITH LADEWAY
// ========================================
export const personalInfo = {
  name: "Muhammad Ahtisham",
  title: "Software Engineer · Full Stack Developer",

  titles: [
    "Software Engineer",
    "Full Stack Developer"
  ],

  email: "muhammad.ahtisham.se@gmail.com",
  phone: "+92 320 5999041",
  location: "Islamabad / Rawalpindi, Pakistan",

  bio: "Software Engineer with a strong interest in software development, problem-solving, system design and implementation. Experienced in building web and mobile applications, integrating APIs, and working with relational databases. Committed to writing clean code, learning modern technologies, and contributing effectively to development teams. Comfortable owning features from design through deployment and post-release iteration.",

  resumeUrl: "/Ahtisham_Resume.pdf",
  introVideoUrl: "/intro-video.mp4",
  social: {
    linkedin: "https://www.linkedin.com/in/muhammad-ahtisham-6116ba2b2/",
    github: "https://github.com/Ahtisham992",
    instagram: "https://www.instagram.com/_m_ahtish.05/"
  },

  stats: {
    internships: "1",
    projects: "10+",
    certificates: "5+",
    technologies: "15+"
  }
};

export const siteMetadata = {
  hero: {
    heading: personalInfo.name,
    subheading: "Full-Stack Software Engineer.",
    description: "I design and build scalable web, mobile, and AI-powered products.",
    statusText: "Available for opportunities"
  },
  about: {
    heading: "About",
    description: "Engineering background and current focus."
  },
  projects: {
    heading: "Selected Work",
    description: "Case studies of systems and products I've engineered."
  },
  experience: {
    heading: "Experience",
    description: "Professional trajectory and roles."
  },
  capabilities: {
    heading: "Capabilities",
    description: "Core technologies and tools I work with daily."
  },
  achievements: {
    heading: "Achievements",
    description: "Milestones and professional recognition."
  },
  contact: {
    heading: "Contact",
    description: "Start a conversation."
  },
  footer: {
    description: "Engineering robust, scalable software systems and AI solutions. Available for remote and onsite opportunities."
  }
};

export const skills = {
  frontend: [
    { name: "React.js", level: 88 },
    { name: "Next.js 15", level: 85 },
    { name: "React Native", level: 80 },
    { name: "Redux Toolkit", level: 80 },
    { name: "Zustand", level: 75 },
    { name: "HTML / CSS / JavaScript (ES6+)", level: 95 },
    { name: "Tailwind CSS", level: 90 }
  ],

  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "NestJS", level: 80 },
    { name: "FastAPI", level: 78 },
    { name: "REST API Design", level: 90 },
    { name: "WebSockets", level: 80 },
    { name: "Socket.io", level: 80 },
    { name: "System Design", level: 82 },
    { name: "Distributed Systems", level: 75 }
  ],

  databases: [
    { name: "PostgreSQL", level: 88 },
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "Redis", level: 78 },
    { name: "Prisma ORM", level: 85 },
    { name: "SQLAlchemy", level: 75 },
    { name: "Sequelize", level: 75 },
    { name: "pgvector", level: 75 },
    { name: "Query Optimization", level: 80 }
  ],

  cloudDevOps: [
    { name: "AWS (EC2, S3, RDS, Beanstalk)", level: 82 },
    { name: "Docker", level: 85 },
    { name: "Kubernetes", level: 75 },
    { name: "Google Cloud Run", level: 78 },
    { name: "CI/CD Pipelines", level: 80 },
    { name: "Git", level: 90 }
  ],

  aiIntegration: [
    { name: "Python", level: 85 },
    { name: "Whisper ASR", level: 80 },
    { name: "Hugging Face Transformers (BERT, PEGASUS)", level: 78 },
    { name: "OpenCV", level: 80 },
    { name: "MediaPipe", level: 75 },
    { name: "LLM APIs (OpenAI / Gemini)", level: 88 },
    { name: "Ollama (Local LLMs)", level: 78 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Prismora AI – Smart Podcast Summarisation",
    shortDescription: "AI-powered platform for podcast content transformation",
    description: "Prismora AI is an AI-powered platform designed to transform long-form podcasts into structured, searchable, and engaging content. The system automatically generates accurate transcripts with timestamps, concise summaries, and AI-driven highlight clips using NLP and Computer Vision techniques.",
    category: "AI/ML",
    gradient: "from-purple-500 to-pink-600",
    icon: "Brain",
    technologies: [
      "React Native", "Python", "Whisper AI", "FastAPI",
      "BERT", "PostgreSQL", "OpenCV", "Hugging Face", "FFmpeg", "Node.js"
    ],
    features: [
      "Speech-to-text transcription using Whisper AI",
      "Abstractive summarisation using transformer-based NLP models",
      "Video keyframe extraction and highlight generation",
      "Keyword-based search across transcripts",
      "Personalised content recommendations",
      "Community-driven curation and feedback"
    ],
    media: {
      thumbnail: "/projectSS/prismoraai/1.png",
      images: [
        "/projectSS/prismoraai/2.png",
        "/projectSS/prismoraai/3.png",
        "/projectSS/prismoraai/4.mp4"
      ],
      video: ""
    },
    github: "https://github.com/Ahtisham992",
    liveDemo: "https://prismora-ai.netlify.app/",
    tags: ["AI", "NLP", "Computer Vision", "React Native"],
    date: "2025-26",
    featured: true
  },

  // ─── LADEWAY — POSITION 2 ───────────────────────────────────────────
  {
    id: 2,
    title: "Ladeway – AI-Powered Conversational Lead Qualification Platform",
    shortDescription: "Multi-tenant SaaS platform that qualifies leads through natural AI conversation for any industry",
    description: "Ladeway is a production-grade, multi-tenant SaaS platform built as an architecture exercise for Logicstics (Philadelphia, PA). Any business — logistics, real estate, legal, insurance — can configure an AI agent with a custom persona, define qualification fields, set scoring rules, and deploy a branded chat interface. The AI conducts natural multi-turn conversations, extracts structured data with confidence scores, scores leads automatically, and surfaces them to the sales team in a real-time CRM dashboard. The industry-agnostic design is the central architectural decision — zero hardcoded industry logic exists in any service file, proven by automated codebase audit.",
    category: "Full Stack / AI / SaaS",
    gradient: "from-blue-700 to-indigo-800",
    icon: "Bot",
    technologies: [
      "Next.js 14", "NestJS", "TypeScript", "PostgreSQL",
      "Prisma ORM", "Redis (Upstash)", "Groq API (Llama 3)",
      "Turborepo", "Tailwind CSS", "JWT Auth",
      "Row-Level Security", "Server-Sent Events", "Vercel", "Render"
    ],
    features: [
      "Multi-tenant architecture with PostgreSQL Row-Level Security enforced at the database layer — not just application code",
      "Industry-agnostic AI engine — every persona, qualification field, and scoring rule is a database record, not code",
      "Natural multi-turn AI conversations streamed token-by-token via Server-Sent Events",
      "Structured data extraction with confidence scoring from free-form conversation transcripts",
      "Configurable lead scoring engine with HOT / WARM / COLD tier overrides",
      "Real-time sales rep dashboard with lead pipeline, inline status updates, and 30-second polling",
      "Admin configuration console — update AI persona, fields, and scoring rules without a developer",
      "Visual Flow Builder with live preview of unsaved configuration changes",
      "Config versioning — structural changes create a new version, in-progress conversations are immune",
      "Analytics dashboard with conversation volume charts, tier distribution, and industry breakdown",
      "Self-serve tenant onboarding with 3-step wizard and embeddable chat widget code",
      "Conversation resilience — Redis expiry recovery, AI unavailable graceful fallback, escalation to human rep",
      "Three industries (Logistics, Real Estate, Legal Services) running on one codebase — proven by grep audit"
    ],
    highlights: [
      "Built end-to-end in one week as a paid architecture exercise for a Philadelphia-based international logistics company",
      "30-phase implementation plan with definitions of done — treated as a real production build, not a prototype",
      "Automated multi-industry proof: same engine, three industries, zero conditional industry logic",
      "PostgreSQL RLS cross-tenant isolation test — zero rows returned even without application-level filtering",
      "NestJS persistent server architecture specifically chosen to support SSE streaming — serverless would time out mid-conversation",
      "Groq-powered Llama 3 inference for fast, cost-efficient AI qualification at scale"
    ],
    media: {
      thumbnail: "/projectSS/ladeway/0.png",
      images: [
        "/projectSS/ladeway/1.png",
        "/projectSS/ladeway/2.png",
        "/projectSS/ladeway/3.png",
        "/projectSS/ladeway/4.png",
        "/projectSS/ladeway/5.png",
        "/projectSS/ladeway/6.png",
        "/projectSS/ladeway/7.png",
        "/projectSS/ladeway/8.png",
        "/projectSS/ladeway/9.png",
        "/projectSS/ladeway/10.png",
        "/projectSS/ladeway/11.png",
        "/projectSS/ladeway/12.png"
      ],
      video: ""
    },
    github: "https://github.com/Ahtisham992/Ladeway",
    liveDemo: "https://ladeway-web-ten.vercel.app/",
    tags: ["SaaS", "AI", "Multi-Tenant", "NestJS", "Next.js", "Full Stack"],
    date: "2026",
    featured: true
  },
  // ────────────────────────────────────────────────────────────────────

  {
    id: 3,
    title: "Turing Intelligence Platform – Distributed System Simulation Engine",
    shortDescription: "Production-grade DES platform for system performance simulation and optimisation",
    description: "A production-grade Discrete-Event Simulation (DES) platform implementing the M/G/c queue model for system performance engineering. Enables backend and DevOps teams to simulate workloads, analyse bottlenecks, and optimise system configurations before deployment using real-time metrics and AI-driven insights.",
    category: "Systems / AI",
    gradient: "from-indigo-600 to-purple-700",
    icon: "Cpu",
    technologies: [
      "TypeScript", "React 18", "Node.js", "Express",
      "PostgreSQL", "Redis", "Socket.IO",
      "Docker", "Kubernetes", "Prisma", "Zustand"
    ],
    features: [
      "Custom-built Discrete-Event Simulation engine (M/G/c queue model)",
      "Real-time KPI tracking (latency, throughput, utilisation, drop rate)",
      "WebSocket-based live simulation updates",
      "AI-driven bottleneck detection and optimisation insights",
      "Scenario comparison and system configuration testing",
      "Full-stack SaaS architecture with authentication and persistence",
      "CI/CD pipeline with Docker and Kubernetes deployment"
    ],
    media: {
      thumbnail: "/projectSS/turingplatform/0.png",
      images: [
        "/projectSS/turingplatform/1.png",
        "/projectSS/turingplatform/2.png",
        "/projectSS/turingplatform/3.png"
      ],
      video: ""
    },
    github: null,
    liveDemo: "",
    tags: ["Distributed Systems", "Simulation", "Backend", "DevOps", "AI"],
    date: "2026",
    featured: true,
    highlights: [
      "Designed scalable monorepo architecture with shared simulation engine",
      "Implemented queueing theory (M/G/c) for real-world system modelling",
      "Built real-time simulation pipeline using WebSockets",
      "Deployed production system using Docker + Kubernetes",
      "Developed analytics engine for automated system insights"
    ]
  },

  {
    id: 4,
    title: "DevFlow AI – Unified Intelligent Developer Workspace",
    shortDescription: "All-in-one developer workspace with project-aware AI and cross-platform sync",
    description: "DevFlow AI is a robust, full-stack monorepo designed to eliminate context switching for engineers. It combines workspace management, persistent developer notes, and an intelligent AI assistant into a single platform. Powered by locally-running LLMs (Ollama) and vector embeddings (pgvector) for semantic code search, it ensures total privacy while delivering blazingly fast, context-aware responses across both Web and a native React Native Mobile app.",
    category: "Full Stack / AI",
    gradient: "from-blue-600 to-purple-600",
    icon: "Terminal",
    technologies: [
      "Next.js 15", "React Native", "NestJS", "PostgreSQL",
      "pgvector", "Redis", "Socket.io", "Ollama", "Prisma ORM", "Zustand"
    ],
    features: [
      "Context-aware AI Chat using semantic similarity (pgvector)",
      "Seamless cross-platform synchronization (Web & Mobile)",
      "Real-time token streaming via WebSockets and Server-Sent Events",
      "Stateless & secure JWT authentication with Redis token blacklisting",
      "Persistent markdown developer notes with live preview",
      "Local LLM execution ensuring 100% code privacy",
      "Automated CI/CD deployment to Vercel and Render"
    ],
    media: {
      thumbnail: "/projectSS/devflowai/1.webp",
      images: [
        "/projectSS/devflowai/2.png",
        "/projectSS/devflowai/3.png",
        "/projectSS/devflowai/4.png",
        "/projectSS/devflowai/5.png",
        "/projectSS/devflowai/6.png",
        "/projectSS/devflowai/7.png",
        "/projectSS/devflowai/8.png",
        "/projectSS/devflowai/9.png",
        "/projectSS/devflowai/10.png",
        "/projectSS/devflowai/11.png"
      ],
      video: ""
    },
    github: "https://github.com/Ahtisham992/DevFlowAI",
    liveDemo: "https://dev-flow-ai-five.vercel.app",
    tags: ["AI", "Next.js", "React Native", "Monorepo", "WebSockets"],
    date: "2026",
    featured: true,
    highlights: [
      "Architected a complex monorepo scaling across Web, Mobile, and Backend",
      "Implemented a real-time RAG pipeline using Postgres pgvector and local LLMs",
      "Deployed a highly available microservices infrastructure on a 100% free cloud tier",
      "Built seamless real-time WebSocket communication using Redis Pub/Sub adapters"
    ]
  },

  {
    id: 5,
    title: "SalesCare Service Center - Complete Management System",
    shortDescription: "Enterprise-grade service center management platform",
    description: "A comprehensive full-stack enterprise management system designed for service centers handling customer complaints, inventory management, invoicing, and purchase orders. Built with modern technologies and following industry best practices for scalability and security.",
    category: "Full Stack",
    gradient: "from-blue-600 to-cyan-500",
    icon: "Building2",
    technologies: [
      "React.js", "Node.js", "Express.js", "PostgreSQL",
      "Redux Toolkit", "Tailwind CSS", "JWT Authentication",
      "React Router", "Axios", "Date-fns", "React Hot Toast", "PDFKit"
    ],
    features: [
      "Complete complaint management with workflow tracking",
      "Multi-user role-based access control (Admin, Technician, Manager, Receptionist)",
      "Real-time inventory tracking with transaction logging",
      "Automated invoice generation (Counter Sale & Service Invoices)",
      "Purchase Order & Goods Receipt management",
      "Material Requisition System (MRQS/MRTS)",
      "Advanced reporting and analytics dashboard",
      "PDF invoice generation with company branding",
      "Approval workflow system for purchase orders",
      "Real-time notifications system",
      "Auto-number generation for all documents",
      "Warranty status tracking and validation",
      "GST/FST calculations with discount management",
      "Comprehensive audit trail for all operations",
      "Dark mode support with responsive design"
    ],
    media: {
      thumbnail: "/projectSS/salescare/0.png",
      images: [
        "/projectSS/salescare/1.png",
        "/projectSS/salescare/2.png",
        "/projectSS/salescare/3.png",
        "/projectSS/salescare/4.png",
        "/projectSS/salescare/5.png",
        "/projectSS/salescare/6.png",
      ],
      video: null
    },
    github: "https://github.com/Ahtisham992/salescare-service-center",
    liveDemo: "https://salescare.netlify.app/",
    tags: ["React", "PostgreSQL", "MERN", "Enterprise", "ERP"],
    date: "2025-2026",
    featured: true,
    highlights: [
      "25+ database tables with complex relationships",
      "Complete RESTful API with 50+ endpoints",
      "JWT-based authentication with role permissions",
      "Real-time inventory management with transaction logging",
      "Automated document numbering system",
      "Multi-level approval workflows"
    ]
  },

  {
    id: 6,
    title: "GadgetPro - Premium MERN Ecommerce Platform",
    shortDescription: "Full-stack modern ecommerce platform for high-end tech gadgets",
    description: "GadgetPro is a complete end-to-end MERN stack ecommerce solution designed for premium tech products. It features a modern Apple-inspired UI, powerful admin dashboard, and scalable backend architecture. The platform includes advanced shopping features, real-time order tracking, and a fully integrated management system for inventory, users, and sales operations.",
    category: "Full Stack",
    gradient: "from-orange-500 to-red-500",
    icon: "ShoppingCart",
    technologies: [
      "React.js (Vite)", "Node.js", "Express.js", "MongoDB (Mongoose)",
      "Zustand", "React Router DOM", "JWT Authentication",
      "Nodemailer", "Chart.js", "Lucide React",
      "Vanilla CSS (Flexbox & Grid)"
    ],
    features: [
      "Modern Apple-inspired responsive UI with cinematic homepage",
      "Smart product search with server-side pagination",
      "Detailed product pages with image galleries and reviews",
      "Wishlist system with persistent state management",
      "Advanced checkout with multiple shipping addresses",
      "Coupon code system with dynamic discounts",
      "Real-time order tracking and status updates",
      "Order return request system with admin approval flow",
      "User profile dashboard with review and order history",
      "Admin analytics dashboard with charts (revenue, orders, top products)",
      "Complete product & inventory management (CRUD)",
      "Order lifecycle management (Accept → Deliver → Paid)",
      "Email notifications for order updates using Nodemailer",
      "Global toast notification system for user actions",
      "Secure JWT-based authentication and authorization"
    ],
    media: {
      thumbnail: "/projectSS/gadgetpro/0.png",
      images: [
        "/projectSS/gadgetpro/1.png",
        "/projectSS/gadgetpro/2.png",
        "/projectSS/gadgetpro/3.png",
        "/projectSS/gadgetpro/4.png",
        "/projectSS/gadgetpro/5.png",
        "/projectSS/gadgetpro/6.png",
        "/projectSS/gadgetpro/7.png",
        "/projectSS/gadgetpro/8.png",
      ],
      video: null
    },
    github: "https://github.com/Ahtisham992/GadgetPro",
    liveDemo: "https://thegadgetpro.netlify.app/",
    tags: ["MERN", "Ecommerce", "React", "MongoDB", "Full Stack"],
    date: "2026",
    featured: true,
    highlights: [
      "Full MERN stack architecture with scalable backend design",
      "JWT authentication with protected routes and role-based access",
      "Real-time analytics dashboard with Chart.js integration",
      "Complete ecommerce flow from browsing to order fulfillment",
      "Advanced state management using Zustand",
      "Email automation system for order lifecycle events"
    ]
  },

  {
    id: 7,
    title: "SlideMind AI – Intelligent Lecture-to-Learning System",
    shortDescription: "AI-powered system that transforms lecture slides into interactive learning experiences",
    description: "SlideMind AI is a production-grade AI learning platform that converts static lecture slides (PDF/PPTX) into structured, interactive study experiences. It automatically generates summaries, extracts topics, provides deep explanations, AI tutoring chat, and adaptive quiz generation. Built with a focus on scalability, caching optimization, and real-world educational impact.",
    category: "AI/Full Stack",
    gradient: "from-indigo-500 to-purple-600",
    icon: "Brain",
    technologies: [
      "Next.js 14", "FastAPI", "Google Gemini 2.5 Flash",
      "PostgreSQL/SQLite", "Tailwind CSS", "Framer Motion",
      "JWT Auth", "SQLAlchemy", "Docker", "Google Cloud Run"
    ],
    features: [
      "AI-powered lecture summarization with exam-focused insights",
      "Automatic topic extraction and knowledge mapping",
      "Deep-dive AI explanations in teacher-style format",
      "Context-aware AI chat tutor trained on uploaded slides",
      "Smart MCQ quiz generator with difficulty levels",
      "AI response caching system for zero-cost repeat access",
      "Secure JWT authentication with per-user data isolation",
      "PDF and PPTX parsing with structured text extraction",
      "Session persistence and lecture history management",
      "Fully responsive modern UI with smooth animations"
    ],
    highlights: [
      "Production-grade full-stack AI architecture",
      "Optimized AI token usage via caching layer (80k+ calls per $1)",
      "End-to-end deployment on Google Cloud Run",
      "Modular FastAPI backend with service-based architecture",
      "Real-world edtech problem solving (learning + assessment system)"
    ],
    media: {
      thumbnail: "/projectSS/slidemindai/logo.png",
      images: [
        "/projectSS/slidemindai/1.png",
        "/projectSS/slidemindai/2.png",
        "/projectSS/slidemindai/3.png",
        "/projectSS/slidemindai/4.png",
        "/projectSS/slidemindai/5.png"
      ],
      video: ""
    },
    github: "https://github.com/Ahtisham992/slidemind-ai",
    liveDemo: "https://slidemind-ui-703383698921.us-central1.run.app",
    tags: ["AI", "EdTech", "Full Stack", "FastAPI", "Next.js"],
    date: "2026",
    featured: true
  },

  {
    id: 8,
    title: "Smart Dua Companion - Islamic Supplications App",
    shortDescription: "Bilingual Islamic Dua app with offline support",
    description: "A modern, feature-rich React Native mobile application providing authentic Islamic supplications (Duas) from the Quran and Sunnah. Features complete bilingual support (English & Urdu), dark mode, offline access, and smart search functionality. Built with TypeScript and Redux for optimal performance and user experience.",
    category: "Mobile",
    gradient: "from-emerald-500 to-teal-600",
    icon: "Smartphone",
    technologies: [
      "React Native", "TypeScript", "Redux Toolkit",
      "Redux Persist", "React Navigation", "AsyncStorage",
      "Vector Icons", "Custom Hooks"
    ],
    features: [
      "Hundreds of authentic Duas verified from Quran and Sahih Hadith",
      "Complete bilingual interface (English & Urdu)",
      "Fully optimised dark mode theme",
      "100% offline access with local storage",
      "Smart keyword search in English and Urdu",
      "Favourites system for quick access",
      "Roman English transliteration for pronunciation",
      "Authentic source references and spiritual benefits",
      "Customisable font sizes",
      "Toggle translation/transliteration visibility",
      "99 Names of Allah with meanings",
      "Morning and evening Azkar collections",
      "Category-based Dua organisation"
    ],
    media: {
      thumbnail: "/projectSS/smartdua/1.png",
      images: [
        "/projectSS/smartdua/1.png",
      ],
      video: null
    },
    github: "https://github.com/Ahtisham992/SmartDuaCompanion",
    liveDemo: "https://smartduacompanion.netlify.app/",
    tags: ["React Native", "TypeScript", "Redux", "Mobile", "Islamic"],
    date: "2025",
    featured: true,
    highlights: [
      "Bilingual support with RTL (Right-to-Left) text rendering",
      "Optimised Redux state management with persistence",
      "Custom theme system with dynamic colour switching",
      "Fully responsive design for all screen sizes",
      "Zero network dependency after installation"
    ]
  },

  {
    id: 9,
    title: "Ergonomic Posture Assessment Agent",
    shortDescription: "AI agent for posture analysis and ergonomic feedback",
    description: "This AI Agent analyses human posture from uploaded images and returns ergonomic feedback. Built with FastAPI, MediaPipe for lightweight posture landmark detection, OpenCV, and NumPy. Runs in Docker on Hugging Face Spaces with REST API endpoints.",
    category: "AI/ML",
    gradient: "from-green-500 to-teal-600",
    icon: "Brain",
    technologies: [
      "FastAPI", "MediaPipe", "OpenCV", "NumPy", "Docker", "Hugging Face"
    ],
    features: [
      "Real-time posture landmark detection",
      "Ergonomic feedback and recommendations",
      "REST API endpoints for integration",
      "Docker containerised deployment",
      "Lightweight and efficient processing",
      "Health check monitoring"
    ],
    media: {
      thumbnail: "/projectSS/postureagent/1.png",
      images: [
        "/projectSS/postureagent/1.png",
        "/projectSS/postureagent/2.png",
      ],
      video: null
    },
    github: "https://github.com/Ahtisham992/ergonomic-posture-agent",
    liveDemo: "https://ergonomic-posture-analyzer.netlify.app/",
    tags: ["AI", "Computer Vision", "FastAPI", "Health"],
    date: "2025",
    featured: true
  },

  {
    id: 10,
    title: "Cloud Photo Gallery",
    shortDescription: "Full-stack cloud-native photo gallery on AWS",
    description: "A full-stack cloud-native photo gallery application deployed on AWS, featuring secure authentication, photo uploads, RESTful APIs, and scalable cloud architecture using EC2, RDS, S3, and Elastic Beanstalk.",
    category: "Full Stack",
    gradient: "from-blue-500 to-indigo-600",
    icon: "CloudUpload",
    technologies: [
      "React.js", "Node.js", "Express.js", "AWS",
      "Docker", "MySQL", "RDS", "S3", "Elastic Beanstalk", "CloudFormation"
    ],
    features: [
      "JWT-based authentication & protected routes",
      "Secure photo upload with validation (S3)",
      "Full CRUD operations for photos",
      "RESTful API with Sequelize ORM",
      "Dockerised backend deployed on AWS EC2",
      "Scalable cloud architecture"
    ],
    media: {
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      images: [
        "/projectSS/photogallery/1.png",
        "/projectSS/photogallery/2.png",
        "/projectSS/photogallery/3.png",
        "/projectSS/photogallery/4.png",
      ],
      video: null
    },
    github: "https://github.com/Ahtisham992/aws-photo-gallery",
    liveDemo: "http://photo-gallery.eu-north-1.elasticbeanstalk.com/",
    tags: ["React", "AWS", "Full Stack", "Cloud"],
    date: "2025",
    featured: true
  },

  {
    id: 11,
    title: "AI-Powered Code Assistant",
    shortDescription: "Intelligent tool for Python code enhancement",
    description: "An intelligent AI-powered tool for Python developers that provides code explanation, automatic documentation generation, bug detection & fixing, performance optimisation, and unit test generation using a fine-tuned transformer model (CodeT5).",
    category: "AI/ML",
    gradient: "from-pink-500 to-purple-600",
    icon: "Brain",
    technologies: [
      "Python", "PyTorch", "BERT", "CodeT5",
      "Google Colab", "Transformers"
    ],
    features: [
      "Natural language code explanations",
      "Automatic docstring generation",
      "Intelligent bug detection & fixes",
      "Code optimisation suggestions",
      "Automated unit test generation",
      "Interactive CLI interface"
    ],
    media: {
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80"
      ],
      video: null
    },
    github: "https://github.com/Ahtisham992/ai_code_assistant",
    liveDemo: null,
    tags: ["AI", "Machine Learning", "Python", "NLP"],
    date: "2025",
    featured: true
  },

  {
    id: 12,
    title: "University Management System",
    shortDescription: "Comprehensive MERN stack university management platform",
    description: "A web-based application designed to streamline and automate academic and financial operations within a university. Built using the MERN stack with an efficient and user-friendly interface for students, faculty, and administrators.",
    category: "Full Stack",
    gradient: "from-orange-500 to-red-600",
    icon: "School",
    technologies: [
      "React.js", "Redux", "Node.js", "Express.js",
      "MongoDB", "JWT", "Material UI", "REST APIs"
    ],
    features: [
      "Student panel with academic records and course enrolment",
      "Faculty module for attendance and grading",
      "Admin dashboard for user and financial management",
      "JWT-based authentication and authorisation",
      "Real-time notifications for deadlines and announcements",
      "Fee payment and result tracking system"
    ],
    media: {
      thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80"
      ],
      video: null
    },
    github: "https://github.com/Rayyan9477/University-Management-System",
    liveDemo: "https://university-management-system-nine.vercel.app/",
    tags: ["React", "MongoDB", "MERN", "Full Stack"],
    date: "2024",
    featured: false
  }
];

export const experience = [
  {
    title: "Software Engineer (Part-time, Remote)",
    company: "Turing Intelligence",
    location: "Prague, Czechia · Remote",
    period: "Jan 2026 – Present",
    type: "work",
    responsibilities: [
      "Build and contribute to a system simulation platform based on the M/G/c queue model for backend performance modelling and analysis.",
      "Built real-time simulation pipelines using WebSockets, enabling live tracking of system metrics (latency, throughput, utilisation).",
      "Designed and implemented RESTful APIs for simulation control, metrics collection, and scenario comparison.",
      "Developed full-stack features using React, Node.js, and TypeScript across web and mobile applications."
    ]
  },
  {
    title: "Web Development Intern",
    company: "eAccounting360",
    location: "Islamabad, Pakistan",
    period: "Jun 2024 – Aug 2024",
    type: "work",
    responsibilities: [
      "Front-end development with React.js for client-facing interfaces",
      "Full-stack feature implementation using MERN stack",
      "MySQL database integration and query optimisation"
    ]
  }
];

export const education = {
  degree: "BS Software Engineering",
  institution: "FAST-NUCES Islamabad",
  location: "Islamabad, Pakistan",
  period: "2022 – 2026",
  details: [
    "Final year — graduating June 2026",
    "Specialisation in full-stack and AI/ML engineering",
    "FYP (Prismora AI) — Grade A"
  ]
};

export const certifications = [
  {
    title: "Build a Website on Google Cloud Skill Badge",
    issuer: "Google",
    date: "Apr 2026",
    color: "blue"
  },
  {
    title: "Develop AI-Powered Solutions with Vertex AI",
    issuer: "Google",
    date: "Apr 2026",
    color: "blue"
  },
  {
    title: "AWS Cloud Quest – Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jan 2026",
    color: "orange"
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "Dec 2025",
    color: "orange"
  },
  {
    title: "Front-End Development with React",
    issuer: "IBM / Coursera",
    date: "Sep 2025",
    color: "blue"
  },
  {
    title: "Blackbird Software Engineering Job Simulation",
    issuer: "Forage",
    date: "Feb 2026",
    color: "purple"
  }
];

export const achievements = [
  {
    title: "Software Engineer (Part-time)",
    description: "Contributing to a distributed system simulation platform using React, Node.js, and TypeScript at Turing Intelligence.",
    date: "2026"
  },
  {
    title: "Ladeway — Architecture Exercise",
    description: "Built a production-grade multi-tenant AI SaaS platform in one week as an architecture exercise for a Philadelphia-based international logistics company. Deployed live with NestJS, Next.js, PostgreSQL RLS, and Groq-powered AI conversations.",
    date: "2026"
  },
  {
    title: "Prismora AI Deployment",
    description: "Built and deployed an AI podcast summarisation platform using Whisper AI and NLP transformers.",
    date: "2025"
  },
  {
    title: "Web Development Intern",
    description: "Implemented full-stack features using the MERN stack and optimized MySQL databases at eAccounting360.",
    date: "2024"
  },
  {
    title: "SalesCare Service Center System",
    description: "Delivered a comprehensive ERP platform with 50+ REST APIs for complaint and inventory management.",
    date: "2025"
  },
  {
    title: "DevFlow AI Platform Launch",
    description: "Architected and deployed a full-stack, cross-platform AI developer workspace utilizing semantic vector search and real-time WebSockets.",
    date: "2026"
  },
];