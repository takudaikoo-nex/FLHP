/** サイト共通定数 */
export const SITE = {
  name: "ファーストリーフ株式会社",
  nameEn: "FIRST LEAF Inc.",
  phone: "0467-38-5617",
  phoneTel: "tel:0467385617",
  phoneLabel: "24時間365日受付・通話無料",
  address: "〒253-0085 神奈川県茅ヶ崎市矢畑682-10",
  copy: "葬儀社を、決める前に。",
  url: "https://firstleaf.jp",
} as const;

export const NAV_ITEMS = [
  { label: "ご葬儀プラン", href: "/plans" },
  { label: "斎場・火葬場案内", href: "/facilities" },
  { label: "終活・トータルサポート", href: "/support" },
  { label: "コラム・セミナー", href: "/column" },
  { label: "会社概要", href: "/company" },
] as const;
