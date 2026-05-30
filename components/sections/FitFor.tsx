import { CheckCircle2, XCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const fits = [
  "B2B SaaS、企业服务或专业服务公司，买家会主动做供应商调研",
  "品牌已有基础，但在 AI 搜索中几乎不出现或被错误描述",
  "正在做内容营销，想让内容被 AI 平台真正引用",
  "新品牌上线初期，想提前建立 AI 可见度基础",
  "竞品在 ChatGPT / Perplexity 等平台被频繁推荐，自己却隐身",
  "希望进入 B2B 买家的 AI 采购调研候选名单",
];

const notFits = [
  "主要依赖 Google 搜索广告或付费投放的纯流量驱动品牌",
  "目标客户完全通过线下渠道或关系网络成交，不做线上调研",
  "希望 3 天内立竿见影——GEO 内容信号积累至少需要 60–90 天",
  "没有意愿长期投入内容建设的团队（GEO 的核心资产是内容）",
  "面向个人消费者的 B2C 冲动购买场景，决策链极短",
];

export default function FitFor() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-medium uppercase tracking-wider"
            style={{ border: "1px solid rgba(212,168,83,0.2)", background: "rgba(212,168,83,0.08)", color: "#d4a853" }}
          >
            适用范围
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            GEO 优化<span className="gradient-text">适合哪些企业</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            诚实说明适合和不适合的场景，让你在申请前就能判断是否值得投入。
          </p>
        </FadeIn>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Fits */}
          <FadeIn direction="left">
            <div
              className="rounded-2xl p-8 h-full"
              style={{ background: "rgba(13,21,38,0.7)", border: "1px solid rgba(16,163,127,0.15)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(16,163,127,0.12)", border: "1px solid rgba(16,163,127,0.2)" }}
                >
                  <CheckCircle2 className="w-5 h-5" style={{ color: "#10a37f" }} />
                </div>
                <div>
                  <p className="text-white font-bold text-base">适合的企业</p>
                  <p className="text-slate-600 text-xs">GEO 能带来明确价值的场景</p>
                </div>
              </div>
              <ul className="space-y-3.5">
                {fits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#10a37f" }}
                    />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Not fits */}
          <FadeIn direction="right" delay={80}>
            <div
              className="rounded-2xl p-8 h-full"
              style={{ background: "rgba(13,21,38,0.7)", border: "1px solid rgba(239,68,68,0.1)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)" }}
                >
                  <XCircle className="w-5 h-5" style={{ color: "#f87171" }} />
                </div>
                <div>
                  <p className="text-white font-bold text-base">暂不适合的场景</p>
                  <p className="text-slate-600 text-xs">GEO 可能不是首选解决方案</p>
                </div>
              </div>
              <ul className="space-y-3.5">
                {notFits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#f87171" }}
                    />
                    <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Note */}
        <FadeIn delay={200} className="mt-8 text-center">
          <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
            不确定是否适合？申请免费 GEO 体检，我们会如实告知当前状况和性价比评估，不会强行推销。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
