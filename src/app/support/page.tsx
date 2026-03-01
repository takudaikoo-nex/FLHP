import type { Metadata } from "next";
import Image from "next/image";
import {
  Hospital,
  Stethoscope,
  Scale,
  Home,
  Package,
  Waves,
  Bird,
  ClipboardList,
  Flame,
  Briefcase,
  Mail,
  Hammer,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBar } from "@/components/ui/CtaBar";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "終活・トータルサポート",
  description:
    "医療・介護・法務の専門家と連携し、身元引受から葬儀後の手続きまで一気通貫でサポートします。",
};

const network = [
  {
    icon: Hospital,
    title: "地域医療機関",
    org: "湘南第一病院 他",
    desc: "入院中からの事前相談、急変時の迅速な搬送連携。医療機関との信頼関係がいざという時の安心を支えます。",
  },
  {
    icon: Stethoscope,
    title: "訪問看護",
    org: "エリー訪問看護ステーション",
    desc: "在宅での看取りをサポート。日々の体調変化から終末期まで、看護師と密に連携します。",
  },
  {
    icon: Scale,
    title: "士業（法務）",
    org: "提携行政書士・司法書士・弁護士",
    desc: "身元引受、死後事務委任、遺言、相続。法務の専門家が、書類手続きの不安を解消します。",
  },
  {
    icon: Home,
    title: "生活支援",
    org: "提携事業者ネットワーク",
    desc: "遺品整理、不動産の原状回復、お仏壇の選定、香典返し手配まで。暮らしの実務をワンストップで。",
  },
];

const afterItems = [
  { icon: Package, label: "遺品整理・お部屋の片付け" },
  { icon: Waves, label: "納骨・供養のご相談" },
  { icon: Bird, label: "火葬代理（収骨・お届け）" },
  { icon: ClipboardList, label: "役所・諸手続きの手順ガイド" },
  { icon: Flame, label: "お仏壇・手元供養の選定" },
  { icon: Briefcase, label: "相続の窓口紹介" },
  { icon: Mail, label: "香典返し・喪中ハガキの代行" },
  { icon: Hammer, label: "住まいの原状回復" },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        image="/images/S__58425361_0.jpg"
        label="TOTAL SUPPORT"
        title="一人にしない、迷わせない。"
        description="地域の医療・介護・法務とつなぐ、一生涯の安心。"
      />

      {/* Why Total — 写真グラデマスク */}
      <section className="py-section bg-surface">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div
            className="overflow-hidden"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
            }}
          >
            <Image
              src="/images/S__58425361_0.jpg"
              alt="チームとしての相談風景"
              width={800}
              height={600}
              className="object-cover w-full"
            />
          </div>
          <div>
            <div className="section-label">OUR PHILOSOPHY</div>
            <h2 className="font-mincho text-xl font-semibold mb-4">
              なぜ、私たちは
              <br />
              「トータル」を掲げるのか？
            </h2>
            <blockquote className="font-mincho text-base text-ink border-l-2 border-accent pl-5 mb-4 italic">
              葬儀の現場で私たちが目にしてきたのは、「もっと早く相談していれば」というご家族の言葉でした。
            </blockquote>
            <p className="text-sm text-ink-secondary leading-relaxed">
              身元引受の問題、相続の不安、入院中の看護。これらは葬儀社だけでは解決できません。だからこそ、私たちは地域の専門職とチームを組みました。
            </p>
          </div>
        </div>
      </section>

      {/* Network — カードなし、ボーダー仕切り＋アイコン左配置 */}
      <section className="py-section bg-base">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label">NETWORK</div>
            <h2 className="font-mincho text-[clamp(1.5rem,3vw,2.2rem)] font-semibold">
              強固な「地域専門職ネットワーク」
            </h2>
            <p className="text-sm text-ink-secondary mt-3">
              医療・看護・法務の各分野のプロフェッショナルと密に連携しています。
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0">
            {network.map((n) => (
              <div key={n.title} className="flex gap-4 py-6 border-t border-border-light">
                <n.icon className="w-6 h-6 text-main stroke-[1.5] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-mincho text-base font-semibold mb-0.5">{n.title}</h3>
                  <div className="text-[10px] text-main font-medium mb-2">{n.org}</div>
                  <p className="text-xs text-ink-secondary leading-relaxed">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After Funeral — Lucideアイコン、角丸なし */}
      <section className="py-section bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label">AFTER SUPPORT</div>
            <h2 className="font-mincho text-[clamp(1.5rem,3vw,2.2rem)] font-semibold">
              火葬後の「さて、どうしよう？」を解決する
            </h2>
            <p className="text-sm text-ink-secondary mt-3">
              葬儀が終わった後も、実務のプロとして煩わしい手続きや片付けをサポートします。
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border-light">
            {afterItems.map((item) => (
              <div key={item.label} className="text-center p-5 bg-surface">
                <item.icon className="w-5 h-5 mx-auto text-main stroke-[1.5] mb-2" />
                <div className="text-xs font-medium text-ink-secondary">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/contact" variant="outline" arrow>
              サポートについて相談する
            </Button>
          </div>
        </div>
      </section>

      <CtaBar />
    </>
  );
}
