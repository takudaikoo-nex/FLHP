import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/ui/PhoneIcon";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "ファーストリーフへのお問い合わせ・無料ガイドブックのご請求はこちらから。24時間365日お電話でも承ります。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/S__58425375_0.jpg"
        label="CONTACT"
        title="お問い合わせ"
        description="お電話・メールフォームからお気軽にご相談ください。"
      />

      <section className="py-section bg-base">
        <div className="max-w-5xl mx-auto px-6">
          {/* Phone First */}
          <div className="bg-dark rounded-2xl p-8 md:p-12 text-center mb-16">
            <div className="font-display text-xs tracking-[0.2em] text-accent-light uppercase mb-3">
              PHONE
            </div>
            <h2 className="font-mincho text-xl text-ink-inverse font-semibold mb-4">
              お電話でのご相談が最もスムーズです
            </h2>
            <p className="text-xs text-dark-text opacity-70 mb-6">
              24時間365日、いつでもお電話ください。深夜・早朝でも対応いたします。
            </p>
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center gap-3 bg-cta text-white rounded-pill px-8 py-4 text-lg font-bold hover:bg-cta-hover transition-colors"
            >
              <PhoneIcon className="w-6 h-6" />
              {SITE.phone}
            </a>
            <p className="text-[10px] text-dark-text opacity-50 mt-3">通話無料</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="section-label">MAIL FORM</div>
              <h2 className="font-mincho text-xl font-semibold mb-6">メールフォーム</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-ink-secondary mb-1.5">
                    お名前 <span className="text-cta">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:border-main transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-secondary mb-1.5">
                    電話番号 <span className="text-cta">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:border-main transition-colors"
                    placeholder="090-1234-5678"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-secondary mb-1.5">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:border-main transition-colors"
                    placeholder="example@mail.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-secondary mb-1.5">
                    お問い合わせ内容
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:border-main transition-colors resize-none"
                    placeholder="ご相談内容をご記入ください"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-main text-white rounded-pill py-3.5 font-semibold text-sm hover:bg-main-dark transition-colors"
                >
                  送信する
                </button>
              </form>
            </div>

            {/* Guidebook Request */}
            <div id="guidebook">
              <div className="section-label">FREE GUIDEBOOK</div>
              <h2 className="font-mincho text-xl font-semibold mb-6">
                無料ガイドブック請求
              </h2>
              <div className="bg-main-faint rounded-2xl p-6 mb-6">
                <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                  病院・施設でも配布中の「お葬式と安置の安心ガイドブック」を無料でお届けします。葬儀社を決める前に知っておきたい情報が詰まっています。
                </p>
                <div className="space-y-2">
                  {[
                    "安置の安心 ─ まず「落ち着く場所」を確保",
                    "費用の安心 ─ 見積もりの5つのチェック",
                    "解決事例 ─ 実際のサポート事例4選",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-main-dark">
                      <span className="text-main">&#10003;</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <form className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-ink-secondary mb-1.5">
                    お名前 <span className="text-cta">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:border-main transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-secondary mb-1.5">
                    ご住所 <span className="text-cta">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:border-main transition-colors"
                    placeholder="神奈川県茅ヶ崎市..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-secondary mb-1.5">
                    電話番号 <span className="text-cta">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:border-main transition-colors"
                    placeholder="090-1234-5678"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-cta text-white rounded-pill py-3.5 font-semibold text-sm hover:bg-cta-hover transition-colors"
                >
                  ガイドブックを請求する（無料）
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
