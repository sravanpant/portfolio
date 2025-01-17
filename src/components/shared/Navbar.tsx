"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { ModeToggle } from "@/components/shared/ModeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Adjust the opacity and blur values
  const backgroundOpacity = useTransform(scrollY, [0, 50], [0, 0.9]);
  // const blur = useTransform(scrollY, [0, 50], [8, 12]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "border-b border-white/10 dark:border-gray-800/50"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Backdrop blur effect */}
      <motion.div
        className={cn(
          "absolute inset-0",
          "bg-white/[0.3] dark:bg-gray-900/[0.6]",
          "backdrop-blur-3xl"
        )}
        style={{
          opacity: backgroundOpacity,
        }}
      />

      {/* Navbar content */}
      <nav className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-shrink-0"
            >
              <Link
                href="/"
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-80 transition-opacity"
              >
                Sravan Pant
              </Link>
            </motion.div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium",
                      "text-blue-600 dark:text-blue-300",
                      "transition-all duration-200",
                      "hover:bg-blue-500/10 hover:text-blue-700",
                      "dark:hover:bg-blue-400/10 dark:hover:text-blue-200"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pl-2">
                <ModeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <ModeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "hover:bg-blue-500/10",
                  "dark:hover:bg-blue-400/10"
                )}
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="md:hidden overflow-hidden"
        >
          <GlassCard className="mx-4 my-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-lg",
                    "text-base font-medium",
                    "text-blue-700 dark:text-blue-200",
                    "transition-all duration-200",
                    "hover:bg-blue-500/10 hover:text-blue-800",
                    "dark:hover:bg-blue-400/20 dark:hover:text-blue-100",
                    "active:bg-blue-500/20 dark:active:bg-blue-400/30"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
