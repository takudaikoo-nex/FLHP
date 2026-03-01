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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    tagColor: "bg-main text-white",
  },
  {
    num: "PLAN 02",
    title: "お別れ火葬式",
    price: 20,
    unit: "万円台〜",
    desc: "お花を添えてゆっくり対面するお時間を。穏やかな最後のひとときを。",
    includes: ["搬送", "安置", "お別れの時間", "火葬", "骨壺", "生花"],
    image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&h=600&fit=crop",
    tagColor: "bg-accent text-white",
  },
  {
    num: "PLAN 03",
    title: "ご葬儀（家族葬・自宅葬）",
    price: 30,
    unit: "万円台〜",
    desc: "親しい方々でゆっくりお別れ。マンション・団地でも対応可能な自宅葬も。",
    includes: ["搬送", "安置", "通夜式", "告別式", "火葬", "骨壺", "生花祭壇"],
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&h=600&fit=crop",
    tagColor: "bg-cta text-white",
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
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  width={800}
                  height={600}
                  className="object-cover aspect-[4/3] w-full"
                />
                <span
                  className={`absolute top-3 left-3 text-[10px] font-display font-medium tracking-[0.12em] px-3 py-1 rounded-pill ${plan.tagColor}`}
                >
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
                      className="text-[10px] px-2 py-0.5 bg-main-faint text-main-dark rounded-pill"
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
