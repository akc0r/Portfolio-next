"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { interests } from "@/data/interests";
import { motion } from "framer-motion";
import {
  IconSteeringWheel,
  IconCode,
  IconCamera,
  IconBarbell,
} from "@tabler/icons-react";

export function InterestsSection() {
  const t = useTranslations("interests");
  const tInt = useTranslations("interestsData");

  const getIcon = (icon?: string) => {
    const iconClass = "h-12 w-12";
    switch (icon) {
      case "racing":
        return <IconSteeringWheel className={iconClass} />;
      case "code":
        return <IconCode className={iconClass} />;
      case "camera":
        return <IconCamera className={iconClass} />;
      case "barbell":
        return <IconBarbell className={iconClass} />;
      default:
        return <IconSteeringWheel className={iconClass} />;
    }
  };

  return (
    <section
      id="interests"
      className="py-20 sm:py-32 bg-slate-50 dark:bg-tertiary-dark/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all group">
                <div className="mb-4 text-primary flex justify-center transform group-hover:scale-110 transition-transform">
                  {getIcon(interest.icon)}
                </div>
                <h3 className="text-xl font-bold text-tertiary-dark dark:text-slate-100 mb-2">
                  {tInt(`${interest.id}.title`)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {tInt(`${interest.id}.description`)}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
