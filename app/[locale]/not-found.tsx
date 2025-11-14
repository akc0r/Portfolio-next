"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { IconHome, IconArrowLeft } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  const params = useParams();
  const locale = (params?.locale as string) || "fr";

  const messages = {
    fr: {
      title: "Page non trouvée",
      description:
        "Oops ! On dirait que vous avez pris un mauvais virage. Cette page n'existe pas ou a été déplacée.",
      home: "Retour à l'accueil",
      back: "Page précédente",
      error: "Erreur 404",
    },
    en: {
      title: "Page not found",
      description:
        "Oops! Looks like you took a wrong turn. This page doesn't exist or has been moved.",
      home: "Back to home",
      back: "Previous page",
      error: "Error 404",
    },
  };

  const t = messages[locale as keyof typeof messages] || messages.fr;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400/10 via-white to-slate-50 dark:from-racing-asphalt dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-9xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-sky-500 bg-clip-text text-transparent">
              404
            </h1>
            {/* Racing speed lines effect */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                  style={{ top: `${30 + i * 20}%` }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5 + i * 0.3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
              {t.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild>
              <Link href={`/${locale}`}>
                <IconHome className="mr-2 h-4 w-4" />
                {t.home}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
            >
              <IconArrowLeft className="mr-2 h-4 w-4" />
              {t.back}
            </Button>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-8"
          >
            <div className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <div className="w-8 h-[2px] bg-orange-500" />
              <span>{t.error}</span>
              <div className="w-8 h-[2px] bg-orange-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
