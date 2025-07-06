"use client";

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';

const testimonials = [
  {
    name: 'John Smith',
    title: 'Project Manager, Tech Solutions Inc.',
    quote: 'Jane is an exceptional developer. Her expertise in React Native was crucial to our project\'s success. She is a team player with a fantastic eye for detail.',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'professional man portrait',
  },
  {
    name: 'Emily White',
    title: 'UI/UX Designer, Innovate Apps Co.',
    quote: 'Working with Jane is a pleasure. She translates designs into pixel-perfect, functional UIs effortlessly and always provides valuable feedback to improve the user experience.',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'professional woman portrait',
  },
  {
    name: 'Michael Brown',
    title: 'CEO, StartupX',
    quote: 'Jane delivered our MVP on time and with outstanding quality. Her problem-solving skills and dedication are second to none. I would highly recommend her.',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'ceo portrait',
  }
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">What Others Say</h2>
        <Carousel 
          plugins={[plugin.current]}
          className="w-full max-w-3xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-secondary border-none shadow-none">
                    <CardContent className="flex flex-col items-center text-center p-8">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        width={80} 
                        height={80} 
                        className="rounded-full mb-4"
                        data-ai-hint={testimonial.imageHint}
                      />
                      <blockquote className="text-lg italic mb-4 text-foreground">"{testimonial.quote}"</blockquote>
                      <p className="font-bold font-headline">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
