import { Code2, Wrench, Brain, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SKILL_GROUPS } from "@/lib/portfolio-data";

const ICONS = [Code2, Brain, Wrench, Sparkles];

export function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Toolkit" title="Skills" />

        <div className="grid gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={group.label} className="card-glow rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neon-teal/40 bg-neon-teal/10 text-neon-teal">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-neon-teal">
                    {group.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-neon-violet/30 bg-neon-violet/5 px-3 py-1.5 text-xs font-medium text-foreground/90 transition-colors hover:border-neon-violet/70 hover:bg-neon-violet/15 hover:text-neon-violet"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
