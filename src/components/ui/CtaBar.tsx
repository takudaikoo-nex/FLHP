import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/ui/PhoneIcon";
import { Button } from "@/components/ui/Button";

interface CtaBarProps {
  title?: string;
  description?: string;
}

export function CtaBar({
  title = "まずはお気軽にご相談ください",
  description = "24時間365日、お電話でのご相談を承っております。",
}: CtaBarProps) {
  return (
    <div className="bg-dark text-dark-text py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-mincho text-xl font-semibold text-ink-inverse mb-2">
          {title}
        </h2>
        <p className="text-xs text-dark-text opacity-70 mb-6">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={SITE.phoneTel} variant="cta">
            <PhoneIcon className="w-4 h-4" />
            今すぐ電話で相談する
          </Button>
          <Button href="/contact#guidebook" variant="ghost" arrow>
            無料ガイドブックを請求する
          </Button>
        </div>
      </div>
    </div>
  );
}
