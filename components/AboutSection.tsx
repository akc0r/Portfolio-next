const highlights = [
  "Scrum master on several student projects with 6 to 8 teammates.",
  "DevOps mindset: automated tests and systematic code reviews.",
  "Tech watch on generative AI and modern data tooling.",
  "Mentoring students in C programming and data structures.",
];

export function AboutSection() {
  return (
    <section id="about" className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white">About</h3>
        <p className="text-base text-white/70">
          Passionate about building useful products, I work at the crossroads of software engineering, data, and design. My driving force is understanding the problem precisely to craft solutions that are performant, reliable, and elegant.
        </p>
        <p className="text-base text-white/70">
          Thanks to my industry experience and school projects, I move easily from front-end to back-end work, write thorough specifications, and lead Agile teams. I pay close attention to user experience, data security, and code maintainability.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase text-white/60">Currently</p>
            <p className="mt-1 text-sm font-semibold text-white">Looking for a 6-month end-of-studies internship</p>
            <p className="mt-2 text-sm text-white/60">Available from February 2025 — Full-stack / Software engineering</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase text-white/60">Location</p>
            <p className="mt-1 text-sm font-semibold text-white">Lyon · France</p>
            <p className="mt-2 text-sm text-white/60">Open to opportunities in France & abroad (remote or hybrid)</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h4 className="text-lg font-semibold text-white">Highlights</h4>
        <ul className="space-y-3 text-sm text-white/70">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
