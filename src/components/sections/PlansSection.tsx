"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    num: "PLAN 01",
    title: "シンプル直葬",
    price: 10,
    unit: "万円台〜",
    desc: "費用を最小限に抑えたい方へ。火葬のみを誠実にお送りします。",
    includes: ["搬送", "安置", "火葬", "骨壺"],
    image: "/images/S__58425360_0.jpg",
  },
  {
    num: "PLAN 02",
    title: "お別れ火葬式",
    price: 20,
    unit: "万円台〜",
    desc: "お花を添えてゆっくり対面するお時間を。穏やかな最後のひとときを。",
    includes: ["搬送", "安置", "お別れの時間", "火葬", "骨壺", "生花"],
    image: "/images/S__58425359_0.jpg",
  },
  {
    num: "PLAN 03",
    title: "ご葬儀（家族葬・自宅葬）",
    price: 30,
    unit: "万円台〜",
    desc: "親しい方々でゆっくりお別れ。マンション・団地でも対応可能な自宅葬も。",
    includes: ["搬送", "安置", "通夜式", "告別式", "火葬", "骨壺", "生花祭壇"],
    image: "/images/S__58425374_0.jpg",
  },
];

export function PlansSection() {
  return (
    <section className="py-section bg-base-cool">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="FUNERAL PLANS"
          title="納得して選ぶ、3つの形"
          description="すべてのプランに、中立なプロの目と、温かな心が込められています。"
        />
        {/* gap-px + bg-border で仕切り線 / 角丸・影なし */}
        <div className="grid md:grid-cols-3 gap-px bg-border-light">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface overflow-hidden"
            >
              {/* 写真 — 角丸なし、下端グラデフェード */}
              <div className="relative">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  width={800}
                  height={600}
                  className="object-cover aspect-[4/3] w-full"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-display font-medium tracking-[0.12em] px-3 py-1 bg-white/90 text-ink backdrop-blur-sm">
                  {plan.num}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-4xl font-medium text-ink">
                    {plan.price}
                  </span>
                  <span className="text-sm text-ink-secondary">
                    {plan.unit}
                  </span>
                </div>
                <h3 className="font-mincho text-lg font-semibold mb-2">
                  {plan.title}
                </h3>
                <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                  {plan.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {plan.includes.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] px-2 py-0.5 border border-border-light text-ink-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Button href="/plans" variant="outline" arrow>
                  詳細を見る
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <span className="text-xs text-main font-medium">
            &#10003;&ensp;事前相談で割引あり ─
            まずはお気軽にご相談ください
          </span>
        </div>
      </div>
    </section>
  );
}
