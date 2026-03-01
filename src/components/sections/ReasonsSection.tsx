"use client";

import { motion } from "framer-motion";
import { Scale, Handshake, Leaf } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    num: "01",
    icon: Scale,
    title: "中立な立場での適正価格",
    desc: "「その見積もり、適正ですか？」他社の見積もりも無料で査定。不要なオプションを整理し、納得の価格をお約束します。",
  },
  {
    num: "02",
    icon: Handshake,
    title: "地域の専門家ネットワーク",
    desc: "医療・訪問看護・士業との強固な連携体制。いざという時の迅速な対応力が、安心の基盤です。",
    tags: ["湘南第一病院", "エリー訪問看護", "提携士業"],
  },
  {
    num: "03",
    icon: Leaf,
    title: "生前から葬儀後まで一気通貫のサポート",
    desc: "身元引受・終活相談から葬儀施行、遺品整理・相続手続きまで。葬儀社ではなく、一生涯のパートナーです。",
  },
];

export function ReasonsSection() {
  return (
    <section className="py-section bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="WHY FIRST LEAF"
          title="ファーストリーフが<br/>選ばれる3つの理由"
          description="葬儀社ではなく、ご遺族の味方として。中立な立場で最適な選択をサポートします。"
        />
        {/* 横並びナンバーリスト — カード不使用 */}
        <div className="space-y-0 divide-y divide-border-light">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid grid-cols-[auto_1fr] md:grid-cols-[80px_48px_1fr] gap-4 md:gap-6 items-start py-8 first:pt-0"
            >
              <span className="font-display text-5xl md:text-6xl font-light text-main/20 leading-none select-none">
                {r.num}
              </span>
              <r.icon
                className="hidden md:block w-7 h-7 text-main mt-2 stroke-[1.5]"
              />
              <div>
                <h3 className="font-mincho text-lg font-semibold mb-2 leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-xl">
                  {r.desc}
                </p>
                {r.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {r.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 bg-main-faint text-main-dark rounded-pill font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
