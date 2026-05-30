import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, BookOpen, CheckCircle2 } from "lucide-react";
import ResourcesNav from "./ResourcesNav";

const BASE = "https://geo.goushaoai.com";

export const metadata: Metadata = {
  title: "GEO 知识库 | GS GEO",
  description:
    "6 个核心问题，帮你彻底理解 GEO（生成式引擎优化）、AEO、LLMO，以及如何在 ChatGPT、Claude、Perplexity、豆包、DeepSeek 中提升品牌 AI 搜索可见度。",
  alternates: { canonical: `${BASE}/resources` },
  openGraph: {
    title: "GEO 知识库 | GS GEO",
    description: "6 个核心问题，彻底理解 AI 搜索可见度优化（GEO / AEO / LLMO）",
    url: `${BASE}/resources`,
  },
};

/* ─────────────────────────────────────────────
   文章数据
───────────────────────────────────────────── */
const articles = [
  {
    id: "what-is-geo",
    num: "01",
    question: "什么是 GEO？",
    englishTitle: "What is Generative Engine Optimization?",
    directAnswer:
      "GEO（Generative Engine Optimization，生成式引擎优化）是系统性优化品牌内容和技术配置，使 ChatGPT、Claude、Perplexity、豆包、DeepSeek 等 AI 搜索引擎在生成回答时主动引用、推荐你的品牌的方法论。它是 AI 时代品牌数字可见度的核心框架。",
    paragraphs: [
      "当用户向 AI 提问时，AI 会从训练数据和实时索引中筛选可信来源，生成一段包含品牌推荐的「答案」。这个过程与 Google 搜索完全不同——Google 返回的是链接列表，而 AI 返回的是经过综合判断的推荐意见。你的品牌能否出现在这个答案里，取决于 AI 对你品牌的认知深度和信任程度。",
      "GEO 的优化逻辑围绕三个核心维度展开：",
      "可读性（Crawlability）：AI 爬虫能否访问并解析你的网站内容。这涉及 robots.txt 权限配置、llms.txt 部署和 Schema 标记完善。\n\n可引用性（Citability）：你的内容是否值得被 AI 引用。这涉及权威信号（数据来源、E-E-A-T 指标）、内容格式（结构化问答、列表）和信息密度。\n\n实体一致性（Entity Consistency）：你的品牌在多个第三方平台的描述是否一致。AI 通过多源印证来建立品牌知识，任何描述不一致都会降低引用置信度。",
      "GEO 并不排斥传统 SEO，两者可以协同推进，但 GEO 的目标是让 AI「说出你的名字」，而非让 Google「把你排在前面」。随着 B2B 买家越来越多地通过 AI 做采购调研，GEO 正在成为品牌数字营销的必要组成部分。",
    ],
    actions: [
      "在官网根目录部署 llms.txt，用精准的语言描述品牌定位、核心服务和目标客群，让 AI 爬虫读取到准确的品牌数字名片",
      "完善 Schema 标记（Organization、Service、FAQPage），帮助 AI 爬虫快速建立关于品牌的结构化认知，减少信息缺失和误读",
      "在知乎、行业媒体等 AI 高权重平台发布带有数据来源的专业内容，建立第三方引用信号，强化 AI 对品牌的认知置信度",
    ],
  },
  {
    id: "geo-aeo-llmo",
    num: "02",
    question: "GEO、AEO、LLMO 有什么区别？",
    englishTitle: "GEO vs AEO vs LLMO: What are the differences?",
    directAnswer:
      "GEO（生成式引擎优化）是总体框架，涵盖让品牌在 AI 搜索中全面可见的所有工作；AEO（回答引擎优化）专注于让品牌出现在 AI 直接回答用户高意向问题的场景中；LLMO（大模型优化）偏技术侧，重点让大语言模型能准确解析和提取品牌信息。三者是同一目标的不同层次。",
    paragraphs: [
      "三个术语常被混用，但理解各自侧重点有助于制定更精准的优化策略。",
      "GEO（Generative Engine Optimization）是最宽泛的术语，源自普林斯顿大学 KDD 2024 的学术研究。它涵盖从技术基础设施到内容策略再到品牌实体建设的全链路优化，是 AI 时代品牌可见度的顶层框架。",
      "AEO（Answer Engine Optimization，回答引擎优化）更聚焦于「问答场景」的覆盖。当用户问 AI「推荐哪家公司做 XX」这类高意向问题时，你的品牌能否出现——这就是 AEO 要解决的核心问题。AEO 的主要工具是高质量的问答内容资产（FAQ 页面）和 FAQPage Schema 标记。",
      "LLMO（Large Language Model Optimization，大模型优化）是技术侧的表达，强调让大语言模型能够「读懂」你：准确理解品牌定位、正确提取服务信息、避免错误描述。llms.txt 配置、JSON-LD 标记、robots.txt AI 权限设置都属于 LLMO 的范畴。",
      "实际操作中，三者是互补而非互斥的：先做好 LLMO 技术基础，再通过 AEO 建设问答内容资产，最终实现 GEO 层面的全面品牌可见度。",
    ],
    actions: [
      "LLMO 先行：部署 llms.txt、完善 Organization Schema、在 robots.txt 中开放 AI 爬虫权限，确保 AI 爬虫能准确读取品牌核心信息",
      "AEO 内容建设：围绕「推荐哪家」「怎么选」「有什么区别」类高意向问题，为每个问题准备一份结构化答案（直接答案 + 展开解释 + 可执行建议）",
      "GEO 长期运营：每月在 5 个主流 AI 平台测试 10-15 个品牌相关问题，根据出现率和描述准确性数据，动态调整内容和技术策略",
    ],
  },
  {
    id: "chatgpt-rate",
    num: "03",
    question: "企业如何提升 ChatGPT 推荐率？",
    englishTitle: "How to improve your brand's recommendation rate in ChatGPT?",
    directAnswer:
      "提升 ChatGPT 推荐率的核心路径有三条：在 ChatGPT 可索引的权威平台（知乎、行业媒体）建立一致的品牌实体内容；完善 FAQPage Schema 让 ChatGPT Search 直接抓取问答；确保品牌在多个独立来源的描述高度一致，强化 AI 的品牌认知置信度。",
    paragraphs: [
      "ChatGPT 的引用来源分为两类：训练数据（存在时效性滞后，更新周期以年为单位）和实时搜索（GPT-4o with Search 通过 Bing 实时获取内容）。对于新品牌，实时搜索渠道是最可操作的突破口，因为 Bing 索引更新快，可在数周内感知新内容。",
      "ChatGPT 的引用偏好类似维基百科写作风格：开门见山给定义，再展开说明。有明确作者署名、有数据来源、有专业机构背书的内容权重最高。这意味着在知乎、LinkedIn、行业媒体发布的深度回答，比官网营销文案更容易被引用。",
      "另一个关键因素是「实体一致性」。如果你的品牌名称在不同平台的描述存在出入（业务范围、联系方式、定位描述不一致），ChatGPT 会降低对该品牌信息的置信度，进而减少引用。建议定期核查官网、知乎简介、行业媒体简介、llms.txt 中的品牌描述是否保持一致。",
      "根据普林斯顿 KDD 2024 的研究，在内容中引用权威来源可将 AI 引用率提升 115%，加入统计数据可提升 40%，内容流畅度优化可提升 29%。这些数据提供了清晰的内容优化优先级。",
    ],
    actions: [
      "在知乎围绕「ChatGPT 推荐」「B2B 品牌 AI 曝光」相关问题发布深度回答，每篇必须包含至少 1 个外部数据引用并标注来源，模拟权威内容的写作风格",
      "在官网 FAQ 区块添加 FAQPage Schema，覆盖 10 个以上的高意向问题，让 ChatGPT Search 能直接索引和展示品牌的问答内容",
      "系统检查并统一品牌在所有平台的描述（官网 About 页、知乎简介、LinkedIn、llms.txt），消除任何描述不一致，建立清晰的品牌实体信号",
    ],
  },
  {
    id: "claude-perplexity",
    num: "04",
    question: "如何让 Claude / Perplexity 引用品牌内容？",
    englishTitle: "How to get Claude and Perplexity to cite your brand content?",
    directAnswer:
      "Claude 偏向引用专业深度、逻辑严密、有学术参考的内容，营销文案引用率极低——应发布方法论类研究内容而非推广文。Perplexity 实时爬取网络，偏好含数据来源、内容新鲜的文章——确保每篇内容有可追溯的数据点，并在可被抓取的平台发布。",
    paragraphs: [
      "Claude 和 Perplexity 的引用机制差异显著，需要分别制定策略。",
      "Claude 的引用偏好接近学术标准：内容的逻辑严密性、专业深度以及是否引用可验证的来源，权重远高于内容的营销吸引力。「这是我们的核心优势」这类营销表达几乎不会被 Claude 引用；但一篇深度分析「GEO 优化的方法论框架及数据验证」则可能获得较高引用权重。Claude 对 Common Crawl 来源的内容权重较高，学术风格的博客、研究型报告、深度分析文章是最容易被引用的格式。",
      "Perplexity 是五个平台中对「实时性」最敏感的。它通过实时网络搜索生成答案，并直接展示引用链接——这让 Perplexity 成为品牌最容易追踪引用来源的平台。Perplexity 特别偏好：有明确数据点（「根据 XX 研究，YY%...」）、有来源链接、内容近 3-6 个月内发布的文章。此外，Perplexity 高频引用知乎、即刻等社区讨论内容，在这些平台保持活跃发布也有直接效果。",
      "两个平台的共同要求：都需要 AI 爬虫有明确的访问权限。ClaudeBot 和 PerplexityBot 的 robots.txt 权限需要显式开放（而非仅依赖默认规则）。",
    ],
    actions: [
      "发布 Claude 友好内容：以「研究报告」「方法论框架」「深度分析」为题，引用可验证的真实数据（如学术研究、行业报告），文末列出参考资料，彻底避免纯广告文体",
      "发布 Perplexity 友好内容：每篇文章包含至少 2 个带来源的数据点（格式：「根据 [来源]，[数据]，[结论]」），确保在知乎等 Perplexity 高频索引的平台同步发布",
      "定期检查 robots.txt 是否明确开放 ClaudeBot、PerplexityBot、anthropic-ai 等 AI 爬虫的访问权限，并关注各平台是否更新了爬虫 User-Agent 标识",
    ],
  },
  {
    id: "b2b-why",
    num: "05",
    question: "B2B 企业为什么需要 AI 搜索可见度？",
    englishTitle: "Why do B2B companies need AI search visibility?",
    directAnswer:
      "94% 的 B2B 买家在 2025 年的采购流程中使用了 AI 工具进行调研。AI 引荐流量的转化率是 Google 自然搜索的 5 倍（14.2% vs 2.8%）。在 AI 决定推荐哪个品牌之前，你的品牌需要先进入 AI 的「认知范围」。不在 AI 名单里，意味着这轮筛选对手直接赢了。",
    paragraphs: [
      "B2B 采购决策的典型路径正在发生结构性变化。传统路径是：需求产生 → Google 搜索 → 浏览多个网站 → 联系供应商。AI 时代的新路径是：需求产生 → 向 AI 提问 → AI 给出推荐名单 → 联系候选供应商。",
      "在新路径中，如果品牌不在 AI 的推荐名单里，买家甚至不会打开你的官网。这不是点击率的问题，而是「有没有资格被看见」的问题。AI 给出的推荐名单通常只有 3-5 个品牌，竞争极为激烈——进入名单意味着几乎确定进入候选池，不在名单里意味着这轮筛选的机会已经失去。",
      "这一变化对 B2B 的影响尤为深远，原因有三：第一，B2B 采购周期长、决策链复杂，买家在接触供应商之前会做大量独立调研——这个调研过程越来越多地发生在 AI 对话框里；第二，AI 引荐的访客质量显著更高，他们通常已经通过 AI 对品牌形成了初步认知，沟通效率更高；第三，AI 可见度的先发优势很难被快速追赶——先进入 AI 认知的品牌会形成持续的引用惯性。",
      "值得注意的是：AI 搜索可见度不是「做了就有效果」的一次性工作，而是需要持续维护的品牌资产，就像传统 SEO 一样需要长期投入。越早开始，越难被竞品追赶。",
    ],
    actions: [
      "立即测试你的品牌当前的 AI 可见度基线：在 ChatGPT、Perplexity、豆包中分别搜索「推荐哪家做 [你的核心业务] 的公司」，记录是否出现、描述是否准确，作为优化起点",
      "将 AI 搜索可见度列为季度营销 OKR 的一部分，指定专人负责每月监控（用标准问题库定期测试）和内容更新，确保有人对这件事负责",
      "从最容易产生 AI 引用的内容类型开始：针对采购决策的高频问题写 3-5 篇结构化深度问答，在知乎发布，这是最低成本、最直接的 AI 可见度建设起点",
    ],
  },
  {
    id: "timeline",
    num: "06",
    question: "GEO 优化多久见效？",
    englishTitle: "How long does GEO optimization take to show results?",
    directAnswer:
      "技术层面的优化（llms.txt、Schema、AI 爬虫权限）通常 2-4 周内可被 AI 系统感知。内容层面的优化（权威信号积累、第三方引用建设）需要 60-90 天才能在 AI 引用频次上有明显体现。90 天是观察 GEO 效果的合理评估周期。",
    paragraphs: [
      "GEO 优化的效果周期因优化维度不同而差异显著，可以分为三个阶段理解。",
      "第一阶段（1-4 周）：技术可见性建立。完成 llms.txt 部署、Schema 标记完善、robots.txt AI 爬虫权限开放后，AI 平台的爬虫会在接下来的 2-4 周内重新抓取和更新对你网站的认知。这一阶段的效果通常表现为：AI 对品牌的描述从「缺失」或「错误」变为「准确」——这是最基础但最重要的前提。",
      "第二阶段（4-8 周）：内容认知积累。随着知乎回答、行业媒体文章、问答资产的持续发布，AI 系统开始在多个独立来源中看到你的品牌信息。这个「多源印证」过程会提升 AI 对品牌信息的置信度，开始在相关问题中出现偶发性引用。",
      "第三阶段（8-12 周）：引用频次稳定。当权威内容积累到一定量（通常 10-20 篇跨平台内容）、第三方引用信号足够强时，AI 引用开始趋于稳定，出现率可通过定期测试追踪。",
      "影响周期的关键变量：行业竞争激烈度（竞品 GEO 基础越强，突破越慢）、内容发布频率（每周 2 篇 vs 每月 1 篇效果差异显著）、品牌起点（完全新品牌 vs 已有一定知名度的品牌）。没有固定公式，数据追踪是校准预期的唯一可靠方式。",
    ],
    actions: [
      "从第 1 天开始建立追踪机制：在 5 个平台用 10-15 个标准问题测试品牌出现率，每周记录一次，才能看到真实进展，否则无法判断哪些优化动作真正有效",
      "不要等「内容足够多了」再开始监控。从发布第一篇内容起就追踪，哪怕出现率是 0%，这个基线数据本身就有价值——它是后续所有优化效果的对比基准",
      "制定 90 天三段式计划：第 1-30 天完成技术优化 + 首批 5 篇内容；第 31-60 天持续发布 + 扩展第三方引用来源；第 61-90 天评估数据 + 根据哪类内容效果最好调整策略",
    ],
  },
];

/* ─────────────────────────────────────────────
   小组件
───────────────────────────────────────────── */
function DirectAnswerBlock({ text }: { text: string }) {
  return (
    <div
      className="rounded-2xl p-6 mb-6"
      style={{ background: "rgba(212,168,83,0.07)", border: "1px solid rgba(212,168,83,0.2)" }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#d4a853" }} />
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#d4a853" }}>
          直接回答
        </span>
      </div>
      <p className="text-white text-base leading-relaxed font-medium">{text}</p>
    </div>
  );
}

function ArticleSection({ article }: { article: (typeof articles)[0] }) {
  return (
    <article
      id={article.id}
      className="scroll-mt-24 pb-16 border-b last:border-b-0"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <span
          className="text-4xl font-black leading-none mt-1 flex-shrink-0"
          style={{ color: "rgba(212,168,83,0.25)" }}
        >
          {article.num}
        </span>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            {article.question}
          </h2>
          <p className="text-slate-600 text-sm mt-1">{article.englishTitle}</p>
        </div>
      </div>

      {/* Direct answer */}
      <DirectAnswerBlock text={article.directAnswer} />

      {/* Expanded explanation */}
      <div className="mb-8 space-y-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
          展开解释
        </h3>
        {article.paragraphs.map((para, i) => (
          <p key={i} className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
            {para}
          </p>
        ))}
      </div>

      {/* Actionable tips */}
      <div>
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
          可执行建议
        </h3>
        <ol className="space-y-4">
          {article.actions.map((action, i) => (
            <li key={i} className="flex items-start gap-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                style={{ background: "rgba(212,168,83,0.15)", color: "#d4a853", border: "1px solid rgba(212,168,83,0.25)" }}
              >
                {i + 1}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed pt-0.5">{action}</p>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   FAQPage JSON-LD
───────────────────────────────────────────── */
function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: articles.map((a) => ({
      "@type": "Question",
      name: a.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: a.directAnswer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function ResourcesPage() {
  return (
    <>
      <FaqSchema />

      <div className="min-h-screen bg-[#04080f]">
        {/* Top bar */}
        <div
          className="fixed top-0 left-0 right-0 z-40 h-14 flex items-center px-4 sm:px-6"
          style={{ background: "rgba(4,8,15,0.95)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(212,168,83,0.08)" }}
        >
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
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
              <span className="text-sm font-semibold text-white">GEO 知识库</span>
            </div>

            <a
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-[#04080f] btn-gold rounded-lg"
              style={{ boxShadow: "0 2px 12px rgba(212,168,83,0.2)" }}
            >
              <span>免费体检</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          {/* Page header */}
          <div className="max-w-2xl mb-14">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full text-xs font-medium"
              style={{ border: "1px solid rgba(212,168,83,0.2)", background: "rgba(212,168,83,0.08)", color: "#d4a853" }}
            >
              GEO / AEO / LLMO 权威解读
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4">
              GEO 知识库
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              6 个核心问题，帮你彻底理解 AI 搜索可见度优化的方法论、平台差异和执行路径。
              每个问题均包含直接答案、深度解析和可执行建议。
            </p>

            {/* Platform coverage */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["ChatGPT", "Claude", "Perplexity", "豆包", "DeepSeek"].map((p) => (
                <span
                  key={p}
                  className="px-3 py-1 rounded-full text-xs font-medium text-slate-400"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Two-column layout */}
          <div className="flex gap-12 items-start">
            {/* Sticky sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24">
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(13,21,38,0.6)", border: "1px solid rgba(212,168,83,0.08)" }}
              >
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-4">
                  目录
                </p>
                <ResourcesNav />

                <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-xs text-slate-600 px-4 mb-3">还有疑问？</p>
                  <a
                    href="/#contact"
                    className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-[#04080f] btn-gold rounded-xl"
                    style={{ boxShadow: "0 4px 16px rgba(212,168,83,0.2)" }}
                  >
                    <span>申请免费体检</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="/#contact"
                    className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 text-sm font-medium rounded-xl btn-outline-gold"
                  >
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>预约咨询</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0 space-y-0">
              {articles.map((article) => (
                <ArticleSection key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-20 rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f1c38 100%)", border: "1px solid rgba(212,168,83,0.15)" }}
          >
            <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
            <div className="relative z-10">
              <CheckCircle2 className="w-10 h-10 mx-auto mb-4" style={{ color: "#d4a853" }} />
              <h2 className="text-3xl font-black text-white mb-3">
                看完还不确定从哪里开始？
              </h2>
              <p className="text-slate-400 text-base max-w-lg mx-auto mb-8">
                先做免费 GEO 体检。我们在 48 小时内诊断你的官网，告诉你品牌在 AI 搜索中的真实现状和优先级最高的改进点。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2.5 px-9 py-4 text-base font-bold text-[#04080f] btn-gold rounded-xl hover:-translate-y-0.5 transition-all duration-300"
                  style={{ boxShadow: "0 8px 32px rgba(212,168,83,0.3)" }}
                >
                  <span>申请免费 GEO 体检</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-xl btn-outline-gold"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>预约咨询</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
