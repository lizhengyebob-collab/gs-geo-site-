import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, BookOpen } from "lucide-react";

const BASE = "https://geo.goushaoai.com";

export const metadata: Metadata = {
  title: "博客 | GS GEO",
  description:
    "GS GEO 博客：GEO 优化方法论、AI 搜索可见度实战指南、平台引用策略。帮助 B2B 企业系统理解和执行生成式引擎优化。",
  alternates: { canonical: `${BASE}/blog` },
  openGraph: {
    title: "博客 | GS GEO",
    description: "GEO 深度文章：方法论、平台策略、实战指南。",
    url: `${BASE}/blog`,
  },
};

const posts = [
  {
    slug: "what-is-geo",
    title: "什么是 GEO？它和 SEO 的 5 个核心区别",
    description:
      "GEO（生成式引擎优化）的定义、核心逻辑，以及与 SEO 在目标、机制、内容策略、效果指标和时效性上的 5 大本质区别。",
    date: "2026-05-31",
    readingMinutes: 8,
    tags: ["GEO 基础", "AI 搜索优化"],
    featured: true,
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#04080f]">
      {/* Top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-40 h-14 flex items-center px-4 sm:px-6"
        style={{
          background: "rgba(4,8,15,0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(212,168,83,0.08)",
        }}
      >
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">返回官网</span>
            <span className="sm:hidden">返回</span>
          </Link>

          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" style={{ color: "#d4a853" }} />
            <span className="text-sm font-semibold text-white">GEO 深度文章</span>
          </div>

          <a
            href="https://geo.goushaoai.com/#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-[#04080f] btn-gold rounded-lg"
            style={{ boxShadow: "0 2px 12px rgba(212,168,83,0.2)" }}
          >
            免费体检
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full text-xs font-medium"
            style={{ border: "1px solid rgba(212,168,83,0.2)", background: "rgba(212,168,83,0.08)", color: "#d4a853" }}
          >
            <BookOpen className="w-3.5 h-3.5" />
            深度文章
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4">
            GEO 博客
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            方法论、平台策略和实战指南——帮助 B2B 企业系统理解和执行生成式引擎优化。
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl p-7 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: "rgba(13,21,38,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {post.featured && (
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.2)", color: "#d4a853" }}
                  >
                    精选文章
                  </span>
                </div>
              )}

              <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white leading-snug mb-3 transition-colors">
                {post.title}
              </h2>

              <p className="text-slate-500 text-sm leading-relaxed mb-5">{post.description}</p>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>约 {post.readingMinutes} 分钟</span>
                  </div>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-slate-500"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-1.5 text-xs font-medium group-hover:gap-2.5 transition-all"
                  style={{ color: "#d4a853" }}
                >
                  阅读全文
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Also see */}
        <div
          className="mt-14 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between"
          style={{ background: "rgba(13,21,38,0.6)", border: "1px solid rgba(212,168,83,0.08)" }}
        >
          <div>
            <p className="text-white font-semibold text-sm mb-1">还有更多 GEO 知识</p>
            <p className="text-slate-500 text-xs">6 个核心问题，覆盖 GEO / AEO / LLMO 的完整方法论和执行路径</p>
          </div>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl btn-outline-gold flex-shrink-0"
          >
            <BookOpen className="w-4 h-4" />
            进入 GEO 知识库
          </Link>
        </div>
      </div>
    </div>
  );
}
