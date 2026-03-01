import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBar } from "@/components/ui/CtaBar";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/ui/PhoneIcon";

export const metadata: Metadata = {
  title: "斎場・火葬場案内",
  description:
    "神奈川県の斎場・火葬場をエリア別にご案内。自社斎場は1日1組限定、式場利用料・安置料0円。",
};

const ownFeatures = [
  "1日1組限定・貸切",
  "式場利用料 0円",
  "安置料 0円",
  "24時間・年中無休",
];

const facilities = {
  shonan: [
    { name: "藤沢聖苑", addr: "藤沢市大鋸1251", tel: "0466-22-2404", local: "10,000円", outside: "80,000円", hall: "なし", closed: "友引,1/1-3", scale: "L", tags: ["火葬場併設", "公営", "駐車場あり"] },
    { name: "藤沢市斎場", addr: "藤沢市大庭3761", tel: "0466-87-5589", local: "なし", outside: "なし", hall: "3,000円〜", closed: "1/1-3", scale: "M", tags: ["式場あり", "公営", "駐車場あり"] },
    { name: "茅ヶ崎市斎場", addr: "茅ヶ崎市芹沢1700", tel: "0467-53-1505", local: "0円", outside: "80,000円", hall: "41,900円", closed: "友引,1/1-3", scale: "M", tags: ["火葬場併設", "式場あり", "公営"] },
    { name: "平塚市聖苑", addr: "平塚市田村9-25-2", tel: "0463-55-1075", local: "0円", outside: "95,000円", hall: "なし", closed: "友引,1/1-3", scale: "L", tags: ["火葬場併設", "公営", "駐車場あり"] },
  ],
  yokohama: [
    { name: "横浜市北部斎場", addr: "横浜市緑区長津田町", tel: "045-921-5700", local: "12,000円", outside: "50,000円", hall: "80,000円", closed: "友引,1/1-2", scale: "L", tags: ["火葬場併設", "式場あり", "公営"] },
    { name: "横浜市南部斎場", addr: "横浜市金沢区みずき町", tel: "045-785-9411", local: "12,000円", outside: "50,000円", hall: "50,000円", closed: "友引,1/1-2", scale: "L", tags: ["火葬場併設", "式場あり", "公営"] },
    { name: "横浜市戸塚斎場", addr: "横浜市戸塚区鳥が丘", tel: "045-864-7001", local: "12,000円", outside: "50,000円", hall: "50,000円", closed: "友引,1/1-2", scale: "M", tags: ["火葬場併設", "式場あり", "公営"] },
    { name: "横浜市久保山斎場", addr: "横浜市西区元久保町", tel: "045-231-3060", local: "12,000円", outside: "50,000円", hall: "なし", closed: "友引,1/1-2", scale: "M", tags: ["火葬場併設", "公営"] },
  ],
  kawasaki: [
    { name: "かわさき北部斎場", addr: "川崎市高津区下作延", tel: "044-822-3171", local: "6,750円", outside: "60,000円", hall: "45,000円〜", closed: "友引,1/1-3", scale: "L", tags: ["火葬場併設", "式場あり", "公営"] },
    { name: "かわさき南部斎場", addr: "川崎市川崎区夜光", tel: "044-277-8146", local: "6,750円", outside: "60,000円", hall: "40,000円〜", closed: "友引,1/1-3", scale: "M", tags: ["火葬場併設", "式場あり", "公営"] },
  ],
  kennou: [
    { name: "大和斎場", addr: "大和市西鶴間8-10-8", tel: "046-264-5566", local: "10,000円", outside: "50,000円", hall: "50,000円", closed: "友引,1/1-3", scale: "L", tags: ["火葬場併設", "式場あり", "公営"] },
    { name: "厚木市斎場", addr: "厚木市下古沢548", tel: "046-281-8595", local: "10,000円", outside: "70,000円", hall: "60,000円", closed: "友引,1/1-3", scale: "M", tags: ["火葬場併設", "式場あり", "公営"] },
    { name: "秦野斎場", addr: "秦野市曽屋1006", tel: "0463-81-2052", local: "11,000円", outside: "73,000円", hall: "なし", closed: "友引,1/1", scale: "S", tags: ["火葬場併設", "公営"] },
    { name: "小田原市斎場", addr: "小田原市久野3664-8", tel: "0465-34-9409", local: "12,000円", outside: "80,000円", hall: "なし", closed: "友引,1/1-3", scale: "S", tags: ["火葬場併設", "公営"] },
  ],
};

const areas = [
  { key: "shonan" as const, label: "湘南エリア" },
  { key: "yokohama" as const, label: "横浜市" },
  { key: "kawasaki" as const, label: "川崎市" },
  { key: "kennou" as const, label: "県央・県西" },
];

const scaleClass: Record<string, string> = {
  S: "bg-main-pale text-main-dark",
  M: "bg-accent-pale text-accent-dark",
  L: "bg-cta-surface text-cta",
};
const scaleLabel: Record<string, string> = {
  S: "S ─ 小規模",
  M: "M ─ 中規模",
  L: "L ─ 大規模",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
        label="FACILITY GUIDE"
        title="神奈川県の<br/>斎場・火葬場ガイド"
        description="地域の施設を熟知した私たちが、最適な場所をご提案します。"
      />

      {/* Own Facility */}
      <section className="py-section bg-surface" id="own">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&h=625&fit=crop"
              alt="ファーストリーフ自社斎場"
              width={1000}
              height={625}
              className="object-cover w-full"
            />
            <span className="absolute top-4 left-4 bg-cta text-white text-xs font-bold px-3 py-1.5 rounded-pill">
              &#9733; 自社斎場
            </span>
          </div>
          <div>
            <div className="section-label">OUR FACILITY</div>
            <h2 className="font-mincho text-2xl font-semibold mb-4">
              ファーストリーフ
              <br />
              自社斎場
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed mb-6">
              1日1組限定の貸切対応。式場利用料・安置料は0円。ゆったりとした空間で、心からのお別れを。
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {ownFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-main-dark">
                  <span className="text-main font-bold">&#10003;</span>
                  {f}
                </div>
              ))}
            </div>
            <p className="text-xs text-ink-muted mb-6">{SITE.address}<br />TEL: {SITE.phone}</p>
            <div className="flex flex-wrap gap-3">
              <Button href={SITE.phoneTel} variant="cta">
                <PhoneIcon className="w-4 h-4" />
                電話で予約する
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Area Listings */}
      <section className="py-section bg-base">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label">AREA GUIDE</div>
            <h2 className="font-mincho text-[clamp(1.5rem,3vw,2.2rem)] font-semibold">
              エリア別 斎場・火葬場一覧
            </h2>
          </div>

          {areas.map((area) => (
            <div key={area.key} className="mb-16 last:mb-0">
              <h3 className="font-mincho text-lg font-semibold mb-6 flex items-center gap-2">
                {area.label}
                <span className="text-[10px] font-display bg-main-pale text-main-dark px-2 py-0.5 rounded-pill">
                  {facilities[area.key].length}
                </span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                {facilities[area.key].map((f) => (
                  <div
                    key={f.name}
                    className="bg-surface rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-mincho text-sm font-semibold">{f.name}</h4>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-pill shrink-0 ${scaleClass[f.scale]}`}>
                          {scaleLabel[f.scale]}
                        </span>
                      </div>
                      <p className="text-[10px] text-ink-muted mb-2">{f.addr}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {f.tags.map((tag) => (
                          <span key={tag} className="text-[9px] px-2 py-0.5 bg-main-faint text-main-dark rounded-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-[10px] text-ink-secondary space-y-0.5 mb-3">
                        <div>火葬料：市内 {f.local} ／ 市外 {f.outside}</div>
                        {f.hall !== "なし" && <div>式場料：{f.hall}</div>}
                        <div>休場日：{f.closed}</div>
                      </div>
                      <a
                        href={`tel:${f.tel.replace(/-/g, "")}`}
                        className="block text-center py-2 bg-base rounded-lg text-xs font-semibold text-main hover:bg-main hover:text-white transition-colors"
                      >
                        TEL {f.tel}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBar
        title="斎場選びに迷ったらお電話ください"
        description="ご希望のエリアや人数に合わせて、最適な斎場をご提案します。"
      />
    </>
  );
}
