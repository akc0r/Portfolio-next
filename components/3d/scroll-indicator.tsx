"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export function ScrollIndicator() {
  const t = useTranslations("hero");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      style={{ opacity }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <IconChevronDown className="w-8 h-8 text-orange-500" />
      </motion.div>
      <p className="text-sm text-muted-foreground hidden sm:block">
        Scroll pour découvrir
      </p>
    </motion.div>
  );
}
