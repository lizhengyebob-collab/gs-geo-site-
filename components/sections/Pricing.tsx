"use client";

import { Check, Zap, Sparkles, TrendingUp, Building2, ArrowRight, CalendarDays, Users } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const plans = [
  {
    id: "free",
    icon: Zap,
    name: "免费体检",
    tagline: "了解现状，零风险起步",
    price: "¥0",
    priceNote: "永久免费",
    priceStyle: "free",          // 蓝色醒目
    cta: "立即免费体检",
    ctaStyle: "gold",
    ctaHref: "#contact",
    highlight: false,
    color: "#3b82f6",
    badge: null,
    audience: {
      label: "适合",
      desc: "想先了解品牌 AI 可见度现状、评估优化价值的企业",
    },
    features: [
      "1 个域名 GEO 基础体检",
      "20 项核心指标诊断评分",
      "AI 爬虫访问权限检测",
      "llms.txt 现状分析",
      "基础优化建议清单",
      "48 小时内交付报告",
      "专家报告 1v1 解读",
    ],
    notIncluded: [
      "优化执行",
      "持续监控",
    ],
  },
  {
    id: "standard",
    icon: Sparkles,
    name: "标准版",
    tagline: "打好 AI 可见度基础",
    price: "咨询报价",
    priceNote: "按月或按季订阅",
    priceStyle: "consult",
    cta: "预约咨询",
    ctaStyle: "outline",
    ctaHref: "#contact",
    highlight: false,
    color: "#d4a853",
    badge: null,
    audience: {
      label: "适合",
      desc: "中小型企业，初次系统化布局 AI 搜索可见度，希望快速建立基础护城河",
    },
    features: [
      "3 个域名全量 GEO 体检（47 维度）",
      "个性化优化执行方案",
      "llms.txt + JSON-LD Schema 部署",
      "2 大 AI 平台曝光监控",
      "季度 AI 可见度分析报告",
      "每月 1 次专家策略沟通",
      "基础竞品 AI 曝光对比",
    ],
    notIncluded: [
      "全平台监控（6大）",
      "专属执行团队",
    ],
  },
  {
    id: "growth",
    icon: TrendingUp,
    name: "增长版",
    tagline: "系统化持续提升 AI 曝光",
    price: "咨询报价",
    priceNote: "按月订阅，支持年付优惠",
    priceStyle: "consult",
    cta: "预约咨询",
    ctaStyle: "blue",
    ctaHref: "#contact",
    highlight: true,
    color: "#3b82f6",
    badge: "最受欢迎",
    audience: {
      label: "适合",
      desc: "快速成长的企业，需要系统化、可量化的 AI 可见度持续运营与竞品超越策略",
    },
    features: [
      "5 个域名全量 GEO 体检（47 维度）",
      "全套技术文件部署与维护",
      "4 大 AI 平台曝光实时监控",
      "月度 AI 可见度深度报告",
      "竞品 AI 引用频次对比分析",
      "每月 2 次专家策略沟通",
      "ROI 归因与转化追踪",
      "内容引用度优化（+33% 统计数据植入）",
    ],
    notIncluded: [],
  },
  {
    id: "enterprise",
    icon: Building2,
    name: "企业版",
    tagline: "专属团队，全定制方案",
    price: "定制报价",
    priceNote: "根据业务规模量身定制",
    priceStyle: "custom",
    cta: "预约咨询",
    ctaStyle: "outline",
    ctaHref: "#contact",
    highlight: false,
    color: "#d4a853",
    badge: null,
    audience: {
      label: "适合",
      desc: "大型企业或多品牌集团，需要专属执行团队、全平台深度运营和 SLA 服务保障",
    },
    features: [
      "无限域名覆盖",
      "6 大 AI 平台全覆盖监控",
      "专属优化执行团队驻场",
      "全定制 AI 可见度增长策略",
      "周度深度分析报告",
      "竞品情报深度追踪",
      "专属客户成功经理",
      "SLA 服务保障协议",
    ],
    notIncluded: [],
  },
];

function PriceDisplay({ plan }: { plan: typeof plans[0] }) {
  if (plan.priceStyle === "free") {
    return (
      <div className="mb-1">
        <span className="text-3xl font-black" style={{ color: "#3b82f6" }}>¥0</span>
        <span className="text-slate-500 text-sm ml-2">永久免费</span>
      </div>
    );
  }
  if (plan.priceStyle === "custom") {
    return (
      <div className="mb-1">
        <span className="text-xl font-bold text-white">定制报价</span>
        <p className="text-slate-500 text-xs mt-0.5">{plan.priceNote}</p>
      </div>
    );
  }
  return (
    <div className="mb-1">
      <span className="text-xl font-bold text-white">咨询报价</span>
      <p className="text-slate-500 text-xs mt-0.5">{plan.priceNote}</p>
    </div>
  );
}

function PlanCTA({ plan }: { plan: typeof plans[0] }) {
  if (plan.ctaStyle === "gold") {
    return (
      <a href={plan.ctaHref}
        className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-bold text-[#04080f] btn-gold hover:-translate-y-0.5 transition-all duration-200"
        style={{ boxShadow: "0 4px 20px rgba(212,168,83,0.25)" }}>
        <span>{plan.cta}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    );
  }
  if (plan.ctaStyle === "blue") {
    return (
      <a href={plan.ctaHref}
        className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-bold text-white btn-gradient hover:-translate-y-0.5 transition-all duration-200"
        style={{ boxShadow: "0 4px 20px rgba(30,64,175,0.3)" }}>
        <span>{plan.cta}</span>
        <CalendarDays className="w-3.5 h-3.5" />
      </a>
    );
  }
  return (
    <a href={plan.ctaHref}
      className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold btn-outline-gold hover:-translate-y-0.5 transition-all duration-200">
      <CalendarDays className="w-3.5 h-3.5" />
      <span>{plan.cta}</span>
    </a>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(212,168,83,0.03)" }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-medium uppercase tracking-wider"
            style={{ border: "1px solid rgba(212,168,83,0.2)", background: "rgba(212,168,83,0.08)", color: "#d4a853" }}>
            套餐方案
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            找到适合你的<span className="gradient-text">增长方案</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            从免费体检开始验证价值，再选择匹配业务阶段的服务深度
          </p>
        </FadeIn>

        {/* Cards — 2×2 on md, 4-col on xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-start">
          {plans.map((plan, i) => (
            <FadeIn key={plan.id} delay={i * 90}>
              <div className={`relative rounded-2xl flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "gradient-border shadow-2xl"
                  : "glass-card hover:shadow-xl"
              }`}
                style={plan.highlight ? { boxShadow: "0 0 50px rgba(30,64,175,0.12)" } : {}}>

                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white btn-gradient whitespace-nowrap"
                    style={{ boxShadow: "0 4px 16px rgba(30,64,175,0.4)" }}>
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className="p-7 flex flex-col h-full">
                  {/* Plan icon + name */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${plan.color}15`, border: `1px solid ${plan.color}25` }}>
                      <plan.icon className="w-5 h-5" style={{ color: plan.color }} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-base">{plan.name}</div>
                      <div className="text-slate-500 text-xs">{plan.tagline}</div>
                    </div>
                  </div>

                  {/* ── 适合人群（重点展示）─────────── */}
                  <div className="rounded-xl p-4 mb-5"
                    style={{ background: `${plan.color}08`, border: `1px solid ${plan.color}18` }}>
                    <div className="flex items-center gap-1.5 mb-2">
                      <Users className="w-3.5 h-3.5 flex-shrink-0" style={{ color: plan.color }} />
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: plan.color }}>
                        适合人群
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{plan.audience.desc}</p>
                  </div>

                  {/* ── 包含服务（重点展示）─────────── */}
                  <div className="mb-6 flex-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      包含服务
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: `${plan.color}20` }}>
                            <Check className="w-2.5 h-2.5" style={{ color: plan.color }} />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Not included */}
                    {plan.notIncluded.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {plan.notIncluded.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-slate-700 text-[10px] leading-none">—</span>
                            </div>
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* ── 价格（弱化）─────────────────── */}
                  <div className="pt-4 mb-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <PriceDisplay plan={plan} />
                  </div>

                  {/* CTA */}
                  <PlanCTA plan={plan} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom note */}
        <FadeIn delay={400} className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            不确定哪个方案适合你？
            <a href="#contact" className="underline underline-offset-2 ml-1 hover:text-slate-300 transition-colors"
              style={{ color: "#d4a853" }}>
              预约免费咨询
            </a>
            ，我们根据你的业务阶段推荐最合适的方案。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
