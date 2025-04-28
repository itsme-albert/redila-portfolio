import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function Experience() {
  const education = [
    {
      title: 'Bachelor of Science in Information Technology',
      institution: 'Northern Luzon Adventist College, Philippines',
      period: '2021 - 2025',
      description: 'Graduating student with focus on web development and software engineering. Participated in various academic projects',
      achievements: ['Coming Soon..']
    },
    {
      title: 'Web Development Internship',
      institution: 'Tito Solutions',
      period: 'February 2025 - April 2025',
      description: 'Gained hands-on experience in modern web development technologies. Contributed to real-world projects and learned industry best practices.',
      achievements: ['Developed responsive web applications', 'Collaborated with senior developers', 'Learned modern frameworks']
    },
    {
      title: 'Academic Projects',
      institution: 'Northern Luzon Adventist College, Philippines',
      period: '2021 - 2025',
      description: 'Led and contributed to various academic projects, applying theoretical knowledge to practical applications.',
      achievements: ['E-commerce Platform Development', 'Sales Management and POS System', 'Mobile App Development', 'Food Delivery Applications']
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-muted/40" id="experience">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Education & Experience
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Academic Journey
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My educational background and academic achievements.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12">
          {education.map((edu, index) => (
            <Card key={index} className="border-none">
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <div>
                    <CardTitle>{edu.title}</CardTitle>
                    <CardDescription>{edu.institution} | {edu.period}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, i) => (
                    <Badge key={i} variant="secondary">{achievement}</Badge>
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