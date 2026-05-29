import { Code2, Rocket } from 'lucide-react';
import { coreConcepts, databases, devTools, programmingLanguages, techStack } from '../lib/portfolio';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { SectionHeading } from './SectionHeading';

const summaryCards = [
  {
    icon: Rocket,
    title: 'What I Build',
    text: 'Responsive web applications, interactive interfaces, dashboards, and project experiences designed for clarity, speed, and everyday usability.',
  },
  {
    icon: Code2,
    title: 'How I Work',
    text: 'I prioritize readable code, component-based architecture, thoughtful styling, and testing the important paths before shipping.',
  },
];

export function SummarySection() {
  const skillGroups = [
    { title: 'Programming Languages', items: programmingLanguages },
    { title: 'Tech Stack', items: techStack },
    { title: 'Databases', items: databases },
    { title: 'Developer Tools', items: devTools },
    { title: 'Core Concepts', items: coreConcepts },
  ];

  return (
    <section id="summary" className="mx-auto w-[min(1120px,calc(100%-36px))] py-20">
      <SectionHeading eyebrow="Profile Summary" title="Focused on practical, polished software." />
      <div className="grid gap-5 md:grid-cols-2">
        {summaryCards.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title}>
              <CardHeader>
                <Icon className="h-7 w-7 text-accent" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2" aria-label="Technical skills">
        {skillGroups.map((group) => (
          <Card className={group.title === 'Core Concepts' ? 'md:col-span-2' : undefined} key={group.title}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{group.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge variant="secondary" key={skill}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
