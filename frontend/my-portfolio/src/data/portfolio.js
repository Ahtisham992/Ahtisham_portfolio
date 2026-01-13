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
    projects: "10+",
    certificates: "5+",
    technologies: "15+"
  }
};

export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "Flutter", level: 85 },
    { name: "HTML / CSS / JavaScript", level: 95 }
  ],
  backend: [
    { name: "Node.js / Express", level: 88 },
    { name: "MongoDB", level: 82 }
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
  {
    id: 1,
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
      video: "/prismora-project.mp4", // Demo video
    },
    github: "https://github.com/Ahtisham992",
    liveDemo: null,
    tags: ["AI", "NLP", "Computer Vision", "React Native"],
    date: "2025",
    featured: true
  },
  {
    id: 2,
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
  {
    id: 3,
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
    liveDemo: "http://photo-gallery.eu-north-1.elasticbeanstalk.com/", // Add if you have one
    tags: ["React", "AWS", "Full Stack", "Cloud"],
    date: "2025",
    featured: true
  },
  {
    id: 4,
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
  {
    id: 5,
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
    liveDemo: "https://university-management-system-nine.vercel.app/", // Add if you have one
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