// ========================================
// FILE: src/data/portfolio.js - ENHANCED
// ========================================
export const personalInfo = {
  name: "M. Ahtisham",
  title: "Software Engineer",
  titles: [
    "Software Engineer",
    "Full Stack Developer",
    "Flutter Developer",
    "Problem Solver",
    "Tech Enthusiast"
  ],
  email: "shamimuhammad77@gmail.com",
  phone: "+92 320 5999041",
  location: "Satellite Town, Rawalpindi, Pakistan",
  bio: "Passionate BS Software Engineering student at FAST-NUCES Islamabad with expertise in full-stack web and cross-platform mobile development. Building innovative solutions with modern technologies.",
  resumeUrl: "/Muhammad_Ahtisham_Resume.pdf", // Place your resume.pdf in public folder
  introVideoUrl: "/intro-video.mp4", // Place your intro video in public folder
  social: {
    linkedin: "https://www.linkedin.com/in/muhammad-ahtisham-6116ba2b2/",
    github: "https://github.com/Ahtisham992",
    instagram: "https://www.instagram.com/_m_ahtish.05/"
  },
  stats: {
    internships: "2+",
    projects: "12+", // Updated from 10+
    certificates: "5+",
    technologies: "20+" // Updated from 15+
  }
};

export const skills = {
  frontend: [
    { name: "React.js", level: 80 },
    { name: "React Native", level: 75 }, // Updated
    { name: "HTML / CSS / JavaScript", level: 95 }
  ],
  backend: [
    { name: "Node.js / Express", level: 88 },
    { name: "MongoDB", level: 82 },
    { name: "PostgreSQL", level: 85 } // Added
  ],
  ai: [
    { name: "Python (AI / ML)", level: 78 },
    { name: "Machine Learning Models", level: 72 }
  ],
  cloud: [
    { name: "AWS (Foundational)", level: 70 },
    { name: "Cloud Deployment & APIs", level: 68 }
  ]
};

// ENHANCED PROJECTS WITH MEDIA SUPPORT
export const projects = [
  // NEW PROJECT 1: SalesCare Service Center
  {
    id: 1,
    title: "SalesCare Service Center - Complete Management System",
    shortDescription: "Enterprise-grade service center management platform",
    description: "A comprehensive full-stack enterprise management system designed for service centers handling customer complaints, inventory management, invoicing, and purchase orders. Built with modern technologies and following industry best practices for scalability and security.",
    category: "Full Stack",
    gradient: "from-blue-600 to-cyan-500",
    icon: "Building2",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redux Toolkit",
      "Tailwind CSS",
      "JWT Authentication",
      "React Router",
      "Axios",
      "Date-fns",
      "React Hot Toast",
      "PDFKit"
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
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      ],
      video: null,
    },
    github: "https://github.com/Ahtisham992/salescare-service-center",
    liveDemo: "https://salescare.netlify.app/", // Add when deployed
    tags: ["React", "PostgreSQL", "MERN", "Enterprise", "ERP"],
    date: "2024-2025",
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

  // NEW PROJECT 2: Smart Dua Companion
  {
    id: 2,
    title: "Smart Dua Companion - Islamic Supplications App",
    shortDescription: "Bilingual Islamic Dua app with offline support",
    description: "A modern, feature-rich React Native mobile application providing authentic Islamic supplications (Duas) from the Quran and Sunnah. Features complete bilingual support (English & Urdu), dark mode, offline access, and smart search functionality. Built with TypeScript and Redux for optimal performance and user experience.",
    category: "Mobile",
    gradient: "from-emerald-500 to-teal-600",
    icon: "Smartphone",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Redux Persist",
      "React Navigation",
      "AsyncStorage",
      "Vector Icons",
      "Custom Hooks"
    ],
    features: [
      "Hundreds of authentic Duas verified from Quran and Sahih Hadith",
      "Complete bilingual interface (English & Urdu)",
      "Fully optimized dark mode theme",
      "100% offline access with local storage",
      "Smart keyword search in English and Urdu",
      "Favorites system for quick access",
      "Roman English transliteration for pronunciation",
      "Authentic source references and spiritual benefits",
      "Customizable font sizes",
      "Toggle translation/transliteration visibility",
      "99 Names of Allah with meanings",
      "Morning and evening Azkar collections",
      "Category-based Dua organization"
    ],
    media: {
      thumbnail: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80",
        "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=1200&q=80",
        "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=1200&q=80",
      ],
      video: null,
    },
    github: "https://github.com/Ahtisham992/SmartDuaCompanion",
    liveDemo: "https://smartduacompanion.netlify.app/", // Mobile app - provide APK link if available
    apkDownload: "/smart-dua-companion.apk", // Add APK to public folder
    tags: ["React Native", "TypeScript", "Redux", "Mobile", "Islamic"],
    date: "2024",
    featured: true,
    highlights: [
      "Bilingual support with RTL (Right-to-Left) text rendering",
      "Optimized Redux state management with persistence",
      "Custom theme system with dynamic color switching",
      "Production-ready Android APK available",
      "Fully responsive design for all screen sizes",
      "Zero network dependency after installation"
    ]
  },

  // EXISTING PROJECT 3: Prismora AI
  {
    id: 3,
    title: "Prismora AI – Smart Podcast Summarization",
    shortDescription: "AI-powered platform for podcast content transformation",
    description: "Prismora AI is an AI-powered platform designed to transform long-form podcasts into structured, searchable, and engaging content. The system automatically generates accurate transcripts with timestamps, concise summaries, and AI-driven highlight clips using NLP and Computer Vision techniques.",
    category: "AI/ML",
    gradient: "from-purple-500 to-pink-600",
    icon: "Brain",
    technologies: ["React Native", "Python", "Whisper AI", "FastAPI", "BERT", "PostgreSQL", "OpenCV", "Hugging Face", "FFmpeg", "Node.js"],
    features: [
      "Speech-to-text transcription using Whisper AI",
      "Abstractive summarization using transformer-based NLP models",
      "Video keyframe extraction and highlight generation",
      "Keyword-based search across transcripts",
      "Personalized content recommendations",
      "Community-driven curation and feedback"
    ],
    media: {
      thumbnail: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=1200&q=80",
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80",
      ],
      video: "/prismora-project.mp4",
    },
    github: "https://github.com/Ahtisham992",
    liveDemo: null,
    tags: ["AI", "NLP", "Computer Vision", "React Native"],
    date: "2025",
    featured: true
  },

  // EXISTING PROJECT 4: Ergonomic Posture Assessment
  {
    id: 4,
    title: "Ergonomic Posture Assessment Agent",
    shortDescription: "AI agent for posture analysis and ergonomic feedback",
    description: "This AI Agent analyzes human posture from uploaded images and returns ergonomic feedback. Built with FastAPI, MediaPipe for lightweight posture landmark detection, OpenCV, and NumPy. Runs in Docker on Hugging Face Spaces with REST API endpoints.",
    category: "AI/ML",
    gradient: "from-green-500 to-teal-600",
    icon: "Brain",
    technologies: ["FastAPI", "MediaPipe", "OpenCV", "NumPy", "Docker", "Hugging Face"],
    features: [
      "Real-time posture landmark detection",
      "Ergonomic feedback and recommendations",
      "REST API endpoints for integration",
      "Docker containerized deployment",
      "Lightweight and efficient processing",
      "Health check monitoring"
    ],
    media: {
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
        "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=1200&q=80",
      ],
      video: null,
    },
    github: "https://github.com/Ahtisham992/ergonomic-posture-agent",
    liveDemo: "https://ergonomic-posture-analyzer.netlify.app/",
    tags: ["AI", "Computer Vision", "FastAPI", "Health"],
    date: "2025",
    featured: true
  },

  // EXISTING PROJECT 5: Photo Gallery Application
  {
    id: 5,
    title: "Photo Gallery Application",
    shortDescription: "Full-stack cloud-native photo gallery on AWS",
    description: "A full-stack cloud-native photo gallery application deployed on AWS, featuring secure authentication, photo uploads, RESTful APIs, and scalable cloud architecture using EC2, RDS, S3, and Elastic Beanstalk.",
    category: "Full Stack",
    gradient: "from-blue-500 to-indigo-600",
    icon: "CloudUpload",
    technologies: ["React.js", "Node.js", "Express.js", "AWS", "Docker", "MySQL", "RDS", "S3", "Elastic Beanstalk", "CloudFormation"],
    features: [
      "JWT-based authentication & protected routes",
      "Secure photo upload with validation (S3)",
      "Full CRUD operations for photos",
      "RESTful API with Sequelize ORM",
      "Dockerized backend deployed on AWS EC2",
      "Scalable cloud architecture"
    ],
    media: {
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=80",
      ],
      video: null,
    },
    github: "https://github.com/Ahtisham992/aws-photo-gallery",
    liveDemo: "http://photo-gallery.eu-north-1.elasticbeanstalk.com/",
    tags: ["React", "AWS", "Full Stack", "Cloud"],
    date: "2025",
    featured: true
  },

  // EXISTING PROJECT 6: AI-Powered Code Assistant
  {
    id: 6,
    title: "AI-Powered Code Assistant",
    shortDescription: "Intelligent tool for Python code enhancement",
    description: "An intelligent AI-powered tool for Python developers that provides code explanation, automatic documentation generation, bug detection & fixing, performance optimization, and unit test generation using a fine-tuned transformer model (CodeT5).",
    category: "AI/ML",
    gradient: "from-pink-500 to-purple-600",
    icon: "Brain",
    technologies: ["Python", "PyTorch", "BERT", "CodeT5", "Google Colab", "Transformers"],
    features: [
      "Natural language code explanations",
      "Automatic docstring generation",
      "Intelligent bug detection & fixes",
      "Code optimization suggestions",
      "Automated unit test generation",
      "Interactive CLI interface"
    ],
    media: {
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80",
      ],
      video: null,
    },
    github: "https://github.com/Ahtisham992/ai_code_assistant",
    liveDemo: null,
    tags: ["AI", "Machine Learning", "Python", "NLP"],
    date: "2025",
    featured: true
  },

  // EXISTING PROJECT 7: University Management System
  {
    id: 7,
    title: "University Management System",
    shortDescription: "Comprehensive MERN stack university management platform",
    description: "A web-based application designed to streamline and automate academic and financial operations within a university. Built using the MERN stack with an efficient and user-friendly interface for students, faculty, and administrators.",
    category: "Full Stack",
    gradient: "from-orange-500 to-red-600",
    icon: "School",
    technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "JWT", "Material UI", "REST APIs"],
    features: [
      "Student panel with academic records and course enrollment",
      "Faculty module for attendance and grading",
      "Admin dashboard for user and financial management",
      "JWT-based authentication and authorization",
      "Real-time notifications for deadlines and announcements",
      "Fee payment and result tracking system"
    ],
    media: {
      thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
      ],
      video: null,
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
    title: "Software Engineer Intern",
    company: "Turing Intelligence",
    location: "",
    period: "Jun 2024 - Aug 2024",
    type: "work",
    responsibilities: [
      "Developed AI-powered applications",
      "Collaborated with cross-functional teams",
      "Implemented modern development practices"
    ]
  },
  {
    title: "Web Development Intern",
    company: "eaccounting360",
    location: "Islamabad, Pakistan",
    period: "Jun 2023 - Aug 2023",
    type: "work",
    responsibilities: [
      "Front-end development with HTML, CSS, JavaScript",
      "MERN stack project implementation",
      "MySQL integration for backend"
    ]
  }
];

export const education = {
  degree: "Bachelor's in Software Engineering",
  institution: "FAST-NUCES",
  location: "Islamabad, Pakistan",
  period: "2022 - 2026",
  details: [
    "Currently in Final year",
    "Focus on full-stack development",
    "Active in coding competitions"
  ]
};

export const certifications = [
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM",
    color: "blue"
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    color: "orange"
  },
  {
    title: "Flutter & Dart Development",
    issuer: "Udemy",
    color: "purple"
  },
  {
    title: "User Experience Design",
    issuer: "Coursera",
    color: "green"
  }
];