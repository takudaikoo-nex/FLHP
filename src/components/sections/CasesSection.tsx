"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wallet, Home, ClipboardList } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cases = [
  {
    num: "01",
    icon: ShieldCheck,
    badge: "安置の安心",
    title: "深夜の逝去でも、すぐに専用施設へ搬送",
    desc: "心身ともに疲れ果てている中、まずは専用施設へ搬送し「休む時間」を確保。翌朝落ち着いてから内容を検討できました。",
  },
  {
    num: "02",
    icon: Wallet,
    badge: "費用の安心",
    title: "80万円の見積もりを約20万円コストカット",
    desc: "提示された見積もりに違和感。プロの目で中立に査定し、不要なオプションを整理。内容は変えずに大幅な費用削減を実現。",
  },
  {
    num: "03",
    icon: Home,
    badge: "場所の安心",
    title: "マンションでも「自宅葬」を実現",
    desc: "間取りの問題で「家での安置は無理」と諦めかけていたケース。搬送ルートを工夫し、住み慣れた我が家での小さな家族葬を実現。",
  },
  {
    num: "04",
    icon: ClipboardList,
    badge: "実務の安心",
    title: "遺品整理までワンストップ対応",
    desc: "葬儀と並行して施設の荷物整理や退去手続きをサポート。窓口を一本化し、ご遺族がお別れに専念できる環境を整えました。",
  },
];

export function CasesSection() {
  return (
    <section className="py-section bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="CASE STUDIES"
          title="私たちが<br/>お力添えした解決事例"
          description="実際のご依頼をもとに、個人情報を伏せた形でご紹介します。"
        />
      </div>
      {/* 横スクロール — ボーダーライン仕切り */}
      <div className="flex gap-0 overflow-x-auto snap-x snap-mandatory pb-4 px-6 lg:px-[calc((100%-72rem)/2+1.5rem)] scrollbar-hide">
        {cases.map((c, i) => (
          <motion.div
            key={c.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex-none w-[280px] lg:w-[300px] snap-start p-6 border-l border-border-light first:border-l-0"
          >
            <div className="flex items-center gap-3 mb-4">
              <c.icon className="w-5 h-5 text-main stroke-[1.5]" />
              <span className="text-[11px] font-medium text-main-dark tracking-wide">
                {c.badge}
              </span>
            </div>
            <h3 className="font-mincho text-base font-semibold leading-snug mb-3">
              {c.title}
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed">
              {c.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
