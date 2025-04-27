"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from 'next/image';


export default function About() {
  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 via-blue-100/15 to-pink-100/10 backdrop-blur-sm"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/80 px-3 py-1 text-sm text-primary-foreground backdrop-blur-sm">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground/90">
              My Journey
            </h2>
            <p className="max-w-[900px] text-muted-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I`m passionate about creating intuitive, accessible, and performant web experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
        <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative aspect-square w-full max-w-xs sm:max-w-md overflow-hidden border bg-muted shadow-lg">
              <Image
                src="/profile.JPG"
                alt="Albert Redila"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <Card className="border-none bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl">
            <CardHeader>
              <CardTitle>Background</CardTitle>
              <CardDescription>My Experience</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground/90">
                I completed my On-the-Job Training at Tito Solutions, where I gained hands-on experience in web development through various project implementations. During my internship, I developed practical skills in creating responsive and functional web applications while working on real-world projects.
              </p>
            </CardContent>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Academic achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground/90">
                Currently a graduating student pursuing a Bachelor of Science in Information Technology.
              </p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 border-none bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl">
            <CardHeader>
              <CardTitle>Philosophy</CardTitle>
              <CardDescription>My approach to development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground/90">
                I believe in creating user-centered experiences that are accessible to everyone. My code is clean, maintainable, and follows best practices. I`m passionate about staying up-to-date with emerging technologies and design trends to deliver cutting-edge solutions. Collaboration and knowledge sharing are central to my work ethic.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}