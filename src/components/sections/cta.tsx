import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <section aria-labelledby="cta-heading" className="pb-24 md:pb-32">
      <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-white sm:px-12 md:py-24">
            <Image
              src="/image-2.avif"
              alt="Night satellite view of connected cities and infrastructure across the continent"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="pointer-events-none -z-20 object-cover opacity-35 mix-blend-luminosity brightness-110"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/95 via-[#4A1C85]/85 to-secondary/80"
            />
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-accent/40 blur-3xl"
            />
            <h2
              id="cta-heading"
              className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
            >
              Ready to build Africa&apos;s next connected service?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/75 sm:text-lg">
              Talk to our team about infrastructure, BSS/OSS, core network or MVNO
              and MVNE enablement.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="light">
                <a href={`mailto:${site.email}`}>
                  Partner with Linkserve <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <a href="#solutions">Review our solutions</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
