import { useState, type FormEvent } from "react";
import { AtSign, Phone, MapPin, Send, Github, Linkedin, Facebook, Twitter, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SITE } from "@/lib/portfolio-data";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Get in Touch" title="Contact with Me" />

        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="card-glow rounded-2xl p-6">
            <p className="mb-5 text-sm text-muted-foreground">
              If you have any questions or concerns, please don't hesitate to contact me. I'm open
              to any work opportunities that align with my skills and interests.
            </p>

            <label className="mb-3 block">
              <span className="mb-1 block text-sm font-medium">Your Name</span>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm outline-none transition-colors focus:border-neon-violet focus:ring-1 focus:ring-neon-violet"
              />
            </label>
            <label className="mb-3 block">
              <span className="mb-1 block text-sm font-medium">Your Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm outline-none transition-colors focus:border-neon-violet focus:ring-1 focus:ring-neon-violet"
              />
            </label>
            <label className="mb-5 block">
              <span className="mb-1 block text-sm font-medium">Your Message</span>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full resize-none rounded-md border border-border bg-input/40 px-3 py-2 text-sm outline-none transition-colors focus:border-neon-violet focus:ring-1 focus:ring-neon-violet"
              />
            </label>

            <button
              type="submit"
              className="btn-neon-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider"
            >
              Send Message <Send size={14} />
            </button>

            {sent ? (
              <p className="mt-4 inline-flex items-center gap-2 rounded-md border border-neon-teal/40 bg-neon-teal/10 px-3 py-2 text-sm text-neon-teal">
                <CheckCircle2 size={16} /> Opening your email client…
              </p>
            ) : null}
          </form>

          <div className="space-y-4">
            <a href={`mailto:${SITE.email}`} className="card-glow flex items-center gap-4 rounded-xl p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-neon-teal/40 bg-neon-teal/10 text-neon-teal">
                <AtSign size={18} />
              </div>
              <span className="text-sm font-medium break-all">{SITE.email}</span>
            </a>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="card-glow flex items-center gap-4 rounded-xl p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-neon-violet/40 bg-neon-violet/10 text-neon-violet">
                <Phone size={18} />
              </div>
              <span className="text-sm font-medium">{SITE.phone}</span>
            </a>
            <div className="card-glow flex items-center gap-4 rounded-xl p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-neon-pink/40 bg-neon-pink/10 text-neon-pink">
                <MapPin size={18} />
              </div>
              <span className="text-sm font-medium">{SITE.location}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Github, href: SITE.github, label: "GitHub" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition-colors hover:border-neon-violet hover:text-neon-violet"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
