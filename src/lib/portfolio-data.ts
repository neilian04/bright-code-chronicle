import logoAsset from "@/assets/neil-logo.png.asset.json";
import profileAsset from "@/assets/neil-profile.png.asset.json";
import blockchainCert from "@/assets/blockchain-cert.png.asset.json";
import buildWithAi from "@/assets/build-with-ai.jpg.asset.json";
import itsCyber from "@/assets/its-cybersecurity.png.asset.json";
import itsNetSec from "@/assets/its-network-sec.png.asset.json";
import githubJs from "@/assets/github-js-workshop.png.asset.json";

export const PROFILE_IMAGE = profileAsset.url;
const CERT_COVERS: Record<string, string> = {
  "GitHub and JavaScript Workshop": githubJs.url,
  "IT Specialist — Network Security": itsNetSec.url,
  "IT Specialist — Cybersecurity": itsCyber.url,
  "Blockchain Campus Conference 2024": blockchainCert.url,
  "Build with AI": buildWithAi.url,
};
export { CERT_COVERS };

export const SITE = {
  name: "Neil Ian",
  fullName: "NEIL IAN R. MALLARI",
  role: "Computer Science Student",
  specialization: "(Cybersecurity)",
  resumeUrl:
    "https://docs.google.com/document/d/1AVEV4LK_pneGVImUQCpRCh1DHPQFc0NMLME30wxMpZA/edit?usp=sharing",
  email: "n.mallari.545046@umindanao.edu.ph",
  phone: "+63 964 1466 036",
  location: "Davao City, Philippines",
  logo: logoAsset.url,
  github: "https://github.com/neilian04",
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const EXPERIENCES = [
  {
    period: "February 2026 — Present",
    title: "Music Director",
    org: "Words of Life Christian Ministries — Davao (WLCM)",
  },
  {
    period: "August 2025 — Present",
    title: "Sound Engineer",
    org: "UM-College of Computing Education Student Government (CCE-CSG)",
  },
  {
    period: "August 2023 — Present",
    title: "Self Employed",
    org: "Code and build for our coding projects.",
  },
  {
    period: "August 2024 — May 2025",
    title: "Technical Team Member",
    org: "Junior Blockchain Education Consortium of the Philippines — UM Davao",
  },
];

export const SKILL_GROUPS = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "Java", "PHP", "SQL", "MySQL", "HTML", "CSS", "Excel"],
  },
  {
    label: "Technical Skills",
    items: [
      "Object-Oriented Programming",
      "UI/UX Structuring",
      "Cybersecurity",
      "Database Design",
    ],
  },
  {
    label: "Tools",
    items: [
      "Git / GitHub",
      "Visual Studio Code",
      "Microsoft Office",
      "Google Workspace",
      "A.I. (Claude, Perplexity, Gemini, ChatGPT, Codex)",
      "Figma",
    ],
  },
  {
    label: "Soft Skills",
    items: [
      "Leadership",
      "Creativity",
      "Communication & Teamwork",
      "Attention to Detail",
      "Willingness to Learn",
    ],
  },
];

const driveThumb = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;

export const PROJECTS = [
  {
    name: "Food Supply during Emergency Situations Simulation",
    role: "Full-Stack Developer",
    timeline: "Mar 2026 — May 2026",
    cover: driveThumb("1RsaTu5bzHCGUYMnIXXKCYxHikaTnh4b1"),
    link: "https://github.com/neilian04/CSE10_Simulation",
    tools: ["Python", "DES", "Simulation", "Data Analysis"],
    description:
      "Discrete-Event Simulation (DES) model evaluating and optimizing the food supply chain during disaster response in Buhangin District, Davao City. Analyzed vehicle allocations and routing scenarios to identify bottlenecks, accelerate delivery times, and ensure equitable relief distribution.",
  },
  {
    name: "Lugang Cafe Ordering & Management System",
    role: "Backend Developer",
    timeline: "Mar 2025 — Apr 2025",
    cover: driveThumb("1xS-rfEPs3u07qElC8s-rIe168Yq81oeg"),
    link: "https://github.com/Neil2004-12/Lugang_Cafe",
    tools: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    description:
      "Web-based e-menu and management system enabling localized, table-centric digital ordering. Automated real-time order queue tracking for staff with admin tools for menu customization and comprehensive sales reporting.",
  },
  {
    name: "RM Woodworks Inventory Management",
    role: "Quality Assurance",
    timeline: "Nov 2025 — Dec 2025",
    cover: driveThumb("1GDz-lPpISC0jujKHiSWrYBdVaOLG4ms0"),
    link: "https://github.com/JayLao27/rmwoodworks",
    tools: ["Laravel", "PHP", "MySQL", "Blade"],
    description:
      "Comprehensive Laravel web application managing the complete lifecycle of wood materials and products. Streamlines procurement, inventory tracking, sales operations, and manufacturing workflows for wood-based businesses.",
  },
  {
    name: "GameForge",
    role: "UI/UX Design",
    timeline: "Mar 2025 — May 2025",
    cover: "",
    link: "https://github.com/JayLao27/GameForge_",
    tools: ["Figma", "UI/UX", "eCommerce", "Prototyping"],
    description:
      "eCommerce web application for gaming laptops, keyboards, mice, and peripherals. Streamlines product browsing, inventory management, order processing, and customer transactions with secure checkout, order tracking, and responsive interfaces.",
  },
];

export const EDUCATION = [
  {
    period: "August 2023 — Present",
    school: "University of Mindanao",
    degree: "Bachelor of Science in Computer Science",
  },
  {
    period: "2021 — 2023",
    school: "Assumption College of Davao",
    degree: "Senior High School",
  },
  {
    period: "2017 — 2021",
    school: "Cabantian National High School",
    degree: "Junior High School",
  },
];

export const CERTIFICATIONS = [
  {
    name: "GitHub and JavaScript Workshop",
    issuer: "College of Computing Education Skills Clinic — Mentors",
    description:
      "Demonstrated interactive websites and professionally managing, backing up, and sharing coding projects.",
    link: "https://drive.google.com/file/d/15G9e2PO7Hdv11nshozVaxbKRvo8r7QDF/view?usp=sharing",
  },
  {
    name: "IT Specialist — Network Security",
    issuer: "Certiport",
    description: "Demonstrated proficiency in network security concepts and practices.",
    link: "https://drive.google.com/file/d/1RJl9thnNcQ8pjEvdcigBDz3qkkBwD63J/view?usp=sharing",
  },
  {
    name: "IT Specialist — Cybersecurity",
    issuer: "Certiport",
    description: "Demonstrated proficiency in cybersecurity concepts and practices.",
    link: "https://drive.google.com/file/d/1rS2OlGV8A82Q-JCyCQyq-5ThBYPdrLaC/view?usp=sharing",
  },
  {
    name: "Blockchain Campus Conference 2024",
    issuer: "Blockchain Education Consortium",
    description:
      "Connects attendees with industry leaders, showcasing real-world blockchain applications & validating skills.",
    link: "https://drive.google.com/file/d/1WDA6VJvCMmeyv6iGZVWBXySe686DSHNY/view?usp=sharing",
  },
  {
    name: "Build with AI",
    issuer: "Google Developers Groups",
    description:
      "Deploying real-world AI applications, agentic & cloud integrations using Google's latest AI ecosystem.",
    link: "https://drive.google.com/file/d/1PVyAtDIbqawT286dPQ0ZVMrKfC9TCw0r/view?usp=sharing",
  },
];
