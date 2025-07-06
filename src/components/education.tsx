import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'B.S. in Computer Science',
    institution: 'University of Technology',
    period: '2014 - 2018',
  },
  {
    degree: 'Certified React Native Developer',
    institution: 'Online Code Academy',
    period: '2019',
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Education & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl">{edu.degree}</h3>
                    <p className="text-sm font-normal text-muted-foreground">{edu.institution}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
