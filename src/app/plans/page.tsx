import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBar } from "@/components/ui/CtaBar";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/ui/PhoneIcon";

export const metadata: Metadata = {
  title: "ご葬儀プラン",
  description:
    "シンプル直葬・お別れ火葬式・家族葬の3つのプランをご用意。中立な立場での適正価格をお約束します。",
};

const plans = [
  {
    id: "simple",
    num: "PLAN 01",
    title: "シンプル直葬",
    price: "10万円台〜",
    desc: "費用を最小限に抑え、火葬のみを誠実に行う形。慌ただしい現代だからこそ、シンプルに、しかし心を込めてお送りします。",
    includes: ["搬送（病院→安置所→火葬場）", "安置料", "ドライアイス", "火葬料", "骨壺・収骨"],
    notIncluded: ["式場利用", "通夜・告別式", "祭壇・生花"],
    image: "/images/S__58425357_0.jpg",
    tagColor: "bg-main",
  },
  {
    id: "farewell",
    num: "PLAN 02",
    title: "お別れ火葬式",
    price: "20万円台〜",
    desc: "火葬の前に、お花を添えてゆっくり対面する時間を設ける形。大切な方との最後のひとときを、穏やかにお過ごしいただけます。",
    includes: ["搬送", "安置料", "ドライアイス", "お別れのお時間", "火葬料", "骨壺・収骨", "生花"],
    notIncluded: ["通夜式", "読経"],
    image: "/images/S__58425365_0.jpg",
    tagColor: "bg-accent",
  },
  {
    id: "family",
    num: "PLAN 03",
    title: "ご葬儀（家族葬・自宅葬）",
    price: "30万円台〜",
    desc: "親しい方々で温かく、最後のお別れをする形。マンションや団地でも対応可能な自宅葬のご相談も承ります。",
    includes: [
      "搬送",
      "安置料",
      "ドライアイス",
      "通夜式",
      "告別式",
      "火葬料",
      "骨壺・収骨",
      "生花祭壇",
      "遺影写真",
    ],
    notIncluded: [],
    image: "/images/S__58425361_0.jpg",
    tagColor: "bg-cta",
  },
];

export default function PlansPage() {
  return (
    <>
      <PageHero
        image="/images/S__58425365_0.jpg"
        label="FUNERAL PLANS"
        title="納得して選ぶ、3つの形"
        description="すべてのプランに、中立なプロの目と温かな心が込められています。"
      />

      {/* Plans Detail */}
      <section className="py-section bg-base">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              id={plan.id}
              className={`grid lg:grid-cols-2 gap-10 items-start ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    width={800}
                    height={600}
                    className="object-cover w-full aspect-[4/3]"
                  />
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-display tracking-[0.12em] text-white px-3 py-1 rounded-pill ${plan.tagColor}`}
                  >
                    {plan.num}
                  </span>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="section-label">{plan.num}</div>
                <h2 className="font-mincho text-2xl font-semibold mb-2">
                  {plan.title}
                </h2>
                <div className="font-display text-3xl font-medium text-cta mb-4">
                  {plan.price}
                </div>
                <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                  {plan.desc}
                </p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-main mb-2">
                    含まれるもの
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {plan.includes.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] px-2.5 py-1 bg-main-faint text-main-dark rounded-pill"
                      >
                        &#10003; {item}
                      </span>
                    ))}
                  </div>
                </div>
                {plan.notIncluded.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-ink-muted mb-2">
                      含まれないもの
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {plan.notIncluded.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] px-2.5 py-1 bg-base-warm text-ink-muted rounded-pill"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <Button href={SITE.phoneTel} variant="cta">
                  <PhoneIcon className="w-4 h-4" />
                  このプランについて相談する
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Estimate Check */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/S__58425375_0.jpg"
              alt="見積もり無料査定"
              width={800}
              height={500}
              className="object-cover w-full"
            />
          </div>
          <div>
            <div className="section-label">FREE ESTIMATE CHECK</div>
            <h2 className="font-mincho text-xl font-semibold mb-4">
              すでに見積もりを
              <br />
              お持ちの方へ
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed mb-6">
              中立な立場で、不要なオプションがないかその場で査定します。他社を検討中の方も、まずはお気軽にお電話ください。
            </p>
            <Button href={SITE.phoneTel} variant="cta">
              見積もり査定を依頼する
            </Button>
          </div>
        </div>
      </section>

      <CtaBar />
    </>
  );
}
