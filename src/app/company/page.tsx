import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBar } from "@/components/ui/CtaBar";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "会社概要",
  description: "ファーストリーフ株式会社の企業理念、代表挨拶、スタッフ紹介、アクセス情報。",
};

const companyInfo = [
  { label: "会社名", value: "ファーストリーフ株式会社" },
  { label: "英文社名", value: "FIRST LEAF Inc." },
  { label: "代表取締役", value: "大石 康太" },
  { label: "所在地", value: "〒253-0085 神奈川県茅ヶ崎市矢畑682-10" },
  { label: "電話番号", value: "0467-38-5617（24時間365日）" },
  { label: "事業内容", value: "葬儀施行・終活支援・身元引受・生活サポート・遺品整理コーディネート" },
  { label: "提携先", value: "湘南第一病院、エリー訪問看護ステーション、提携行政書士・司法書士・弁護士" },
];

const staff = [
  {
    name: "大石 康太",
    role: "代表取締役",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    message: "中立な立場で、ご遺族の味方であり続けます。",
  },
  {
    name: "スタッフ A",
    role: "葬儀コーディネーター",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop",
    message: "お一人おひとりのお気持ちに寄り添い、丁寧にサポートいたします。",
  },
  {
    name: "スタッフ B",
    role: "終活アドバイザー",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    message: "セミナーや個別相談を通じて、安心をお届けします。",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=800&fit=crop"
        label="COMPANY"
        title="会社概要"
        description="静かに、やさしく、確かに。ファーストリーフ株式会社のご紹介です。"
      />

      {/* Philosophy */}
      <section className="py-section bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="section-label">PHILOSOPHY</div>
          <h2 className="font-mincho text-[clamp(1.5rem,3vw,2.2rem)] font-semibold mb-6">
            企業理念
          </h2>
          <blockquote className="font-mincho text-[clamp(1.3rem,2.5vw,1.8rem)] text-ink leading-relaxed mb-6">
            静かに、やさしく、確かに。
          </blockquote>
          <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl mx-auto">
            ファーストリーフ（一葉）のように、静かに、やさしく、そして確かに。医療・介護・ご家族をつなぎ、中立で誠実な立場から、人生の最期とその先の暮らしを支えます。
          </p>
        </div>
      </section>

      {/* CEO */}
      <section className="py-section bg-base">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop"
              alt="代表 大石 康太"
              width={600}
              height={800}
              className="object-cover w-full"
            />
          </div>
          <div>
            <div className="section-label">REPRESENTATIVE</div>
            <div className="font-display text-xs text-ink-muted tracking-[0.15em] mb-0.5">
              Representative Director
            </div>
            <h2 className="font-mincho text-2xl font-semibold mb-6">大石 康太</h2>
            <p className="text-sm text-ink-secondary leading-relaxed mb-4">
              私は葬儀社の人間ではなく、ご遺族の立場に立つ中立なパートナーです。
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed">
              深い悲しみと混乱の中にいる時こそ、まずは「落ち着くための時間」を一緒に作りましょう。適正な価格、温かなお見送り、そしてその後の暮らしまで。私たちはすべてをトータルでサポートします。
            </p>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-section bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label">STAFF</div>
            <h2 className="font-mincho text-[clamp(1.5rem,3vw,2.2rem)] font-semibold">
              スタッフ紹介
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {staff.map((s) => (
              <div key={s.name} className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 shadow-md">
                  <Image src={s.photo} alt={s.name} width={160} height={160} className="object-cover w-full h-full" />
                </div>
                <div className="text-[10px] text-main font-medium mb-1">{s.role}</div>
                <h3 className="font-mincho text-base font-semibold mb-2">{s.name}</h3>
                <p className="text-xs text-ink-secondary">{s.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-section bg-base">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label">CORPORATE DATA</div>
            <h2 className="font-mincho text-[clamp(1.5rem,3vw,2.2rem)] font-semibold">会社情報</h2>
          </div>
          <div className="bg-surface rounded-2xl overflow-hidden shadow-sm">
            {companyInfo.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-[120px_1fr] ${i > 0 ? "border-t border-border-light" : ""}`}>
                <div className="py-4 px-5 bg-main-faint text-xs font-semibold text-main-dark">{row.label}</div>
                <div className="py-4 px-5 text-sm text-ink-secondary">{row.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-section bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="section-label">ACCESS</div>
            <h2 className="font-mincho text-xl font-semibold">アクセス</h2>
            <p className="text-xs text-ink-muted mt-2">{SITE.address}</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/9] bg-base-warm flex items-center justify-center">
            <p className="text-sm text-ink-muted">Google Map 埋め込みエリア</p>
          </div>
        </div>
      </section>

      <CtaBar />
    </>
  );
}
