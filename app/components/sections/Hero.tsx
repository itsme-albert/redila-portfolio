'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 border-b" id="home">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] items-center">
          {/* TEXT SECTION */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Albert Redila
              </h1>
              <p className="text-xl text-muted-foreground">Software Developer</p>
            </div>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              I craft elegant, high-performance web applications with clean, maintainable code, delivering exceptional user experiences.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild size="lg" className="transition hover:scale-105">
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="transition hover:scale-105">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
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
                src="/profile2.jpg"
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
