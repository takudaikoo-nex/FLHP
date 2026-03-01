"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/ui/PhoneIcon";
import { Button } from "@/components/ui/Button";

const slides = [
  {
    src: "/images/S__58425361_0.jpg",
    alt: "父と子が祭壇の前で合掌する様子",
  },
  {
    src: "/images/S__58425375_0.jpg",
    alt: "ピンクの花祭壇",
  },
  {
    src: "/images/S__58425365_0.jpg",
    alt: "青い花祭壇と棺",
  },
  {
    src: "/images/S__58425374_0.jpg",
    alt: "二人の子供が祭壇に向き合う",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((i: number) => setCurrent(i), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-dark/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="font-display text-xs tracking-[0.3em] text-white/60 mb-4">
            FIRST LEAF
          </div>
          <h1 className="font-mincho text-[clamp(2.8rem,6vw,4.8rem)] font-bold text-white leading-tight mb-6">
            葬儀社を、
            <br />
            決める前に。
          </h1>
          <p className="text-sm text-white/80 leading-relaxed mb-8 max-w-md">
            終活から葬儀、その後の手続きまで。
            <br />
            中立な立場であなたに寄り添い続けるパートナーです。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href={SITE.phoneTel} variant="cta">
              <PhoneIcon className="w-4 h-4" />
              今すぐ電話で相談する
            </Button>
            <Button href="/contact#guidebook" variant="ghost" arrow>
              無料ガイドブックを請求する
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Vertical Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-0.5 transition-all duration-500 rounded-full ${
              i === current
                ? "h-10 bg-white"
                : "h-4 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`スライド ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
