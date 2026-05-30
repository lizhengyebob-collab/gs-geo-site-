"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const faqs = [
  {
    q: "GEO 和传统 SEO 有什么区别？",
    a: "传统 SEO 优化的是 Google 等搜索引擎的排名，核心是关键词密度、外链和页面权重。GEO（生成式引擎优化）则针对 ChatGPT、Claude、Perplexity 等 AI 搜索引擎，核心是让 AI 在生成回答时主动引用、推荐你的品牌。两者在技术实现上有交叉，但目标和方法论差异显著——GEO 更关注结构化数据、权威信号、AI 爬虫访问和可引用内容格式。",
  },
  {
    q: "多久能看到 AI 曝光提升的效果？",
    a: "技术性优化（llms.txt 部署、Schema 标记、AI 爬虫权限配置）通常在 2-4 周内生效，AI 平台的爬虫会更新其对你网站的认知。内容层面的优化（权威信号建立、引用数据植入）通常需要 60-90 天才能在 AI 引用频次上显著体现。我们的客户平均在 90 天后看到 AI 曝光 +200%-+500% 的提升区间。",
  },
  {
    q: "你们支持哪些 AI 搜索平台？",
    a: "我们目前覆盖六大主流 AI 搜索平台：ChatGPT（包括 ChatGPT Search）、Claude、Perplexity、豆包、DeepSeek 以及 Google Gemini。每个平台的引用算法和偏好有所不同——例如 ChatGPT 更偏向 Wikipedia 类权威来源，Perplexity 偏向实时性内容，我们针对各平台制定差异化策略。",
  },
  {
    q: "是否需要我们修改网站代码？",
    a: "部分优化需要技术配合，比如部署 llms.txt 文件、添加 JSON-LD 结构化数据、修改 robots.txt 中的 AI 爬虫规则。我们会提供完整的代码片段和操作指引，通常只需要你的技术人员花费 2-4 小时按照我们的文档执行。不涉及核心业务逻辑修改，风险极低。",
  },
  {
    q: "如何衡量 AI 可见度优化的 ROI？",
    a: "我们通过三个层次追踪 ROI：（1）AI 曝光层：在目标平台上模拟真实查询，追踪品牌被提及和引用的频次与质量；（2）流量层：通过 UTM 追踪 AI 引荐流量的变化；（3）转化层：分析 AI 引荐访客的询盘率、线索质量和销售转化。每月报告会呈现这三层数据，帮你评估真实业务价值。",
  },
  {
    q: "企业版和专业版可以先试用再购买吗？",
    a: "可以。所有方案都从免费 GEO 体检开始——我们先对你的网站进行免费诊断，交付一份 20 项指标的初步报告，让你在投入前先看到问题所在和优化潜力。体验满意后再选择合适方案，我们也支持按季度付费降低采购风险。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] via-[#080f1f] to-[#050a14] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-blue-500/20 bg-blue-500/8 text-blue-400 text-xs font-medium uppercase tracking-wider">
            常见问题
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            有疑问？<span className="gradient-text">我们来解答</span>
          </h2>
        </FadeIn>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className={`glass-card rounded-2xl overflow-hidden transition-all duration-200 ${openIndex === i ? "border-blue-500/20" : ""}`}>
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white/3 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-white font-medium text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180 text-blue-400" : "text-slate-400"
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-white/5">
                      <p className="text-slate-400 text-sm leading-relaxed mt-4">{faq.a}</p>
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
            <a href="#contact" className="text-blue-400 hover:text-blue-300 ml-1 underline underline-offset-2">
              直接联系我们
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
