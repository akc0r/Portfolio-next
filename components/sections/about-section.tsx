"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-orange-500/20">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
                <span className="text-8xl font-bold text-white">JG</span>
              </div>
            </Card>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {t("bio")}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects", value: "20+" },
                { label: "Experience", value: "2+ Years" },
                { label: "Technologies", value: "15+" },
                { label: "Coffee", value: "∞" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  <p className="text-3xl font-bold text-orange-500">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="w-full sm:w-auto">
              <IconDownload className="mr-2 h-4 w-4" />
              {t("resume")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
