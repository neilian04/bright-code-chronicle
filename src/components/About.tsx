import { SectionHeading } from "./SectionHeading";
import { PROFILE_IMAGE } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Who I Am" title="About Me" />
        <div className="card-glow rounded-2xl p-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:text-left">
            <div className="relative shrink-0">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-neon-violet/40 to-neon-teal/40 blur-2xl" />
              <img
                src={PROFILE_IMAGE}
                alt="Neil Ian R. Mallari"
                className="h-44 w-44 rounded-2xl border-2 border-neon-violet/40 object-cover shadow-xl sm:h-52 sm:w-52"
                loading="lazy"
              />
            </div>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Third-year Computer Science student at the{" "}
              <span className="font-semibold text-neon-teal">University of Mindanao</span>,
              specializing in <span className="font-semibold text-neon-violet">Cybersecurity</span>.
              Actively expanding technical capabilities through backend design, quality
              assurance testing, and discrete-event simulation modeling. Seeking a practical
              development role to apply security and programming skills to real-world solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
