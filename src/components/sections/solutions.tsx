import { Network, ServerCog, Radio } from "lucide-react";

import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const solutions = [
  {
    icon: Radio,
    title: "Telecommunications Infrastructure",
    description:
      "Design, deployment and support of the physical and logical infrastructure that keeps operators and enterprises connected, built for coverage, uptime and long-term growth.",
    points: ["Network planning & rollout", "Transmission & access", "Managed operations"],
  },
  {
    icon: ServerCog,
    title: "Business Support Systems (BSS)",
    description:
      "Billing, charging, customer management and product catalogue platforms that turn network capability into commercial services, quickly and accurately.",
    points: ["Billing & charging", "Customer lifecycle", "Product & offer management"],
  },
  {
    icon: Network,
    title: "Core Network Solutions",
    description:
      "Carrier-grade core platforms for voice, messaging and data, engineered for resilience and ready to scale with subscriber demand.",
    points: ["Voice, SMS & data core", "Interconnect & roaming", "Security & resilience"],
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="bg-highlight/50 py-24 md:py-32">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Our Solutions"
            title="Everything an operator needs, from the ground up."
            description="Three core capabilities that work independently or as one integrated platform."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="bg-background">
              <article className="group flex h-full flex-col p-8 transition-colors hover:bg-white lg:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-highlight text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-primary">
                  {s.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-primary/80">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5">
                      <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
