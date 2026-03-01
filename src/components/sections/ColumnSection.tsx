"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const articles = [
  {
    image: "/images/S__58425358_0.jpg",
    tag: "セミナー報告",
    tagClass: "text-cta",
    date: "2026.02.20",
    title: "行政書士と共催「終活セミナー」第3回を開催しました",
    excerpt:
      "身元引受と死後事務委任について、実際の事例を交えてわかりやすく解説。参加者からの質問にもお答えしました。",
  },
  {
    image: "/images/S__58425363_0.jpg",
    tag: "葬儀の豆知識",
    tagClass: "text-main",
    date: "2026.02.15",
    title: "「葬儀費用の相場」は信じていいの？知っておきたい5つのポイント",
    excerpt:
      "ネットで見かける葬儀費用の「平均額」。実はその数字だけでは判断できない理由をプロの目線で解説します。",
  },
  {
    image: "/images/S__58425364_0.jpg",
    tag: "代表日記",
    tagClass: "text-accent",
    date: "2026.02.10",
    title: "「おひとりさま」のお見送りで感じたこと ─ ある冬の日の記録",
    excerpt:
      "身寄りのない方の葬儀を担当した時のこと。私たちにできることの意味を改めて考えさせられました。",
  },
];

export function ColumnSection() {
  return (
    <section className="py-section bg-base-warm">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="COLUMN &amp; SEMINAR"
          title="コラム・セミナー最新情報"
          description="終活セミナーのレポートや葬儀の豆知識など、お役立ち情報を発信しています。"
        />
        {/* 非対称レイアウト: メイン1+リスト2 */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* メイン記事 — 写真大、グラデマスク */}
          <motion.a
            href="/column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="group block"
          >
            <div
              className="relative overflow-hidden mb-4"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            >
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                width={640}
                height={400}
                className="object-cover aspect-[16/10] w-full group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className={`text-[11px] font-semibold ${articles[0].tagClass} mb-1`}>
              {articles[0].tag}
            </div>
            <h3 className="font-mincho text-lg font-semibold leading-snug mb-2">
              {articles[0].title}
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed line-clamp-3">
              {articles[0].excerpt}
            </p>
          </motion.a>

          {/* サブ記事 — 横型リスト、仕切り線 */}
          <div className="space-y-0 divide-y divide-border-light">
            {articles.slice(1).map((a, i) => (
              <motion.a
                href="/column"
                key={a.date + a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="grid grid-cols-[120px_1fr] gap-4 py-5 first:pt-0 group"
              >
                <div className="overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    width={120}
                    height={80}
                    className="object-cover aspect-[3/2] w-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-semibold ${a.tagClass}`}>
                      {a.tag}
                    </span>
                    <span className="text-[10px] font-display tracking-wider text-ink-muted">
                      {a.date}
                    </span>
                  </div>
                  <h3 className="font-mincho text-sm font-semibold leading-snug line-clamp-2">
                    {a.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button href="/column" variant="outline" arrow>
            コラム一覧を見る
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
