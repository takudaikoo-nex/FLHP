import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "コラム・セミナー情報",
  description: "終活セミナーのレポートや葬儀の豆知識、代表日記など、お役立ち情報を発信しています。",
};

const categories = [
  { label: "すべて", value: "all" },
  { label: "セミナー報告", value: "seminar" },
  { label: "葬儀の豆知識", value: "knowledge" },
  { label: "代表日記", value: "diary" },
];

const articles = [
  {
    image: "/images/S__58425361_0.jpg",
    tag: "セミナー報告",
    tagClass: "bg-cta text-white",
    date: "2026.02.20",
    title: "行政書士と共催「終活セミナー」第3回を開催しました",
    excerpt: "身元引受と死後事務委任について、実際の事例を交えてわかりやすく解説。参加者からの質問にもお答えしました。",
  },
  {
    image: "/images/S__58425375_0.jpg",
    tag: "葬儀の豆知識",
    tagClass: "bg-main text-white",
    date: "2026.02.15",
    title: "「葬儀費用の相場」は信じていいの？知っておきたい5つのポイント",
    excerpt: "ネットで見かける葬儀費用の「平均額」。実はその数字だけでは判断できない理由をプロの目線で解説します。",
  },
  {
    image: "/images/S__58425363_0.jpg",
    tag: "代表日記",
    tagClass: "bg-accent text-white",
    date: "2026.02.10",
    title: "「おひとりさま」のお見送りで感じたこと ─ ある冬の日の記録",
    excerpt: "身寄りのない方の葬儀を担当した時のこと。私たちにできることの意味を改めて考えさせられました。",
  },
  {
    image: "/images/S__58425375_0.jpg",
    tag: "セミナー報告",
    tagClass: "bg-cta text-white",
    date: "2026.01.28",
    title: "第2回 終活セミナー「エンディングノートの書き方」を開催",
    excerpt: "実際にエンディングノートを記入するワークショップ形式で開催。参加者の皆様から好評をいただきました。",
  },
  {
    image: "/images/S__58425361_0.jpg",
    tag: "葬儀の豆知識",
    tagClass: "bg-main text-white",
    date: "2026.01.20",
    title: "家族葬と一般葬、どちらを選ぶべき？それぞれのメリット・デメリット",
    excerpt: "家族の形が多様化する中で、お別れの形も変わりつつあります。それぞれの特徴を中立的な視点から解説。",
  },
  {
    image: "/images/S__58425357_0.jpg",
    tag: "代表日記",
    tagClass: "bg-accent text-white",
    date: "2026.01.10",
    title: "新年のご挨拶 ─ 地域の皆様への感謝を込めて",
    excerpt: "昨年中は多くの方にご相談いただきました。2026年も変わらず、皆様の「味方」であり続けます。",
  },
];

export default function ColumnPage() {
  return (
    <>
      <PageHero
        image="/images/S__58425361_0.jpg"
        label="COLUMN & SEMINAR"
        title="コラム・セミナー情報"
        description="終活や葬儀に関するお役立ち情報を発信しています。"
      />

      <section className="py-section bg-base">
        <div className="max-w-5xl mx-auto px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat.value}
                className={`px-5 py-2 rounded-pill text-xs font-medium border transition-colors ${
                  i === 0
                    ? "bg-main text-white border-main"
                    : "bg-surface text-ink-secondary border-border hover:border-main hover:text-main"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <article
                key={a.date + a.title}
                className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    width={640}
                    height={400}
                    className="object-cover aspect-[16/10] w-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-pill ${a.tagClass}`}>
                    {a.tag}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-[10px] font-display tracking-wider text-ink-muted mb-2">{a.date}</div>
                  <h3 className="font-mincho text-sm font-semibold leading-snug mb-2 line-clamp-2">{a.title}</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed line-clamp-3">{a.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
