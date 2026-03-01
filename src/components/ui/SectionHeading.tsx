"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-12 ${className}`}
    >
      <div
        className={`section-label ${dark ? "!text-accent-light" : ""}`}
      >
        {label}
      </div>
      <h2
        className={`font-mincho text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-snug ${
          dark ? "text-ink-inverse" : "text-ink"
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed max-w-2xl mx-auto ${
            dark ? "text-dark-text opacity-80" : "text-ink-secondary"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
