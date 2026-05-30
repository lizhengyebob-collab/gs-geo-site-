import { FadeIn } from "@/components/ui/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "接入 AiVis 的 GEO 优化方案后，我们在 Perplexity 上的曝光量在两个月内增长了近 4 倍。更重要的是，来自 AI 引荐的销售线索质量明显更高，客户在第一次沟通时就已经对我们的产品有了清晰认知。",
    name: "李明远",
    title: "CMO",
    company: "某智能销售 SaaS 平台",
    industry: "B2B SaaS",
    metrics: "AI 曝光 +380%",
    avatar: "李",
    color: "#3b82f6",
  },
  {
    content:
      "我们之前完全不知道豆包和 DeepSeek 对品牌的影响有多大。AiVis 团队发现了我们在这两个平台上存在严重的实体错误——品类被错误标注，导致竞品一直拿到本该属于我们的推荐机会。修复之后效果立竿见影。",
    name: "张晓彤",
    title: "品牌增长负责人",
    company: "某跨境美妆品牌",
    industry: "跨境电商",
    metrics: "豆包曝光 +290%",
    avatar: "张",
    color: "#8b5cf6",
  },
  {
    content:
      "作为一家咨询公司，我们的客户在决策前会大量使用 Claude 和 Perplexity 做供应商调研。GEO 优化之后，我们发现来自 AI 渠道的高质量询盘增加了 120%，而且客户的决策周期明显缩短了——因为 AI 已经帮他们做了大量的初步筛选工作。",
    name: "陈志远",
    title: "市场总监",
    company: "某数字化转型咨询公司",
    industry: "企业咨询",
    metrics: "高质量询盘 +120%",
    avatar: "陈",
    color: "#06b6d4",
  },
  {
    content:
      "体检报告非常详细，每一项问题都有清晰的优先级和执行步骤。我们的技术团队按照报告执行只花了不到一天，一个月后就看到了明显的 AI 曝光提升。性价比极高，比我们自己摸索省了太多时间。",
    name: "王雅婷",
    title: "增长负责人",
    company: "某 HR SaaS 平台",
    industry: "HR Tech",
    metrics: "执行周期缩短 80%",
    avatar: "王",
    color: "#f59e0b",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(139,92,246,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-purple-500/20 bg-purple-500/8 text-purple-400 text-xs font-medium uppercase tracking-wider">
            客户评价
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            他们已经<span className="gradient-text">领先一步</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            来自不同行业的客户分享他们的 AI 可见度增长故事
          </p>
        </FadeIn>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 80}>
              <div className="group glass-card rounded-2xl p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                {/* Accent */}
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background: t.color }} />

                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-6 h-6 opacity-20" style={{ color: t.color }} />
                </div>

                {/* Content */}
                <p className="text-slate-300 text-sm leading-relaxed mb-8 italic">
                  "{t.content}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${t.color}60, ${t.color}30)`, border: `1px solid ${t.color}40` }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{t.name}</div>
                      <div className="text-slate-500 text-xs">{t.title} · {t.company}</div>
                    </div>
                  </div>

                  {/* Metric badge */}
                  <div
                    className="px-3 py-1.5 rounded-full text-xs font-bold flex-shrink-0"
                    style={{ background: `${t.color}15`, border: `1px solid ${t.color}25`, color: t.color }}
                  >
                    {t.metrics}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stars row */}
        <FadeIn delay={300} className="text-center mt-12">
          <div className="inline-flex flex-col items-center gap-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              平均客户满意度 <strong className="text-white">4.9 / 5.0</strong>，超过 <strong className="text-white">200+</strong> 家企业信任
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
