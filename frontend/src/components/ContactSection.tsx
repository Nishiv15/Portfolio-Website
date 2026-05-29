import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../lib/portfolio';
import { Button } from './ui/button';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto mb-11 flex w-[min(1120px,calc(100%-36px))] flex-col gap-6 rounded-lg border bg-gradient-to-br from-primary to-foreground p-7 text-white shadow-soft dark:from-slate-900 dark:to-slate-950 dark:text-foreground sm:p-9 lg:flex-row lg:items-center lg:justify-between"
    >
      <div>
        <p className="mb-3 text-xs font-extrabold uppercase tracking-normal text-teal-100 dark:text-primary">Contact</p>
        <h2 className="text-3xl font-black leading-tight tracking-normal sm:text-5xl">Let&apos;s build something useful.</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="secondary">
          <a href={profile.email}>
            <Mail className="h-4 w-4" />
            Mail
          </a>
        </Button>
        <Button asChild variant="secondary">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button asChild variant="secondary">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
}
