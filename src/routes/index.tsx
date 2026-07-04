import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { Contact, SiteFooter } from "@/components/Contact";
import { ExitIntentModal } from "@/components/ExitIntentModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arian Reyes Diestra — Freelance Developer" },
      {
        name: "description",
        content:
          "Freelance Developer specialized in modern architectures, performance, and user experience. I design, build, and scale digital products.",
      },
      { property: "og:title", content: "Arian Reyes Diestra — Freelance Developer" },
      {
        property: "og:description",
        content: "I turn complex ideas into digital products people love to use.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Contact />
      <SiteFooter />
      <ExitIntentModal />
    </main>
  );
}
