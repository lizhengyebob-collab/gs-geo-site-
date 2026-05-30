import { FadeIn } from "@/components/ui/FadeIn";
import { AlertTriangle, TrendingUp, Users, Zap, ArrowRight, CalendarDays } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    color: "#f59e0b",
    stat: "63%",
    title: "品牌在 AI 中几乎隐身",
    desc: "超过六成的 B2B 企业在主流 AI 搜索平台中几乎没有曝光，竞品正悄悄占领买家心智。",
  },
  {
    icon: Users,
    color: "#ef4444",
    stat: "94%",
    title: "买家已用 AI 做决策",
    desc: "94% 的 B2B 买家在 2025 年采购流程中使用了 AI 工具进行供应商调研和对比。",
  },
  {
    icon: TrendingUp,
    color: "#3b82f6",
    stat: "5×",
    title: "AI 引荐转化远超 Google",
    desc: "AI 引荐访客的转化率达 14.2%，是 Google 自然搜索（2.8%）的 5 倍以上。",
  },
  {
    icon: Zap,
    color: "#d4a853",
    stat: "NOW",
    title: "窗口期正在快速关闭",
    desc: "AI 搜索生态的品牌认知正在快速固化，率先布局的企业将建立难以被追赶的护城河。",
  },
];

export default function WhyNow() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 100% 60% at 50% 50%, rgba(239,68,68,0.03) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-red-500/20 bg-red-500/8 text-red-400 text-xs font-medium uppercase tracking-wider">
            <AlertTriangle className="w-3 h-3" />
            为什么现在
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            AI 搜索已经改变<span className="text-red-400">买家行为</span>
            <br />
            你的品牌还在<span className="gradient-text">隐身</span>吗？
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            当你的潜在客户向 ChatGPT 询问"最好的 XX 软件是什么"，AI 给出的答案里，有你的竞品，但没有你。
          </p>
        </FadeIn>

        {/* Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {problems.map((p, i) => (
            <FadeIn key={p.title} delay={i * 100}>
              <div className="glass-card rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                style={{ borderColor: `${p.color}12` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${p.color}15`, border: `1px solid ${p.color}25` }}>
                  <p.icon className="w-5 h-5" style={{ color: p.color }} />
                </div>
                <div className="text-4xl font-black mb-1" style={{ color: p.color }}>{p.stat}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{p.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Visual: Before vs After */}
        <FadeIn delay={200}>
          <div className="glass-card rounded-2xl p-8 lg:p-12 mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Before */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/8 text-red-400 text-xs font-medium mb-6">
                  ✕ 没有 GEO 优化前
                </div>
                <div className="space-y-3">
                  {[
                    "最好的智能客服 SaaS 是什么？",
                    "推荐哪些 B2B 营销自动化工具？",
                    "有哪些国产 CRM 值得企业使用？",
                  ].map((q) => (
                    <div key={q} className="p-4 rounded-xl bg-white/3 border border-white/5">
                      <div className="text-xs text-slate-500 mb-2">用户提问</div>
                      <div className="text-slate-300 text-sm mb-3">「{q}」</div>
                      <div className="text-xs text-red-400/80 flex items-center gap-1">
                        <span>✕</span><span>你的品牌未被提及，竞品获得推荐</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/8 text-green-400 text-xs font-medium mb-6">
                  ✓ GEO 优化后
                </div>
                <div className="space-y-3">
                  {[
                    { q: "最好的智能客服 SaaS 是什么？",    rank: "#1 推荐" },
                    { q: "推荐哪些 B2B 营销自动化工具？",  rank: "核心引用" },
                    { q: "有哪些国产 CRM 值得企业使用？",  rank: "首选方案" },
                  ].map((item) => (
                    <div key={item.q} className="p-4 rounded-xl bg-green-500/5 border border-green-500/15">
                      <div className="text-xs text-slate-500 mb-2">用户提问</div>
                      <div className="text-slate-300 text-sm mb-3">「{item.q}」</div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-green-400 flex items-center gap-1">
                          <span>✓</span><span><strong>你的品牌</strong> 被 AI 主动引用推荐</span>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
                          {item.rank}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── CTA 层级 ──────────────────────────── */}
        <FadeIn delay={300} className="text-center">
          <p className="text-slate-400 text-base mb-6">
            现在就了解你的品牌在 AI 搜索中的真实状态
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Level 1 */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-9 py-4 text-base font-bold text-[#04080f] btn-gold rounded-xl hover:-translate-y-0.5 transition-all duration-300"
              style={{ boxShadow: "0 8px 28px rgba(212,168,83,0.3)" }}
            >
              <span>免费 GEO 体检</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* Level 2 */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-xl transition-all duration-200 btn-outline-gold"
            >
              <CalendarDays className="w-4 h-4" />
              <span>预约咨询</span>
            </a>
          </div>
          <p className="text-xs text-slate-600 mt-3">免费 · 无需信用卡 · 48小时交付报告</p>
        </FadeIn>
      </div>
    </section>
  );
}
