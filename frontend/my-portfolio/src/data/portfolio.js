// ========================================
// FILE: src/data/portfolio.js
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
  social: {
    linkedin: "https://www.linkedin.com/in/m-ahtisham-6116ba2b2/",
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

export const projects = [
  {
    title: "AI-Powered Code Assistant",
    description: "An intelligent AI-powered tool for Python developers that provides code explanation, automatic documentation generation, bug detection & fixing, performance optimization, and unit test generation using a fine-tuned transformer model (CodeT5).",
    gradient: "from-pink-500 to-purple-600",
    icon: "Brain",
    technologies: ["Python", "PyTorch", "Transformers", "CodeT5", "Google Colab"],
    features: [
      "Natural language code explanations",
      "Automatic docstring generation",
      "Intelligent bug detection & fixes",
      "Code optimization suggestions",
      "Automated unit test generation",
      "Interactive CLI interface"
    ]
  },
  {
    title: "Photo Gallery Application",
    description: "A full-stack cloud-native photo gallery application deployed on AWS, featuring secure authentication, photo uploads, RESTful APIs, and scalable cloud architecture using EC2, RDS, S3, and Elastic Beanstalk.",
    gradient: "from-blue-500 to-indigo-600",
    icon: "CloudUpload",
    technologies: ["React 18", "Node.js", "Express", "AWS", "Docker", "MySQL / RDS"],
    features: [
      "JWT-based authentication & protected routes",
      "Secure photo upload with validation (S3)",
      "Full CRUD operations for photos",
      "RESTful API with Sequelize ORM",
      "Dockerized backend deployed on AWS EC2",
      "Responsive React frontend on Elastic Beanstalk"
    ]
  },
  {
    title: "University Management System",
    description: "A role-based web application designed to streamline university administration by managing classes, subjects, attendance, notices, and user communication through dedicated dashboards for admins, teachers, and students.",
    gradient: "from-red-500 to-yellow-600",
    icon: "School",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Material UI"],
    features: [
      "Role-based authentication (Admin, Teacher, Student)",
      "Class, subject & user management",
      "Attendance tracking & grade management",
      "Notice board & announcements",
      "Student complaints handling system",
      "Secure authentication & data handling"
    ]
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
