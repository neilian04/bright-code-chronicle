import type { ReactNode } from "react";

export function CodeWindow({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`code-window overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 border-b border-code-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[oklch(0.65_0.20_25)]" />
        <span className="h-3 w-3 rounded-full bg-[oklch(0.80_0.16_70)]" />
        <span className="h-3 w-3 rounded-full bg-[oklch(0.75_0.18_150)]" />
        {title ? (
          <span className="ml-auto mr-auto text-sm font-medium text-neon-teal">{title}</span>
        ) : null}
      </div>
      <div className="px-5 py-4 text-sm leading-7">{children}</div>
    </div>
  );
}

/* Syntax token helpers */
export const Tok = {
  K: ({ children }: { children: ReactNode }) => (
    <span style={{ color: "var(--syntax-keyword)" }}>{children}</span>
  ),
  S: ({ children }: { children: ReactNode }) => (
    <span style={{ color: "var(--syntax-string)" }}>{children}</span>
  ),
  N: ({ children }: { children: ReactNode }) => (
    <span style={{ color: "var(--syntax-number)" }}>{children}</span>
  ),
  F: ({ children }: { children: ReactNode }) => (
    <span style={{ color: "var(--syntax-fn)" }}>{children}</span>
  ),
  P: ({ children }: { children: ReactNode }) => (
    <span style={{ color: "var(--syntax-prop)" }}>{children}</span>
  ),
  C: ({ children }: { children: ReactNode }) => (
    <span style={{ color: "var(--syntax-comment)" }}>{children}</span>
  ),
  V: ({ children }: { children: ReactNode }) => (
    <span style={{ color: "var(--syntax-var)" }}>{children}</span>
  ),
};
