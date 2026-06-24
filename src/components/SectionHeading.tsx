import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      {eyebrow ? (
        <span className="mb-3 inline-block rounded-full border border-neon-violet/50 bg-neon-violet/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neon-violet">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="text-gradient-teal">{title}</span>
      </h2>
      {children ? (
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{children}</p>
      ) : null}
      <div className="mt-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-neon-violet to-transparent" />
    </div>
  );
}
