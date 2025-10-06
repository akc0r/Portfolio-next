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

  const resolvedTheme = theme === "system" ? systemTheme : theme;
  const isDark = resolvedTheme === "dark";

  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      className="gap-2 text-xs uppercase tracking-[0.3em]"
    >
      <span aria-hidden>{mounted ? (isDark ? "☀️" : "🌙") : "◐"}</span>
      <span className="hidden sm:inline">{mounted ? (isDark ? "Light" : "Dark") : "Theme"}</span>
    </Button>
  );
}
