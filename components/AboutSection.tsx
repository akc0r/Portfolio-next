interface AboutSectionCopy {
  eyebrow: string;
  title: string;
  paragraphOne: string;
  paragraphTwo: string;
  currentFocusLabel: string;
  currentFocusTitle: string;
  currentFocusDetail: string;
  locationLabel: string;
  locationTitle: string;
  locationDetail: string;
  approachLabel: string;
  approachTitle: string;
  approachDetail: string;
  highlightsLabel: string;
  highlights: string[];
}

interface AboutSectionProps {
  copy: AboutSectionCopy;
}

export function AboutSection({ copy }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="surface-panel grid gap-10 rounded-[2rem] p-8 transition-colors sm:p-10"
    >
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">{copy.eyebrow}</p>
        <h3 className="text-heading-theme text-3xl font-semibold">{copy.title}</h3>
        <p className="text-muted-theme text-base">
          {copy.paragraphOne}
        </p>
        <p className="text-muted-theme text-base">
          {copy.paragraphTwo}
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="surface-card rounded-2xl p-5 transition-colors">
          <p className="text-soft-theme text-xs uppercase tracking-[0.25em]">{copy.currentFocusLabel}</p>
          <p className="text-heading-theme mt-2 text-sm font-semibold">
            {copy.currentFocusTitle}
          </p>
          <p className="text-muted-theme mt-2 text-sm">{copy.currentFocusDetail}</p>
        </div>
        <div className="surface-card rounded-2xl p-5 transition-colors">
          <p className="text-soft-theme text-xs uppercase tracking-[0.25em]">{copy.locationLabel}</p>
          <p className="text-heading-theme mt-2 text-sm font-semibold">{copy.locationTitle}</p>
          <p className="text-muted-theme mt-2 text-sm">{copy.locationDetail}</p>
        </div>
        <div className="surface-card rounded-2xl p-5 transition-colors lg:col-span-1">
          <p className="text-soft-theme text-xs uppercase tracking-[0.25em]">{copy.approachLabel}</p>
          <p className="text-heading-theme mt-2 text-sm font-semibold">{copy.approachTitle}</p>
          <p className="text-muted-theme mt-2 text-sm">{copy.approachDetail}</p>
        </div>
        <div className="surface-card rounded-2xl p-5 transition-colors lg:col-span-3">
          <p className="text-soft-theme text-xs uppercase tracking-[0.25em]">{copy.highlightsLabel}</p>
          <ul className="text-muted-theme mt-3 grid gap-2 text-sm sm:grid-cols-2">
            {copy.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
