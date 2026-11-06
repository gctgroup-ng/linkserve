import Image from "next/image";
import { Handshake, Lightbulb, ShieldCheck, TrendingUp, Cpu } from "lucide-react";

import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "Carrier-grade systems and disciplined operations built for always-on services.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    text: "Platforms that grow from first subscriber to millions without re-architecture.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Modern, flexible technology that keeps pace with how connectivity is changing.",
  },
  {
    icon: Cpu,
    title: "Technical expertise",
    text: "Engineers with deep, hands-on telecom experience across the full stack.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "We work alongside your team as a long-term partner, not just a vendor.",
  },
];

export function Why() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-8xl gap-14 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16">
        <Reveal className="flex flex-col justify-between">
          <div>
            <SectionHeading
              eyebrow="Why Linkserve"
              title="A partner built for the long run."
              description="Technology decisions in telecoms last for years. We help you make ones you won't regret."
            />
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl border border-border shadow-lg">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/image-3.webp"
                alt="Linkserve mission-critical telecom data center and server architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">Always-On Infrastructure</p>
                <p className="mt-1 text-sm font-medium text-white/90">
                  Carrier-grade redundancy, low-latency interconnects, and 24/7 technical operations.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <ul className="divide-y divide-border">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <li className="flex gap-5 py-6 first:pt-0 last:pb-0 my-2">
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-highlight text-secondary">
                  <r.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-primary">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">
                    {r.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
