import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Who I Am" title="About Me" />
        <div className="card-glow rounded-2xl p-8 text-center">
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
    </section>
  );
}
