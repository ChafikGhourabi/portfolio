import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Globe, Github } from 'lucide-react';
import type { Project } from '@/types';

const projectList: Project[] = [
    {
      id: 1,
      title: 'E-commerce App',
      description: 'A full-featured e-commerce mobile application for iOS and Android, built with performance and user experience as top priorities.',
      tech: ['React Native', 'Redux', 'TypeScript', 'Firebase', 'Stripe'],
      role: 'Lead Mobile Developer',
      challenges: 'Integrating a seamless payment gateway and managing a complex global state for the shopping cart were the main challenges.',
      image: 'https://placehold.co/800x600.png',
      imageHint: 'e-commerce mobile',
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 2,
      title: 'Fitness Tracker',
      description: 'A cross-platform app to track workouts, set fitness goals, and visualize progress with interactive charts and social features.',
      tech: ['React Native', 'GraphQL', 'Expo', 'Recharts', 'Node.js'],
      role: 'Full-Stack Developer',
      challenges: 'Optimizing real-time data synchronization between devices and implementing custom, performant charts for data visualization.',
      image: 'https://placehold.co/800x600.png',
      imageHint: 'fitness app',
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 3,
      title: 'Social Media Platform',
      description: 'A mobile-first social media application focused on photo sharing and real-time messaging, with a custom backend.',
      tech: ['React Native', 'Firebase Auth', 'Firestore', 'Node.js', 'Express'],
      role: 'Lead React Native Developer',
      challenges: 'Building a scalable real-time chat feature and ensuring low-latency image loading for a smooth user feed.',
      image: 'https://placehold.co/800x600.png',
      imageHint: 'social media',
      liveUrl: '#',
      repoUrl: '#'
    }
  ];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">Here's a selection of projects that showcase my skills in React Native development.</p>
        
        {projectList.length > 0 && (
          <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {projectList.map((project) => (
                <CarouselItem key={project.id}>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 flex flex-col justify-between">
                          <div>
                            <CardHeader className="p-0 mb-4">
                              <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-4">
                              <div className="space-y-1">
                                  <h3 className="font-semibold">Description</h3>
                                  <p className="text-muted-foreground text-sm">{project.description}</p>
                              </div>
                               <div className="space-y-1">
                                  <h3 className="font-semibold">My Role</h3>
                                  <p className="text-muted-foreground text-sm">{project.role}</p>
                              </div>
                              <div className="space-y-1">
                                  <h3 className="font-semibold">Challenges</h3>
                                  <p className="text-muted-foreground text-sm">{project.challenges}</p>
                              </div>
                              <div className="flex flex-wrap gap-2 pt-2">
                                {project.tech.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                              </div>
                            </CardContent>
                          </div>
                          <CardFooter className="p-0 pt-6 flex gap-4">
                            <Button asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><Globe className="mr-2 h-4 w-4" /> Live Demo</a>
                            </Button>
                            <Button variant="secondary" asChild>
                              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a>
                            </Button>
                          </CardFooter>
                        </div>
                        <div className="relative min-h-[300px] md:min-h-0">
                          <Image src={project.image} alt={project.title} fill className="object-cover" data-ai-hint={project.imageHint}/>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        )}
        
        {projectList.length === 0 && (
          <div className="text-center text-muted-foreground">
             <p>I am currently adding my projects. Please check back later.</p>
          </div>
        )}
      </div>
    </section>
  );
}
