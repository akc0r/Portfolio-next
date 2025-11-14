"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconHeart,
} from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { contacts } from "@/data/contacts";

export function Footer() {
  const t = useTranslations("footer");

  const socialLinks = contacts.filter((contact) =>
    ["github", "linkedin", "twitter"].includes(contact.type)
  );

  const getSocialIcon = (type: string) => {
    switch (type) {
      case "github":
        return <IconBrandGithub className="h-5 w-5" />;
      case "linkedin":
        return <IconBrandLinkedin className="h-5 w-5" />;
      case "twitter":
        return <IconBrandTwitter className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-white dark:bg-racing-asphalt border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
            >
              Julien Glin
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Software Engineer in Training
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#about"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
                  aria-label={link.label}
                >
                  {getSocialIcon(link.type)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Julien Glin. {t("rights")}.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
            {t("builtWith")}{" "}
            <IconHeart className="h-4 w-4 mx-1 text-orange-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
