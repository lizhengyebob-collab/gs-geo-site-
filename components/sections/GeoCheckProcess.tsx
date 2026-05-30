import { ArrowRight, ClipboardList, Search, FileText, Lightbulb, CalendarDays } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    color: "#3b82f6",
    title: "提交品牌信息",
    desc: "填写表单，告诉我们你的官网域名、所在行业和想检测的 AI 平台。无需安装任何工具，提交即完成。",
  },
  {
    num: "02",
    icon: Search,
    color: "#d4a853",
    title: "手动检测 AI 平台回答",
    desc: "GS GEO 专家用标准问题库，在 ChatGPT、Perplexity、豆包等你指定的平台逐一测试：AI 是否提到你的品牌？描述是否准确？排在第几位？",
  },
  {
    num: "03",
    icon: FileText,
    color: "#06b6d4",
    title: "输出 AI 可见度诊断",
    desc: "48 小时内交付简版诊断报告：各平台出现率、引用位置、描述准确性评分，以及当前阻止 AI 引用你的品牌的主要原因。",
  },
  {
    num: "04",
    icon: Lightbulb,
    color: "#a78bfa",
    title: "给出 3 条优化建议",
    desc: "基于诊断结果，给出优先级最高的 3 条可执行建议——包括技术层修复和内容层策略，让你知道从哪里开始最有效。",
  },
  {
    num: "05",
    icon: CalendarDays,
    color: "#10a37f",
    title: "可预约进一步咨询",
    desc: "如果需要系统推进，可以预约 30 分钟 1v1 咨询，深入讨论定制化的 GEO 优化方案和执行路径。完全没有压力。",
  },
];

export default function GeoCheckProcess() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #04080f 0%, #070d1a 60%, #04080f 100%)" }}
      />
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-medium uppercase tracking-wider"
            style={{ border: "1px solid rgba(212,168,83,0.2)", background: "rgba(212,168,83,0.08)", color: "#d4a853" }}
          >
            免费体检流程
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            申请后，<span className="gradient-text">会发生什么</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            从提交表单到拿到诊断报告，全程由 GS GEO 专家操作，你不需要做任何准备工作。
          </p>
        </FadeIn>

        {/* Steps — vertical timeline */}
        <div className="relative">
          {/* Vertical connector */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(180deg, #3b82f6, #d4a853, #06b6d4, #a78bfa, #10a37f)", opacity: 0.25 }}
          />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 80}>
                <div className="flex gap-5 sm:gap-7">
                  {/* Icon */}
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}30`,
                        boxShadow: `0 0 20px ${step.color}08`,
                      }}
                    >
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 rounded-2xl px-6 py-5 mb-1 hover:-translate-y-0.5 transition-transform duration-200"
                    style={{ background: "rgba(13,21,38,0.6)", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-black uppercase tracking-widest"
                        style={{ color: step.color }}
                      >
                        STEP {step.num}
                      </span>
                    </div>
                    <p className="text-white font-bold text-base mb-2">{step.title}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA */}
        <FadeIn delay={450} className="text-center mt-12">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-9 py-4 text-base font-bold text-[#04080f] btn-gold rounded-xl hover:-translate-y-0.5 transition-all duration-300"
            style={{ boxShadow: "0 8px 28px rgba(212,168,83,0.3)" }}
          >
            立即申请免费体检
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-slate-600 mt-3">完全免费 · 无销售骚扰 · 24 小时内联系</p>
        </FadeIn>
      </div>
    </section>
  );
}
