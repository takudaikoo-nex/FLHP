"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const features = [
  "安置の安心 ─ まず「落ち着く場所」を確保する大切さ",
  "費用の安心 ─ 見積もりの5つのチェックポイント",
  "解決事例 ─ 実際のサポート事例4選",
  "葬儀後のサポート ─ 遺品整理から相続まで8項目",
];

export function GuidebookSection() {
  return (
    <section className="py-section bg-gradient-to-br from-main-dark via-main to-main-vivid text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Book mock — 角丸なし */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative" style={{ perspective: "800px" }}>
              <div
                className="overflow-hidden shadow-2xl"
                style={{ transform: "rotateY(-6deg) rotateX(2deg)" }}
              >
                <Image
                  src="/images/S__58425375_0.jpg"
                  alt="無料ガイドブック"
                  width={280}
                  height={392}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="font-display text-xs tracking-[0.2em] text-white/60 uppercase mb-3">
              FREE GUIDEBOOK
            </div>
            <h2 className="font-mincho text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-snug mb-4">
              葬儀社を決める前に
              <br />
              お読みください
            </h2>
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              病院・施設でも配布中の安心ガイドブック。安置の安心、費用の安心、5つのチェックリストなど、後悔しないための知識をまとめています。
            </p>
            <div className="space-y-3 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs text-white shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  <span className="text-xs text-white/85 leading-relaxed">
                    {f}
                  </span>
                </div>
              ))}
            </div>
            <Button
              href="/contact#guidebook"
              variant="cta"
              arrow
              className="!bg-white !text-main-dark hover:!bg-white/90"
            >
              無料でガイドブックを請求する
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
