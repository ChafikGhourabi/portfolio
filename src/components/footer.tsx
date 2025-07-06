import { CodeXml, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center space-x-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ReactNativePro. All rights reserved.</p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="mailto:contact@reactnativepro.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
