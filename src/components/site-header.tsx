"use client";

import { FileText, Menu, PlaySquare, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const socialLinks = [
  { label: "YouTube", href: siteConfig.youtube, icon: PlaySquare },
  { label: "Resume", href: "#documents", icon: FileText }
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/80 bg-white/82 shadow-[0_8px_30px_rgba(10,10,11,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="section-shell flex h-[var(--header-height)] items-center justify-between gap-5">
        <Link
          href="#home"
          className="focus-ring flex items-center gap-3 rounded-sm"
          aria-label="NAMHO home"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-ink text-sm font-semibold text-white">
            N
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:block">
            NAMHO
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm px-3 py-2 text-sm font-medium text-neutral-600 transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring grid h-9 w-9 place-items-center rounded-sm border border-line bg-white/70 text-neutral-700 transition hover:border-neutral-300 hover:text-ink"
                aria-label={item.label}
              >
                <Icon size={18} strokeWidth={1.8} />
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="focus-ring grid h-10 w-10 place-items-center rounded-sm border border-line bg-white/80 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-line bg-white transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[420px]" : "max-h-0 border-transparent"
        )}
      >
        <nav className="section-shell grid gap-1 py-4" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm px-2 py-3 text-sm font-medium text-neutral-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-2 border-t border-line pt-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring grid h-10 w-10 place-items-center rounded-sm border border-line text-neutral-700"
                  aria-label={item.label}
                  onClick={() => setOpen(false)}
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
