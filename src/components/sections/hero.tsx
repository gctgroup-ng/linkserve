import Image from "next/image";
import { ArrowRight, Activity } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-grid pt-32 md:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[620px] w-[620px] rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <div className="mx-auto grid max-w-8xl items-center gap-12 px-6 pb-24 sm:px-10 md:pb-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-16">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-highlight px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Telecom infrastructure 
              {/* since 1996 */}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-3xl font-semibold leading-[1.12] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Powering the Infrastructure Behind{" "}
              <span className="text-gradient">Africa&apos;s Connected Future.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Linkserve is a Nigerian telecommunications infrastructure and
              technology provider. We give operators, MVNOs and MVNEs the
              networks, systems and expertise to launch and scale
              connectivity across the continent.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#contact">
                  Partner with Linkserve <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#solutions">Explore solutions</a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto w-full max-w-[540px] lg:max-w-none">
          <div className="group relative aspect-[4/3] sm:aspect-square w-full">
            {/* Ambient background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-20 rounded-full bg-accent/25 blur-3xl"
            />

            {/* Blurred image diffusion border layer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 -z-10 scale-95 opacity-75 blur-2xl [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_78%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_78%)]"
            >
              <Image
                src="/image-1.avif"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Sharp core image with feathered blending blurry edges */}
            <div className="relative h-full w-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_36%,rgba(0,0,0,0.7)_56%,transparent_72%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_36%,rgba(0,0,0,0.7)_56%,transparent_72%)]">
              <Image
                src="/image-1.avif"
                alt="Global interconnected telecommunications network and digital routing"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>

            {/* Status indicator top right */}
            <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-primary/85 px-3.5 py-1.5 text-xs font-medium text-white shadow-xl backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Live Core Backbone</span>
            </div>

            {/* Feature badge bottom */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3.5 rounded-2xl border border-white/20 bg-primary/90 p-3.5 shadow-2xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/25 text-accent">
                <Activity className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-tight text-white">Carrier-Grade Availability</div>
                <div className="text-[11px] text-white/70">Pan-African routing & high resilience</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
