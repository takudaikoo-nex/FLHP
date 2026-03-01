"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/ui/PhoneIcon";

const features = [
  "1日1組限定・貸切",
  "式場利用料 0円",
  "安置料 0円",
  "24時間・年中無休",
];

const areas = [
  { label: "湘南エリア", count: 4 },
  { label: "横浜市", count: 4 },
  { label: "川崎市", count: 2 },
  { label: "県央・県西", count: 4 },
];

const nearbyFacilities = [
  {
    name: "藤沢聖苑",
    addr: "藤沢市大鋸1251",
    scale: "M",
    scaleLabel: "M ─ 中規模",
    scaleClass: "bg-accent-pale text-accent-dark",
    area: "湘南",
    tags: ["火葬のみ", "市内10,000円"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=375&fit=crop",
  },
  {
    name: "茅ヶ崎市斎場",
    addr: "茅ヶ崎市芹沢1700",
    scale: "L",
    scaleLabel: "L ─ 大規模",
    scaleClass: "bg-cta-surface text-cta",
    area: "湘南",
    tags: ["式場あり", "市内0円", "待合室"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=375&fit=crop",
  },
  {
    name: "平塚市聖苑",
    addr: "平塚市田村9-25-2",
    scale: "S",
    scaleLabel: "S ─ 小規模",
    scaleClass: "bg-main-pale text-main-dark",
    area: "湘南",
    tags: ["火葬のみ", "市内0円"],
    image: "https://images.unsplash.com/photo-1464938050520-ef2571e7f4ba?w=600&h=375&fit=crop",
  },
];

export function FacilitySection() {
  return (
    <section className="py-section bg-base-cool">
      <div className="max-w-6xl mx-auto px-6">
        {/* Own Facility */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&h=625&fit=crop"
                alt="ファーストリーフ自社斎場"
                width={1000}
                height={625}
                className="object-cover w-full"
              />
            </div>
            <span className="absolute top-4 left-4 bg-cta text-white text-xs font-bold px-3 py-1.5 rounded-pill">
              &#9733; 自社斎場
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="section-label">OUR FACILITY</div>
            <h2 className="font-mincho text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-snug mb-4">
              ファーストリーフ
              <br />
              自社斎場のご案内
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed mb-6">
              1日1組限定の貸切対応。式場利用料・安置料は0円。24時間ご相談可能、休場日もございません。
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-xs text-main-dark"
                >
                  <span className="text-main font-bold">&#10003;</span>
                  {f}
                </div>
              ))}
            </div>
            <p className="text-xs text-ink-muted mb-6">
              {SITE.address}
              <br />
              TEL: {SITE.phone}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/facilities" variant="outline" arrow>
                すべての斎場を見る
              </Button>
              <Button href={SITE.phoneTel} variant="cta">
                <PhoneIcon className="w-4 h-4" />
                電話で予約する
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Area Nav + Nearby Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-mincho text-lg font-semibold text-center mb-2">
            神奈川県の斎場・火葬場ガイド
          </h3>
          <p className="text-xs text-ink-secondary text-center mb-8">
            地域の施設を熟知した私たちが、最適な場所をご提案します。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {areas.map((a, i) => (
              <div
                key={a.label}
                className={`flex flex-col items-center gap-1 py-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                  i === 0
                    ? "bg-main text-white border-main"
                    : "bg-surface border-border hover:border-main hover:text-main"
                }`}
              >
                <span
                  className={`font-display text-lg font-medium ${
                    i === 0 ? "text-white/80" : "text-main"
                  }`}
                >
                  {a.count}
                </span>
                <span className="text-xs font-medium">{a.label}</span>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {nearbyFacilities.map((f) => (
              <div
                key={f.name}
                className="bg-surface rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={f.image}
                    alt={f.name}
                    width={600}
                    height={375}
                    className="object-cover aspect-[16/10] w-full"
                  />
                  <span
                    className={`absolute top-2 right-2 text-[10px] font-bold px-2.5 py-0.5 rounded-pill ${f.scaleClass}`}
                  >
                    {f.scaleLabel}
                  </span>
                  <span className="absolute bottom-2 left-2 text-[10px] bg-dark/60 text-white px-2 py-0.5 rounded">
                    {f.area}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-mincho text-sm font-semibold mb-1">
                    {f.name}
                  </h4>
                  <p className="text-[10px] text-ink-muted mb-2">
                    {f.addr}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {f.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] px-2 py-0.5 bg-main-faint text-main-dark rounded-pill"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button href="/facilities" variant="outline" arrow>
              すべての斎場・火葬場を見る
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
