"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface VideoItem {
  id: string;
  videoId: string;
  thumb: string;
  title: string;
  desc: string;
  tag: string;
  tagClass: string;
  duration: string;
}

const videos: VideoItem[] = [
  {
    id: "message",
    videoId: "dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=960&h=540&fit=crop",
    title: "代表メッセージ ─ 中立な味方であるために",
    desc: "ファーストリーフ代表 大石康太が、私たちの理念と「中立であること」の意味についてお話しします。",
    tag: "代表メッセージ",
    tagClass: "bg-main/30 text-main-light",
    duration: "3:42",
  },
  {
    id: "tour",
    videoId: "dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=960&h=540&fit=crop",
    title: "自社斎場ルームツアー ─ 1日1組限定の空間",
    desc: "茅ヶ崎の自社斎場を動画でご案内。安置室から式場まで、落ち着いた空間をご覧ください。",
    tag: "斎場ルームツアー",
    tagClass: "bg-accent/25 text-accent-light",
    duration: "2:15",
  },
  {
    id: "seminar",
    videoId: "dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=960&h=540&fit=crop",
    title: "終活セミナー ─ 行政書士と共催の第3回ダイジェスト",
    desc: "身元引受と死後事務委任について解説した終活セミナーの模様をダイジェストでお届けします。",
    tag: "セミナー",
    tagClass: "bg-cta/20 text-cta-light",
    duration: "1:28",
  },
  {
    id: "qa",
    videoId: "dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=960&h=540&fit=crop",
    title: "よくある質問 ─ 葬儀社を決める前に知っておきたいこと",
    desc: "「安置と搬送の違いは？」「見積もりのチェックポイントは？」よくいただくご質問に動画でお答えします。",
    tag: "よくある質問",
    tagClass: "bg-white/10 text-dark-text",
    duration: "4:10",
  },
];

export function MovieSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const active = videos[activeIndex];

  const handleSelect = useCallback((i: number) => {
    setActiveIndex(i);
    setPlaying(false);
  }, []);

  return (
    <section className="bg-dark text-dark-text py-section overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="MOVIE"
          title="動画で知る<br/>ファーストリーフ"
          description="代表メッセージや斎場のルームツアー、終活セミナーの様子を動画でご覧いただけます。"
          dark
        />
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8">
          {/* Main Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,.4)] bg-black"
          >
            {playing ? (
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1&rel=0`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="relative w-full aspect-video group cursor-pointer"
              >
                <Image
                  src={active.thumb}
                  alt={active.title}
                  fill
                  className="object-cover transition-transform duration-600 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-dark/35 group-hover:bg-dark/50 transition-colors flex flex-col items-center justify-center gap-3">
                  <div className="w-[72px] h-[72px] bg-white/95 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-cta ml-1" />
                  </div>
                  <span className="text-xs text-white font-medium tracking-[0.15em]">
                    PLAY MOVIE
                  </span>
                </div>
              </button>
            )}
            <div className="p-4 bg-dark-surface">
              <h3 className="font-mincho text-base font-semibold text-ink-inverse mb-1">
                {active.title}
              </h3>
              <p className="text-xs text-dark-text opacity-70 leading-relaxed">
                {active.desc}
              </p>
            </div>
          </motion.div>

          {/* Side List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3 lg:max-h-[480px] overflow-y-auto"
          >
            {videos.map((v, i) => (
              <button
                key={v.id}
                onClick={() => handleSelect(i)}
                className={`grid grid-cols-[140px_1fr] gap-3 items-center p-2 rounded-lg text-left transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-dark-elevated shadow-[inset_3px_0_0_var(--color-cta)]"
                    : "bg-dark-surface hover:bg-dark-elevated hover:translate-x-1"
                }`}
              >
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={v.thumb}
                    alt={v.tag}
                    width={140}
                    height={88}
                    className="object-cover aspect-[16/10] w-full"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[11px] border-l-white" />
                  </div>
                </div>
                <div className="min-w-0">
                  <span
                    className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-pill mb-1 ${v.tagClass}`}
                  >
                    {v.tag}
                  </span>
                  <h4 className="text-xs font-semibold text-ink-inverse mb-0.5 truncate">
                    {v.title.split(" ─ ")[1] || v.title}
                  </h4>
                  <span className="text-[10px] text-dark-text opacity-60">
                    {v.duration}
                  </span>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
