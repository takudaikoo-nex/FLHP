"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const articles = [
  {
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=640&h=400&fit=crop",
    tag: "セミナー報告",
    tagClass: "bg-cta text-white",
    date: "2026.02.20",
    title: "行政書士と共催「終活セミナー」第3回を開催しました",
    excerpt:
      "身元引受と死後事務委任について、実際の事例を交えてわかりやすく解説。参加者からの質問にもお答えしました。",
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=640&h=400&fit=crop",
    tag: "葬儀の豆知識",
    tagClass: "bg-main text-white",
    date: "2026.02.15",
    title: "「葬儀費用の相場」は信じていいの？知っておきたい5つのポイント",
    excerpt:
      "ネットで見かける葬儀費用の「平均額」。実はその数字だけでは判断できない理由をプロの目線で解説します。",
  },
  {
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=640&h=400&fit=crop",
    tag: "代表日記",
    tagClass: "bg-accent text-white",
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
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.div
              key={a.date + a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.title}
                  width={640}
                  height={400}
                  className="object-cover aspect-[16/10] w-full group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-pill ${a.tagClass}`}
                >
                  {a.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="text-[10px] font-display tracking-wider text-ink-muted mb-2">
                  {a.date}
                </div>
                <h3 className="font-mincho text-sm font-semibold leading-snug mb-2 line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-xs text-ink-secondary leading-relaxed line-clamp-3">
                  {a.excerpt}
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
          <Button href="/column" variant="outline" arrow>
            コラム一覧を見る
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
