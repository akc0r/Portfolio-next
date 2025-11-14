"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import {
  IconSchool,
  IconMapPin,
  IconCalendar,
  IconTrophy,
} from "@tabler/icons-react";
import { Card } from "@/components/ui/card";
import { education } from "@/data/education";
import { motion } from "framer-motion";

export function EducationSection() {
  const t = useTranslations("education");
  const tEdu = useTranslations("educationData");

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("fr-FR", {
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <section
      id="education"
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

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <IconSchool className="h-8 w-8 text-primary" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-tertiary-dark dark:text-slate-100">
                        {tEdu(`${edu.id}.degree`)}
                      </h3>
                      <p className="text-lg font-semibold text-primary">
                        {tEdu(`${edu.id}.institution`)}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <IconMapPin className="h-4 w-4" />
                        {tEdu(`${edu.id}.location`)}
                      </div>
                      <div className="flex items-center gap-1">
                        <IconCalendar className="h-4 w-4" />
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </div>
                    </div>

                    {tEdu(`${edu.id}.description`) && (
                      <p className="text-tertiary-light dark:text-slate-300">
                        {tEdu(`${edu.id}.description`)}
                      </p>
                    )}

                    {(tEdu.raw(`${edu.id}.achievements`) as string[]).length >
                      0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-tertiary-dark dark:text-slate-100 mb-2 flex items-center gap-2">
                          <IconTrophy className="h-4 w-4 text-primary" />
                          {t("achievements")}
                        </h4>
                        <ul className="space-y-2">
                          {(tEdu.raw(`${edu.id}.achievements`) as string[]).map(
                            (achievement, i) => (
                              <li
                                key={i}
                                className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                              >
                                <span className="text-primary mt-1">▸</span>
                                <span>{achievement}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
