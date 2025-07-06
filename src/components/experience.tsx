import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const experiences = [
  {
    role: 'Senior React Native Developer',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2020 - Present',
    description: 'Led development of cross-platform mobile apps for various clients. Mentored junior developers, improved code quality by 30%, and reduced app load times by 50% through performance optimization.',
  },
  {
    role: 'Mobile Developer',
    company: 'Innovate Apps Co.',
    period: 'Jun 2018 - Dec 2019',
    description: 'Developed and maintained 5+ React Native applications. Collaborated with UI/UX designers to implement pixel-perfect interfaces and worked with REST APIs to integrate backend services.',
  },
  {
    role: 'Junior Frontend Developer',
    company: 'Web Crafters',
    period: 'Jul 2017 - May 2018',
    description: 'Started my journey with React and web development, building responsive websites and contributing to the company\'s internal component library. This experience laid the foundation for my move into mobile development.',
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="relative max-w-3xl mx-auto pl-8 md:pl-10">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-border rounded-full md:left-4"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8">
              <div className="absolute left-0 top-2 -translate-x-[calc(50%-2px)] h-4 w-4 rounded-full bg-primary border-4 border-background md:left-4"></div>
              <Card className="ml-4 md:ml-8">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                    <div>
                      <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <p className="text-sm text-muted-foreground shrink-0 pt-1">{exp.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
