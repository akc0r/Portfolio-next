"use client";

import Link from "next/link";
import { IconHome, IconArrowLeft } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light/10 via-white to-slate-50 dark:from-racing-asphalt dark:via-tertiary-dark dark:to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-9xl font-bold bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
              404
            </h1>
            {/* Racing speed lines effect */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-tertiary-dark dark:text-slate-100">
              Page non trouvée
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Oops ! On dirait que vous avez pris un mauvais virage. Cette page
              n'existe pas ou a été déplacée.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild>
              <Link href="/fr">
                <IconHome className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
            >
              <IconArrowLeft className="mr-2 h-4 w-4" />
              Page précédente
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
              <div className="w-8 h-[2px] bg-primary" />
              <span>Erreur 404</span>
              <div className="w-8 h-[2px] bg-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
