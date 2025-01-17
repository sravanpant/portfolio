"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link";
// import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="text-blue-600 dark:text-blue-400 text-lg font-medium">
              Hello, I&apos;m
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400 dark:from-blue-400 dark:to-cyan-400">
              Sravan Pant
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-blue-800 dark:text-blue-200">
              Full Stack Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto mb-8"
          >
            I build exceptional digital experiences that combine elegant design
            with powerful functionality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:ring-2 text-white"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1RrQNIbdoYUfom_ikLYqkLhxTK-1Gf_dm/view"
              }
              target="_blank"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400"
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 mb-8"
          >
            <span className="h-[1px] w-12 bg-blue-600/30 dark:bg-blue-400/30" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Tech Stack
            </span>
            <span className="h-[1px] w-12 bg-blue-600/30 dark:bg-blue-400/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { Icon: SiReact, label: "React" },
              { Icon: SiNextdotjs, label: "Next.js" },
              { Icon: SiTypescript, label: "TypeScript" },
              { Icon: SiTailwindcss, label: "Tailwind" },
            ].map(({ Icon, label }) => (
              <motion.div
                key={label}
                className="group flex flex-col items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="w-6 h-6 text-blue-700 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
