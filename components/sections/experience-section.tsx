"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { IconBriefcase, IconMapPin, IconCalendar } from "@tabler/icons-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experiences";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const t = useTranslations("experience");
  const tExp = useTranslations("experienceData");

  const formatDate = (date: Date | null) => {
    if (!date) return t("present");
    return new Intl.DateTimeFormat("fr-FR", {
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-sky-500 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-sky-500 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-5 h-5 bg-orange-500 rounded-full border-4 border-white dark:border-racing-asphalt hidden md:block" />

                  <Card className="md:ml-20 p-6 hover:shadow-lg hover:border-orange-500/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <IconBriefcase className="h-8 w-8 text-orange-500" />
                      </div>

                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                            {tExp(`${experience.id}.title`)}
                          </h3>
                          <p className="text-lg font-semibold text-orange-500">
                            {tExp(`${experience.id}.company`)}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <IconMapPin className="h-4 w-4" />
                            {tExp(`${experience.id}.location`)}
                          </div>
                          <div className="flex items-center gap-1">
                            <IconCalendar className="h-4 w-4" />
                            {formatDate(experience.startDate)} -{" "}
                            {formatDate(experience.endDate)}
                          </div>
                        </div>

                        <p className="text-slate-700 dark:text-slate-300">
                          {tExp(`${experience.id}.description`)}
                        </p>

                        {(tExp.raw(`${experience.id}.achievements`) as string[])
                          .length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                              {t("achievements")}
                            </h4>
                            <ul className="space-y-2">
                              {(
                                tExp.raw(
                                  `${experience.id}.achievements`
                                ) as string[]
                              ).map((achievement, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                                >
                                  <span className="text-orange-500 mt-1">▸</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
