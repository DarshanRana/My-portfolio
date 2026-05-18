export const portfolioData = {
  hero: {
    name: "Darshan Rana ",
    role: "Software Engineer",
    tagline: "Transforming complex problems into elegant web applications and AI-driven solutions.",
    image: "/assets/profile_nobg.png",
  },
  socials: {
    github: "https://github.com/DarshanRana",
    linkedin: "https://www.linkedin.com/in/darshan-rana-286736306/",
    email: "mailto:darshanrana821@gmail.com"
  },
  about: {
    bio: "I am a versatile Software Engineer passionate about building intelligent, high-performance applications. My expertise spans from crafting dynamic, real-time web interfaces using React and TypeScript, to developing machine learning models and simulations with Python. I thrive at the intersection of complex data problems and elegant user experiences.",
    skills: [
      { name: "React & TypeScript", level: 85 },
      { name: "Python & Machine Learning", level: 65 },
      { name: "Backend (Supabase / SQL)", level: 70 },
      { name: "Tailwind CSS & UI/UX", level: 60 },
      { name: "Data Handling (Pandas/NumPy)", level: 65 },
      { name: "System Architecture", level: 70 }
    ]
  },
  projects: [
    {
      id: 1,
      title: "AWACS: Real-Time Messaging Application",
      description: "A robust real-time chat and messaging application featuring instant communication, group chats, read receipts, and real-time database subscriptions.",
      tech: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS"],
      image: "/assets/project_1_placeholder_1775472262974.png", // We will link it properly in the component or dynamically if names changed. Since wildcards are copied, let's just use generic names later or rename them in the public folder. Let me just use abstract references.
      liveLink: "#",
      githubLink: "https://github.com/DarshanRana/AWACS.git"
    },
    {
      id: 2,
      title: "ShipGod – Heavy Machinery Transport",
      description: "India's premier heavy machinery logistics platform. Serves as a specialized agency directory for heavy haulage carriers and out-of-gauge cargo.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Leaflet"],
      image: "/assets/shipgod_mockup.png",
      liveLink: "#",
      githubLink: "https://github.com/DarshanRana/ShipGod.git"
    },
    {
      id: 3,
      title: "AI Air Defence Decision Support",
      description: "Simulates modern integrated air defence networks. Analyzes radar data, classifies threats using machine learning, and determines interception actions.",
      tech: ["Python", "Pygame", "scikit-learn", "Pandas", "NumPy"],
      image: "/assets/project_3_placeholder_1775472302078.png",
      liveLink: "#",
      githubLink: "https://github.com/DarshanRana/Sudarshan-AI-.git"
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "CVM UNIVERSITY",
      duration: "2023 - 2027",
      description: "Focused on Software Engineering, Machine Learning, and Web Technologies. Completed final year project on AI-Driven Air Defence Systems."
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      institution: "Bit's Education High School",
      duration: "2021 - 2023",

    }
  ]
};
