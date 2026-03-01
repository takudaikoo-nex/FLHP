"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    num: "01",
    icon: "⚖",
    title: "中立な立場での<br/>適正価格",
    desc: "「その見積もり、適正ですか？」他社の見積もりも無料で査定。不要なオプションを整理し、納得の価格をお約束します。",
  },
  {
    num: "02",
    icon: "🤝",
    title: "地域の専門家<br/>ネットワーク",
    desc: "医療・訪問看護・士業との強固な連携体制。いざという時の迅速な対応力が、安心の基盤です。",
    tags: ["湘南第一病院", "エリー訪問看護", "提携士業"],
  },
  {
    num: "03",
    icon: "🍁",
    title: "生前から葬儀後まで<br/>一気通貫のサポート",
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
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-surface rounded-2xl p-8 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Background Number */}
              <div className="absolute top-4 right-4 font-display text-7xl font-light text-main/[0.06] leading-none select-none">
                {r.num}
              </div>
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3
                className="font-mincho text-lg font-semibold mb-3 leading-snug"
                dangerouslySetInnerHTML={{ __html: r.title }}
              />
              <p className="text-sm text-ink-secondary leading-relaxed">
                {r.desc}
              </p>
              {r.tags && (
                <div className="flex flex-wrap gap-1.5 mt-4">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
