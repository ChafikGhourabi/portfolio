import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Globe, Github, AlertTriangle } from 'lucide-react';
import type { Project } from '@/types';
import { supabase } from '@/lib/supabase';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export async function Projects() {
  const { data: projects, error } = await supabase.from('projects').select('*').order('id');

  const projectList: Project[] = projects || [];

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">Here's a selection of projects that showcase my skills in React Native development.</p>
        
        {error && (
            <Alert variant="destructive" className="max-w-2xl mx-auto">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error Fetching Projects</AlertTitle>
                <AlertDescription>
                    Could not fetch project data from the database. Please ensure the 'projects' table exists and your Supabase credentials are correct.
                    <p className="font-mono text-xs mt-2 bg-background/50 p-2 rounded">{error.message}</p>
                </AlertDescription>
            </Alert>
        )}

        {!error && projectList.length > 0 && (
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
        
        {!error && projectList.length === 0 && (
          <div className="text-center text-muted-foreground">
             <p>I am currently adding my projects. Please check back later.</p>
          </div>
        )}
      </div>
    </section>
  );
}
