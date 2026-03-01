"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/ui/PhoneIcon";

export function UrgentSection() {
  return (
    <section className="bg-dark text-dark-text py-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text + Phone */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-mincho text-[clamp(1.5rem,3vw,2.2rem)] font-semibold text-ink-inverse leading-snug mb-6">
              もしもの時、
              <br />
              24時間365日
              <br />
              すぐにお迎えに上がります
            </h2>
            <p className="text-sm text-dark-text opacity-80 leading-relaxed mb-8">
              まず安置場所を確保し、落ち着いてから葬儀社をお選びください。
              <br />
              慌てて決める必要はありません。
            </p>
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center gap-4 bg-cta/10 border border-cta/30 rounded-xl px-6 py-4 hover:bg-cta/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-cta flex items-center justify-center">
                <PhoneIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-display font-medium text-cta-light tracking-wide">
                  {SITE.phone}
                </div>
                <div className="text-[11px] text-dark-text opacity-60">
                  {SITE.phoneLabel}
                </div>
              </div>
            </a>
          </motion.div>

          {/* Right: Flow Compare */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-dark-surface rounded-2xl p-8"
          >
            <h3 className="font-mincho text-base font-semibold text-ink-inverse mb-6">
              知ってほしい「安心の順序」
            </h3>
            {/* Bad Flow */}
            <div className="flex items-start gap-4 mb-5 pb-5 border-b border-dark-elevated">
              <div className="w-8 h-8 rounded-full bg-red-900/40 flex items-center justify-center text-red-400 text-sm font-bold shrink-0">
                &times;
              </div>
              <div>
                <div className="text-xs font-semibold text-red-400 mb-1">
                  焦りの流れ
                </div>
                <div className="text-xs text-dark-text opacity-70 leading-relaxed">
                  急いで葬儀社を決める → 搬送・安置 → 比較できず高額に
                </div>
              </div>
            </div>
            {/* Good Flow */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-main/30 flex items-center justify-center text-main-light text-sm font-bold shrink-0">
                &#10003;
              </div>
              <div>
                <div className="text-xs font-semibold text-main-light mb-1">
                  安心の流れ
                </div>
                <div className="text-xs text-dark-text opacity-70 leading-relaxed">
                  まず搬送・安置（場所の確保） → 落ち着いてから葬儀社を検討
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
