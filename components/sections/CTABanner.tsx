import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, CheckCircle2, CalendarDays } from "lucide-react";

const points = [
  "48 小时内交付 GEO 体检报告",
  "无需信用卡，完全免费",
  "覆盖 6 大 AI 平台的诊断结果",
];

export default function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <FadeIn>
        <div className="max-w-5xl mx-auto relative">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f1c38 50%, #0a1628 100%)" }} />

            {/* Orbs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(30,58,138,0.2)" }} />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(212,168,83,0.1)" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(212,168,83,0.05)" }} />

            {/* Grid */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            {/* Gold gradient border */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(212,168,83,0.35), rgba(30,64,175,0.35), rgba(212,168,83,0.2))",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMaskComposite: "xor",
                padding: "1px",
              }} />

            {/* Content */}
            <div className="relative z-10 px-8 py-16 sm:px-16 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-sm font-medium"
                style={{ border: "1px solid rgba(212,168,83,0.35)", background: "rgba(212,168,83,0.1)", color: "#d4a853" }}>
                限时免费诊断
              </div>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.1] tracking-tight">
                现在就知道：
                <br />
                <span className="gradient-text">AI 怎么看你的品牌</span>
              </h2>

              <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
                提交你的域名，48 小时内收到完整 GEO 体检报告——
                发现你在 AI 搜索中的盲区，找到比竞品更快曝光的机会。
              </p>

              {/* Checklist */}
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mb-10">
                {points.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#d4a853" }} />
                    {p}
                  </div>
                ))}
              </div>

              {/* ── CTA 层级 ──────────────────────────── */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Level 1：主 CTA — 最大、最醒目 */}
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 px-10 py-4 text-base font-bold text-[#04080f] btn-gold rounded-xl hover:-translate-y-0.5 transition-all duration-300"
                  style={{ boxShadow: "0 8px 40px rgba(212,168,83,0.4)", minWidth: 220 }}
                >
                  <span>申请免费 GEO 体检</span>
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

              {/* Micro copy */}
              <p className="text-xs text-slate-600 mt-4">
                免费 · 无需信用卡 · 专家 1v1 解读
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
