import Image from "next/image";
import { Rocket, Settings2, Layers } from "lucide-react";

import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    icon: Layers,
    title: "Connect",
    text: "Secure access to host network capacity, interconnect and the core platforms your service runs on.",
  },
  {
    icon: Settings2,
    title: "Configure",
    text: "BSS, provisioning and customer-care tooling tailored to your products, pricing and brand.",
  },
  {
    icon: Rocket,
    title: "Launch & manage",
    text: "Go live faster, then operate, monitor and evolve your mobile service with ongoing support.",
  },
];

export function Mvno() {
  return (
    <section
      id="mvno"
      className="relative isolate overflow-hidden bg-primary py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/3 -z-10 h-[480px] w-[480px] rounded-full bg-secondary/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 -z-10 h-[360px] w-[360px] rounded-full bg-accent/20 blur-3xl"
      />

      <div className="container">
        <Reveal>
          <SectionHeading
            invert
            eyebrow="MVNO & MVNE Enablement"
            title="Launch and run a mobile service without building a network."
            description="Linkserve provides the infrastructure and technology that let virtual mobile operators (MVNOs) and enablers (MVNEs) bring mobile services to market, and manage them with confidence."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-md">
          <div className="grid lg:grid-cols-12 items-center">
            <div className="relative h-60 sm:h-72 lg:h-full lg:col-span-5 min-h-[240px] overflow-hidden">
              <Image
                src="/image-4.jpg"
                alt="Global MVNO network interconnect and cloud routing arcs"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-primary/30 to-primary" />
            </div>
            <div className="p-8 sm:p-10 lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent border border-accent/30">
                End-to-End Enablement
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                Turnkey core network access, zero tower investments
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/75">
                Linkserve bridges virtual operators directly into host MNO capacity, intelligent billing, and carrier-grade voice, SMS, and data pipes. Launch faster, minimize capital expenditure, and scale your brand seamlessly.
              </p>
            </div>
          </div>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <li className="relative border-t border-white/15 pt-8">
                <span className="text-sm font-semibold text-accent">
                  0{i + 1}
                </span>
                <s.icon className="mt-5 h-7 w-7 text-accent" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/70">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
