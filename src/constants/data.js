import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const profileData = {
  name: "Santhosh T K",
  role: "MERN Stack Developer",
  experience: "3 Years",
  currentCompany: "Sify Technologies",
  location: "Chennai",
  social: {
    github: "https://github.com/TKSanthosh",
    linkedin: "https://linkedin.com/in/santhosh-tk/",
    email: "mailto:tksanthosh494@gmail.com",
    mobile: "8825802707"
  },
  shortIntro: "Architecting scalable digital solutions and high-performance APIs with the MERN stack. Transforming complex requirements into robust, production-ready systems.",
  longIntro: "I am a results-driven MERN Stack Developer with 3 years of specialized experience in engineering secure, high-availability web applications. My expertise lies in architecting resilient backend systems with Node.js and Express, crafting intuitive frontend experiences with React, and optimizing complex database interactions using MySQL and MongoDB. At Sify Technologies, I have been pivotal in modernizing legacy infrastructure, spearheading the development of mission-critical exam delivery platforms, and driving technical excellence through code quality and performance optimization.",
  achievements: [
    "Engineered high-performance database queries, reducing API latency by 20% and significantly boosting system throughput.",
    "Spearheaded the end-to-end delivery of critical backend and frontend modules, consistently exceeding project timelines.",
    "Architected robust error-handling and logging frameworks, enhancing system reliability and reducing mean time to resolution (MTTR).",
    "Championed best practices in code quality and version control, establishing rigorous review processes for the engineering team."
  ],
  education: {
    degree: "B.E — Electronics & Communication Engineering",
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
    "Node.js", "Express.js", "REST APIs", "JWT Authentication", 
    "Middleware", "MVC Architecture", "Async/Await", 
    "Caching (Layer Integration)", "Error Handling"
  ],
  frontend: [
    "React.js", "JavaScript (ES6+)", "Hooks", 
    "Reusable Components", "HTML5", "CSS3"
  ],
  databases: [
    "MySQL", "MongoDB", "Joins", "Indexing", "Query Optimization"
  ],
  tools: [
    "Git", "GitHub", "Postman", "npm", "VS Code", "JSON"
  ],
  systemDesign: [
    "API Performance Optimization", "Modular Service Structure", 
    "Scalable Architecture Basics", "Production Debugging"
  ]
};

export const projectsData = [
  {
    id: "qptool",
    title: "QPTool – Enterprise Exam Configuration",
    description: "A mission-critical platform for configuring and managing high-stakes examinations. Architected the core backend infrastructure to support massive concurrent user loads.",
    highlights: [
      "Architected scalable Node.js/Express micro-services to handle complex exam configurations.",
      "Optimized critical API endpoints, achieving a 20% reduction in response times.",
      "Modernized legacy codebases into modular, maintainable, and testable service layers.",
      "Implemented advanced security protocols including biometric validation and IP-based restrictions.",
      "Developed a responsive and intuitive React-based administrative dashboard."
    ],
    tech: ["Node.js", "Express", "React", "MySQL", "MongoDB"],
    links: {
      github: "https://github.com/TKSanthosh",
      demo: "#"
    }
  },
  {
    id: "exam-engine",
    title: "Exam Engine – Next-Gen Delivery System",
    description: "A high-performance exam delivery engine capable of handling thousands of concurrent test-takers. Led the strategic migration from legacy PHP to a modern Node.js architecture.",
    highlights: [
      "Led the complete backend migration from monolithic PHP to a microservices-ready Node.js architecture.",
      "Implemented secure Role-Based Access Control (RBAC) using JWT for granular permission management.",
      "Engineered optimized database schemas in MongoDB and MySQL to ensure sub-second data retrieval.",
      "Resolved critical concurrency issues and race conditions to ensure data integrity during exams.",
      "Established a centralized logging and monitoring system for proactive error detection."
    ],
    tech: ["Node.js", "Express", "MongoDB", "MySQL", "JWT"],
    links: {
      github: "https://github.com/TKSanthosh",
      demo: "#"
    }
  }
];

export const experienceData = [
  {
    id: 1,
    company: "Sify Technologies",
    role: "Software Developer",
    period: "Jul 2023 - Present",
    description: "Core contributor to the engineering team, responsible for designing and implementing scalable backend solutions and responsive frontend interfaces.",
    responsibilities: [
      "Design and implement high-availability backend services using Node.js and Express.",
      "Develop and integrate RESTful APIs with React frontend for seamless user experiences.",
      "Drive the refactoring of legacy systems into modern, modular service architectures.",
      "Enhance application security through rigorous validation and advanced exception handling.",
      "Conduct deep-dive performance tuning of SQL and NoSQL database queries.",
      "Establish standard operating procedures for debugging and production deployment."
    ],
    technologies: ["Node.js", "Express.js", "MySQL", "MongoDB", "React.js"]
  },
  {
    id: 2,
    company: "Sify Technologies",
    role: "Full-Stack Engineering Intern",
    period: "Feb 2023 - Jul 2023",
    description: "Gained intensive hands-on experience in full-cycle web development, contributing to production-grade modules and internal tools.",
    responsibilities: [
      "Collaborated on the end-to-end development of web applications using the MERN stack.",
      "Mastered professional Git workflows, code reviews, and agile development methodologies.",
      "Built and deployed internal utility tools to accelerate engineering team productivity.",
      "Partnered with senior architects to troubleshoot and resolve complex production issues.",
      "Developed a strong foundation in scalable backend architecture and API design."
    ],
    technologies: ["Node.js", "Express.js", "React.js", "MySQL", "MongoDB"]
  }
];
