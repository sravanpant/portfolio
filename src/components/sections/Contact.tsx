"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold heading-gradient mb-4">
            Get In Touch
          </h2>
          <p className="content-gradient text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to create something
            amazing
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <GlassCard className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="subheading-gradient">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-white/50 dark:bg-gray-800/50 border-blue-200 dark:border-blue-800
                      focus:border-blue-400 dark:focus:border-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="subheading-gradient">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-white/50 dark:bg-gray-800/50 border-blue-200 dark:border-blue-800
                      focus:border-blue-400 dark:focus:border-blue-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="subheading-gradient">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="bg-white/50 dark:bg-gray-800/50 border-blue-200 dark:border-blue-800
                    focus:border-blue-400 dark:focus:border-blue-600"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="subheading-gradient">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={6}
                  className="bg-white/50 dark:bg-gray-800/50 border-blue-200 dark:border-blue-800
                    focus:border-blue-400 dark:focus:border-blue-600"
                />
              </div>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400
                  hover:from-blue-700 hover:to-blue-500
                  dark:from-blue-500 dark:to-blue-300
                  dark:hover:from-blue-600 dark:hover:to-blue-400"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
