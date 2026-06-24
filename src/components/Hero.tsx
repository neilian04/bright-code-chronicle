import { Download, Mail, Github, Linkedin, Facebook, Twitter } from "lucide-react";
import { CodeWindow, Tok } from "./CodeWindow";
import { SITE } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-neon-violet/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-mono text-sm text-neon-teal">$ whoami</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Hello,
            <br />
            This is <span className="text-gradient-pink">{SITE.fullName}</span>,
            <br />
            I'm a <span className="text-gradient-teal">{SITE.role}</span>{" "}
            <span className="text-gradient-teal">{SITE.specialization}</span>.
          </h1>

          <div className="mt-6 flex items-center gap-4 text-neon-pink">
            <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-neon-violet"><Github size={22} /></a>
            <a href="#contact" aria-label="LinkedIn" className="transition-colors hover:text-neon-violet"><Linkedin size={22} /></a>
            <a href="#contact" aria-label="Facebook" className="transition-colors hover:text-neon-violet"><Facebook size={22} /></a>
            <a href="#contact" aria-label="Twitter" className="transition-colors hover:text-neon-violet"><Twitter size={22} /></a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-neon-violet inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider"
            >
              Contact Me <Mail size={16} />
            </a>
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-neon-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider"
            >
              Get Resume <Download size={16} />
            </a>
          </div>
        </div>

        <div className="relative">
          <CodeWindow>
            <pre className="overflow-x-auto whitespace-pre font-mono text-[13px] leading-7">
              <code>
                <Tok.K>const</Tok.K> <Tok.V>coder</Tok.V> = {"{"}
                {"\n  "}
                <Tok.P>name</Tok.P>: <Tok.S>'NEIL IAN R. MALLARI'</Tok.S>,
                {"\n  "}
                <Tok.P>skills</Tok.P>: [<Tok.S>'Python'</Tok.S>, <Tok.S>'JavaScript'</Tok.S>, <Tok.S>'Java'</Tok.S>,
                {"\n           "}
                <Tok.S>'SQL'</Tok.S>, <Tok.S>'MySQL'</Tok.S>, <Tok.S>'Cybersecurity'</Tok.S>],
                {"\n  "}
                <Tok.P>hardWorker</Tok.P>: <Tok.K>true</Tok.K>,
                {"\n  "}
                <Tok.P>quickLearner</Tok.P>: <Tok.K>true</Tok.K>,
                {"\n  "}
                <Tok.P>problemSolver</Tok.P>: <Tok.K>true</Tok.K>,
                {"\n  "}
                <Tok.P>hireable</Tok.P>: <Tok.F>function</Tok.F>() {"{"}
                {"\n    "}
                <Tok.K>return</Tok.K> (
                {"\n      "}
                <Tok.K>this</Tok.K>.<Tok.P>hardWorker</Tok.P> &&
                {"\n      "}
                <Tok.K>this</Tok.K>.<Tok.P>problemSolver</Tok.P> &&
                {"\n      "}
                <Tok.K>this</Tok.K>.<Tok.P>skills</Tok.P>.<Tok.P>length</Tok.P> &gt;= <Tok.N>5</Tok.N>
                {"\n    "});
                {"\n  "}
                {"}"};
                {"\n"}
                {"}"};
              </code>
            </pre>
          </CodeWindow>
        </div>
      </div>
    </section>
  );
}
