"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import { Typescript } from "@/components/ui/svgs/typescript";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { ReactDark } from "@/components/ui/svgs/reactDark";

// Helper function to get skill icon SVG from svgl.app
function getSkillIcon(skillId: string): React.ReactNode {
  switch (skillId) {
    case "typescript":
      return (
        <img
          src="https://api.svgl.app/library/typescript.svg"
          alt="TypeScript"
          className="w-12 h-12"
        />
      );
    case "python":
      return (
        <img
          src="https://api.svgl.app/library/python.svg"
          alt="Python"
          className="w-12 h-12"
        />
      );
    case "c":
      return (
        <img
          src="https://api.svgl.app/library/c.svg"
          alt="C"
          className="w-12 h-12"
        />
      );
    case "java":
      return (
        <img
          src="https://api.svgl.app/library/java.svg"
          alt="Java"
          className="w-12 h-12"
        />
      );
    case "csharp":
      return (
        <img
          src="https://api.svgl.app/library/csharp.svg"
          alt="C#"
          className="w-12 h-12"
        />
      );
    case "sql":
      return (
        <img
          src="https://api.svgl.app/library/postgresql.svg"
          alt="SQL"
          className="w-12 h-12"
        />
      );
    case "react":
      return (
        <img
          src="https://api.svgl.app/library/react.svg"
          alt="React"
          className="w-12 h-12"
        />
      );
    case "nodejs":
      return (
        <img
          src="https://api.svgl.app/library/nodejs.svg"
          alt="Node.js"
          className="w-12 h-12"
        />
      );
    case "tailwindcss":
      return (
        <img
          src="https://api.svgl.app/library/tailwindcss.svg"
          alt="Tailwind CSS"
          className="w-12 h-12"
        />
      );
    case "django":
      return (
        <img
          src="https://api.svgl.app/library/django.svg"
          alt="Django"
          className="w-12 h-12"
        />
      );
    case "dotnet":
      return (
        <img
          src="https://api.svgl.app/library/dotnet.svg"
          alt=".NET"
          className="w-12 h-12"
        />
      );
    case "docker":
      return (
        <img
          src="https://api.svgl.app/library/docker.svg"
          alt="Docker"
          className="w-12 h-12"
        />
      );
    case "kubernetes":
      return (
        <img
          src="https://api.svgl.app/library/kubernetes.svg"
          alt="Kubernetes"
          className="w-12 h-12"
        />
      );
    case "git":
      return (
        <img
          src="https://api.svgl.app/library/git.svg"
          alt="Git"
          className="w-12 h-12"
        />
      );
    case "postgresql":
      return (
        <img
          src="https://api.svgl.app/library/postgresql.svg"
          alt="PostgreSQL"
          className="w-12 h-12"
        />
      );
    case "mongodb":
      return (
        <img
          src="https://api.svgl.app/library/mongodb.svg"
          alt="MongoDB"
          className="w-12 h-12"
        />
      );
    case "redis":
      return (
        <img
          src="https://api.svgl.app/library/redis.svg"
          alt="Redis"
          className="w-12 h-12"
        />
      );
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
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
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
                >
                  <Card className="p-6 hover:shadow-lg hover:border-orange-500/50 transition-all group">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="transform group-hover:scale-110 transition-transform">
                        {getSkillIcon(skill.id)}
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
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
                >
                  <Card className="p-6 text-center hover:shadow-lg hover:border-orange-500/50 transition-all">
                    <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
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
