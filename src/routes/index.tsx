import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollTop } from "@/components/ScrollTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neil Ian R. Mallari — Computer Science Student (Cybersecurity)" },
      {
        name: "description",
        content:
          "Portfolio of Neil Ian R. Mallari — Computer Science student specializing in Cybersecurity. Projects, skills, certifications and experience.",
      },
      { property: "og:title", content: "Neil Ian R. Mallari — Portfolio" },
      {
        property: "og:description",
        content:
          "Computer Science student (Cybersecurity) — projects, skills, certifications and experience.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
