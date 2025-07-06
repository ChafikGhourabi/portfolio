import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Globe, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Mobile App',
    description: 'A full-featured mobile shopping application for a fashion brand, offering a seamless browsing and checkout experience. The app targets fashion-conscious millennials and includes social sharing features.',
    tech: ['React Native', 'Redux Toolkit', 'TypeScript', 'Styled-Components', 'Stripe API'],
    role: 'Lead Mobile Developer, responsible for architecture, state management, and UI/UX implementation.',
    challenges: 'Optimizing performance for a large catalog of products and integrating a secure payment gateway were the main challenges. Solved by implementing flatlists, memoization, and careful async management.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app shopping',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Fitness Tracker App',
    description: 'A health and fitness app that allows users to track workouts, set goals, and monitor progress. It integrates with native health APIs to sync data seamlessly.',
    tech: ['React Native', 'Firebase', 'Reanimated 2', 'Chart.js', 'Apple HealthKit'],
    role: 'Sole Developer. I handled everything from backend setup on Firebase to front-end development and App Store submission.',
    challenges: 'Creating smooth, high-performance animations for charts and progress indicators. This was achieved using the Reanimated 2 library for native-like performance.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'fitness app interface',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'A secure, real-time messaging app for professional teams, featuring private channels, file sharing, and push notifications.',
    tech: ['React Native', 'TypeScript', 'WebSocket', 'Node.js', 'Expo'],
    role: 'Frontend Developer. My main tasks were to build the chat interface, manage real-time data flow with WebSockets, and implement push notifications.',
    challenges: 'Managing real-time connection state and ensuring message delivery in various network conditions. Implemented a robust retry and caching mechanism.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'chat application mobile',
    liveUrl: '#',
    repoUrl: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">Here's a selection of projects that showcase my skills in React Native development.</p>
        
        <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
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
      </div>
    </section>
  );
}
