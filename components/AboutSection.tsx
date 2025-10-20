const highlights = [
  "Scrum master on several student projects with 6 to 8 teammates.",
  "DevOps mindset: automated tests and systematic code reviews.",
  "Tech watch on generative AI and modern data tooling.",
  "Mentoring students in C programming and data structures.",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="grid gap-10 rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm transition-colors dark:border-white/20 dark:bg-[#080c1e]"
    >
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">About me</p>
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Turning race telemetry into software instincts.</h3>
        <p className="text-base text-slate-600 dark:text-white/70">
          Passionate about building useful products, I move between product strategy, data reliability, and front-end polish.
          I break problems down like a race engineer: diagnose, iterate, and keep the car—your product—on the optimal racing line.
        </p>
        <p className="text-base text-slate-600 dark:text-white/70">
          At EPITA and through internships, I’ve led squads of 6–8 teammates, set up automated pipelines, and kept sprints on
          schedule. I care about telemetry, observability, and giving teams the tools to react faster than the competition.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
  <div className="rounded-2xl border border-slate-200/70 bg-white/95 p-5 transition-colors dark:border-white/20 dark:bg-[#101634]">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-white/60">Currently</p>
          <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
            Looking for a 6-month end-of-studies internship
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
            Available February 2025 · Full-stack / Software engineering
          </p>
        </div>
  <div className="rounded-2xl border border-slate-200/70 bg-white/95 p-5 transition-colors dark:border-white/20 dark:bg-[#101634]">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-white/60">Location</p>
          <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">Lyon, France</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-white/70">Open to remote or hybrid roles across Europe & beyond</p>
        </div>
  <div className="rounded-2xl border border-slate-200/70 bg-white/95 p-5 transition-colors dark:border-white/20 dark:bg-[#101634] lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-white/60">Highlights</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-white/70">
            {highlights.map((highlight) => (
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
