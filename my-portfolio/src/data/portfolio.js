// ========================================
// FILE: src/data/portfolio.js - TASK 1 UPDATES APPLIED
// ========================================
export const personalInfo = {
  name: "Muhammad Ahtisham",
  title: "Full Stack Developer · AI/ML Engineer",

  // TASK 1.2: Removed "Flutter Developer", "Problem Solver", "Tech Enthusiast"
  titles: [
    "Full Stack Developer",
    "AI/ML Engineer"
  ],

  // TASK 1.3: Updated to correct email
  email: "muhammad.ahtisham.se@gmail.com",
  phone: "+92 320 5999041",
  location: "Islamabad / Rawalpindi, Pakistan",

  // TASK 1.1: Achievement-driven bio — no "passionate/innovative/modern"
  bio: "Final-year BS Software Engineering student at FAST-NUCES (graduating 2026). I build production-ready systems — from an enterprise ERP with 50+ APIs to an AI podcast platform using Whisper and transformer NLP. Currently contributing remotely to Turing Intelligence (Prague). Open to full-time software engineering roles.",

  resumeUrl: "/Ahtisham_Resume_SoftwareEngineer.pdf", // Place your resume.pdf in public folder
  introVideoUrl: "/intro-video.mp4",           // Place your intro video in public folder
  social: {
    linkedin:  "https://www.linkedin.com/in/muhammad-ahtisham-6116ba2b2/",
    github:    "https://github.com/Ahtisham992",
    instagram: "https://www.instagram.com/_m_ahtish.05/"
  },

  // TASK 1.5: Conservative, verifiable numbers
  stats: {
    internships:  "2+",
    projects:     "10+",   // Changed from 12+
    certificates: "5+",
    technologies: "15+"    // Changed from 20+
  }
};

export const skills = {
  frontend: [
    { name: "React.js",              level: 80 },
    { name: "React Native",          level: 75 },
    { name: "HTML / CSS / JavaScript", level: 95 }
  ],
  backend: [
    { name: "Node.js / Express",     level: 88 },
    { name: "MongoDB",               level: 82 },
    { name: "PostgreSQL",            level: 85 }
  ],
  ai: [
    { name: "Python (AI / ML)",            level: 78 },
    { name: "Machine Learning Models",      level: 72 }
  ],
  cloud: [
    { name: "AWS (Foundational)",          level: 70 },
    { name: "Cloud Deployment & APIs",     level: 68 }
  ]
};

// ENHANCED PROJECTS WITH MEDIA SUPPORT
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
        "/projectSS/prismoraai/1.png",
      ],
      video: "/prismora-project.mp4"
    },
    github:   "https://github.com/Ahtisham992",
    liveDemo: null,
    tags:     ["AI", "NLP", "Computer Vision", "React Native"],
    date:     "2025-26",
    featured: true
  },
  {
    id: 2,
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
      thumbnail: "/projectSS/salescare/1.png",
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
    github:   "https://github.com/Ahtisham992/salescare-service-center",
    liveDemo: "https://salescare.netlify.app/",
    tags:     ["React", "PostgreSQL", "MERN", "Enterprise", "ERP"],
    date:     "2025-2026",
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
  id: 3,
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
    thumbnail: "/projectSS/gadgetpro/1.png",
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
    id: 4,
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
    github:   "https://github.com/Ahtisham992/SmartDuaCompanion",
    liveDemo: "https://smartduacompanion.netlify.app/", // TASK 3.2: Mobile app — no web demo URL
    tags:     ["React Native", "TypeScript", "Redux", "Mobile", "Islamic"],
    date:     "2025",
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
    id: 5,
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
    github:   "https://github.com/Ahtisham992/ergonomic-posture-agent",
    liveDemo: "https://ergonomic-posture-analyzer.netlify.app/",
    tags:     ["AI", "Computer Vision", "FastAPI", "Health"],
    date:     "2025",
    featured: true
  },

  {
    id: 6,
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
    github:   "https://github.com/Ahtisham992/aws-photo-gallery",
    liveDemo: "http://photo-gallery.eu-north-1.elasticbeanstalk.com/",
    tags:     ["React", "AWS", "Full Stack", "Cloud"],
    date:     "2025",
    featured: true
  },

  {
    id: 7,
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
    github:   "https://github.com/Ahtisham992/ai_code_assistant",
    liveDemo: null,
    tags:     ["AI", "Machine Learning", "Python", "NLP"],
    date:     "2025",
    featured: true
  },

  {
    id: 8,
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
    github:   "https://github.com/Rayyan9477/University-Management-System",
    liveDemo: "https://university-management-system-nine.vercel.app/",
    tags:     ["React", "MongoDB", "MERN", "Full Stack"],
    date:     "2024",
    featured: false
  }
];

// TASK 1.4: Turing Intelligence entry uncommented, corrected, and placed ABOVE eAccounting360
export const experience = [
  {
    title:   "Software Engineer (Part-time, Remote)",
    company: "Turing Intelligence",
    location: "Prague, Czechia · Remote",
    period:  "May 2025 – Present",
    type:    "work",
    responsibilities: [
      "Build web and mobile features on a task-basis for a Prague-based AI and simulation research lab (computer algorithms, mathematical modelling, deep learning)",
      "Develop full-stack applications using MERN stack and React Native; implement REST APIs and authentication systems",
      "Collaborate remotely with a specialist engineering team on early-stage product and tooling work"
    ]
  },
  {
    title:   "Web Development Intern",
    company: "eAccounting360",
    location: "Islamabad, Pakistan",
    period:  "Jun 2024 – Aug 2024",
    type:    "work",
    responsibilities: [
      "Front-end development with React.js for client-facing interfaces",
      "Full-stack feature implementation using MERN stack",
      "MySQL database integration and query optimisation"
    ]
  }
];

export const education = {
  degree:      "BS Software Engineering",
  institution: "FAST-NUCES Islamabad",
  location:    "Islamabad, Pakistan",
  period:      "2022 – 2026",
  details: [
    "Final year — graduating June 2026",
    "Specialisation in full-stack and AI/ML engineering",
    "FYP (Prismora AI) — Grade A"
  ]
};

export const certifications = [
  {
    title:  "AWS Cloud Quest – Cloud Practitioner",
    issuer: "Amazon Web Services",
    date:   "Jan 2026",
    color:  "orange"
  },
  {
    title:  "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date:   "Dec 2025",
    color:  "orange"
  },
  {
    title:  "Front-End Development with React",
    issuer: "IBM / Coursera",
    date:   "Sep 2025",
    color:  "blue"
  },
  {
    title:  "Flutter & Dart Development",
    issuer: "Udemy",
    date:   "Aug 2024",
    color:  "purple"
  }
];
