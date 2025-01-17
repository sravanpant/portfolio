import { Project } from "@/types/projects";

export const allProjects: Project[] = [
  {
    title: "Dropbox Clone",
    description:
      "Built a file-sharing app using ReactJS, NextJS for frontend and Firebase for secure storage.",
    image: "https://utfs.io/f/0ACJXVZiq6WuLAzacE9jBUimRwK5IOvT2ZHpesdV4q0FlXQz",
    tags: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Firebase",
      "Clerk",
      "Vercel",
      "Shadcn/UI",
    ],
    liveUrl: "https://dropbox-clone-rouge.vercel.app/",
    githubUrl: "https://github.com/sravanpant/Dropbox_clone",
  },
  {
    title: "Youtube Playlist Analyzer",
    description:
      "Built a full-stack application using ReactJS, NextJS, and then used a web scraper to fetch and display video metadata dynamically.",
    image: "https://utfs.io/f/0ACJXVZiq6WuMBkBWFgLQVlXbthcEA7zx2nwU5YpIiqJv0O6",
    tags: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Docker",
      "Railway",
      "Web Scraper",
      "Data Analysis",
    ],
    liveUrl: "https://youtube-playlist-analyzer-production.up.railway.app/",
    githubUrl: "https://github.com/sravanpant/Youtube-Playlist-Analyzer",
  },
];
