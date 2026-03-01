import Image from "next/image";

interface PageHeroProps {
  image: string;
  label: string;
  title: string;
  description?: string;
}

export function PageHero({ image, label, title, description }: PageHeroProps) {
  return (
    <div className="relative h-[400px] lg:h-[480px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/30 to-dark/10" />
      <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 max-w-6xl mx-auto">
        <div className="font-display text-xs tracking-[0.2em] text-white/60 uppercase mb-3">
          {label}
        </div>
        <h1
          className="font-mincho text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight mb-3"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {description && (
          <p className="text-sm text-white/70 max-w-lg">{description}</p>
        )}
      </div>
    </div>
  );
}
