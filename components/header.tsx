"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe, Moon, Sun, Rocket } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/contexts/language-context"
import personalData from "@/data/personal.json"
import navigationData from "@/data/navigation.json"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mounted, setMounted] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      // Detect active section
      const sections = ["hero", "about", "skills", "experience", "education", "projects", "cv-preview", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", id: "about", label: t(navigationData.navigation.about) },
    { href: "#skills", id: "skills", label: t(navigationData.navigation.skills) },
    { href: "#experience", id: "experience", label: t(navigationData.navigation.experience) },
    { href: "#projects", id: "projects", label: t(navigationData.navigation.projects) },
    { href: "#cv-preview", id: "cv-preview", label: "CV" },
    { href: "#contact", id: "contact", label: t(navigationData.navigation.contact) },
  ]

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <div className={`mx-auto transition-all duration-500 ${
          isScrolled ? "max-w-fit px-4" : "max-w-6xl px-6"
        }`}>
          <AnimatePresence mode="wait">
            {isScrolled ? (
              <motion.nav
                key="compact"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="glass-strong rounded-full px-4 py-2 flex items-center gap-4"
              >
                <a href="#hero" className="text-primary font-bold text-lg flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                </a>
                <div className="hidden md:flex items-center gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`text-sm transition-colors relative ${
                        activeSection === item.id 
                          ? "text-primary font-medium" 
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.span
                          layoutId="activeSection"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  {mounted && (
                    <button
                      onClick={toggleTheme}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                  )}
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="uppercase font-mono text-xs">{language}</span>
                  </button>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="md:hidden text-muted-foreground hover:text-primary transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </motion.nav>
            ) : (
              <motion.nav
                key="full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl px-6 py-4 flex items-center justify-between"
              >
                <a href="#hero" className="flex items-center gap-3 group">
                  <motion.div 
                    className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors"
                    whileHover={{ rotate: -15 }}
                  >
                    <Rocket className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="hidden sm:block">
                    <p className="font-semibold text-foreground tracking-tight">{personalData.personal.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{t(personalData.personal.title)}</p>
                  </div>
                </a>

                <div className="hidden md:flex items-center gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`text-sm transition-colors relative group ${
                        activeSection === item.id 
                          ? "text-primary font-medium" 
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                      {activeSection === item.id ? (
                        <motion.span
                          layoutId="activeSectionFull"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      ) : (
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
                      )}
                    </a>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {mounted && (
                    <button
                      onClick={toggleTheme}
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <motion.div
                        initial={false}
                        animate={{ rotate: theme === "dark" ? 0 : 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                      </motion.div>
                    </button>
                  )}
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl glass text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="uppercase font-mono text-xs font-medium">{language}</span>
                  </button>
                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Menu className="w-5 h-5" />
                  </button>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm glass-strong p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-primary" />
                  <span className="font-semibold">{t(navigationData.ui.missionControl)}</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-lg py-3 px-4 rounded-xl transition-colors ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10 font-medium"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex gap-4">
                  {mounted && (
                    <button
                      onClick={toggleTheme}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass text-muted-foreground hover:text-primary transition-colors"
                    >
                      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                      <span>{theme === "dark" ? "Light" : "Dark"}</span>
                    </button>
                  )}
                  <button
                    onClick={toggleLanguage}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    <span className="uppercase">{language === "fr" ? "EN" : "FR"}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
