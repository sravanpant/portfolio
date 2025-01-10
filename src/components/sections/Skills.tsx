"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { IconType } from "react-icons";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiFigma,
  SiNumpy,
  SiPandas,
  SiGithub,
  SiVercel,
  SiDocker,
  SiFramer,
  SiRailway,
  SiClerk,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaUbuntu, FaJs, FaPython } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

import { cn } from "@/lib/utils";

const skills = [
  { name: "Python", icon: FaPython },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Pandas", icon: SiPandas },
  { name: "Numpy", icon: SiNumpy },
  { name: "Django", icon: SiDjango },
  { name: "Firebase", icon: IoLogoFirebase },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
  { name: "Vercel", icon: SiVercel },
  { name: "VsCode", icon: VscVscode },
  { name: "Railway", icon: SiRailway },
  { name: "Docker", icon: SiDocker },
  { name: "Clerk", icon: SiClerk },
  { name: "Ubuntu", icon: FaUbuntu },
];

const SkillIcon = ({ Icon, name }: { Icon: IconType; name: string }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className={cn(
      "flex flex-col items-center justify-between gap-2",
      "transition-colors duration-200",
      "group"
    )}
  >
    <Icon
      className={cn(
        "w-8 h-8",
        "text-blue-700 dark:text-blue-400",
        "group-hover:text-blue-800 dark:group-hover:text-blue-300",
        "transition-colors duration-200"
      )}
    />
    <span
      className={cn(
        "text-sm font-medium text-center",
        "text-blue-700 dark:text-blue-300",
        "group-hover:text-blue-800 dark:group-hover:text-blue-200"
      )}
    >
      {name}
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className={cn(
              "text-3xl font-bold mb-4",
              "text-blue-900 dark:text-blue-100"
            )}
          >
            Skills & Technologies
          </h2>
          <p
            className={cn(
              "text-lg max-w-2xl mx-auto",
              "text-blue-700 dark:text-blue-300"
            )}
          >
            A comprehensive toolkit of technologies and skills I&apos;ve
            mastered over the years
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-8">
            <div className="grid grid-cols-3 md:grid-cols-8 gap-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <SkillIcon
                    key={skill.name}
                    Icon={skill.icon}
                    name={skill.name}
                  />
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
