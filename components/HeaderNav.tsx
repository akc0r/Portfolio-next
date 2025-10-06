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
    <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Portfolio 2025</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Julien Glin</h1>
        <p className="mt-2 max-w-xl text-sm text-white/60">
          Final-year software engineering student at EPITA Lyon · Full-stack developer inspired by motorsport.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-white/60">
        <nav className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <a key={link.href} className="transition-colors hover:text-white" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
