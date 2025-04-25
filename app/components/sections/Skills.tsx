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
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "NextJS", icon: "/icons/nextjs.svg" },
    { name: "Laravel", icon: "/icons/laravel.svg" },
    { name: "Angular", icon: "/icons/angular.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "Supabase", icon: "/icons/supabase.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Bitbucket", icon: "/icons/bitbucket.svg" },
    { name: "Jira", icon: "/icons/jira.svg" },
    { name: "SCRUM", icon: "/icons/scrum.svg" },
    { name: "Convex", icon: "/icons/convex.svg" },
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
