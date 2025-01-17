"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LoadingProjects } from "@/components/projects/LoadingProjects";
import { SearchAndSort } from "@/components/projects/SearchBar";
import ProjectCard from "@/components/projects/ProjectCard";
import { allProjects } from "@/data/projects";

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [isLoading, setIsLoading] = useState(true); // Start with true
  const [displayedProjects, setDisplayedProjects] = useState(allProjects);

  // Simulate loading when filters change
  useEffect(() => {
    const updateProjects = async () => {
      setIsLoading(true);
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Filter projects
        const filtered = allProjects.filter(
          (project) =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            project.tags.some((tag) =>
              tag.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );

        // Sort projects
        const sorted = sortProjects(filtered);
        setDisplayedProjects(sorted);
      } catch (error) {
        console.error("Error updating projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    updateProjects();
  }, [searchQuery, sortBy]);

  const sortProjects = (projects: typeof allProjects) => {
    switch (sortBy) {
      case "newest":
        return [...projects].reverse();
      case "oldest":
        return projects;
      case "az":
        return [...projects].sort((a, b) => a.title.localeCompare(b.title));
      case "za":
        return [...projects].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return projects;
    }
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold heading-gradient mb-4">
            All Projects
          </h1>
          <p className="text-xl content-gradient max-w-2xl mx-auto mb-8">
            Explore my complete portfolio of projects across different
            technologies and platforms.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SearchAndSort
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </motion.div>
        </motion.div>

        {isLoading ? (
          <LoadingProjects />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}

        {!isLoading && displayedProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl content-gradient">
              No projects found matching your search criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
