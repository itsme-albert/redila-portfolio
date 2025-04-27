'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Download, MapPin, Github, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40" id="home">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] items-center">
          {/* TEXT SECTION */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I`m Albert 👋</h1>
              <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl xl:text-2xl/none">
                Software Developer
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
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
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              I craft elegant, high-performance web applications with clean, maintainable code, delivering exceptional user experiences.
            </p>
            <div className="flex gap-4">
                <Link href="https://www.facebook.com/albert.redila.3/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://github.com/itsme-albert" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/albert-redila-a79a37350/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild size="lg" className="transition hover:scale-105">
                  <Link href="#projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Link href="https://drive.google.com/file/d/1KHTurpXbaZFoPtuctTq4TwF1KT9GGvII/view?usp=sharing">
                  <Button variant="outline" size="lg" className="transition hover:scale-105">
                    <Download className="mr-2 h-4 w-4" />
                      Download CV
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative aspect-square w-full max-w-xs sm:max-w-md overflow-hidden rounded-full border bg-muted shadow-lg">
              <Image
                src="/profile2.JPG"
                alt="Albert Redila"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
