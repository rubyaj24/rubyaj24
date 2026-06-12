import { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "mument-2.0",
    title: "Mument 2.0",
    tagline: "Mument - Where curiosity meets action.",
    links: [
      { label: "Website", url: "https://mument.mulearn.org" },
      { label: "Brand Guide", url: "https://mulearn.org/mumentbrandguide" },
      { label: "Blog Post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7441133627993747456/" },
    ],
    category: "UI/UX & Frontend",
    duration: "4 months",
    date: "Jul 2024",
    location: "Remote",
    tags: ["UI/UX", "FRONTEND", "WEB DEV","BRANDING"],
    heroImage: "/images/mument-banner.png",
    mockupImage: "/images/mument-mockup.png",
    overview:
      "A dashboard to track the learning progress of 1600+ learners across Kerala, with features for team management, project submissions, and real-time updates.",
    process: [
      { title: "Discovery & Brief", description: "Understood the needs of learners and organizers for a comprehensive dashboard",},
      {
        title: "Research & Requirements",
        description: "Analyzed existing learning platforms and gathered feature requirements through user interviews",
      },
      {
        title: "Wireframing & IA",
        description: "Redesigned information architecture for better discovery",
      },
      {
        title: "Visual Design",
        description: "Modern, immersive UI with dynamic theming",
      },
      {
        title: "Design System / UI Build",
        description: "Created reusable components in Figma and React",
      },
      {
        title: "Development",
        description: "Built with Next.js, Backed with supabase",
      },
      {
        title: "Testing & Launch",
        description: "Conducted A/B testing and rolled out to users",
      },
    ],
    challenge: [
      "Provide authentication and personalized dashboards for 1600+ learners",
      "Design an engaging UI that motivates learners to track their progress",
      "Integrate real-time updates for team registrations and project submissions",
    ],
    approach: [
      "Implemented role-based access control for learners and organizers",
      "Designed a gamified dashboard with progress bars, badges, and personalized sections",
      "Used WebSockets for real-time updates on team registrations and project submissions",
    ],
    methodology: [
      {
        title: "User Research",
        description:
          "Conducted interviews and surveys with 100+ learners and organizers to identify pain points in the existing platform and gather feature requirements.",
      },
      {
        title: "UX Design",
        description:
          "Focused on creating an intuitive discovery flow, with personalized sections and dynamic theming based on album art.",
      },
      {
        title: "Development",
        description:
          "Built with Next.js for server-side rendering, integrated a custom AI recommendation engine, and used Tailwind CSS for rapid styling.",
      },
    ],
    conclusion: "1600+ learners over kerala, 700+ teams registered, 100+ projects submitted.",
    gallery: [
      "/images/mument-gallery-1.png",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    ],
    color: "#1558B6",
  },
  {
    slug: "sargam-2025",
    title: "Sargam 2025",
    tagline: "The pulse of CET's cultural fest, live.",
    links: [],
    category: "Frontend",
    duration: "1 month",
    date: "Feb 2025",
    location: "CET, Trivandrum",
    tags: ["UI/UX", "FRONTEND", "WEB DEV"],
    heroImage:
      "/images/sargam-banner.png",
    heroVideo: "/videos/sargam-25.webm",
    overview:
      "Real-time point table and schedule tracker for CET's official cultural fest Sargam 2025. Built to handle live score updates across 20+ events.",
    process: [
      {
        title: "Discovery & Brief",
        description: "Requirements for live score tracking",
      },
      {
        title: "Research & Requirements",
        description: "Explored real-time data sync solutions",
      },
      { title: "Visual Design", description: "Festive, energetic branding" },
      {
        title: "Development",
        description: "Vite + Google Sheets API for live data",
      },
      {
        title: "Testing & Launch",
        description: "Stress-tested with concurrent users",
      },
    ],
    challenge: [
      "Real-time updates required without a backend server",
      "Had to handle 200+ concurrent users during events",
      "Non-technical organizers needed to update scores easily",
    ],
    approach: [
      "Used Google Sheets as a CMS for easy data entry",
      "Implemented polling with smart caching for performance",
      "Designed mobile-first for on-the-go checking",
    ],
    methodology: [
      {
        title: "Concept & Planning",
        description:
          "Designed the information architecture for live event tracking with organizers to ensure all data points were captured.",
      },
      {
        title: "UI Design",
        description:
          "Festive dark theme with vibrant gradients. Large, readable typography for fast glance-and-go information consumption.",
      },
      {
        title: "Technical Implementation",
        description:
          "Built with Vite + React. Used Google Sheets API as a live backend with optimized polling intervals.",
      },
    ],
    conclusion:
      "Served 500+ unique users during the 3-day fest with zero downtime. Organizers could update scores in real-time from their phones.",
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
      { src: "/videos/sargam-25.webm", type: "video" },
    ],
    color: "#1a0a2e",
  },
  {
    slug: "herakles-racing-cet",
    title: "Herakles Racing CET",
    tagline: "Built for speed. Designed for the track.",
    links: [],
    category: "UI/UX & Frontend",
    duration: "3 months",
    date: "Aug 2024",
    location: "CET, Trivandrum",
    tags: ["UI/UX", "FRONTEND", "WEB DEV"],
    heroImage:
      "/images/herakles-banner.png",
    mockupImage: "/images/herakles-laptop-mockup.png",
    overview:
      "The official website for Herakles CET's 2024 baja racing team. Designed to showcase the team's journey, sponsors, and technical achievements with a high-performance digital presence matching their on-track speed.",
    process: [
      {
        title: "Discovery & Brief",
        description: "Understood team's identity and requirements",
      },
      {
        title: "Research & Requirements",
        description: "Analyzed popular racing team sites",
      },
      {
        title: "Competitor/Reference Analysis",
        description: "Studied F1 and Formula Student websites",
      },
      {
        title: "Wireframing & IA",
        description: "Structured sponsor-first content hierarchy",
      },
      {
        title: "Visual Design",
        description: "Speed-inspired dark theme with red accents",
      },
      {
        title: "Design System / UI Build",
        description: "Built reusable component library",
      },
      {
        title: "Development",
        description: "Next.js + TypeScript + Framer Motion",
      },
      {
        title: "Testing & Launch",
        description: "Performance optimization and deployment",
      },
    ],
    challenge: [
      "Needed to balance sponsor visibility with technical content",
      "Required dynamic content updates during racing season",
      "Performance-critical for audience",
    ],
    approach: [
      "Designed modular sponsor sections with tier-based display",
      "Built CMS-backed content system for easy updates",
      "Implemented SSG with ISR for blazing fast loads",
    ],
    methodology: [
      {
        title: "Audit & Research",
        description:
          "Reviewed 20+ racing team websites to identify best practices in sponsor presentation, team storytelling, and technical content layout.",
      },
      {
        title: "Information Architecture",
        description:
          "Created a content hierarchy that prioritizes sponsor visibility while maintaining narrative flow from team story to technical specs.",
      },
      {
        title: "UI Design / Visual Style",
        description:
          "Dark, aggressive aesthetic with carbon-fiber textures and red highlights. Speed lines and motion blur effects accent the racing theme.",
      },
      {
        title: "Development",
        description:
          "Built with Vite, TypeScript, and Tailwind CSS. Implemented Framer Motion for scroll-triggered animations and transitions.",
      },
    ],
    conclusion:
      "Delivered a high-performance website that effectively communicates the team's professional racing identity. The site contributed to securing multiple sponsors and received positive feedback from the racing community.",
    gallery: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    ],
    color: "#1a0a0a",
  },
  {
    slug: "mpmc-emulator",
    title: "MPMC Emulator",
    tagline: "Microprocessor lab, reimagined for the browser.",
    links: [{ label: "GitHub Repo", url: "https://github.com/rubyaj24/mpmc_emulator" }, { label: "Live Site", url: "https://mpmc-emulator.vercel.app" }],
    category: "UI/UX & Frontend",
    duration: "2 months",
    date: "Jan 2024",
    location: "CET, Trivandrum",
    tags: ["FRONTEND", "WEB DEV"],
    heroImage:
      "/images/mpmc-banner.png",
    mockupImage: "/images/mpmc-mockup.png",
    overview:
      "A web-based emulator for MPMC (Microprocessor & Microcontroller) architecture. Built to help students learn assembly programming without needing physical hardware kits.",
    process: [
      {
        title: "Discovery & Brief",
        description: "Identified student pain points with lab hardware.",
      },
      {
        title: "Research & Requirements",
        description: "Studied existing emulator solutions.",
      },
      {
        title: "Wireframing & IA",
        description: "Designed intuitive code editor + output layout",
      },
      {
        title: "Visual Design",
        description: "Clean, educational-focused interface",
      },
      {
        title: "Development",
        description: "React + Zustand for state management",
      },
      {
        title: "Testing & Launch",
        description: "Tested with 50+ students for usability",
      },
    ],
    challenge: [
      "Complex microprocessor instruction set needed accurate emulation",
      "Students found existing tools unintuitive and hard to use",
      "Required real-time code execution feedback",
    ],
    approach: [
      "Built a simplified instruction parser with step-by-step execution",
      "Designed a split-panel editor with visual register/memory display",
      "Added example programs and inline documentation",
    ],
    methodology: [
      {
        title: "Research",
        description:
          "Analyzed existing emulators like GNUSim8085 and identified UX gaps that made them difficult for beginners.",
      },
      {
        title: "UI Design",
        description:
          "Created a clean, distraction-free interface with a Monaco-based code editor and real-time register state visualization.",
      },
      {
        title: "Development",
        description:
          "Built with Next.js, Zustand for state management, and a custom assembly parser written in TypeScript.",
      },
    ],
    conclusion:
      "The emulator became the primary learning tool for 3rd-semester CS students, reducing dependency on physical lab kits and enabling remote learning.",
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      "/images/mpmc-gallery-2.png",
      "/images/mpmc-banner.png",
    ],
    color: "#0a1628",
  },
  {
    slug: "pgbee",
    title: "PgBee",
    tagline: "Finding home, made simple for students.",
    links: [{ label: "Live Site", url: "https://pgbee.in" }],
    category: "UI/UX & Frontend",
    duration: "4 months",
    date: "Sep 2024",
    location: "Trivandrum",
    tags: ["UI/UX", "FRONTEND"],
    heroImage:
      "/images/pgbee-banner.png",
    mockupImage: "/images/pgbee-mockup.png",
    overview:
      "An online platform connecting college students with verified PG accommodations and hostels. Simplifies the rental search with transparent listings and direct owner communication.",
    process: [
      {
        title: "Discovery & Brief",
        description: "Student housing pain points",
      },
      {
        title: "Research & Requirements",
        description: "Surveyed 100+ students",
      },
      {
        title: "Competitor Analysis",
        description: "Studied housing platforms",
      },
      {
        title: "Wireframing & IA",
        description: "Search-first experience design",
      },
      { title: "Visual Design", description: "Trustworthy, warm branding" },
      { title: "Development", description: "Next.js + Node.js + PostgreSQL" },
      {
        title: "Testing & Launch",
        description: "Beta tested with 50 students",
      },
    ],
    challenge: [
      "Students struggled with fake listings and scams",
      "No centralized platform for student housing in Trivandrum",
      "Owners wanted simple listing management",
    ],
    approach: [
      "Implemented owner verification system",
      "Built search with filters for budget, location, amenities",
      "Created a simple dashboard for property owners",
    ],
    methodology: [
      {
        title: "User Research",
        description:
          "Conducted surveys with 100+ students across CET and other colleges to understand housing pain points.",
      },
      {
        title: "UX Design",
        description:
          "Focused on trust signals — verified badges, owner profiles, and photo-rich listings to combat the scam problem.",
      },
      {
        title: "Development",
        description:
          "Next.js frontend with Node.js/PostgreSQL backend. Implemented map-based search and real-time availability.",
      },
    ],
    conclusion:
      "Launched with 50+ verified listings in Trivandrum, serving 200+ active student users in the first month.",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "/images/pgbee-gallery-1.png",
    ],
    color: "#0a1a0a",
  },
  {
    slug: "drug-free-kerala-campaign",
    title: "Drug-Free Kerala Campaign",
    tagline: "Designing for a healthier, drug-free future.",
    links: [{ label: "Live Site", url: "https://drugfreekerala.com" }],
    category: "UI/UX & Frontend",
    duration: "2 days",
    date: "Mar 2025",
    location: "Kerala",
    tags: ["FRONTEND", "WEB DEV"],
    heroImage: "/images/drug-free-kerala.png",
    mockupImage: "/images/dfk-mockup.png",
    overview:
      "A digital campaign for Kerala's state initiative to raise awareness about drug abuse and promote rehabilitation resources. Included an informational website and social media assets.",
    process: [
      {
        title: "Discovery & Brief",
        description: "Understanding campaign goals and target audience",
      },
      {
        title: "Research & Requirements",
        description: "Studied successful public health campaigns",
      },
      { title: "Visual Design", description: "Hopeful, supportive aesthetic" },
      { title: "Development", description: "Next.js + Tailwind CSS" },
      {
        title: "Testing & Launch",
        description: "Collaborated with NGOs for feedback",
      },
    ],
    challenge: [
      "Needed to communicate sensitive information with empathy",
      "Target audience included at-risk individuals and their families",
      "Required collaboration with multiple stakeholders",
    ],
    approach: [
      "Used hopeful imagery and language to encourage seeking help",
      "Created clear pathways to resources and support services",
      "Designed shareable social media graphics to amplify reach",
    ],
    methodology: [
      {
        title: "Research",
        description:
          "Analyzed public health campaigns globally to identify effective messaging strategies for sensitive topics.",
      },
      {
        title: "Design",
        description:
          "Created a compassionate visual language with soft colors and hopeful imagery. Developed an intuitive information architecture for easy access to resources.",
      },
      {
        title: "Development",
        description:
          "Built with Next.js and Tailwind CSS for a responsive, accessible experience. Collaborated with NGOs for content accuracy and cultural sensitivity.",
      },
    ],
    conclusion:
      "The campaign website received 10,000+ visits in the first month, with positive feedback from users and NGOs. Social media assets were widely shared, increasing awareness.",
    gallery: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    ],
    color: "#327161",
  },
];

export const featuredProjects = projects.slice(0, 3);
