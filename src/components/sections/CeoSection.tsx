"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function CeoSection() {
  return (
    <section className="py-section bg-base-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo — 角丸なし、グラデーションマスクで余韻 */}
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
                  "linear-gradient(to bottom, black 70%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 70%, transparent 100%)",
              }}
            >
              <Image
                src="/images/S__58425366_0.jpg"
                alt="代表 大石 康太"
                width={600}
                height={800}
                className="object-cover w-full"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="section-label mb-8">MESSAGE</div>
            <div className="font-display text-xs tracking-[0.15em] text-ink-muted mb-0.5">
              Representative Director
            </div>
            <div className="font-mincho text-xl font-semibold mb-6">
              大石 康太
            </div>
            <blockquote className="font-mincho text-[clamp(1.1rem,2vw,1.3rem)] leading-relaxed text-ink border-l-2 border-accent pl-6 mb-6">
              何が分からないのか、それすら分からない。
              <br />
              その不安を、まずは私たちに預けてください。
            </blockquote>
            <p className="text-sm text-ink-secondary leading-relaxed mb-8">
              私は葬儀社の人間ではなく、ご遺族の立場に立つ中立なパートナーです。深い悲しみと混乱の中にいる時こそ、まずは「落ち着くための時間」を一緒に作りましょう。
            </p>
            <div className="border-t border-border-light pt-5">
              <div className="text-xs font-semibold text-main-dark tracking-wide mb-2">
                社名の由来 ── First Leaf
              </div>
              <p className="text-xs text-ink-secondary leading-relaxed">
                ファーストリーフ（一葉）のように、静かに、やさしく、そして確かに。医療・介護・ご家族をつなぎ、中立で誠実な立場から支えます。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
