import { GraduationCap } from 'lucide-react';
import { education } from '../lib/portfolio';
import { SectionHeading } from './SectionHeading';

export function EducationSection() {
  return (
    <section id="education" className="mx-auto w-[min(1120px,calc(100%-36px))] py-20">
      <SectionHeading eyebrow="Education" title="Academic background." />
      <div className="grid gap-4">
        {education.map((item) => (
          <article className="grid gap-4 border-t py-6 sm:grid-cols-[auto_1fr]" key={item.degree}>
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <p className="mb-1 font-extrabold text-accent">{item.period}</p>
              <h3 className="text-xl font-bold">{item.degree}</h3>
              <strong className="mt-2 block">{item.school}</strong>
              {'details' in item && item.details ? (
                <p className="mt-2 leading-7 text-muted-foreground">{item.details}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
