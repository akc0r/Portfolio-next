"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import { Typescript } from "@/components/ui/svgs/typescript";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Python } from "@/components/ui/svgs/python";
import { C } from "@/components/ui/svgs/c";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Django } from "@/components/ui/svgs/django";
import { Dotnet } from "@/components/ui/svgs/dotnet";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Git } from "@/components/ui/svgs/git";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { MongodbIconLight } from "@/components/ui/svgs/mongodbIconLight";
import { Redis } from "@/components/ui/svgs/redis";
import { NextjsLogoLight } from "@/components/ui/svgs/nextjsLogoLight";
import { MysqlIconLight } from "@/components/ui/svgs/mysqlIconLight";
import { Linux } from "@/components/ui/svgs/linux";
import { Vercel } from "@/components/ui/svgs/vercel";
import { Nginx } from "@/components/ui/svgs/nginx";

// Helper function to get skill icon SVG from svgl.app
function getSkillIcon(skillId: string): React.ReactNode {
  switch (skillId) {
    case "typescript":
      return <Typescript />;
    case "python":
      return <Python />;
    case "c":
      return <C />;
    case "java":
      return <Java />;
    case "csharp":
      return <Csharp />;
    case "react":
      return <ReactLight />;
    case "nodejs":
      return <Nodejs />;
    case "tailwindcss":
      return <Tailwindcss />;
    case "django":
      return <Django />;
    case "dotnet":
      return <Dotnet />;
    case "docker":
      return <Docker />;
    case "kubernetes":
      return <Kubernetes />;
    case "git":
      return <Git />;
    case "postgresql":
      return <Postgresql />;
    case "mongodb":
      return <MongodbIconLight />;
    case "redis":
      return <Redis />;
    case "nextjs":
      return <NextjsLogoLight />;
    case "mysql":
      return <MysqlIconLight />;
    case "vercel":
      return <Vercel />;
    case "linux":
      return <Linux />;
    case "nginx":
      return <Nginx />;
    default:
      return null;
  }
}

export function SkillsSection() {
  const t = useTranslations("skills");

  const technicalSkills = skills.filter(
    (skill) => skill.category === "technical"
  );
  const softSkills = skills.filter((skill) => skill.category === "soft");

  return (
    <section
      id="skills"
      className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900/50"
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
            <span className="bg-linear-to-r from-orange-500 to-sky-500 bg-clip-text text-transparent animate-gradient">
              {t("title")}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Technical Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100"
            >
              {t("technical")}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="relative p-6 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden">
                    {/* Animated gradient border effect */}
                    <div className="absolute inset-0 rounded-lg bg-linear-to-r from-orange-500/0 via-orange-500/10 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent" />

                    <div className="relative flex flex-col items-center text-center space-y-3">
                      <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {getSkillIcon(skill.id)}
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-orange-500 transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100"
            >
              {t("soft")}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="relative p-6 text-center hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-lg bg-linear-to-br from-orange-500/0 via-orange-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Particle effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <h4 className="relative text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-orange-500 transition-colors duration-300">
                      {skill.name}
                    </h4>
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
