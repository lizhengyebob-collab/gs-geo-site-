"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const faqs = [
  /* ── 术语解释（新增，置顶）────────────────── */
  {
    q: "GEO、AEO、LLMO 分别是什么意思？有什么区别？",
    a: "这三个术语本质上指向同一件事——让你的品牌在 AI 生成的回答中出现——只是侧重点略有不同：\n\n• GEO（Generative Engine Optimization，生成式引擎优化）：最广义的术语，泛指针对 ChatGPT、Claude、Perplexity 等 AI 搜索引擎做的一切优化工作。\n\n• AEO（Answer Engine Optimization，回答引擎优化）：更强调让品牌出现在 AI「直接给出答案」的场景中，尤其是问答型查询（如「哪家公司提供 XX 服务」）。\n\n• LLMO（Large Language Model Optimization，大语言模型优化）：偏技术性称谓，强调通过技术手段（结构化数据、llms.txt、爬虫权限等）让大模型能够准确理解和引用你的品牌信息。\n\n实操中三者高度重叠，GS GEO 的服务覆盖全部三个维度。",
  },
  {
    q: "GEO 和传统 SEO 有什么区别？",
    a: "传统 SEO 优化的是 Google 等搜索引擎的排名，核心是关键词密度、外链和页面权重。GEO 针对 ChatGPT、Claude、Perplexity 等 AI 搜索引擎，核心是让 AI 在生成回答时主动引用、推荐你的品牌。两者在技术实现上有交叉（结构化数据、高质量内容都有帮助），但目标和方法论差异显著——GEO 更关注 AI 可爬性、内容权威信号和可引用内容格式，而非关键词排名。",
  },
  {
    q: "为什么 B2B 企业更需要关注 AI 搜索可见度？",
    a: "B2B 采购周期长、决策链复杂，买家在正式接触供应商之前会进行大量独立调研。2025 年的数据显示，超过 94% 的 B2B 买家在采购流程中使用了 AI 工具——而 AI 给出的推荐名单，很大程度上决定了哪些品牌能进入买家的候选视野。如果你的品牌不在 AI 的「认知范围」内，你就永远不会出现在候选名单上，无论你的产品多好。对 B2B 企业来说，AI 搜索可见度已经成为一种隐形的「入场资格」。",
  },
  {
    q: "多久能看到 AI 曝光改善的效果？",
    a: "技术性优化（llms.txt 部署、Schema 标记、AI 爬虫权限配置）通常在 2-4 周内生效，AI 平台爬虫会更新对你网站的认知。内容层面的优化（权威信号建立、引用数据植入）通常需要 60-90 天才能在 AI 引用频次上有明显体现。具体周期因品牌起点、行业竞争程度和执行深度而有所不同——我们会在体检报告中给出针对你情况的合理预期。",
  },
  {
    q: "你们支持哪些 AI 搜索平台？",
    a: "目前覆盖六大主流 AI 搜索平台：ChatGPT（含 ChatGPT Search）、Claude、Perplexity、豆包、DeepSeek 以及 Google Gemini。每个平台的引用机制和偏好有所不同——例如 ChatGPT 更偏向维基百科类权威来源，Perplexity 偏向实时性内容和第三方引用——我们针对各平台制定差异化策略。",
  },
  {
    q: "是否需要我们修改网站代码？",
    a: "部分优化需要技术配合，比如部署 llms.txt 文件、添加 JSON-LD 结构化数据、修改 robots.txt 中的 AI 爬虫规则。我们会提供完整的代码片段和操作指引，通常你的技术人员只需花 2-4 小时按文档执行。不涉及核心业务逻辑修改，对现有系统影响极小。",
  },
  {
    q: "如何衡量 AI 可见度优化的效果？",
    a: "我们通过三个层次衡量：\n\n① AI 曝光层：在目标平台模拟真实查询，追踪品牌被提及和引用的频次与质量变化；\n\n② 流量层：通过 UTM 参数追踪来自 AI 引荐的流量变化趋势；\n\n③ 转化层：分析 AI 引荐访客的询盘率和线索质量。\n\n每月报告呈现这三层数据，帮你评估真实业务价值。需要说明的是，AI 平台的引用机制不完全透明，数据只能反映可监测的部分。",
  },
  {
    q: "免费 GEO 体检和付费服务有什么区别？",
    a: "免费体检是一次性诊断：我们扫描你的网站，输出 20 项核心指标的评分和初步优化建议，帮你了解品牌当前的 AI 可见度现状。\n\n付费服务是持续执行：从报告到实施，包括技术文件部署、内容优化执行、多平台监控、竞品对比和月度策略迭代。如果你只想先看看问题在哪、值不值得投入，从免费体检开始是最低风险的方式。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#04080f] via-[#080f1f] to-[#04080f] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-medium uppercase tracking-wider"
            style={{ border: "1px solid rgba(212,168,83,0.2)", background: "rgba(212,168,83,0.08)", color: "#d4a853" }}>
            常见问题
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            有疑问？<span className="gradient-text">我们来解答</span>
          </h2>
          <p className="text-slate-400 text-sm">
            包含 GEO / AEO / LLMO 术语解释及服务常见问题
          </p>
        </FadeIn>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 40}>
              <div className={`glass-card rounded-2xl overflow-hidden transition-all duration-200 ${openIndex === i ? "" : ""}`}
                style={openIndex === i ? { borderColor: "rgba(212,168,83,0.2)" } : {}}>
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white/3 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-white font-medium text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : "text-slate-400"
                    }`}
                    style={openIndex === i ? { color: "#d4a853" } : {}}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-white/5">
                      <p className="text-slate-400 text-sm leading-relaxed mt-4 whitespace-pre-line">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom */}
        <FadeIn delay={400} className="text-center mt-10">
          <p className="text-slate-500 text-sm">
            还有其他问题？
            <a href="#contact" className="underline underline-offset-2 ml-1 transition-colors"
              style={{ color: "#d4a853" }}>
              直接联系我们
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
