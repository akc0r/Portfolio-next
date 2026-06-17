"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/contexts/language-context"
import { SECTIONS } from "./sections"

/**
 * Minimal fixed chrome for the snap layout: a logo (jump to top) and the
 * theme / language controls. On mobile it also exposes a full-screen menu,
 * since the desktop dot-nav is hidden there.
 */
export function TopBar() {
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => go("hero")}
            className="w-11 h-11 rounded-xl glass flex items-center justify-center font-mono font-bold text-primary hover:text-primary transition-colors"
            aria-label="Top"
          >
            JG
          </button>

          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Theme"
              >
                <motion.span initial={false} animate={{ rotate: theme === "dark" ? 0 : 180 }} transition={{ duration: 0.3 }}>
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.span>
              </button>
            )}
            <button
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="h-11 px-3 rounded-xl glass flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Language"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-mono text-xs font-medium">{language}</span>
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-xl lg:hidden flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-6">
              {SECTIONS.map((s, i) => (
                <motion.button
                  key={s.id}
                  onClick={() => go(s.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="font-mono text-primary text-sm mr-3">{String(i).padStart(2, "0")}</span>
                  {t(s.label)}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
