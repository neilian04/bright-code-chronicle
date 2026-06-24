import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { EXPERIENCES } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Journey" title="Experience" />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-teal/60 via-neon-violet/40 to-transparent sm:left-1/2" />

          <ul className="space-y-5">
            {EXPERIENCES.map((exp, i) => (
              <li key={exp.title} className="relative pl-12 sm:pl-0">
                <span className="absolute left-[7px] top-5 h-3 w-3 rounded-full bg-neon-teal shadow-glow-teal sm:left-[calc(50%-6px)]" />
                <div
                  className={`card-glow rounded-xl p-5 sm:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "sm:ml-auto sm:pl-6" : "sm:mr-auto sm:pr-6"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neon-violet/40 bg-neon-violet/10 text-neon-violet">
                      <Briefcase size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-xs text-neon-teal">{exp.period}</p>
                      <h3 className="mt-1 text-base font-bold uppercase tracking-wide">
                        {exp.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{exp.org}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
