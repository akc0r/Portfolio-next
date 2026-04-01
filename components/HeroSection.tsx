import Image from "next/image";
import Link from "next/link";

import type { Stat } from "@/types/portfolio";

import { Button } from "./ui/button";

interface HeroSectionCopy {
  eyebrow: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  downloadFileName: string;
  profileName: string;
  profileRole: string;
  profileImageAlt: string;
  tags: string[];
}

interface HeroSectionProps {
  stats: (Stat & { label: string; detail: string })[];
  profileImage: string;
  copy: HeroSectionCopy;
}

export function HeroSection({ stats, profileImage, copy }: HeroSectionProps) {
  const heroImage = profileImage && profileImage.trim().length > 0 ? profileImage : "/profile-placeholder.svg";

  return (
    <section className="surface-panel text-heading-theme relative overflow-hidden rounded-[2.4rem] p-8 transition-colors sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute -left-16 -top-20 h-60 w-60 rounded-full bg-orange-400/25 blur-3xl dark:bg-orange-500/30" />
      <div className="pointer-events-none absolute -bottom-24 right-[-12%] h-64 w-64 rounded-full bg-teal-400/18 blur-3xl dark:bg-cyan-400/20" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.28),transparent_42%,rgba(255,255,255,0.06)_66%,transparent)] dark:bg-[linear-gradient(115deg,rgba(255,255,255,0.08),transparent_42%,rgba(255,255,255,0.02)_66%,transparent)]" />

      <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/70 bg-orange-50/85 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-700 dark:border-orange-400/45 dark:bg-orange-500/12 dark:text-orange-200">
            {copy.eyebrow}
          </span>
          <div className="space-y-5">
            <h2 className="text-heading-theme max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.45rem] lg:leading-[1.02]">
              {copy.title}
            </h2>
            <p className="text-muted-theme max-w-2xl text-base leading-relaxed sm:text-[1.02rem]">
              {copy.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Button asChild>
              <Link href="#contact">
                {copy.ctaPrimary}
                <span aria-hidden className="ml-2">↗</span>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/api/cv" download={copy.downloadFileName}>
                {copy.ctaSecondary}
                <span aria-hidden className="ml-2">↘</span>
              </Link>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="surface-card rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(15,23,42,0.16)]"
              >
                <p className="text-heading-theme text-2xl font-semibold tracking-tight">{stat.value}</p>
                <p className="text-soft-theme mt-1 text-xs uppercase tracking-[0.27em]">{stat.label}</p>
                <p className="text-soft-theme mt-1 text-xs">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="surface-card relative overflow-hidden rounded-[2rem] p-6 transition-colors">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),_transparent_60%)]" aria-hidden />
            <div
              className="absolute left-[-30%] top-12 h-40 w-40 rotate-6 bg-[linear-gradient(135deg,_rgba(15,23,42,0.08)_25%,_transparent_25%,_transparent_50%,_rgba(15,23,42,0.08)_50%,_rgba(15,23,42,0.08)_75%,_transparent_75%)] opacity-40 dark:bg-[linear-gradient(135deg,_rgba(255,255,255,0.08)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.08)_50%,_rgba(255,255,255,0.08)_75%,_transparent_75%)]"
              aria-hidden
            />
            <Image
              src={heroImage}
              alt={copy.profileImageAlt}
              width={320}
              height={400}
              className="relative z-10 w-full rounded-[24px] object-cover shadow-[0_24px_38px_rgba(15,23,42,0.2)]"
              priority
            />
            <div className="surface-card relative z-10 mt-4 space-y-1 rounded-2xl p-4 text-center text-sm transition-colors dark:text-white/90">
              <p className="text-heading-theme font-semibold">{copy.profileName}</p>
              <p className="text-soft-theme text-xs uppercase tracking-[0.25em]">{copy.profileRole}</p>
            </div>
            <div className="text-soft-theme relative z-10 mt-3 flex flex-wrap justify-center gap-2 text-[11px] uppercase tracking-[0.22em]">
              {copy.tags.map((tag) => (
                <span key={tag} className="surface-chip rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
