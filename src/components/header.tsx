// src/components/header.tsx
"use client";

import Link from 'next/link';
import { CodeXml } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <CodeXml className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">ReactNativePro</span>
          </Link>
        </div>
        <nav className="hidden flex-1 items-center space-x-2 justify-end md:flex">
          <Button variant="ghost" onClick={() => scrollTo('projects')}>Projects</Button>
          <Button variant="ghost" onClick={() => scrollTo('skills')}>Skills</Button>
          <Button variant="ghost" onClick={() => scrollTo('experience')}>Experience</Button>
          <Button variant="ghost" onClick={() => scrollTo('contact')}>Contact</Button>
        </nav>
      </div>
    </header>
  );
}
