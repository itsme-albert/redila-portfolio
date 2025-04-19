import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function Experience() {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company Inc.',
      period: 'Jan 2023 - Present',
      description: 'Led the development of the company\'s flagship product, improving performance by 40%. Mentored junior developers and implemented modern frontend practices.',
      skills: ['React', 'NextJS', 'TypeScript', 'TailwindCSS']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency XYZ',
      period: 'Jun 2020 - Dec 2022',
      description: 'Developed responsive web applications for clients across various industries. Worked closely with designers to ensure pixel-perfect implementation.',
      skills: ['React', 'JavaScript', 'CSS', 'Redux']
    },
    {
      title: 'Junior Web Developer',
      company: 'Startup ABC',
      period: 'Feb 2019 - May 2020',
      description: 'Contributed to the company\'s web platform development. Implemented features and fixed bugs in an agile environment.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js']
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-muted/40" id="experience">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Experience
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Professional Journey
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional experience and career milestones.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company} | {exp.period}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}