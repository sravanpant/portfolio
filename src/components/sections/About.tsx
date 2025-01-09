"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";

const About = () => {
  const experiences = [
    {
      title: "Education",
      items: [
        {
          role: "Bachelors in Electronics and Communication Engineering",
          company: "SASTRA Deemed University",
          period: "2021 - 2025",
          description: "",
        },
      ],
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            About Me
          </h2>
          <p className="text-blue-600 dark:text-blue-300 text-lg max-w-2xl mx-auto">
            Hey there! I&apos;m a passionate software engineer with a love for
            building innovative solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-2">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://utfs.io/f/0ACJXVZiq6WutwMGUCzwrMLobmIEOcCAvVK4af0gHSUNRD2p"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20" />
              </div>
            </GlassCard>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200">
                Who I Am
              </h3>
              <p className="text-blue-600 dark:text-blue-300">
                I&apos;m a Full Stack Developer based in Delhi, India with a
                passion for building digital products that make a difference. I
                specialize in creating responsive web applications with clean,
                elegant, and efficient code.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-200">
                Achievements
              </h4>

              <p className="text-blue-600 dark:text-blue-300">
                Winner of Hyperlane Bounty of <strong>$4000</strong> at{" "}
                <strong>Scaling Ethereum</strong> by EthGlobal for the Best use
                of Permissionless Interoperability.
              </p>
              <p className="text-blue-600 dark:text-blue-300">
                Winner of FileCoin Bounty of <strong>$2000 </strong> at
                <strong> EthIndiaOnline</strong> by EthGlobal for the Best use
                of IPFS Storage of user data.
              </p>
            </div>

            {experiences.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.role} className="space-y-2">
                      <h4 className="text-blue-700 dark:text-blue-300 font-medium">
                        {item.role}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">
                        {item.company} | {item.period}
                      </p>
                      <p className="text-blue-500 dark:text-blue-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-200">
                Beyond Code
              </h4>

              <p className="text-blue-600 dark:text-blue-300">
                When I&apos;m not coding, you&apos;ll find me:
                <ul className="list-disc pl-8">
                  <li> Exploring new tech trends</li>
                  <li> Contributing to open-source projects</li>
                  <li> Playing chess and sudoky</li>
                  <li> Reading Books</li>
                </ul>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
