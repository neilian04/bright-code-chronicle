import { Star, GitFork } from "lucide-react";
import { SITE } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6">
        <p className="text-sm text-muted-foreground">
          © Developer Portfolio by{" "}
          <span className="font-semibold text-gradient-teal">{SITE.fullName}</span>
        </p>
        <div className="flex items-center gap-5">
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon-teal"
          >
            <Star size={14} /> Star
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon-violet"
          >
            <GitFork size={14} /> Fork
          </a>
        </div>
      </div>
    </footer>
  );
}
