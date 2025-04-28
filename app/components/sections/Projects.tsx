
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
                  <Link className='hover:text-white' href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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