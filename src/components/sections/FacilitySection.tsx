"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    area: "湘南",
    tags: ["火葬のみ", "市内10,000円"],
  },
  {
    name: "茅ヶ崎市斎場",
    addr: "茅ヶ崎市芹沢1700",
    scale: "L",
    scaleLabel: "L ─ 大規模",
    area: "湘南",
    tags: ["式場あり", "市内0円", "待合室"],
  },
  {
    name: "平塚市聖苑",
    addr: "平塚市田村9-25-2",
    scale: "S",
    scaleLabel: "S ─ 小規模",
    area: "湘南",
    tags: ["火葬のみ", "市内0円"],
  },
];

const scaleStyle: Record<string, string> = {
  S: "text-main",
  M: "text-accent",
  L: "text-cta",
};

export function FacilitySection() {
  return (
    <section className="py-section bg-base-cool">
      <div className="max-w-6xl mx-auto px-6">
        {/* 自社斎場 — 写真グラデマスク + テキスト */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, black 75%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, black 75%, transparent 100%)",
              }}
            >
              <Image
                src="/images/S__58425357_0.jpg"
                alt="ファーストリーフ自社斎場"
                width={1000}
                height={625}
                className="object-cover w-full"
              />
            </div>
            <span className="absolute top-4 left-4 bg-cta text-white text-xs font-bold px-3 py-1.5">
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

        {/* エリア別 — テーブル風リスト */}
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
          {/* エリアタブ — ボーダー下線スタイル */}
          <div className="flex gap-6 justify-center mb-10 border-b border-border-light">
            {areas.map((a, i) => (
              <button
                key={a.label}
                className={`pb-3 text-xs font-medium transition-colors ${
                  i === 0
                    ? "text-main border-b-2 border-main"
                    : "text-ink-muted hover:text-main"
                }`}
              >
                {a.label}
                <span className="ml-1 font-display text-[10px]">({a.count})</span>
              </button>
            ))}
          </div>
          {/* 施設リスト — テーブル形式 */}
          <div className="divide-y divide-border-light">
            {nearbyFacilities.map((f) => (
              <div
                key={f.name}
                className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_auto] gap-4 items-center py-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="font-mincho text-sm font-semibold">{f.name}</h4>
                    <span className={`text-[10px] font-medium ${scaleStyle[f.scale]}`}>
                      {f.scaleLabel}
                    </span>
                  </div>
                  <p className="text-[10px] text-ink-muted">{f.addr}</p>
                </div>
                <div className="hidden md:flex flex-wrap gap-1">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] px-2 py-0.5 border border-border-light text-ink-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] text-main font-medium">
                  詳細 &rarr;
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/facilities" variant="outline" arrow>
              すべての斎場・火葬場を見る
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
