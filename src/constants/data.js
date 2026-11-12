import { Github, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';

export const profileData = {
  name: "SANTHOSH T K",
  role: "Software Development Engineer 2 (SDE2)",
  experience: "4+ Years",
  currentCompany: "IQVIA",
  location: "Bangalore",
  social: {
    github: "https://github.com/TKSanthosh",
    linkedin: "https://linkedin.com/in/santhosh-tk",
    email: "tksanthosh494@gmail.com",
    mobile: "+91 8825802707",
    portfolio: "https://santhoshtk-portfolio.netlify.app/"
  },
  shortIntro: "Software Development Engineer 2 (SDE2) with 4+ years of experience engineering high-performance web applications across Node.js, Express.js, React.js, TypeScript, and AWS.",
  longIntro: "Software Development Engineer 2 (SDE2) with 4+ years of experience engineering high-performance web applications across Node.js, Express.js, React.js, TypeScript, and AWS. Proven track record in designing resilient RESTful APIs, secure authentication architectures, optimizing MySQL and MongoDB query performance, and resolving complex production challenges. Deep expertise in asynchronous programming, MVC design, scalable caching, and modern CI/CD deployment pipelines.\n\nAt IQVIA and Sify Technologies, I have engineered clinical engagement management platforms, migrated legacy PHP backends to Node.js and MongoDB, optimized high-concurrency database queries, and delivered resilient production systems.",
  achievements: [
    "Performance Impact: Enhanced API response latency by 20% through server-side caching and SQL optimization, and decreased recurring production issues by 30%.",
    "Project Delivery: Delivered 8+ major features across two mission-critical production systems.",
    "Architecture Modernization: Contributed to core PHP-to-Node.js migration and modular backend refactoring initiatives.",
    "Technical Leadership: Mentored junior engineers on backend development patterns, clean architecture, and coding standards."
  ],
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "API Latency Cut", value: "20%" },
    { label: "Production Bugs Cut", value: "30%" },
    { label: "Major Features Shipped", value: "8+" },
    { label: "Code Approval Rate", value: "95%+" },
    { label: "Academic CGPA", value: "9.15/10" }
  ],
  education: {
    degree: "Bachelor of Engineering (B.E.), Electronics & Communication Engineering",
    college: "Velammal College of Engineering & Technology, Madurai",
    cgpa: "9.15 / 10",
    year: "2023"
  },
  certifications: [
    {
      title: "JavaScript & ReactJS Bootcamp",
      issuer: "Google for Developers",
      year: "2021"
    },
    {
      title: "HTML5 Programming",
      issuer: "Udemy",
      year: "2021"
    }
  ]
};

export const skillsData = {
  backend: [
    "Node.js", "TypeScript", "Express.js", "RESTful APIs",
    "API Development & Integration", "JWT Authentication",
    "RBAC & Authorization", "Middleware", "MVC Architecture",
    "Asynchronous Programming"
  ],
  frontend: [
    "React.js", "TypeScript", "JavaScript (ES6+)", "React Hooks",
    "HTML5", "CSS3", "Reusable Components"
  ],
  databases: [
    "MySQL", "MongoDB", "SQL Joins", "Indexing", "Query Optimization"
  ],
  systemDesign: [
    "System Design Fundamentals", "Scalability", "Load Balancing",
    "Caching", "Database Scaling", "Microservices Concepts"
  ],
  tools: [
    "Git", "GitHub", "Postman", "npm", "VS Code", "JSON", "AWS", "CI/CD"
  ],
  aiTools: [
    "Cursor", "Claude Code", "GitHub Copilot", "Generative AI / LLM APIs"
  ]
};

export const projectsData = [
  {
    id: "expert-events",
    company: "IQVIA",
    location: "Bangalore",
    period: "June 2026 – Present",
    title: "Expert Events – Clinical Engagement Management Platform",
    description: "An enterprise clinical engagement management platform featuring configurable React.js workflows, Node.js/Express.js backend services, MySQL approval pipelines, and automated GitHub Actions CI/CD.",
    highlights: [
      "Developed a dynamic engagement-creation stepper using React.js, with configurable multi-step validation logic based on event type.",
      "Engineered Node.js and Express.js backend services and a multi-level approval workflow in MySQL with administrator override capabilities.",
      "Spearheaded end-to-end session lifecycle handling for live engagement events, from attendee onboarding through completion.",
      "Collaborated with business analysts, technical leads, and client stakeholders to translate product roadmaps into reliable technical solutions.",
      "Maintained automated CI/CD deployment workflows using GitHub Actions across staging and production environments."
    ],
    tech: ["Node.js", "TypeScript", "React.js", "Express.js", "MySQL", "RESTful APIs", "GitHub Actions", "AWS"],
    metrics: ["Multi-Level Approval", "Live Event Lifecycle", "CI/CD Pipelines"],
    links: {
      github: null,
      demo: null
    }
  },
  {
    id: "exam-engine",
    company: "Sify Technologies",
    location: "Chennai",
    period: "July 2023 – June 2026",
    title: "Exam Engine – Exam Delivery Platform",
    description: "A mission-critical, high-concurrency exam delivery platform migrated from legacy PHP to Node.js and MongoDB with fine-grained RBAC security and optimized query indexing.",
    highlights: [
      "Migrated legacy backend services from PHP to Node.js and MongoDB, decreasing recurring production issues by 30%.",
      "Architected JWT authentication with fine-grained authorization (RBAC) to ensure tamper-proof exam integrity.",
      "Optimized MySQL and MongoDB indexing strategies to accelerate query retrieval and decrease database load.",
      "Resolved asynchronous race conditions and UI rendering bottlenecks across high-concurrency exam sessions.",
      "Deployed structured logging and centralized exception handling to accelerate triage and incident resolution."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT", "RBAC", "Async/Await"],
    metrics: ["30% Bugs Cut", "PHP -> Node Migration", "JWT & RBAC"],
    links: {
      github: null,
      demo: null
    }
  },
  {
    id: "qptool",
    company: "Sify Technologies",
    location: "Chennai",
    period: "July 2023 – June 2026",
    title: "QPTool – Exam Configuration Platform",
    description: "A scalable exam configuration platform powered by modular Node.js microservices, high-throughput RESTful APIs, and reusable React.js component libraries.",
    highlights: [
      "Engineered robust backend microservices utilizing Node.js, Express.js, MySQL, and MongoDB.",
      "Designed high-throughput RESTful APIs and orchestrated seamless integration with React.js single-page applications.",
      "Crafted reusable React.js component libraries with optimized rendering performance and clean state management.",
      "Enhanced API response latency by 20% through targeted server-side caching and SQL query optimization.",
      "Refactored legacy services into modular architectures, reinforcing input validation, data sanitization, and security policies."
    ],
    tech: ["Node.js", "Express.js", "React.js", "MySQL", "MongoDB", "REST APIs"],
    metrics: ["20% Latency Cut", "Modular Microservices", "Server-Side Caching"],
    links: {
      github: null,
      demo: null
    }
  }
];

export const experienceData = [
  {
    id: 1,
    company: "IQVIA",
    role: "Software Development Engineer 2 (SDE2)",
    location: "Bangalore",
    period: "June 2026 – Present",
    project: "Expert Events – Clinical Engagement Management Platform",
    description: "Engineering dynamic React.js engagement workflows, Node.js/Express.js backend services, MySQL approval pipelines, and automated GitHub Actions CI/CD.",
    responsibilities: [
      "Developed a dynamic engagement-creation stepper using React.js, with configurable multi-step validation logic based on event type.",
      "Engineered Node.js and Express.js backend services and a multi-level approval workflow in MySQL with administrator override capabilities.",
      "Spearheaded end-to-end session lifecycle handling for live engagement events, from attendee onboarding through completion.",
      "Collaborated with business analysts, technical leads, and client stakeholders to translate product roadmaps into reliable technical solutions.",
      "Maintained automated CI/CD deployment workflows using GitHub Actions across staging and production environments."
    ],
    technologies: ["Node.js", "TypeScript", "Express.js", "React.js", "MySQL", "RESTful APIs", "GitHub Actions", "AWS"]
  },
  {
    id: 2,
    company: "Sify Technologies",
    role: "Software Developer",
    location: "Chennai",
    period: "July 2023 – June 2026",
    project: "Exam Engine & QPTool Platforms",
    description: "Migrated legacy PHP services to Node.js and MongoDB, architected JWT/RBAC security, and engineered high-throughput RESTful APIs and reusable React.js libraries.",
    responsibilities: [
      "Migrated legacy backend services from PHP to Node.js and MongoDB, decreasing recurring production issues by 30%.",
      "Architected JWT authentication with fine-grained authorization (RBAC) to ensure tamper-proof exam integrity.",
      "Optimized MySQL and MongoDB indexing strategies to accelerate query retrieval and decrease database load.",
      "Resolved asynchronous race conditions and UI rendering bottlenecks across high-concurrency exam sessions.",
      "Engineered robust backend microservices utilizing Node.js, Express.js, MySQL, and MongoDB.",
      "Designed high-throughput RESTful APIs, improving API response latency by 20% through server-side caching and SQL query optimization.",
      "Refactored legacy services into modular architectures, reinforcing input validation, data sanitization, and centralized exception handling."
    ],
    technologies: ["Node.js", "Express.js", "React.js", "MySQL", "MongoDB", "JWT", "RBAC", "REST APIs"]
  },
  {
    id: 3,
    company: "Sify Technologies – CHIP 2023 Program",
    role: "Full Stack Intern",
    location: "Chennai",
    period: "February 2023 – June 2023",
    project: "Internal Engineering Utilities & Web Apps",
    description: "Built responsive frontend views and backend REST services while collaborating in Agile sprints and production code reviews.",
    responsibilities: [
      "Built responsive frontend views and backend REST services utilizing React.js, Node.js, Express.js, and MySQL.",
      "Participated in Agile sprints, production code reviews, and Git-driven collaboration workflows.",
      "Contributed to internal engineering utilities adopted by core development teams across production initiatives."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Git"]
  }
];
