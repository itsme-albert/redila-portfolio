"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "API Design", level: 80 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Responsive Design", level: 95 },
        { name: "Performance Optimization", level: 85 },
        { name: "Accessibility", level: 80 },
      ],
    },
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
            The technologies and tools I specialize in.
          </motion.p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="flex flex-col shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                  <CardDescription>My proficiency level</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-sm font-medium">
                          <span>{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, ease: "easeInOut" }}
                        >
                          <Progress value={skill.level} className="h-2 w-full bg-[var(--accent)]" />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
