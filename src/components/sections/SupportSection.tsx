"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const supports = [
  {
    num: "SUPPORT 01",
    icon: "👥",
    title: "身元引受・\n生活支援",
    desc: "施設入居時や入院時の保証人、日々の生活相談をサポート。",
  },
  {
    num: "SUPPORT 02",
    icon: "📚",
    title: "終活セミナー・\n個別相談",
    desc: "定期的なセミナー開催、行政書士との共催で知識と安心を提供。",
  },
  {
    num: "SUPPORT 03",
    icon: "🍁",
    title: "適正価格の\n葬儀施行",
    desc: "1日1組限定。中立なプロの査定でご家族に寄り添う温かなお別れ。",
  },
  {
    num: "SUPPORT 04",
    icon: "📄",
    title: "葬儀後の\n事務手続き",
    desc: "役所届出、遺品整理、不動産・相続の相談窓口をワンストップで。",
  },
];

export function SupportSection() {
  return (
    <section className="py-section bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="TOTAL SUPPORT"
          title="葬儀だけではありません。<br/>生前からのパートナーです。"
          description="医療・介護・法務の専門家と手を取り合い、お一人おひとりの「安心」を生涯にわたって支えます。"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {supports.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="text-[10px] font-display tracking-[0.12em] text-main mb-3">
                {s.num}
              </div>
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-mincho text-sm font-semibold leading-snug mb-2 whitespace-pre-line">
                {s.title}
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button href="/support" variant="outline" arrow>
            トータルサポートの詳細を見る
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
