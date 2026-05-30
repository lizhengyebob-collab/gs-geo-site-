import { ClipboardCheck, Settings2, Rocket, ArrowRight, CalendarDays } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    color: "#3b82f6",
    title: "全面诊断",
    subtitle: "48小时内交付体检报告",
    desc: "提交你的官网域名，我们的 GEO 引擎自动扫描 47 个优化维度——包括 AI 爬虫访问权限、结构化数据完整性、E-E-A-T 权威信号、实体一致性等，生成带优先级的优化清单。",
    details: [
      "AI 爬虫可访问性检测",
      "JSON-LD 架构完整性评估",
      "llms.txt 及 robots.txt 分析",
      "内容权威性与引用准备度",
    ],
  },
  {
    number: "02",
    icon: Settings2,
    color: "#d4a853",
    title: "精准优化",
    subtitle: "逐项落地实施优化方案",
    desc: "依据诊断报告，由专业团队执行系统性优化：部署 llms.txt、完善 JSON-LD Schema、强化 E-E-A-T 信号、植入权威统计数据、优化 FAQ 结构、设置 AI 爬虫访问权限。",
    details: [
      "llms.txt 文件部署与维护",
      "结构化数据（Schema.org）完善",
      "权威信号与引用数据植入",
      "跨平台实体一致性修正",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    color: "#06b6d4",
    title: "持续增长",
    subtitle: "可见度持续提升，ROI 可追踪",
    desc: "上线后进入持续监控与运营阶段。每月提供 AI 可见度月报，追踪各平台曝光趋势、引用质量变化、竞品对比分析，并根据算法变化动态调整策略。",
    details: [
      "6 大 AI 平台曝光数据看板",
      "竞品 AI 可见度横向对比",
      "月度优化策略迭代",
      "ROI 归因与转化追踪",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(30,58,138,0.05)" }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-medium uppercase tracking-wider"
            style={{ border: "1px solid rgba(212,168,83,0.2)", background: "rgba(212,168,83,0.08)", color: "#d4a853" }}>
            工作原理
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            三步从<span className="gradient-text">隐身到被 AI 引用</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            系统化、可量化的 AI 可见度提升路径——不靠运气，靠方法论
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[calc(33.33%-60px)] right-[calc(33.33%-60px)] h-px"
            style={{ background: "linear-gradient(90deg, #3b82f6, #d4a853, #06b6d4)", opacity: 0.35 }} />

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 150}>
              <div className="group glass-card rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${step.color}08 0%, transparent 70%)` }} />

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${step.color}25, ${step.color}10)`, border: `1px solid ${step.color}30` }}>
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase" style={{ color: step.color }}>
                      STEP {step.number}
                    </div>
                    <div className="text-white font-bold text-lg">{step.title}</div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-3">{step.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{step.desc}</p>

                <ul className="space-y-2">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: step.color }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── CTA 层级 ──────────────────────────── */}
        <FadeIn delay={400} className="text-center mt-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Level 1：主 CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-9 py-4 text-base font-bold text-[#04080f] btn-gold rounded-xl hover:-translate-y-0.5 transition-all duration-300"
              style={{ boxShadow: "0 8px 28px rgba(212,168,83,0.3)" }}
            >
              <span>免费 GEO 体检</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Level 2：辅助 CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-xl transition-all duration-200 btn-outline-gold"
            >
              <CalendarDays className="w-4 h-4" />
              <span>预约咨询</span>
            </a>
          </div>
          <p className="text-xs text-slate-600 mt-3">免费诊断 · 48小时报告 · 无需信用卡</p>
        </FadeIn>
      </div>
    </section>
  );
}
