import { Github, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';

export const profileData = {
  name: "SANTHOSH T K",
  role: "Software Development Engineer 2 (SDE2)",
  experience: "3+ Years",
  currentCompany: "IQVIA",
  location: "Bangalore",
  social: {
    github: "https://github.com/TKSanthosh",
    linkedin: "https://linkedin.com/in/santhosh-tk",
    email: "tksanthosh494@gmail.com",
    mobile: "+91 8825802707",
    portfolio: "https://santhoshtk-portfolio.netlify.app/"
  },
  shortIntro: "Software Development Engineer 2 (SDE2) with 3+ years of experience in designing, developing, and maintaining scalable web applications using Node.js, Express.js, React.js, MySQL, MongoDB, and AWS.",
  longIntro: "Software Development Engineer 2 (SDE2) with 3+ years of experience in designing, developing, and maintaining scalable web applications using Node.js, Express.js, React.js, MySQL, MongoDB, and AWS. Experienced in REST API development, RBAC implementation, authentication, debugging, performance optimization, and enterprise application development.\n\nAt IQVIA and Sify Technologies, I have engineered enterprise clinical event management systems, led backend migration projects from PHP to Node.js, optimized high-concurrency database queries, and delivered resilient microservices ahead of deadlines.",
  achievements: [
    "Performance Impact: Reduced API response time by 20% and eliminated 30% of production bugs through systematic code migration and optimization.",
    "Project Delivery: Shipped 8+ major features ahead of deadlines across two production systems.",
    "Code Quality: Maintained 95%+ code review approval rate and established coding standards adopted by 5-member team.",
    "Technical Leadership: Led PHP-to-Node.js migration project, mentored 2 junior developers on backend best practices."
  ],
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "API Latency Cut", value: "20%" },
    { label: "Production Bugs Cut", value: "30%" },
    { label: "Major Features Shipped", value: "8+" },
    { label: "Code Approval Rate", value: "95%+" },
    { label: "Academic CGPA", value: "9.15/10" }
  ],
  education: {
    degree: "Bachelor of Engineering (B.E) – Electronics & Communication Engineering",
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
    "Node.js", "Express.js", "RESTful APIs", "JWT Authentication", 
    "Middleware", "MVC Architecture", "Async/Await", "WebSockets",
    "Structured Logging", "Centralized Exception Handling"
  ],
  frontend: [
    "React.js", "JavaScript (ES6+)", "React Hooks", 
    "HTML5", "CSS3", "Reusable Components"
  ],
  databases: [
    "MySQL", "MongoDB", "Joins", "Indexing", "Query Optimization"
  ],
  tools: [
    "Git", "GitHub", "Postman", "npm", "VS Code", "JSON", "AWS"
  ],
  systemDesign: [
    "API Validation & Security", "RBAC Implementation", 
    "Centralized Error Handling", "Modular Service Architecture", 
    "Production Debugging", "Performance Optimization"
  ]
};

export const projectsData = [
  {
    id: "expert-events",
    company: "IQVIA",
    location: "Bangalore",
    period: "June 2026 - Present",
    title: "Expert Events – Clinical Event & Engagement Management Platform",
    description: "An enterprise clinical event and engagement management platform built using Node.js, React.js, and MySQL to manage complex clinical trials and stakeholder engagements.",
    highlights: [
      "Working on an enterprise event management platform built using Node.js, React.js, and MySQL.",
      "Involved in application enhancements and feature modifications based on client and business requirements.",
      "Collaborating with team members to resolve issues and support ongoing application development."
    ],
    tech: ["Node.js", "React.js", "MySQL", "Express.js", "RESTful APIs", "AWS"],
    metrics: ["Enterprise Scale", "Clinical Event Mgmt", "Active Development"],
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
    title: "Exam Engine – High-Concurrency Exam Delivery System",
    description: "A mission-critical, high-concurrency exam delivery system engineered to process secure examination workflows and robust role-based access control.",
    highlights: [
      "Migrated backend logic from PHP to Node.js and MongoDB, reducing recurring production issues by nearly 30%.",
      "Implemented JWT-based authentication and role-based access control (RBAC) for secure exam workflows.",
      "Optimized MySQL and MongoDB queries, improving data retrieval speed and reducing system load.",
      "Resolved asynchronous issues, race conditions, and UI rendering delays.",
      "Implemented structured logging and centralized exception handling, significantly improving debugging and issue resolution."
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
    title: "QPTool – Exam Configuration & Question Bank Platform",
    description: "A scalable exam configuration platform managing item banking, rule evaluation, and frontend UI components with optimized API performance.",
    highlights: [
      "Developed and maintained scalable backend services using Node.js, Express.js, MySQL, and MongoDB.",
      "Built reusable React.js components and handled frontend API integration and UI logic.",
      "Designed and implemented RESTful APIs, integrating them with React.js frontend, improving API response time by approximately 20%.",
      "Refactored legacy backend code into modular, maintainable services, improving readability and long-term scalability.",
      "Enhanced API validation, security, and centralized error handling to improve system stability."
    ],
    tech: ["Node.js", "Express.js", "React.js", "MySQL", "MongoDB", "REST APIs"],
    metrics: ["20% Latency Cut", "Modular Services", "API Security"],
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
    period: "June 2026 - Present",
    project: "Expert Events – Clinical Event & Engagement Management Platform",
    description: "Working on an enterprise clinical event and engagement management platform using Node.js, React.js, and MySQL.",
    responsibilities: [
      "Working on an enterprise event management platform built using Node.js, React.js, and MySQL.",
      "Involved in application enhancements and feature modifications based on client and business requirements.",
      "Collaborating with team members to resolve issues and support ongoing application development."
    ],
    technologies: ["Node.js", "React.js", "MySQL", "Express.js", "RESTful APIs", "AWS"]
  },
  {
    id: 2,
    company: "Sify Technologies",
    role: "Software Developer",
    location: "Chennai",
    period: "July 2023 – June 2026",
    project: "Exam Engine & QPTool Platforms",
    description: "Engineered scalable backend microservices, led PHP-to-Node.js code migration, and developed full-stack features for examination systems.",
    responsibilities: [
      "Migrated backend logic from PHP to Node.js and MongoDB, reducing recurring production issues by nearly 30%.",
      "Implemented JWT-based authentication and role-based access control (RBAC) for secure exam workflows.",
      "Optimized MySQL and MongoDB queries, improving data retrieval speed and reducing system load.",
      "Resolved asynchronous issues, race conditions, and UI rendering delays.",
      "Designed and implemented RESTful APIs, integrating them with React.js frontend, improving API response time by approximately 20%.",
      "Refactored legacy backend code into modular, maintainable services, improving readability and long-term scalability.",
      "Implemented structured logging and centralized exception handling, significantly improving debugging and issue resolution."
    ],
    technologies: ["Node.js", "Express.js", "React.js", "MySQL", "MongoDB", "JWT", "RBAC", "REST APIs"]
  },
  {
    id: 3,
    company: "Sify Technologies",
    role: "Full Stack Intern (CHIP 2023 Program)",
    location: "Chennai",
    period: "February 2023 – June 2023",
    project: "Internal Tools & Modules",
    description: "Participated in full-stack web development, production debugging workflows, and internal module building.",
    responsibilities: [
      "Worked on full stack development using Node.js, Express.js, React.js, MySQL, and MongoDB.",
      "Gained hands-on experience with production workflows, debugging, and version control using Git.",
      "Built internal tools and modules used by engineering teams in real projects."
    ],
    technologies: ["Node.js", "Express.js", "React.js", "MySQL", "MongoDB", "Git", "Postman"]
  }
];
