import { Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { CERTIFICATIONS, CERT_COVERS } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Credentials" title="All Certifications" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c) => {
            const cover = CERT_COVERS[c.name];
            return (
            <a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="card-glow group flex flex-col rounded-2xl p-6"
            >
              <div className="mb-4 flex h-32 items-center justify-center overflow-hidden rounded-xl border border-code-border bg-code-bg">
                {cover ? (
                  <img src={cover} alt={`${c.name} certificate`} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                ) : (
                  <Award size={48} className="text-neon-violet transition-transform group-hover:scale-110" />
                )}
              </div>
              <h3 className="text-base font-bold text-gradient-teal">{c.name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-neon-violet">
                {c.issuer}
              </p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-neon-teal">
                View Certificate <ExternalLink size={12} />
              </span>
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
