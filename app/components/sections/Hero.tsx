'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Download, MapPin, Github, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" id="home">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 sm:gap-8 md:gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px] items-center">
          <motion.div
            className="flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tighter">Hi, I`m Albert 👋</h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter text-muted-foreground">
                Full Stack Developer
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 text-muted-foreground text-sm sm:text-base">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  <span>Philippines</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span>Available for projects</span>
                </div>
              </div>
            </div>
            <p className="max-w-[600px] mx-auto lg:mx-0 text-base sm:text-lg md:text-xl text-muted-foreground">
              I craft elegant, high-performance web applications with clean, maintainable code, delivering exceptional user experiences.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6">
                <Link href="https://www.facebook.com/albert.redila.3/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="https://github.com/itsme-albert" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/albert-redila-a79a37350/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
            </div>
            <div className="pt-2 sm:pt-4">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto transition hover:scale-105">
                  <Link href="#projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto transition hover:scale-105 bg-[#252525] text-white">
                  <Link href="https://drive.google.com/file/d/1KHTurpXbaZFoPtuctTq4TwF1KT9GGvII/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            className="flex justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative aspect-square w-full max-w-[200px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] mx-auto overflow-hidden rounded-full border bg-muted shadow-lg">
              <Image
                src="/profile2.JPG"
                alt="Albert Redila"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
