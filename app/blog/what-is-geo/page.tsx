import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, BookOpen, CheckCircle2 } from "lucide-react";

const BASE = "https://geo.goushaoai.com";
const PUBLISH_DATE = "2026-05-31";
const READING_MINUTES = 8;

export const metadata: Metadata = {
  title: "什么是 GEO？它和 SEO 的 5 个核心区别",
  description:
    "GEO（生成式引擎优化）是针对 ChatGPT、Claude、Perplexity 等 AI 搜索系统优化品牌可见度的方法论。本文拆解 GEO 定义、与 SEO 的 5 大核心区别，以及企业如何落地执行。",
  alternates: { canonical: `${BASE}/blog/what-is-geo` },
  openGraph: {
    title: "什么是 GEO？它和 SEO 的 5 个核心区别 | GS GEO",
    description:
      "GEO 与 SEO 的 5 个核心区别，以及企业如何系统开展 GEO 优化。",
    url: `${BASE}/blog/what-is-geo`,
    type: "article",
    publishedTime: PUBLISH_DATE,
    authors: [`${BASE}`],
  },
};

/* ─────────────────────────────────────────────
   FAQ 数据（用于 Schema 和正文）
───────────────────────────────────────────── */
const faqs = [
  {
    q: "GEO 和 SEO 需要二选一吗？",
    a: "不需要。GEO 和 SEO 的目标系统不同——SEO 优化的是 Google 排名，GEO 优化的是 AI 引用率——两者可以同步推进。很多 GEO 的基础工作（高质量内容、可抓取的网站结构）与 SEO 也是高度重合的。建议把 GEO 作为现有数字营销体系的新增维度，而不是替代项。",
  },
  {
    q: "GEO 适合什么规模的企业？",
    a: "GEO 对 B2B 企业的价值最为显著，尤其是采购决策周期长、买家会主动进行调研的行业。企业规模不是核心门槛——更重要的是品牌是否有清晰的差异化定位，以及是否有持续产出专业内容的能力。从技术优化（llms.txt、Schema）开始，成本极低，任何规模的企业都可以立即启动。",
  },
  {
    q: "多久能看到 GEO 优化的效果？",
    a: "技术层面的优化（llms.txt、Schema、robots.txt AI 爬虫权限）通常在 2–4 周内可被 AI 系统感知。内容层面的权威信号积累需要 60–90 天才能在 AI 引用频次上有明显体现。90 天是观察 GEO 效果的合理评估周期，数据追踪应从第一天就开始。",
  },
  {
    q: "如何知道自己的品牌在 AI 搜索中的表现？",
    a: "最直接的方法：在 ChatGPT、Perplexity、豆包分别搜索「推荐哪家做 [你的核心业务] 的公司」，记录是否出现、排名位置和描述是否准确。GS GEO 提供免费 GEO 体检服务，48 小时内交付在 6 个主流 AI 平台的品牌可见度诊断报告。",
  },
  {
    q: "GEO 优化最难的部分是什么？",
    a: "大多数企业面临的最大挑战是内容的「可摘取性」——AI 系统需要能从内容中直接截取出准确、信息密集的文字作为引用。这要求内容格式从以往的长篇说服逻辑，转变为「直接回答 + 展开解释 + 数据来源」的结构，需要内容团队的思维转变。技术优化（llms.txt、Schema）相对容易，内容策略才是 GEO 的长期护城河。",
  },
];

/* ─────────────────────────────────────────────
   Schema JSON-LD
───────────────────────────────────────────── */
function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "什么是 GEO？它和 SEO 的 5 个核心区别",
    description:
      "GEO（生成式引擎优化）是针对 ChatGPT、Claude、Perplexity 等 AI 搜索系统优化品牌可见度的方法论。本文拆解 GEO 定义、与 SEO 的 5 大核心区别，以及企业如何落地执行。",
    url: `${BASE}/blog/what-is-geo`,
    datePublished: PUBLISH_DATE,
    dateModified: PUBLISH_DATE,
    author: { "@type": "Organization", name: "GS GEO", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "GS GEO",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/gs-logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/what-is-geo` },
    keywords: ["GEO", "SEO", "生成式引擎优化", "AI 搜索优化", "AI 可见度", "ChatGPT 优化"],
    inLanguage: "zh-CN",
    isAccessibleForFree: true,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: BASE },
      { "@type": "ListItem", position: 2, name: "博客", item: `${BASE}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: "什么是 GEO？它和 SEO 的 5 个核心区别",
        item: `${BASE}/blog/what-is-geo`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─────────────────────────────────────────────
   小组件
───────────────────────────────────────────── */
function DirectAnswerBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-6 mb-8"
      style={{ background: "rgba(212,168,83,0.07)", border: "1px solid rgba(212,168,83,0.2)" }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#d4a853" }} />
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#d4a853" }}>
          直接回答
        </span>
      </div>
      <div className="text-white text-base leading-relaxed font-medium">{children}</div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-white mt-14 mb-5 leading-tight">
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 leading-tight">
      {children}
    </h3>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-slate-400 text-base leading-relaxed mb-4">{children}</p>
  );
}

function DataHighlight({ stat, label }: { stat: string; label: string }) {
  return (
    <div
      className="inline-flex flex-col items-center px-5 py-3 rounded-xl mr-3 mb-3"
      style={{ background: "rgba(212,168,83,0.08)", border: "1px solid rgba(212,168,83,0.15)" }}
    >
      <span className="text-2xl font-black" style={{ color: "#d4a853" }}>{stat}</span>
      <span className="text-xs text-slate-500 mt-0.5">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function WhatIsGeoPage() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />
      <BreadcrumbSchema />

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
          <div className="max-w-3xl mx-auto w-full flex items-center justify-between gap-4">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">博客</span>
            </Link>

            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" style={{ color: "#d4a853" }} />
              <span className="text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-none">
                GEO 深度文章
              </span>
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

        {/* Article */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-20">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-600 mb-8" aria-label="面包屑">
            <Link href="/" className="hover:text-slate-400 transition-colors">首页</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-slate-400 transition-colors">博客</Link>
            <span>/</span>
            <span className="text-slate-500">什么是 GEO？</span>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.2)", color: "#d4a853" }}
              >
                GEO 基础
              </span>
              <span
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-slate-500"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                AI 搜索优化
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white leading-[1.15] mb-5">
              什么是 GEO？<br className="sm:hidden" />
              它和 SEO 的 5 个核心区别
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="w-3.5 h-3.5" />
                <span>2026-05-31</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>约 {READING_MINUTES} 分钟阅读</span>
              </div>
              <span>作者：GS GEO 团队</span>
            </div>
          </header>

          {/* ──────────────────────────────────────
              一、直接回答
          ────────────────────────────────────── */}
          <DirectAnswerBox>
            <p className="mb-3">
              <strong>GEO（Generative Engine Optimization，生成式引擎优化）</strong>是系统优化品牌内容和技术配置，
              使 ChatGPT、Claude、Perplexity、豆包、DeepSeek 等 AI 搜索和问答系统在生成回答时主动引用、推荐品牌的方法论体系。
            </p>
            <p>
              GEO 与 SEO 的根本区别在于目标：SEO 争取让 Google 把网页排在搜索结果前面；GEO 争取让 AI 在生成答案时
              直接说出品牌名称，将其纳入推荐名单。这是从「争夺排名」到「进入答案层」的根本性转变。
            </p>
          </DirectAnswerBox>

          {/* ──────────────────────────────────────
              二、背景
          ────────────────────────────────────── */}
          <SectionTitle>背景：为什么 2025 年 GEO 变得关键</SectionTitle>

          <Para>
            B2B 采购决策的路径正在发生结构性变化。
          </Para>

          <div
            className="rounded-2xl p-5 mb-6 space-y-3"
            style={{ background: "rgba(13,21,38,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-start gap-3">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-0.5 w-16 flex-shrink-0">传统路径</span>
              <p className="text-slate-400 text-sm">提出需求 → Google 搜索 → 浏览多个网站 → 比较供应商 → 联系候选</p>
            </div>
            <div className="h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
            <div className="flex items-start gap-3">
              <span className="text-xs font-bold uppercase tracking-wider mt-0.5 w-16 flex-shrink-0" style={{ color: "#d4a853" }}>AI 新路径</span>
              <p className="text-slate-300 text-sm">提出需求 → 向 AI 提问「推荐哪家做 XX 的公司」→ AI 给出推荐名单 → 联系候选供应商</p>
            </div>
          </div>

          <Para>
            在新路径中，如果品牌不在 AI 的推荐名单里，买家可能根本不会打开你的官网。这不是点击率的问题，
            而是「有没有资格被看见」的问题。
          </Para>

          <div className="flex flex-wrap my-6">
            <DataHighlight stat="5×" label="AI 引荐流量转化率 vs Google 自然搜索" />
            <DataHighlight stat="14.2%" label="AI 引荐平均转化率" />
            <DataHighlight stat="2.8%" label="Google 自然搜索转化率" />
          </div>

          <Para>
            根据普林斯顿大学 KDD 2024 研究，在内容中引用权威来源可将 AI 引用率提升 <strong className="text-white">115%</strong>，
            加入统计数据可提升 <strong className="text-white">40%</strong>，
            内容可读性优化可提升 <strong className="text-white">29%</strong>。
            这三个数字直接定义了 GEO 内容优化的优先级。
          </Para>

          {/* ──────────────────────────────────────
              三、对比表
          ────────────────────────────────────── */}
          <SectionTitle>GEO 与 SEO 的 5 个核心区别</SectionTitle>

          {/* Table */}
          <div className="overflow-x-auto mb-8 -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse" style={{ minWidth: 520 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(212,168,83,0.15)" }}>
                  <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#d4a853", width: "20%" }}>维度</th>
                  <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-500" style={{ width: "40%" }}>SEO</th>
                  <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white" style={{ width: "40%" }}>GEO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["优化目标", "提升网页在 Google 搜索结果的排名", "让 AI 在生成答案时引用和推荐品牌"],
                  ["影响机制", "反链、PageRank、关键词匹配", "权威信号、实体一致性、内容可引用性"],
                  ["内容策略", "关键词密度、元标签、内链结构", "结构化问答、数据来源引用、直接可摘取"],
                  ["效果指标", "排名位置、自然流量、CTR", "AI 出现率、推荐位置、描述准确性"],
                  ["维护节奏", "算法稳定，优化周期较长", "模型持续更新，需要持续监测迭代"],
                ].map(([dim, seo, geo], i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3 px-4 font-medium text-slate-300">{dim}</td>
                    <td className="py-3 px-4 text-slate-500">{seo}</td>
                    <td className="py-3 px-4 text-slate-300">{geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 逐条解释 */}
          <SubTitle>区别一：优化目标不同</SubTitle>
          <Para>
            SEO 的终点是网页排名靠前，用户看到链接、点击进来，才有下一步。
          </Para>
          <Para>
            GEO 的终点是 AI 在生成答案时直接说出品牌名称。用户不需要再搜索，AI 已经代替他们完成了初步筛选，
            将品牌纳入候选名单。进入名单意味着几乎确定进入候选池；不在名单里意味着这轮筛选已经提前出局。
          </Para>

          <SubTitle>区别二：影响机制不同</SubTitle>
          <Para>
            Google PageRank 主要看反链数量和质量、关键词匹配度和网站权重，底层是图排序算法。
          </Para>
          <Para>
            AI 系统的引用机制更接近学术引用逻辑：品牌在多少个独立权威来源被提及（多源印证）、
            信息内部一致性是否高、内容是否包含可验证的数据来源。普林斯顿 KDD 2024 的研究数据证实，
            权威来源引用、统计数据和内容可读性是影响 AI 引用率最显著的三个因素。
          </Para>

          <SubTitle>区别三：内容策略不同</SubTitle>
          <Para>
            SEO 内容的优化重点是关键词布局和语义相关性，核心服务对象是搜索引擎爬虫。
          </Para>
          <Para>
            GEO 内容的优化重点是<strong className="text-white">可摘取性（Citability）</strong>：
            AI 能否从内容中直接截取出一段准确、信息密集的文字，作为它生成答案的来源？
          </Para>
          <div
            className="rounded-xl p-5 mb-4"
            style={{ background: "rgba(13,21,38,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">GEO 友好的内容格式</p>
            <ul className="space-y-2">
              {[
                "以直接答案开头——第一段就给出问题的核心答案，不绕弯子",
                "使用清晰的标题层级和列表结构，让 AI 快速定位每个子主题",
                "每个核心观点都有可验证的来源支撑（数据 + 出处 > 无来源断言）",
                "避免含糊的营销措辞——「行业领先」「颠覆性」等表达引用率极低",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#d4a853" }} />
                  <span className="text-slate-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <SubTitle>区别四：效果衡量方式不同</SubTitle>
          <Para>
            SEO 的指标体系成熟：排名、自然流量、CTR，通过 Google Search Console 可以精确追踪。
          </Para>
          <Para>
            GEO 的核心指标是：AI 出现率（在多少个平台的多少类问题中被提及）、
            推荐位置（首位还是末尾）、引用准确性（AI 描述品牌的方式是否准确）。
            追踪 GEO 效果的标准做法是建立标准问题库，每两周在主流 AI 平台测试，记录出现率趋势变化。
          </Para>

          <SubTitle>区别五：时效性不同</SubTitle>
          <Para>
            Google 的核心排名算法框架相对稳定，一次优化可以在较长时间内维持效果。
          </Para>
          <Para>
            AI 平台的引用偏好随模型更新而变化，不同平台的偏好差异也显著。GEO 是需要持续监测和迭代的长期运营，
            而不是一次性工作。
          </Para>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { platform: "Perplexity", pref: "近期发布的内容 + 明确数据来源，实时抓取" },
              { platform: "Claude", pref: "学术深度内容，营销文案引用率极低" },
              { platform: "ChatGPT", pref: "知乎深度回答 + 行业媒体，Bing 实时索引" },
              { platform: "豆包", pref: "知乎、微信公众号等国内权威平台来源" },
            ].map(({ platform, pref }) => (
              <div
                key={platform}
                className="rounded-xl p-4"
                style={{ background: "rgba(13,21,38,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="text-sm font-bold text-white mb-1">{platform}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{pref}</p>
              </div>
            ))}
          </div>

          {/* ──────────────────────────────────────
              四、企业为什么要关注 GEO
          ────────────────────────────────────── */}
          <SectionTitle>企业为什么要关注 GEO</SectionTitle>

          <SubTitle>B2B 采购调研正在向 AI 迁移</SubTitle>
          <Para>
            B2B 买家在接触供应商之前，越来越多地通过 AI 对话完成初步调研、比较供应商特点、形成候选名单。
            进入 AI 的推荐名单意味着进入候选池；不在名单里意味着这轮筛选已经提前出局，且买家不会意识到你的存在。
          </Para>

          <SubTitle>AI 引荐流量质量更高</SubTitle>
          <Para>
            从 AI 推荐来的访客，在打开官网之前已经通过 AI 对品牌形成了初步认知，决策阶段更靠后，
            沟通效率更高，询盘转化率也更高。这是 AI 引荐转化率是 Google 自然搜索 5 倍的根本原因——
            用户已经完成了初步筛选，不是在漫无目的地浏览。
          </Para>

          <SubTitle>先发优势难以快速追赶</SubTitle>
          <Para>
            先进入 AI 认知的品牌，在多个来源积累的权威信号会形成持续的引用惯性。
            这类信号积累需要 60–90 天，竞品的追赶周期也类似。越早开始，护城河越深，越难被对手追赶。
          </Para>

          {/* ──────────────────────────────────────
              五、如何开始做 GEO
          ────────────────────────────────────── */}
          <SectionTitle>如何开始做 GEO：四步落地路径</SectionTitle>

          <div className="space-y-4 mb-8">
            {[
              {
                step: "第一步",
                title: "建立可见度基线（第 1 周）",
                body: "在 ChatGPT、Perplexity、豆包分别搜索「推荐哪家做 [你的核心业务] 的公司」，记录是否出现、排名位置和描述是否准确。这是起点，也是后续所有优化效果的对比基准。",
              },
              {
                step: "第二步",
                title: "技术可见性优化（第 1–2 周）",
                body: "在官网根目录部署 llms.txt，用精准语言描述品牌定位和核心服务；在 robots.txt 中显式开放 ClaudeBot、PerplexityBot 等 AI 爬虫权限；完善 Organization、Service、FAQPage 的 Schema 标记，帮助 AI 建立结构化品牌认知。",
              },
              {
                step: "第三步",
                title: "内容权威建设（第 2–8 周）",
                body: "围绕核心业务的高意向问题，发布 5–10 篇结构化深度文章，每篇包含可验证的数据来源，模拟学术引用风格。在知乎、行业媒体、CSDN 等 AI 高权重平台同步分发，建立第三方引用信号。",
              },
              {
                step: "第四步",
                title: "持续监测与迭代（第 8 周起）",
                body: "每两周在 5 个主流 AI 平台用标准问题库测试，记录出现率变化。根据哪类内容效果最好，动态调整内容发布方向。GEO 的长期价值来自持续积累，而不是短期冲刺。",
              },
            ].map(({ step, title, body }, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-2xl p-5"
                style={{ background: "rgba(13,21,38,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(212,168,83,0.15)", color: "#d4a853", border: "1px solid rgba(212,168,83,0.25)" }}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#d4a853" }}>{step}</p>
                  <p className="text-white font-semibold text-sm mb-2">{title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <Para>
            如果需要对这套方法论的完整解读，可以参考{" "}
            <Link href="/resources" className="underline underline-offset-2 hover:text-white transition-colors" style={{ color: "#d4a853" }}>
              GS GEO 知识库
            </Link>
            ，其中包含 GEO / AEO / LLMO 区别、各平台引用策略和优化周期的详细解析。
          </Para>

          {/* ──────────────────────────────────────
              六、FAQ
          ────────────────────────────────────── */}
          <SectionTitle>常见问题</SectionTitle>

          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ background: "rgba(13,21,38,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="font-bold text-white mb-3 text-sm leading-snug">Q：{faq.q}</p>
                <p className="text-slate-400 text-sm leading-relaxed">A：{faq.a}</p>
              </div>
            ))}
          </div>

          {/* 参考来源 */}
          <div
            className="rounded-xl p-4 mb-10 text-xs text-slate-600"
            style={{ border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p className="font-bold text-slate-500 mb-2">参考来源</p>
            <p>Aggarwal, A. et al. (2024). <em>Generative Engine Optimization</em>. KDD 2024. Princeton University.</p>
            <p className="mt-1">GS GEO 知识库 (2026). <a href="https://geo.goushaoai.com/resources" className="hover:text-slate-400 transition-colors underline">geo.goushaoai.com/resources</a></p>
          </div>

          {/* ──────────────────────────────────────
              七、CTA
          ────────────────────────────────────── */}
          <div
            className="rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f1c38 100%)", border: "1px solid rgba(212,168,83,0.15)" }}
          >
            <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
            <div className="relative z-10">
              <CheckCircle2 className="w-9 h-9 mx-auto mb-4" style={{ color: "#d4a853" }} />
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                想知道你的品牌在 AI 搜索中的真实现状？
              </h2>
              <p className="text-slate-400 text-base max-w-md mx-auto mb-7">
                GS GEO 提供免费 GEO 体检：48 小时内诊断品牌在 6 个主流 AI 平台的可见度基线，
                给出优先级最高的改进点，不附带任何销售压力。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://geo.goushaoai.com/#contact"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-[#04080f] btn-gold rounded-xl hover:-translate-y-0.5 transition-all duration-300"
                  style={{ boxShadow: "0 8px 28px rgba(212,168,83,0.3)" }}
                >
                  申请免费 GEO 体检
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl btn-outline-gold"
                >
                  <BookOpen className="w-4 h-4" />
                  查看 GEO 知识库
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
