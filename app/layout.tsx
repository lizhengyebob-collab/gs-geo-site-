import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GS GEO | AI 搜索可见度优化专家",
  description:
    "GS GEO 帮助企业提升在 ChatGPT、Claude、Perplexity、豆包、DeepSeek 等 AI 搜索结果中的曝光率。GEO 搜索体检、品牌 AI 可见度分析、AI 引用优化一站式服务。",
  keywords: "GS GEO, GEO优化, AI SEO, AI可见度, AI搜索优化, LLMO, AEO, ChatGPT曝光, Claude引用, Perplexity优化",
  openGraph: {
    title: "GS GEO | AI 搜索可见度优化专家",
    description: "让 AI 主动推荐你的品牌——GS GEO 搜索优化专家",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#04080f] text-[#f0ece0] antialiased">
        {children}
      </body>
    </html>
  );
}
