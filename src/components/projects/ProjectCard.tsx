import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import { GlassCard } from "../ui/glass-card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types/projects";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className="overflow-hidden h-full flex flex-col">
        <div className="relative aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="20"
            priority
            className="object-cover"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold subheading-gradient mb-2">
            {project.title}
          </h3>
          <p className="content-gradient mb-4 flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm text-blue-500 dark:text-blue-300 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-200/20"
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
              <Link
                href={`${project.liveUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-blue-300 dark:border-blue-700
                hover:bg-blue-100 dark:hover:bg-blue-900/50"
              asChild
            >
              <Link
                href={`${project.githubUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                Source Code
              </Link>
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
