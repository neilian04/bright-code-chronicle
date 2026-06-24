import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { EDUCATION } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Academic" title="Education" />
        <div className="space-y-4">
          {EDUCATION.map((e) => (
            <div key={e.school} className="card-glow flex items-center gap-4 rounded-xl p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-neon-teal/40 bg-neon-teal/10 text-neon-teal">
                <GraduationCap size={22} />
              </div>
              <div className="flex-1">
                <p className="font-mono text-xs text-neon-teal">{e.period}</p>
                <h3 className="mt-1 text-base font-bold uppercase tracking-wide">{e.school}</h3>
                <p className="text-sm text-muted-foreground">{e.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
