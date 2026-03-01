import Link from "next/link";
import { type ComponentProps } from "react";

type Variant = "cta" | "outline" | "ghost";

interface ButtonProps {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  cta: "bg-cta text-white hover:bg-cta-hover shadow-md hover:shadow-lg",
  outline:
    "border-2 border-main text-main hover:bg-main hover:text-white",
  ghost:
    "border border-white/40 text-white hover:bg-white/10",
};

export function Button({
  href,
  variant = "cta",
  arrow = false,
  children,
  className = "",
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:");
  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-pill px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";

  const classes = `${baseClass} ${variantStyles[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
        {arrow && <Arrow />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 fill-current transition-transform group-hover:translate-x-1"
    >
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  );
}
