import Image from 'next/image';

const Skills = () => {
  const skills = [
    {
      name: 'NextJS',
      icon: '/icons/nextjs.svg'
    },
    {
      name: 'Laravel',
      icon: '/icons/laravel.svg'
    },
    {
      name: 'Angular',
      icon: '/icons/angular.svg'
    },
    {
      name: 'MongoDB',
      icon: '/icons/mongodb.svg'
    },
    {
      name: 'MySQL',
      icon: '/icons/mysql.svg'
    },
    {
      name: 'Supabase',
      icon: '/icons/supabase.svg'
    },
    {
      name: 'Tailwind',
      icon: '/icons/tailwind.svg'
    },
    {
      name: 'Git',
      icon: '/icons/git.svg'
    },
    {
      name: 'JavaScript',
      icon: '/icons/javascript.svg'
    },
    {
      name: 'TypeScript',
      icon: '/icons/typescript.svg'
    },
    {
      name: 'Bitbucket',
      icon: '/icons/bitbucket.svg'
    },
    {
      name: 'Jira',
      icon: '/icons/jira.svg'
    },
    {
      name: 'SCRUM',
      icon: '/icons/scrum.svg'
    },
    {
      name: 'Convex',
      icon: '/icons/convex.svg'
    }
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-8">Skills</h2>
        <p className="text-center mb-8">The skills, tools and technologies I am really good at:</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 relative mb-2">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;