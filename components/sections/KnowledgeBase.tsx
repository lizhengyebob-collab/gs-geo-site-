import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const previews = [
  {
    num: "01",
    question: "什么是 GEO？",
    summary: "生成式引擎优化的核心定义、三大优化维度与和传统 SEO 的本质区别。",
    href: "/resources#what-is-geo",
    color: "#3b82f6",
  },
  {
    num: "02",
    question: "GEO、AEO、LLMO 有什么区别？",
    summary: "三个术语的层次关系：LLMO 是技术基础，AEO 是场景覆盖，GEO 是全局框架。",
    href: "/resources#geo-aeo-llmo",
    color: "#d4a853",
  },
  {
    num: "03",
    question: "企业如何提升 ChatGPT 推荐率？",
    summary: "知乎权威内容 + FAQPage Schema + 实体一致性，三条最直接的突破路径。",
    href: "/resources#chatgpt-rate",
    color: "#3b82f6",
  },
  {
    num: "04",
    question: "如何让 Claude / Perplexity 引用品牌？",
    summary: "Claude 要学术深度，Perplexity 要数据来源——两个平台的引用逻辑完全不同。",
    href: "/resources#claude-perplexity",
    color: "#d4a853",
  },
  {
    num: "05",
    question: "B2B 企业为什么需要 AI 可见度？",
    summary: "94% 买家用 AI 调研，AI 引荐转化率是 Google 的 5 倍，先发优势难以追赶。",
    href: "/resources#b2b-why",
    color: "#3b82f6",
  },
  {
    num: "06",
    question: "GEO 优化多久见效？",
    summary: "技术层 2-4 周，内容层 60-90 天，三阶段拆解每个时间点的预期变化。",
    href: "/resources#timeline",
    color: "#d4a853",
  },
];

export default function KnowledgeBase() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #04080f 0%, #070d1a 50%, #04080f 100%)" }}
      />
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-medium"
              style={{ border: "1px solid rgba(212,168,83,0.2)", background: "rgba(212,168,83,0.08)", color: "#d4a853" }}
            >
              <BookOpen className="w-3.5 h-3.5" />
              GEO 知识库
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              AI 搜索优化<span className="gradient-text">核心问题</span>
            </h2>
            <p className="text-slate-400 text-lg mt-3 max-w-xl">
              6 篇深度解答，覆盖 GEO / AEO / LLMO 的核心概念、平台策略和执行路径
            </p>
          </div>

          <Link
            href="/resources"
            className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl btn-outline-gold flex-shrink-0 whitespace-nowrap"
          >
            <span>查看完整知识库</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </FadeIn>

        {/* Preview grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {previews.map((p, i) => (
            <FadeIn key={p.num} delay={i * 60}>
              <Link
                href={p.href}
                className="group glass-card rounded-2xl p-6 flex flex-col gap-4 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: `${p.color}10` }}
              >
                {/* Number badge */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-2xl font-black"
                    style={{ color: `${p.color}40` }}
                  >
                    {p.num}
                  </span>
                  <ArrowRight
                    className="w-4 h-4 text-slate-700 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all duration-200"
                    style={{ color: undefined }}
                  />
                </div>

                {/* Question */}
                <h3 className="text-white font-bold text-base leading-snug group-hover:text-white transition-colors">
                  {p.question}
                </h3>

                {/* Summary */}
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{p.summary}</p>

                {/* Read more */}
                <div
                  className="text-xs font-medium"
                  style={{ color: p.color }}
                >
                  阅读完整解答 →
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Featured blog article */}
        <FadeIn delay={380} className="mt-8">
          <Link
            href="/blog/what-is-geo"
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl px-6 py-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            style={{ background: "rgba(13,21,38,0.5)", border: "1px solid rgba(212,168,83,0.1)" }}
          >
            <div
              className="flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
              style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.2)", color: "#d4a853" }}
            >
              深度文章
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm group-hover:text-white transition-colors leading-snug">
                什么是 GEO？它和 SEO 的 5 个核心区别
              </p>
              <p className="text-slate-600 text-xs mt-0.5">定义、对比表、执行路径 · 约 8 分钟</p>
            </div>
            <div
              className="flex items-center gap-1.5 text-xs font-medium flex-shrink-0 group-hover:gap-2.5 transition-all"
              style={{ color: "#d4a853" }}
            >
              阅读全文
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </FadeIn>

        {/* Bottom CTA */}
        <FadeIn delay={420} className="mt-6 text-center">
          <Link
            href="/resources"
            className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-[#04080f] btn-gold rounded-xl hover:-translate-y-0.5 transition-all duration-300"
            style={{ boxShadow: "0 8px 28px rgba(212,168,83,0.25)" }}
          >
            <BookOpen className="w-4 h-4" />
            <span>进入 GEO 知识库</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
