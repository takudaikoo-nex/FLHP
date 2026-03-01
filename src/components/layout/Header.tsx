"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE, NAV_ITEMS } from "@/lib/constants";
import { PhoneIcon } from "@/components/ui/PhoneIcon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-[72px] transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div className="w-10 h-10 bg-main rounded-lg flex items-center justify-center text-white font-mincho text-lg font-bold">
          一
        </div>
        <div>
          <div className="text-sm font-bold tracking-wider text-ink">
            ファーストリーフ
          </div>
          <div className="text-[10px] font-display tracking-[0.15em] text-ink-muted">
            FIRST LEAF Inc.
          </div>
        </div>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-6">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-xs font-medium text-ink-secondary hover:text-main transition-colors tracking-wide"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Phone CTA (desktop) */}
      <a
        href={SITE.phoneTel}
        className="hidden lg:flex items-center gap-2 bg-cta text-white rounded-pill px-5 py-2.5 text-xs font-semibold tracking-wide hover:bg-cta-hover transition-colors"
      >
        <PhoneIcon className="w-4 h-4" />
        {SITE.phone}
      </a>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden flex flex-col gap-1.5 p-2"
        aria-label="メニュー"
      >
        <span
          className={`block w-6 h-0.5 bg-ink transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-ink transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-ink transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-[72px] bg-surface z-40 p-8 lg:hidden">
          <nav className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-ink border-b border-border-light pb-4"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.phoneTel}
              className="flex items-center justify-center gap-2 bg-cta text-white rounded-pill px-6 py-4 text-base font-bold mt-4"
            >
              <PhoneIcon className="w-5 h-5" />
              {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
