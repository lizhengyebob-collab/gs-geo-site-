"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const contactMethods = [
  {
    icon: Mail,
    label: "邮件",
    value: "lizhengyebob@gmail.com",
    href: "mailto:lizhengyebob@gmail.com",
    color: "#3b82f6",
  },
  {
    icon: Phone,
    label: "电话",
    value: "190 4052 5048",
    href: "tel:19040525048",
    color: "#d4a853",
  },
  {
    icon: MessageCircle,
    label: "微信",
    value: "19040525048",
    href: null,
    color: "#10a37f",
  },
];

const industries = [
  "B2B SaaS", "电商零售", "企业服务", "金融科技",
  "医疗健康", "教育培训", "跨境电商", "其他",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", website: "", industry: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.message || "提交失败，请直接发邮件至 lizhengyebob@gmail.com");
      }
    } catch {
      setError("网络错误，请稍后重试或直接发邮件联系我们。");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none transition-all"
    + " bg-white/4 border border-white/8 focus:border-[#d4a853]/40 focus:bg-white/6";

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(30,58,138,0.06)" }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(212,168,83,0.04)" }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-medium uppercase tracking-wider"
            style={{ border: "1px solid rgba(212,168,83,0.2)", background: "rgba(212,168,83,0.08)", color: "#d4a853" }}
          >
            联系我们
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            开始你的<span className="gradient-text"> AI 可见度之旅</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            填写表单，我们将在 24 小时内回复，并提供免费 GEO 体检报告
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: info */}
          <FadeIn className="lg:col-span-2" direction="left">
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-white font-bold text-lg mb-2">免费体检承诺</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                提交申请后，GS GEO 专家将在 48 小时内完成你的网站诊断，
                交付包含 20 项关键指标的体检报告，完全免费。
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "48 小时内交付体检报告",
                  "20 项 AI 可见度关键指标",
                  "优先级优化建议清单",
                  "专家 1v1 报告解读",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-400">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#d4a853" }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Contact methods */}
              <div className="space-y-4 pt-6" style={{ borderTop: "1px solid rgba(212,168,83,0.1)" }}>
                {contactMethods.map((m) => (
                  <div key={m.label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${m.color}15`, border: `1px solid ${m.color}25` }}
                    >
                      <m.icon className="w-4 h-4" style={{ color: m.color }} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-600">{m.label}</div>
                      {m.href ? (
                        <a href={m.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                          {m.value}
                        </a>
                      ) : (
                        <div className="text-sm text-slate-300">{m.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn className="lg:col-span-3" direction="right" delay={100}>
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(212,168,83,0.12)", border: "1px solid rgba(212,168,83,0.3)" }}
                  >
                    <CheckCircle2 className="w-8 h-8" style={{ color: "#d4a853" }} />
                  </div>
                  <h3 className="text-white text-xl font-bold">申请已收到！</h3>
                  <p className="text-slate-400 text-sm max-w-sm">
                    感谢你的信任。GS GEO 专家将在 24 小时内联系你，并在 48 小时内交付免费体检报告。
                  </p>
                  <p className="text-xs text-slate-600 mt-2">
                    请关注邮箱 lizhengyebob@gmail.com 的回复
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                        姓名 <span className="text-red-400">*</span>
                      </label>
                      <input required name="name" value={form.name} onChange={handleChange}
                        placeholder="张三" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                        公司名称 <span className="text-red-400">*</span>
                      </label>
                      <input required name="company" value={form.company} onChange={handleChange}
                        placeholder="XX 科技有限公司" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                        邮箱 <span className="text-red-400">*</span>
                      </label>
                      <input required type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="you@company.com" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                        官网域名 <span className="text-red-400">*</span>
                      </label>
                      <input required name="website" value={form.website} onChange={handleChange}
                        placeholder="www.example.com" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">所在行业</label>
                    <select name="industry" value={form.industry} onChange={handleChange}
                      className={`${inputClass} cursor-pointer appearance-none`}
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" className="bg-[#080f1c] text-slate-400">请选择行业</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind} className="bg-[#080f1c] text-slate-200">{ind}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">需求描述</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="简单描述你的 AI 可见度目标，或者你当前遇到的挑战..."
                      className={`${inputClass} resize-none`} />
                  </div>

                  {error && (
                    <div
                      className="px-4 py-3 rounded-xl text-xs leading-relaxed"
                      style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#f87171" }}
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl text-sm font-bold text-[#04080f] btn-gold hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                    style={{ boxShadow: "0 8px 30px rgba(212,168,83,0.2)" }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#04080f]/30 border-t-[#04080f] rounded-full animate-spin" />
                        <span>提交中...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>申请免费 GEO 体检</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-600 text-center">
                    提交即表示你同意我们的隐私政策。我们承诺不向第三方分享你的信息。
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
