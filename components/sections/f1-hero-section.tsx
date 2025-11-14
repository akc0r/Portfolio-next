"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { F1CarScene } from "@/components/3d/f1-car-scene";
import { ParticlesBackground } from "@/components/3d/particles-background";
import { SpeedLines } from "@/components/3d/speed-lines";
import { ScrollIndicator } from "@/components/3d/scroll-indicator";
import { useRef } from "react";

export function F1HeroSection() {
  const t = useTranslations("hero");
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const helmetOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const helmetScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen w-full overflow-hidden bg-linear-to-br from-background via-background to-primary/5"
    >
      {/* Animated background elements */}
      <ParticlesBackground />
      <SpeedLines />

      {/* Content with proper margins */}
      <div className="absolute inset-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            {/* Text side */}
            <motion.div
              className="relative z-20 flex items-center"
              style={{ y: textY, opacity: textOpacity }}
            >
              <div className="max-w-2xl">
                {/* Text content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  {/* Greeting */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg sm:text-xl text-muted-foreground"
                  >
                    {t("greeting")}
                  </motion.p>

                  {/* Name with gradient */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    <span className="bg-linear-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
                      {t("title")}
                    </span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground"
                  >
                    {t("subtitle")}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                  >
                    {t("description")}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  >
                    <Button size="lg" className="group" asChild>
                      <a href="#projects">
                        {t("cta.viewWork")}
                        <IconArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#contact">
                        <IconDownload className="mr-2 h-4 w-4" />
                        {t("cta.contact")}
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* F1 side */}
            <motion.div
              className="relative z-10 hidden lg:flex items-center justify-center"
              style={{ opacity: helmetOpacity, scale: helmetScale }}
            >
              <F1CarScene />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/80 pointer-events-none z-10" />
    </section>
  );
}
