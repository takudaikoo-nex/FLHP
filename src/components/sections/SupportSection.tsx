"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Leaf, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const supports = [
  {
    num: "01",
    icon: Users,
    title: "身元引受・生活支援",
    desc: "施設入居時や入院時の保証人、日々の生活相談をサポート。",
  },
  {
    num: "02",
    icon: BookOpen,
    title: "終活セミナー・個別相談",
    desc: "定期的なセミナー開催、行政書士との共催で知識と安心を提供。",
  },
  {
    num: "03",
    icon: Leaf,
    title: "適正価格の葬儀施行",
    desc: "1日1組限定。中立なプロの査定でご家族に寄り添う温かなお別れ。",
  },
  {
    num: "04",
    icon: FileText,
    title: "葬儀後の事務手続き",
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
        {/* 2×2 — 上辺ボーダー＋アイコン左配置 */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0">
          {supports.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 py-7 border-t border-border-light"
            >
              <s.icon className="w-6 h-6 text-main stroke-[1.5] shrink-0 mt-0.5" />
              <div>
                <div className="font-display text-[10px] tracking-[0.15em] text-ink-muted mb-1">
                  SUPPORT {s.num}
                </div>
                <h3 className="font-mincho text-sm font-semibold leading-snug mb-1.5">
                  {s.title}
                </h3>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  {s.desc}
                </p>
              </div>
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
