"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Laravel", icon: "/icons/laravel.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    { name: "Supabase", icon: "/icons/supabase.png" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original-wordmark.svg" },
    { name: "Jira", icon: "/icons/jira.svg" },
    { name: "SCRUM", icon: "/icons/scrum.svg" },
    { name: "Convex", icon: "/icons/convex.png" },
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-muted/40" id="skills">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Skills
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Technical Expertise
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            The skills, tools and technologies I am really good at:
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mt-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              custom={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="relative w-16 h-16">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
