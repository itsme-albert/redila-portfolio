"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from 'next/image';


export default function About() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 via-blue-100/15 to-pink-100/10 backdrop-blur-sm"></div>
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 text-center">
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-block rounded-lg bg-primary/80 px-3 py-1 text-sm text-primary-foreground backdrop-blur-sm">
              About Me
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground/90">
              My Journey
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground/80">
              I`m passionate about creating intuitive, accessible, and performant web experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:gap-12 py-8 sm:py-10 md:py-12 md:grid-cols-2">
        <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative aspect-square w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] overflow-hidden rounded-lg border bg-muted shadow-lg">
              <Image
                src="/profile.JPG"
                alt="Albert Redila"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <Card className="border-none bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl">
            <CardHeader className="space-y-1 sm:space-y-2">
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Background</CardTitle>
              <CardDescription className="text-sm sm:text-base">My Experience</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground/90">
                I completed my On-the-Job Training at Tito Solutions, where I gained hands-on experience in web development through various project implementations. During my internship, I developed practical skills in creating responsive and functional web applications while working on real-world projects.
              </p>
            </CardContent>
            <CardHeader className="space-y-1 sm:space-y-2">
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Education</CardTitle>
              <CardDescription className="text-sm sm:text-base">Academic achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground/90">
                Currently a graduating student pursuing a Bachelor of Science in Information Technology.
              </p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 border-none bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl">
            <CardHeader className="space-y-1 sm:space-y-2">
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Philosophy</CardTitle>
              <CardDescription className="text-sm sm:text-base">My approach to development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground/90">
                I believe in creating user-centered experiences that are accessible to everyone. My code is clean, maintainable, and follows best practices. I`m passionate about staying up-to-date with emerging technologies and design trends to deliver cutting-edge solutions. Collaboration and knowledge sharing are central to my work ethic.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}