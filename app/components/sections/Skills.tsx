import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'API Design', level: 80 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Figma', level: 75 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Performance Optimization', level: 85 },
        { name: 'Accessibility', level: 80 }
      ]
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-muted/40" id="skills">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Skills
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Technical Expertise
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The technologies and tools I specialize in.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
                <CardDescription>My proficiency level</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
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