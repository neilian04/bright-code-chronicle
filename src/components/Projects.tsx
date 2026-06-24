import { ExternalLink, Folder, Calendar, UserCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { PROJECTS } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Showcase" title="Projects" />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.name} className="card-glow flex flex-col overflow-hidden rounded-2xl">
              <div className="relative h-48 w-full overflow-hidden border-b border-border bg-code-bg">
                {p.cover ? (
                  <img
                    src={p.cover}
                    alt={p.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-neon-violet/60">
                    <Folder size={72} strokeWidth={1.2} />
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-gradient-teal">{p.name}</h3>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <UserCircle2 size={12} className="text-neon-violet" /> {p.role}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} className="text-neon-teal" /> {p.timeline}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-neon-teal/30 bg-neon-teal/5 px-2 py-0.5 font-mono text-[10px] text-neon-teal"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neon-violet mt-5 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
