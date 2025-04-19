import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 border-b" id="home">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Name
              </h1>
              <p className="text-xl text-muted-foreground">
                Frontend Developer
              </p>
            </div>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              I create elegant, high-performance web applications with clean code that delivers exceptional user experiences.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* Replace with your own image */}
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full border bg-muted">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Your Profile Photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}