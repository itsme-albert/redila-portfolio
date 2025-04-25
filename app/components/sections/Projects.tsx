
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
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
      title: 'Task Management App',
      description: 'A productivity app for tracking tasks with drag-and-drop functionality and team collaboration features.',
      image: '/images/project2.jpg',
      techs: ['React', 'Redux', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project'
    },
    {
      title: 'Portfolio Website',
      description: 'A professional portfolio website showcasing projects and skills with a modern, responsive design.',
      image: '/images/project3.jpg',
      techs: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project'
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-gradient-to-br from-purple-300/20 via-blue-100/15 to-pink-100/10 backdrop-blur-sm" id="projects">
      <div className="cabsolute inset-0 ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Recent Work
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore some of my recent projects and applications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col border-none">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <div className="relative aspect-video w-full bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
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