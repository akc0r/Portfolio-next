import Image from "next/image";
import Link from "next/link";

import type { Stat } from "@/types/portfolio";

import { Button } from "./ui/button";

interface HeroSectionProps {
  stats: Stat[];
  profileImage: string;
}

export function HeroSection({ stats, profileImage }: HeroSectionProps) {
  const heroImage = profileImage && profileImage.trim().length > 0 ? profileImage : "/profile-placeholder.svg";

  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-10 text-slate-900 shadow-xl shadow-orange-200/30 transition-colors dark:border-white/20 dark:bg-[#080c1e] dark:text-white">
      <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/60 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-orange-600 dark:border-orange-500/40 dark:bg-orange-500/10 dark:text-orange-200">
            Motorsport execution
          </span>
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              I ship software with the focus of a track engineer.
            </h2>
            <p className="max-w-2xl text-base text-slate-600 dark:text-white/70">
              From telemetry dashboards to customer-facing platforms, I orchestrate sprints like race weekends: clear
              objectives, measured performance, and seamless pit-stop collaboration across design, product, and engineering.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Button asChild>
              <Link href="#contact">
                Schedule a call
                <span aria-hidden className="ml-2">↗</span>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/api/cv" download="Julien_Glin_CV.pdf">
                Download resume
                <span aria-hidden className="ml-2">↘</span>
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200/70 bg-white/95 p-4 shadow-sm transition-colors dark:border-white/20 dark:bg-[#101634]"
              >
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-white/50">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-slate-50 p-6 shadow-lg transition-colors dark:border-white/20 dark:bg-[#101634]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),_transparent_60%)]" aria-hidden />
            <div className="absolute left-[-30%] top-12 h-40 w-40 rotate-6 bg-[linear-gradient(135deg,_rgba(15,23,42,0.08)_25%,_transparent_25%,_transparent_50%,_rgba(15,23,42,0.08)_50%,_rgba(15,23,42,0.08)_75%,_transparent_75%)] opacity-40 dark:bg-[linear-gradient(135deg,_rgba(255,255,255,0.08)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.08)_50%,_rgba(255,255,255,0.08)_75%,_transparent_75%)]" aria-hidden />
            <Image
              src={heroImage}
              alt="Portrait of Julien Glin"
              width={320}
              height={400}
              className="relative z-10 w-full rounded-[24px] object-cover"
              priority
            />
            <div className="relative z-10 mt-4 space-y-1 rounded-2xl border border-slate-200/70 bg-white/90 p-4 text-center text-sm shadow-sm transition-colors dark:border-white/20 dark:bg-[#101634] dark:text-white/80">
              <p className="font-semibold text-slate-900 dark:text-white">Julien Glin</p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-white/60">Full-stack · EPITA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
