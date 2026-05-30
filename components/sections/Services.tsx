import { Search, BarChart3, Link2, Eye } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const services = [
  {
    icon: Search,
    colorHex: "#3b82f6",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500",
    title: "GEO 搜索体检",
    subtitle: "47 维度全面诊断",
    desc: "基于普林斯顿 KDD 2024 研究方法论，对你的品牌在 AI 搜索引擎中的可见度进行全面评分。涵盖结构化数据、llms.txt、E-E-A-T 信号、AI 爬虫访问权限等核心维度，生成可执行的优化报告。",
    tags: ["结构化数据", "AI 可爬性", "实体一致性"],
    score: "GEO 评分 0-100",
  },
  {
    icon: BarChart3,
    colorHex: "#8b5cf6",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
    title: "品牌 AI 可见度分析",
    subtitle: "多平台实时监控",
    desc: "持续追踪你的品牌在 ChatGPT、Claude、Perplexity、豆包、DeepSeek 等平台的曝光频次、引用质量和情感倾向。与竞品进行横向对比，发现差距和机会窗口。",
    tags: ["曝光频次追踪", "竞品对比", "情感分析"],
    score: "多平台覆盖监控",
  },
  {
    icon: Link2,
    colorHex: "#06b6d4",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-500",
    title: "AI 引用优化",
    subtitle: "提升被 AI 引用概率",
    desc: "基于研究验证的方法，优化你的内容被 AI 引用的概率。包括权威信号强化（+115%）、数据引用植入（+40%）、FAQ 结构优化、llms.txt 部署、JSON-LD 架构标记等系统性改造。",
    tags: ["权威信号 +115%", "FAQ 优化", "llms.txt 部署"],
    score: "引用率提升验证",
  },
  {
    icon: Eye,
    colorHex: "#f59e0b",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
    title: "AI 曝光持续运营",
    subtitle: "长效可见度保障",
    desc: "建立品牌 AI 曝光的持续运营体系。定期更新内容新鲜度、监控 AI 算法变化、调整优化策略、生成月度可见度报告，确保你的品牌在 AI 搜索格局演变中保持领先。",
    tags: ["月度复盘报告", "算法变化跟踪", "策略动态调整"],
    score: "长效持续运营",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] via-[#080f1f] to-[#050a14] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-blue-500/20 bg-blue-500/8 text-blue-400 text-xs font-medium uppercase tracking-wider">
            核心服务
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            AI 时代的<span className="gradient-text">全栈可见度</span>解决方案
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            从诊断到优化，从监控到运营——我们帮你在 AI 搜索生态中建立持久的品牌优势
          </p>
        </FadeIn>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <FadeIn key={svc.title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group relative glass-card rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden">
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${svc.colorHex}08 0%, transparent 70%)` }}
                />

                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${svc.colorHex}15`, border: `1px solid ${svc.colorHex}25` }}
                  >
                    <svc.icon className="w-6 h-6" style={{ color: svc.colorHex }} />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: `${svc.colorHex}10`, border: `1px solid ${svc.colorHex}20`, color: svc.colorHex }}
                  >
                    {svc.score}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1">{svc.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{svc.subtitle}</p>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{svc.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/8 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${svc.gradientFrom} ${svc.gradientTo} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
