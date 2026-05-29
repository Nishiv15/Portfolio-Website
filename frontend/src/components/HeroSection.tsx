import { Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { profile, projects, techStack } from '../lib/portfolio';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function HeroSection() {
  const emailAddress = profile.email.replace('mailto:', '');
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);
  const highlights = [
    {
      value: `${techStack.length}+`,
      label: 'Tech Stack',
    },
    {
      value: projects.length,
      label: 'Featured Projects',
    },
  ];

  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100vh-73px)] w-[min(1120px,calc(100%-36px))] items-center gap-10 py-14 lg:grid-cols-[1.35fr_0.65fr]"
    >
      <div className="relative">
        <div className="absolute -left-8 -top-8 h-24 w-24 rotate-12 rounded-[28px] bg-gradient-to-br from-accent to-amber-400 opacity-20" />
        <p className="relative mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-normal text-primary">
          <Sparkles className="h-4 w-4" />
          Available for software development opportunities
        </p>
        <h1 className="relative max-w-4xl text-5xl font-black leading-none tracking-normal text-foreground sm:text-7xl lg:text-8xl">
          Hi, I&apos;m <span className="text-primary">{profile.name}</span>, a {profile.role}.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3" aria-label="Contact links">
          <Button asChild>
            <a href={profile.email}>
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </Button>
          <Button asChild variant="outline" size="icon">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      <Card aria-label="Profile highlights">
        <CardHeader>
          <div className="mb-2 grid h-28 w-28 place-items-center rounded-[28px] bg-gradient-to-br from-primary to-accent text-4xl font-black text-white dark:text-slate-950">
            {initials}
          </div>
          <CardTitle className="text-2xl">{profile.role}</CardTitle>
          <p className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </p>
          <a
            className="flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary/80"
            href={profile.email}
          >
            <Mail className="h-4 w-4" />
            Email : {emailAddress}
          </a>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {highlights.map((item) => (
              <div className="rounded-lg border bg-background p-4" key={item.label}>
                <strong className="block text-2xl text-primary">{item.value}</strong>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
