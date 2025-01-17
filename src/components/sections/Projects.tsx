"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
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
  // Add more projects...
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold heading-gradient mb-4">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold subheading-gradient mb-2">
                    {project.title}
                  </h3>
                  <p className="content-gradient mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-sm  text-blue-500 dark:text-blue-300 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-200/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-blue-300 dark:border-blue-700
                        hover:bg-blue-100 dark:hover:bg-blue-900/50"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-blue-300 dark:border-blue-700
                        hover:bg-blue-100 dark:hover:bg-blue-900/50"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:ring-2 text-white"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
