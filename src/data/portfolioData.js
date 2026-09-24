/* ==============================================================================
   ALL YOUR PORTFOLIO CONTENT LIVES IN THIS ONE FILE.
   You should never need to touch a component just to update your info —
   edit the values below and the site updates everywhere it's used.
   ============================================================================== */

export const portfolioData = {
  // -------------------------------------------------------------------
  // BASIC INFO — shown in the nav, hero, and browser tab
  // -------------------------------------------------------------------
  name: "NITHEESH GOWDA G S",
  siteTitle: "NITHEESH GOWDA G S — Software Developer Portfolio",
  location: "BENGALURU, INDIA",
  available: true, // shows/hides the green "Available for opportunities" pill

  // Rotating titles typed out under your name in the hero
  roleTitles: [
    "Software Developer Intern",
    "Python Full-Stack Developer",
    "AI Engineer",
    "Problem Solver",
  ],

  summary:
    "Software Developer Intern with hands-on experience in cloud cost optimization, " +
    "application deployment, integrations, and full-stack development. Skilled in " +
    "Python, SQL, JavaScript, React.js, Django, REST APIs, Docker, and Git. Strong " +
    "foundation in Machine Learning, Data Structures, and full-stack development, " +
    "with a passion for continuous learning, building scalable solutions, and " +
    "collaborating effectively in dynamic environments.",

  // -------------------------------------------------------------------
  // CONTACT — reused in the hero, contact section, and footer
  // -------------------------------------------------------------------
  email: "nitheeshsiddegowda543@gmail.com",
  phone: "+917204546369", // digits only, used for the tel: link
  phoneDisplay: "+91-7204546369", // however you want it to look on screen
  linkedinUrl: "https://www.linkedin.com/in/nitheesh-gowda-g-s-9aa5a0312/",
  linkedinDisplay: "linkedin.com/in/nitheesh-gowda-g-s-9aa5a0312",
  githubUrl: "https://github.com/Nitheeshsiddegowda",
  githubDisplay: "github.com/Nitheeshsiddegowda",
  address: "K M Doddi, Maddur, Mandya, Karnataka — 571422",

  // Put your actual resume.pdf inside the /public folder with this exact
  // name, or change this value to point wherever you'd rather host it.
  resumeFile: "/resume.pdf",

  // -------------------------------------------------------------------
  // "AT A GLANCE" STATS CARD — value/suffix/decimals control the
  // count-up animation and how the number is displayed
  // -------------------------------------------------------------------
  stats: [
    { label: "Current CGPA", value: 8.59, decimals: 2, suffix: " / 10" },
    { label: "PUC Score", value: 85.33, decimals: 2, suffix: "%" },
    { label: "10th Grade", value: 85.83, decimals: 1, suffix: "%" },
    { label: "Projects Built", value: 5, decimals: 0, suffix: "+" },
    { label: "Certifications", value: 10, decimals: 0, suffix: "+" },
  ],

  // -------------------------------------------------------------------
  // ABOUT — paragraphs shown top to bottom, plus skills/tools tags
  // -------------------------------------------------------------------
  aboutParagraphs: [
    "I'm a Software Developer Intern with a Bachelor of Engineering degree " +
      "in Artificial Intelligence and Data Science from SDM Institute of " +
      "Technology, Ujire. I am passionate about building scalable, user-friendly " +
      "software solutions and solving real-world problems through modern " +
      "web technologies and AI.",

    "I have hands-on experience working with Python, SQL, JavaScript, React.js, " +
      "Django, REST APIs, Docker, and Git. At CloudPi, I have gained practical " +
      "experience in cloud cost optimization, application deployment, Slack " +
      "integrations, Dimension design and deployment, and end-to-end testing " +
      "of application workflows.",

    "I also have experience building full-stack and AI-powered applications, " +
      "including an Energy Consumption Forecasting and Recommendation Agent " +
      "using XGBoost. I enjoy learning new technologies, improving my " +
      "problem-solving skills, and contributing effectively in collaborative " +
      "development environments."
  ],

  skills: [
    "Python",
    "SQL",
    "HTML & CSS",
    "React",
    "Django",
    "REST APIs",
    "JavaScript",
    "Data Structures & Algorithms",
    "Artificial Intelligence",
    "Machine Learning",
    "ML Libraries",
    "AWS",
    "Azure",
    "Docker",
    "GitHub",
    "Power BI & Tableau",
    "Figma",
    "Analytical Tools",
  ],

  tools: [
    "VS Code",
    "Git & GitHub",
    "Docker",
    "MySQL",
    "ClickHouse",
    "DLT",
    "Cube Core",
    "Slack",
    "AWS",
    "Azure",
    "Jupyter Notebook",
    "Excel",
    "Figma",
    "AI Models",
  ],

  education: [
    {
      years: "2022 — 2026",
      degree: "B.E. — Artificial Intelligence and Data Science",
      school: "SDM Institute of Technology, Ujire",
      badge: "CGPA: 8.59",
    },
    {
      years: "2020 — 2022",
      degree: "Pre-University / 12th — Science (PCMB)",
      school: "Deeksha CFL PU College, Bengaluru",
      badge: "85.33%",
    },
    {
      years: "2020",
      degree: "10th (ICSE)",
      school: "Cauvery Public School, Mandya",
      badge: "85.83%",
    },
  ],

  // -------------------------------------------------------------------
  // EXPERIENCE — add/remove objects to add/remove timeline entries
  // -------------------------------------------------------------------
  experience: [
    {
      date: "Aug 2026 — Present",
      org: "CloudPi (PurpleData Inc.)",
      location: "Bengaluru, Karnataka",
      status: "Onsite · Active",
      title: "Software Developer Intern",
      description:
        "Gained hands-on experience working on a cloud cost optimization platform, " +
        "understanding its architecture, workflows, and application functionality. " +
        "Contributed to Slack integration development, Dimension design and deployment, " +
        "and performed end-to-end testing for user management and other application " +
        "workflows. Worked with Python, Node.js, React.js, REST APIs, MySQL, ClickHouse, " +
        "Docker, Git/GitHub, AWS, and Azure in a collaborative development environment.",
      tags: [
        "Python",
        "Node.js",
        "React.js",
        "REST APIs",
        "MySQL",
        "ClickHouse",
        "Docker",
        "Git/GitHub",
        "AWS",
        "Azure",
      ],
    },
    {
      date: "Feb 2026 — Jul 2026",
      org: "Pentagon Space Pvt. Ltd.",
      location: "Bengaluru, Karnataka",
      status: "Onsite · Completed",
      title: "Python Full-Stack Development Intern",
      description:
        "Completed a project-based Python Full-Stack Development training internship " +
        "focused on web application development. Gained hands-on experience with Python, " +
        "SQL, Django, React.js, JavaScript, HTML, CSS, and REST API fundamentals.",
      tags: [
        "Python",
        "SQL",
        "Django",
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "REST APIs",
      ],
    },
  ],

  // -------------------------------------------------------------------
  // PROJECTS — set "featured": true to highlight a card with the amber border
  // -------------------------------------------------------------------
  projects: [
    {
      num: "01",
      category: "AI/ML · Full-Stack Web Application",
      title: "Energy Consumption Forecasting and Recommendation Agent",
      description:
        "Developed a full-stack AI-powered web application that analyzes " +
        "household energy consumption and predicts future electricity usage " +
        "using an XGBoost model. Built with Django REST Framework, React, " +
        "SQLite, JWT Authentication, and Recharts, the application provides " +
        "dataset upload, data visualization, consumption forecasting, " +
        "interactive dashboards, and personalized energy-saving recommendations.",
      tags: [
        "Python",
        "Django",
        "Django REST Framework",
        "React",
        "SQLite",
        "JWT",
        "Pandas",
        "XGBoost",
        "Recharts",
      ],
      codeUrl:
        "https://github.com/Nitheeshsiddegowda/Energy_Consumption_Forecasting_and_Recommendation_Agent_ECFRA",
      demoUrl: "",
      featured: true,
    },
    {
      num: "02",
      category: "Full-Stack Web Application",
      title: "SmartConnect",
      description:
        "Independently developed a full-stack college management system with " +
        "dedicated Admin, Teacher, and Student portals. Implemented data " +
        "visualization features using Matplotlib and integrated a job portal " +
        "to support academic management and career-related functionality.",
      tags: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "JavaScript",
        "SQLite",
        "Matplotlib",
      ],
      codeUrl: "https://github.com/Nitheeshsiddegowda/SmartConnect",
      demoUrl: "",
      featured: false,
    },
    {
      num: "03",
      category: "Python · Automation",
      title: "PdfTalker (PDF to Audio Converter)",
      description:
        "Built a Python application that converts PDF documents into spoken " +
        "audio, making digital documents more accessible and convenient to " +
        "consume. The application extracts text using PyPDF2 and generates " +
        "natural speech using Google Text-to-Speech (gTTS), enabling users " +
        "to listen to documents instead of reading them.",
      tags: ["Python", "PyPDF2", "gTTS"],
      codeUrl: "https://github.com/Nitheeshsiddegowda/PdfTalker",
      demoUrl: "",
      featured: false,
    },
    {
      num: "04",
      category: "AI · Full-Stack Web Application",
      title: "Quiz Agent",
      description:
        "A quiz application designed to extract multiple-choice questions from " +
        "uploaded PDF documents, store structured questions, and provide a " +
        "timed quiz experience.",
      tags: ["Python", "Django", "PDF Processing", "JavaScript"],
      codeUrl: "https://github.com/Nitheeshsiddegowda/Quiz_Agent_",
      demoUrl: "",
      featured: false,
    },
    {
      num: "05",
      category: "Machine Learning",
      title: "T20 Match Winner and Score Predictor",
      description:
        "Machine learning project for predicting T20 match outcomes and scores.",
      tags: ["Python", "Machine Learning"],
      codeUrl: "",
      demoUrl: "",
      featured: false,
    },
    {
      num: "06",
      category: "Web Application",
      title: "Sonic Cart",
      description:
        "Web-based project developed as part of the user's application portfolio.",
      tags: [],
      codeUrl: "",
      demoUrl: "",
      featured: false,
    },
  ],

  // -------------------------------------------------------------------
  // CERTIFICATIONS
  // -------------------------------------------------------------------
  certifications: [
    {
      icon: "☁️",
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2026",
    },
    {
      icon: "💰",
      name: "FOCUS (FinOps)",
      issuer: "FinOps",
      year: "2026",
    },
    {
      icon: "💼",
      name: "Python Full-Stack Development Internship",
      issuer: "Pentagon Space Pvt. Ltd.",
      year: "2026",
    },
    {
      icon: "🛡️",
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Google & Coursera",
      year: "2024",
    },
    {
      icon: "🤖",
      name: "Introduction to Artificial Intelligence",
      issuer: "Infosys Springboard",
      year: "2024",
    },
    {
      icon: "🧠",
      name: "Introduction to Deep Learning",
      issuer: "Infosys Springboard",
      year: "2024",
    },
    {
      icon: "💬",
      name: "Introduction to Natural Language Processing",
      issuer: "Infosys Springboard",
      year: "2024",
    },
    {
      icon: "🐍",
      name: "Introduction to Python",
      issuer: "Infosys Springboard",
      year: "2024",
    },
    {
      icon: "🗄️",
      name: "PostgreSQL Developer",
      issuer: "Infosys Springboard",
      year: "2025",
    },
    {
      icon: "🍃",
      name: "Developing with MongoDB",
      issuer: "Infosys Springboard",
      year: "2024",
    },
    {
      icon: "💻",
      name: "Software Engineering Fundamentals",
      issuer: "Infosys Springboard",
      year: "2024",
    },
    {
      icon: "✨",
      name: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
      issuer: "Infosys Springboard",
      year: "2025",
    },
    {
      icon: "☁️",
      name: "Google Cloud Project Fundamentals for DevOps",
      issuer: "SDM Institute of Technology & KSCSST",
      year: "2025",
    },
  ],

  // -------------------------------------------------------------------
  // ACHIEVEMENTS & INVOLVEMENT
  // -------------------------------------------------------------------
  achievements: [
    {
      emoji: "🏏",
      title: "VTU-Level Sports Representative",
      description:
        "Represented SDM Institute of Technology in VTU-level cricket, " +
        "demonstrating teamwork, leadership, discipline, and the ability " +
        "to perform under pressure.",
    },
    {
      emoji: "🎯",
      title: "Problem Solving & Continuous Learning",
      description:
        "Passionate about learning new technologies, strengthening technical " +
        "and problem-solving skills, and continuously improving through " +
        "hands-on software development projects.",
    },
    {
      emoji: "🎬",
      title: "Hobbies & Interests",
      description:
        "Enjoy playing cricket and basketball, traveling to new places, " +
        "and following movies and sports.",
    },
  ],
};
