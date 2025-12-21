export const personalInfo = {
  name: "Mohamad Anas",
  title: "Full Stack Developer",
  avatar: "/placeholder.jpeg",
  taglines: ["Full Stack Developer", "API Integrations", "Realtime Systems", "MERN + Next.js"],
  about:
    "I build accessible, pixel-perfect digital experiences for the web. Currently building scalable applications with focus on real-time features, admin dashboards, and seamless API integrations.",
  email: "anasmohamad369@gmail.com",
  phone: "+91 9110334346",
  location: "Remote",
  social: {
    github: "https://github.com/anasmohamad369",
    linkedin: "https://linkedin.com/in/anas-mohamad369",
    twitter: "https://twitter.com/anasmohamad369",
  },
}

export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Ryzer",
    period: "2024 — Present",
    description:
      "Building scalable user and admin platforms for real estate tokenization. Working with MERN stack and Next.js to deliver production-ready applications with reusable form architectures.",
    achievements: [
      "Developed user-facing asset investment platform with complex filtering and search",
      "Built comprehensive admin dashboard for asset and user management",
      "Implemented reusable form config system using React Hook Form",
      "Integrated real-time data updates and analytics dashboards",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "React Hook Form", "TypeScript" , "Shadcn UI" , "Recharts" , "Socket.io" , "Tailwind CSS" , "Express.js" , "Integration of SDKs"],
  },
  {
    id: 2,
    role: "Freelance Developer (MVP)",
    company: "1xFinance",
    period: "2025",
    description:
      "Built the user-facing MVP for a fintech lending platform. Developed loan application flows against various asset types with blockchain integration.",
    achievements: [
      "Delivered complete user model for loan application platform",
      "Built multi-step loan application flows for different asset types",
      "Integrated with NBFC partners for rate comparison",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    role: "Freelance Developer ",
    company: "Glamease",
    period: "2025",
    description:
      "Delivered end-to-end web solutions for various clients, from e-commerce platforms to SaaS applications.",
    achievements: [
      "Built responsive UI components with React and Tailwind CSS",
      "Improved application performance by 40%",
      "Collaborated with backend team on API design",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
  },
 
]

export const projects = [
  {
    id: 1,
    name: "Ryzer User Platform",
    description:
      "Real estate asset tokenization platform where users can browse, filter, and invest in residential and commercial properties. Features asset categories, yield calculations, and investment tracking.",
    image: "/real-estate-investment-platform-dashboard-with-pro.jpg",
    technologies: ["Next.js", "React Hook Form", "MongoDB", "Node.js", "TypeScript"],
    category: "Web Apps",
    github: "https://github.com",
    live: "https://user.ryzer.app",
    role: "Full Stack Developer at Ryzer",
        comingsoon : false

  },
  {
    id: 2,
    name: "Ryzer Admin Dashboard",
    description:
      "Comprehensive admin panel for managing real estate assets, user investments, KYC verification, and platform analytics. Built with reusable form configurations for rapid feature development.",
    image: "/admin-dashboard-with-analytics-charts-and-data-tab.jpg",
    technologies: ["React", "Node.js", "MongoDB", "React Hook Form", "Recharts"],
    category: "Dashboards",
    github: "https://github.com",
    live: "https://admin.ryzer.app",
    role: "Full Stack Developer at Ryzer",
        comingsoon : false

  },
  {
    id: 3,
    name: "1xFinance",
    description:
      "Fintech lending platform MVP enabling users to get loans against gold, land, mutual funds, and other assets. Features multi-step loan applications, NBFC rate comparisons, and asset valuation flows.",
    image: "/fintech-loan-application-platform-with-asset-cards.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "Web Apps",
    github: "https://github.com",
    live: "https://1xfinance.com",
    role: "Freelance Developer (MVP)",
    comingsoon : false
  },
  {
    id: 4,
    name: "DevSync",
    description:
      "A Trello + Slack clone for developer team collaboration. Features real-time updates, kanban boards, and team messaging.",
    image: "/project-management-dashboard-dark-theme.jpg",
    technologies: ["Next.js", "Socket.IO", "MongoDB", "Tailwind CSS"],
    category: "Real-time",
    github: "https://github.com",
    live: "https://example.com",
    role: "Full Stack Developer",
    comingsoon : true
  },
  {
    id: 5,
    name: "SpendMoney App",
    description: "Personal finance tracker with budget management, expense categorization, and visual analytics.",
    image: "/finance-app-dashboard-dark-neon.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    category: "Web Apps",
    github: "https://github.com",
    live: "https://example.com",
    role: "Full Stack Developer",
        comingsoon : true

  },
  {
    id: 6,
    name: "OTT Platform",
    description:
      "Video streaming platform with user authentication, subscription management, and content recommendations.",
    image: "/video-streaming-platform-dark-ui.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    category: "Web Apps",
    github: "https://github.com",
    live: "https://example.com",
    role: "Full Stack Developer",
        comingsoon : true

  },

 {
  id: 7,
  name: "Restaurant Billing & Token Printing System",
  description:
    "A local restaurant billing system that stores orders in MongoDB and automatically prints order tokens using a thermal printer via ESC/POS USB integration when an order is placed.",
  image: "/reasturant.png",
  technologies: [
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "ESC/POS",
    "escpos-usb",
    "Thermal Printer"
  ],
  category: "Web Apps",
  github: "https://github.com",
  live: "",
  role: "Full Stack Developer",
}


  
]

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express", level: 90 },
    { name: "Socket.IO", level: 85 },
    { name: "REST APIs", level: 95 },
    { name: "GraphQL", level: 70 },
  ],
  databases: [
    { name: "MongoDB", level: 90 },
    { name: "PostgreSQL", level: 75 },
    { name: "Redis", level: 70 },
    { name: "Firebase", level: 80 },
  ],
  devops: [
    { name: "Git", level: 95 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "Vercel", level: 90 },
    { name: "CI/CD", level: 75 },
  ],
  tools: [
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 75 },
    { name: "Postman", level: 90 },
    { name: "Jira", level: 80 },
  ],
}

export const techLogos = [
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Socket.IO", icon: "socketio" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Stripe", icon: "stripe" },
]
