import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function About() {
  return (
    <section className="w-full py-24 md:py-32" id="about">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Journey
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I`m passionate about creating intuitive, accessible, and performant web experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Background</CardTitle>
              <CardDescription>My professional journey</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                With over 5 years of experience in frontend development, I`ve worked with startups and established companies to create responsive, accessible, and performant web applications. My background in design helps me bridge the gap between aesthetics and functionality.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Academic achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bachelor of Science in Computer Science from Example University (2018-2022). Additional certifications in UI/UX Design and Web Accessibility. Continuously learning through online courses and community engagement.
              </p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Philosophy</CardTitle>
              <CardDescription>My approach to development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I believe in creating user-centered experiences that are accessible to everyone. My code is clean, maintainable, and follows best practices. I`m passionate about staying up-to-date with emerging technologies and design trends to deliver cutting-edge solutions. Collaboration and knowledge sharing are central to my work ethic.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}