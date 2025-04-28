
'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: 'CLPM Web',
      description: 'A web application for online giving using Next.js, shadcn, and Tailwind CSS.',
      image: '/clpm.png',
      techs: ['Next.js', 'Tailwind CSS', 'Shadcn', 'Supabase'],
      liveUrl: 'https://clpm-online-giving.vercel.app/',
      githubUrl: 'https://github.com/yourusername/project'
    },
    {
      title: 'Sales Management System With TouchScreen Ordering Interface',
      description: 'A sales management system with touchscreen ordering interface for restaurants, featuring tracking of orders and sales management.',
      image: '/capstone.png',
      techs: ['Angular', 'Laravel', 'MySQL'],
      liveUrl: 'https://docs.google.com/document/d/1yppa5jvXFJ4WWdtpurVcEDkojQCtldSZ3DHZxZdgbUg/edit?usp=sharing',
      githubUrl: 'https://github.com/rjezryl/MommyLa-SMS.git'
    },
    {
      title: 'Hotel Booking Website',
      description: 'An ongoing development of a hotel booking website with modern features and user-friendly interface.',
      image: '/hotel.png',
      techs: ['Next.js', 'Tailwind CSS', 'Shadcn', 'Supabase'],
      liveUrl: 'https://hotel-booking-navy-three.vercel.app/',
      githubUrl: ''
    }
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-purple-300/20 via-blue-100/15 to-pink-100/10 backdrop-blur-sm" id="projects">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Projects
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              My Recent Work
            </h2>
            <p className="max-w-[900px] text-base sm:text-lg text-muted-foreground md:text-xl/relaxed">
              Explore some of my recent projects and applications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-6 py-8 sm:py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col border-none hover:shadow-lg transition-shadow duration-300">
              <Dialog open={selectedImage === project.image} onOpenChange={(open) => !open && setSelectedImage(null)}>
                <DialogTrigger asChild>
                  <div className="aspect-video w-full overflow-hidden bg-muted cursor-pointer">
                    <div className="relative aspect-video w-full bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        onClick={() => setSelectedImage(project.image)}
                      />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[90vw] p-0 overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <CardHeader className="space-y-2 sm:space-y-3">
                <CardTitle className="text-lg sm:text-xl md:text-2xl line-clamp-2">{project.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base line-clamp-3">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs sm:text-sm py-1">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between gap-3">
                <Button variant="outline" size="sm" className="flex-1 transition-colors duration-200" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" className="flex-1 transition-colors duration-200" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}