import Link from "next/link";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/ui/PhoneIcon";

const footerNav = [
  {
    title: "ご葬儀",
    links: [
      { label: "ご葬儀プラン", href: "/plans" },
      { label: "シンプル直葬", href: "/plans#simple" },
      { label: "お別れ火葬式", href: "/plans#farewell" },
      { label: "家族葬・自宅葬", href: "/plans#family" },
    ],
  },
  {
    title: "施設案内",
    links: [
      { label: "自社斎場", href: "/facilities#own" },
      { label: "斎場・火葬場一覧", href: "/facilities" },
    ],
  },
  {
    title: "サポート",
    links: [
      { label: "終活・トータルサポート", href: "/support" },
      { label: "コラム・セミナー", href: "/column" },
      { label: "無料ガイドブック", href: "/contact#guidebook" },
    ],
  },
  {
    title: "会社情報",
    links: [
      { label: "会社概要", href: "/company" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "プライバシーポリシー", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-dark text-dark-text pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top: Logo + Phone */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-main rounded-lg flex items-center justify-center text-white font-mincho text-lg font-bold">
              一
            </div>
            <div className="text-left">
              <div className="text-sm font-bold tracking-wider text-ink-inverse">
                ファーストリーフ
              </div>
              <div className="text-[10px] font-display tracking-[0.15em] text-dark-text opacity-60">
                FIRST LEAF Inc.
              </div>
            </div>
          </div>
          <div className="text-xs text-dark-text opacity-60 mb-2">
            {SITE.phoneLabel}
          </div>
          <a
            href={SITE.phoneTel}
            className="inline-flex items-center gap-2 text-2xl font-display font-medium text-cta-light tracking-wide hover:text-cta transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            {SITE.phone}
          </a>
        </div>

        {/* Nav Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-dark-elevated">
          {footerNav.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-ink-inverse tracking-wide mb-4">
                {group.title}
              </h4>
              <div className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs text-dark-text opacity-70 hover:opacity-100 hover:text-main-light transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center">
          <p className="text-xs text-dark-text opacity-40">
            {SITE.address}
          </p>
          <p className="text-[10px] text-dark-text opacity-30 mt-2 font-display tracking-wider">
            &copy; {new Date().getFullYear()} {SITE.nameEn} All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
