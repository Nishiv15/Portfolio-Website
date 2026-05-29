import { ArrowUpRight, Github, Globe2 } from 'lucide-react';
import { projects } from '../lib/portfolio';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { SectionHeading } from './SectionHeading';

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-[min(1120px,calc(100%-36px))] py-20">
      <SectionHeading eyebrow="Projects" title="Selected work." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card className="flex min-h-[300px] flex-col" key={project.title}>
            <CardHeader className="flex-row items-start justify-between gap-4 space-y-0">
              <CardTitle>{project.title}</CardTitle>
              <div className="flex shrink-0 gap-2">
                {'website' in project && project.website ? (
                  <Button asChild variant="outline" size="icon">
                    <a href={project.website} target="_blank" rel="noreferrer" aria-label={`${project.title} website`}>
                      <Globe2 className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
                <Button asChild variant="outline" size="icon">
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.title} repository`}>
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="flex-1 leading-7 text-muted-foreground">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge variant="secondary" key={item}>
                    {item}
                  </Badge>
                ))}
              </div>
              {'website' in project && project.website ? (
                <Button asChild className="mt-6 w-fit" variant="secondary">
                  <a href={project.website} target="_blank" rel="noreferrer">
                    View Live
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
