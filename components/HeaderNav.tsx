import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function HeaderNav() {
  return (
    <header className="border-b border-slate-200/60 pb-6 dark:border-white/10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em]">
            <span className="rounded-full bg-orange-500/10 px-3 py-1 font-semibold text-orange-600 dark:bg-orange-500/15 dark:text-orange-200">
              Julien Glin
            </span>
            <span className="text-slate-500 dark:text-white/60">Motorsport-focused engineer</span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Software built with the precision of a race strategy.
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4 text-sm font-medium">
          <nav className="flex flex-wrap items-center gap-3 text-slate-500 dark:text-white/60">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-full px-3 py-1 transition-colors hover:text-slate-900 dark:hover:text-white"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
