import Image from "next/image";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const facts = [
  { value: "End-to-End", label: "Core network, BSS & infrastructure solutions" },
  { value: "Carrier-Grade", label: "Mission-critical reliability and performance" },
  { value: "Pan-African", label: "Market focus and delivery reach" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div>
            <SectionHeading
              eyebrow="About Linkserve"
              title="Carrier-grade telecommunications infrastructure engineered for scale."
            />
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/image-5.jpeg"
                alt="Linkserve telecommunications fiber distribution and rack switching facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-medium tracking-tight">Direct Fiber & Switching Distribution</span>
                <span className="rounded-full bg-accent/30 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-semibold text-white border border-accent/40">
                  Carrier Facilities
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Linkserve designs, deploys, and powers the critical networks
              and systems that modern connectivity demands. From core network
              architecture to intelligent business support systems (BSS),
              we provide the operational backbone that operators, MVNOs, and
              enterprises rely on.
            </p>
            <p>
              By combining robust physical infrastructure with flexible,
              software-defined technology, we remove complexity for our
              partners—enabling high-availability service delivery, agile
              monetization, and seamless expansion across the region.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="sr-only">{f.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-primary">
                  {f.value}
                </dd>
                <p className="mt-2 text-sm text-muted-foreground" aria-hidden="true">
                  {f.label}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
