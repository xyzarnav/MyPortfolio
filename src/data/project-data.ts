import trustChainImg from "../assets/Trustchain.png";
import arbitrageImg from "../assets/arbitage.png";
import turfImg from "../assets/turf.png";
import taskTrackerImg from "../assets/task-tracker.png";
import tideyImg from "../assets/Tidey.png";

export interface Project {
  title: string;
  secondTitle: string;
  category: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  demoAvailable: boolean;
  keyPoints: string[];
  description: string;
  featured?: boolean;
  status?: string;
  date?: string;
}

export const projects: Project[] = [
  {
    title: "CryptoArb",
    secondTitle: "High-Frequency Crypto Trading Bot",
    category: "AI/ML",
    tech: ["Node", "WebSockets", "Binance API", "TA-Lib"],
    image: arbitrageImg,
    demo: "https://arnavcryptoapp.netlify.app",
    github: "https://github.com/xyzarnav/CryptoApp",
    demoAvailable: true,
    keyPoints: [
      "500+ simulated trades",
      "Real-time market data",
      "5% test profit",
    ],
    description:
      "High-frequency crypto trading bot exploiting price differences across exchanges, with real-time market data streaming and automated execution.",
    featured: true,
    status: "Completed",
    date: "2024",
  },
  {
    title: "TrustChain",
    secondTitle: "Transparent Government Bidding Platform",
    category: "Web3",
    tech: ["Next.js", "React", "TailwindCSS", "Ethereum", "Solidity"],
    image: trustChainImg,
    demo: "https://player.cloudinary.com/embed/?cloud_name=dnyrdbyes&public_id=el2hpdqxszy4fuqe9zyk&profile=cld-default&player[autoplay]=true&player[muted]=true",
    demoAvailable: false,
    github: "https://github.com/xyzarnav/trustchain",
    keyPoints: [
      "Transparent government bidding platform",
      "100+ simulated transactions",
      "Smart contract automation",
    ],
    description:
      "Web3-based platform for transparent government bidding processes, eliminating corruption through immutable transaction records and smart contracts.",
    featured: true,
    status: "Completed",
    date: "2025",
  },
  {
    title: "Tidey",
    secondTitle: "Blockchain-Powered Beach Cleanup Platform",
    category: "Web3",
    tech: [
      "React",
      "TailwindCSS",
      "MongoDB",
      "Express",
      "JWT",
      "Web3.js",
      "Solidity",
      "IPFS",
    ],
    image: tideyImg, // Replace with actual import
    demo: "https://your-demo-link.com", // Optional: add your deployed DApp link
    demoAvailable: false,
    github: "https://github.com/rushxbh/Tidey", // Replace with real repo URL
    keyPoints: [
      "Blockchain-based NFT achievements for volunteers",
      "Gamification with AquaCoins and on-chain rewards",
      "QR-based event check-in and attendance tracking",
      "Smart contract integration for reward redemption",
      "Role-based dashboards for NGOs and volunteers",
    ],
    description:
      "Tidey is a Web3-powered platform for organizing beach cleanup events. It combines blockchain technology, NFTs, and gamification to reward volunteers and track environmental impact. ",
    featured: true,
    status: "In Development",
    date: "2025",
  },
  {
    title: "TurfBooking",
    secondTitle: "Real-Time Turf Reservation System",
    category: "Full Stack",
    tech: ["React", "MongoDB", "TailwindCSS"],
    image: turfImg,
    demo: "https://turf-booking-demo.com",
    demoAvailable: true,
    github: "https://github.com/xyzarnav/test_turf",
    keyPoints: [
      "Real-time reservations",
      "40% faster bookings",
      "Mobile-first design",
    ],
    description:
      "Full-stack turf booking platform with real-time slot reservations, payment integration, wallet, and group cost-splitting functionality.",
    featured: false,
    status: "Completed",
    date: "2025",
  },
  {
    title: "TaskTracker",
    secondTitle: "Modern Task Management Application",
    category: "Full Stack",
    tech: ["React", "Vite", "TailwindCSS", "Lucide Icons"],
    image: taskTrackerImg, // Replace with imported image variable
    demo: "https://task-tracker-green-delta.vercel.app/",
    demoAvailable: true,
    github: "https://github.com/xyzarnav/task-tracker", // Replace with your actual GitHub repo
    keyPoints: [
      "Fast and responsive UI with Vite + React",
      "Beautiful neon-inspired dark/light themes",
      "Track total, completed, and pending tasks",
      "Theme toggle for light/dark mode",
      "Mobile-friendly and responsive design",
    ],
    description:
      "A modern, visually appealing task management app built with React, Vite, and Tailwind CSS. Features include live progress tracking, a theme toggle, and a username-based login system.",
    featured: true,
    status: "Deployed",
    date: "2025",
  },
];
