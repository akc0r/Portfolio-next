"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { IconLanguage } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const currentLocale = pathname.split("/")[1];
    const newLocale = currentLocale === "fr" ? "en" : "fr";
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const currentLocale = pathname.split("/")[1];

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLocale}
      className="relative"
    >
      <IconLanguage className="h-5 w-5" />
      <span className="absolute -bottom-1 -right-1 text-[10px] font-bold uppercase">
        {currentLocale === "fr" ? "EN" : "FR"}
      </span>
      <span className="sr-only">Toggle language</span>
    </Button>
  );
}
