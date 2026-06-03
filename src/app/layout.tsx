import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "测测你是哪种大厂人 | Big Tech Personality Test",
  description: "20道题测出你的大厂人格——卷王、PPT战神、对齐侠...你是哪一种？截图分享到群里，看看谁是最抽象的那个！",
  openGraph: {
    title: "测测你是哪种大厂人",
    description: "20道题测出你的大厂人格，截图分享到群里！",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
