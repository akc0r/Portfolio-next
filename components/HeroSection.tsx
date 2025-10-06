import Image from "next/image";
import Link from "next/link";

import type { Stat } from "@/types/portfolio";
import type { StaticImageData } from "next/image";

import { Button } from "./ui/button";

interface HeroSectionProps {
  stats: Stat[];
  profileImage: StaticImageData;
}

export function HeroSection({ stats, profileImage }: HeroSectionProps) {
  return (
    <section className="motorsport-grid overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl">
      <div className="relative z-10 flex flex-col gap-12 p-10 lg:flex-row lg:items-end">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(255,82,82,0.9)]" />
            Race mode engaged
          </span>
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Building precise, fast, and user-centred software experiences.
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            I turn business needs into scalable products—from specification writing to monitored delivery. The process borrows from F1 pit crews: rapid diagnostics, aligned teams, continuous improvement.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <Button asChild className="transition-transform duration-200 hover:-translate-y-0.5">
              <a href="/api/cv" download="Julien_Glin_CV.pdf">
                Download my résumé
                <span aria-hidden className="ml-2">
                  ↘
                </span>
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="mailto:julien.glin@icloud.com">Book a call</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
              >
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-white/50">{stat.label}</p>
                <p className="mt-1 text-xs text-white/60">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center lg:w-72">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-2 backdrop-blur">
            <div className="absolute inset-x-0 top-6 mx-auto h-64 w-64 rounded-full bg-red-500/30 blur-3xl" />
            <Image
              src={profileImage}
              alt="Portrait of Julien Glin"
              className="relative z-10 aspect-[3/4] w-64 rounded-[20px] object-cover"
              priority
            />
            <div className="mt-4 space-y-1 text-center">
              <p className="text-sm font-semibold text-white">Julien Glin</p>
              <p className="text-xs text-white/60">EPITA · Full-stack development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
