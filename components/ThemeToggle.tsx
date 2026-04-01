"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export interface ThemeToggleCopy {
  toggleLabel: string;
  toggleAriaLabel: string;
  switchToLight: string;
  switchToDark: string;
  lightMode: string;
  darkMode: string;
}

interface ThemeToggleProps {
  copy: ThemeToggleCopy;
}

const fallbackCopy: ThemeToggleCopy = {
  toggleLabel: "Theme",
  toggleAriaLabel: "Toggle theme",
  switchToLight: "Switch to light mode",
  switchToDark: "Switch to dark mode",
  lightMode: "Light mode",
  darkMode: "Dark mode",
};

export function ThemeToggle({ copy }: ThemeToggleProps) {
  const labels = copy ?? fallbackCopy;
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
        aria-label={labels.toggleAriaLabel}
        className="gap-2 text-xs uppercase tracking-[0.3em] text-slate-700 dark:text-slate-100"
      >
        <span aria-hidden>◐</span>
        <span className="hidden sm:inline">{labels.toggleLabel}</span>
      </Button>
    );
  }

  const resolvedTheme = (theme === "system" ? systemTheme : theme) ?? "light";
  const isDark = resolvedTheme === "dark";
  const label = isDark ? labels.switchToLight : labels.switchToDark;

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      className="gap-2 text-xs uppercase tracking-[0.3em] text-slate-700 dark:text-slate-100"
    >
      <span aria-hidden>{isDark ? "☼" : "◐"}</span>
      <span className="hidden sm:inline">{isDark ? labels.lightMode : labels.darkMode}</span>
    </Button>
  );
}
