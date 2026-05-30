import { FadeIn } from "@/components/ui/FadeIn";
import { Monitor, BookOpen, Globe, Briefcase, ArrowRight } from "lucide-react";

const cases = [
  {
    id: "saas",
    icon: Monitor,
    industry: "B2B SaaS 企业",
    scenario: "竞品被 AI 推荐，自身品牌几乎不出现",
    platforms: ["ChatGPT", "Perplexity"],
    color: "#3b82f6",
    challenge:
      "该企业产品已有一定市场知名度，但当用户向 ChatGPT、Perplexity 提问同类产品推荐时，AI 的回答中频繁出现竞品名称，自身品牌几乎没有被提及——即使用户描述的需求场景与其产品高度匹配。",
    approach: [
      "建立核心业务关键词的 AI 搜索监测基线，明确品牌在各平台的可见度缺口",
      "重构官网信息架构，增强 AI 爬虫对核心产品功能与适用场景的理解",
      "围绕高频采购问题建设问答内容资产，补充 AI 可引用的结构化信息",
      "优化 Schema 标记与 llms.txt，提升品牌内容被 AI 识别和引用的概率",
    ],
    results: [
      { label: "品牌提及率", desc: "核心查询场景下，AI 回答中的品牌提及频次明显提升" },
      { label: "场景覆盖", desc: "更多与产品匹配的采购问题中，品牌开始出现在 AI 推荐结果里" },
      { label: "内容可信度", desc: "AI 引用的品牌相关信息质量改善，描述更准确完整" },
    ],
    tags: ["GEO 监测", "官网结构优化", "问答资产建设", "AI 引用优化"],
  },
  {
    id: "edu",
    icon: BookOpen,
    industry: "教育培训品牌",
    scenario: "有知名度，但 AI 回答中缺乏可信内容支撑",
    platforms: ["ChatGPT", "豆包"],
    color: "#d4a853",
    challenge:
      "用户向 AI 询问「哪家培训机构适合学习 XX 技能」时，该品牌名称偶有出现，但 AI 的描述往往过于简略，或无法准确反映其核心优势、师资背景和学员成果——导致品牌在 AI 推荐环节的说服力远低于竞品。",
    approach: [
      "对课程体系、培训方向、适合人群进行结构化内容梳理，便于 AI 准确理解和引用",
      "优化师资介绍与学员案例页面，建立可供 AI 提取的权威信号",
      "围绕用户典型问题建设 FAQ 资产，覆盖选课决策的核心疑虑场景",
      "通过 FAQPage Schema 标记让 AI 更容易将品牌内容纳入结构化回答",
    ],
    results: [
      { label: "描述丰富度", desc: "AI 回答中出现更多关于品牌优势、课程特色的具体描述" },
      { label: "问题覆盖", desc: "更多「适合人群」类问题下，品牌开始获得有效的 AI 提及" },
      { label: "信息准确性", desc: "AI 对该品牌的描述与实际定位更加吻合，减少错误表达" },
    ],
    tags: ["内容结构化", "师资与案例优化", "FAQ 资产建设", "Schema 标记"],
  },
  {
    id: "ecom",
    icon: Globe,
    industry: "跨境电商品牌",
    scenario: "海外 AI 搜索中产品推荐曝光不足",
    platforms: ["Perplexity", "ChatGPT"],
    color: "#06b6d4",
    challenge:
      "该品牌主攻海外市场，目标用户习惯通过 Perplexity、ChatGPT 搜索产品评测和购买建议。尽管在国内平台已有一定口碑，但在海外 AI 搜索结果中，品牌几乎处于隐身状态，流量几乎全部被头部同类品牌吸走。",
    approach: [
      "系统梳理英文内容资产，补充 AI 可引用的产品特性、对比优势与使用场景描述",
      "建设产品对比页面，覆盖用户在 AI 中常见的「XX vs XX」类型问题",
      "梳理第三方媒体、测评网站中的品牌引用信号，明确权威背书的薄弱环节",
      "针对 Perplexity 等实时搜索型 AI 平台的引用机制做针对性内容优化",
    ],
    results: [
      { label: "品类可见度", desc: "目标品类相关的 AI 搜索结果中，品牌开始稳定出现" },
      { label: "对比场景", desc: "用户问「哪款更好」时，品牌更频繁地进入 AI 的对比视野" },
      { label: "英文内容质量", desc: "AI 引用的英文品牌描述更完整，推荐理由更具说服力" },
    ],
    tags: ["英文内容优化", "产品对比页建设", "引用信号梳理", "多平台策略"],
  },
  {
    id: "b2bservice",
    icon: Briefcase,
    industry: "企业服务公司",
    scenario: "AI 倾向推荐老牌竞品，新品牌缺少引用来源",
    platforms: ["Claude", "Perplexity"],
    color: "#a78bfa",
    challenge:
      "该公司服务质量得到客户认可，但在 AI 搜索场景中，面临典型的「新品牌劣势」：AI 在回答企业采购类问题时，倾向引用历史数据丰富、第三方提及多的老牌竞品，新品牌因缺乏可信引用来源而难以出现在推荐结果中。",
    approach: [
      "针对核心业务场景建设行业解决方案页，提供 AI 可引用的专业观点与方法论",
      "撰写可公开引用的行业白皮书或研究报告，建立原创权威内容资产",
      "整理客户高频问题库，以结构化问答形式覆盖采购决策中的关键疑虑",
      "拓展可信引用来源，包括行业媒体、垂直平台、合作机构等第三方背书渠道",
    ],
    results: [
      { label: "高意向问题", desc: "在企业采购类高意向查询中，开始获得更多 AI 引用机会" },
      { label: "内容权威性", desc: "品牌原创内容被 AI 识别为可参考来源，引用频次逐步建立" },
      { label: "竞争差距", desc: "与老牌竞品在 AI 推荐中的差距逐步收窄，品牌被提及比例提升" },
    ],
    tags: ["解决方案页建设", "白皮书内容", "客户问题库", "引用来源拓展"],
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #04080f 0%, #070d1a 50%, #04080f 100%)" }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-medium uppercase tracking-wider"
            style={{ border: "1px solid rgba(6,182,212,0.2)", background: "rgba(6,182,212,0.08)", color: "#06b6d4" }}>
            案例参考
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            不同行业，<span className="gradient-text">相似的 AI 可见度挑战</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            以下为匿名行业案例，展示典型优化方向与成果方向，供参考。
            <br className="hidden sm:block" />
            具体效果因品牌现状、行业竞争度及执行深度而有所不同。
          </p>
        </FadeIn>

        {/* Case cards — 2×2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <FadeIn key={c.id} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: `${c.color}12` }}>

                {/* Top accent */}
                <div className="h-0.5 w-full opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }} />

                <div className="p-8 flex flex-col h-full">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${c.color}15`, border: `1px solid ${c.color}25` }}>
                        <c.icon className="w-5 h-5" style={{ color: c.color }} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-base">{c.industry}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{c.scenario}</div>
                      </div>
                    </div>
                    {/* Platform tags */}
                    <div className="flex gap-1.5 flex-shrink-0">
                      {c.platforms.map((p) => (
                        <span key={p} className="px-2 py-0.5 rounded-full text-[10px] font-medium border"
                          style={{ color: c.color, borderColor: `${c.color}30`, background: `${c.color}10` }}>
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2">
                      面临挑战
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">{c.challenge}</p>
                  </div>

                  {/* Approach */}
                  <div className="mb-6">
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-3">
                      优化方向
                    </p>
                    <ul className="space-y-2">
                      {c.approach.map((a, ai) => (
                        <li key={ai} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold"
                            style={{ background: `${c.color}15`, color: c.color }}>
                            {ai + 1}
                          </div>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="mb-6 flex-1">
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-3">
                      成果方向
                    </p>
                    <div className="space-y-2.5">
                      {c.results.map((r) => (
                        <div key={r.label} className="flex items-start gap-3 p-3 rounded-lg"
                          style={{ background: `${c.color}08`, border: `1px solid ${c.color}15` }}>
                          <div className="flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-3.5 h-3.5" style={{ color: c.color }} />
                          </div>
                          <div>
                            <span className="text-xs font-semibold" style={{ color: c.color }}>
                              {r.label}
                            </span>
                            <span className="text-slate-400 text-xs ml-1">— {r.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service tags */}
                  <div className="pt-4 flex flex-wrap gap-2"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    {c.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full text-xs text-slate-500 bg-white/4 border border-white/8">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Disclaimer */}
        <FadeIn delay={400} className="mt-10 text-center">
          <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed">
            以上案例为匿名行业参考，均基于真实优化场景归纳整理。
            成果方向描述为定性改善，不代表具体量化承诺。
            实际效果因品牌起点、行业竞争度、执行深度及时间周期而有所差异。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
