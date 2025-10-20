"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        type="button"
        variant="outline"
        size="sm"
        aria-label="Toggle theme"
        className="gap-2 text-xs uppercase tracking-[0.3em] text-slate-700 dark:text-white/80"
      >
        <span aria-hidden>◐</span>
        <span className="hidden sm:inline">Theme</span>
      </Button>
    );
  }

  const resolvedTheme = (theme === "system" ? systemTheme : theme) ?? "light";
  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      className="gap-2 text-xs uppercase tracking-[0.3em] text-slate-700 dark:text-white/80"
    >
      <span aria-hidden>{isDark ? "☀️" : "🌙"}</span>
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </Button>
  );
}
