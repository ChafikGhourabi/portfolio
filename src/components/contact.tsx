import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Let's Build Something Great</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind or looking to add a passionate developer to your team? I'd love to hear from you. Let's connect and create something amazing together.
            </p>
            <div className="space-y-4">
                <Link href="mailto:contact@reactnativepro.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-semibold text-foreground">contact@reactnativepro.com</span>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-semibold text-foreground">LinkedIn Profile</span>
                </Link>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
