"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, TrendingUp, Shield, CalendarDays } from "lucide-react";

const aiPlatforms = [
  { name: "ChatGPT",    color: "#10a37f", bg: "bg-[#10a37f]/10 border-[#10a37f]/20" },
  { name: "Claude",     color: "#d97706", bg: "bg-amber-500/10 border-amber-500/20" },
  { name: "Perplexity", color: "#6366f1", bg: "bg-indigo-500/10 border-indigo-500/20" },
  { name: "豆包",       color: "#3b82f6", bg: "bg-blue-500/10 border-blue-500/20" },
  { name: "DeepSeek",   color: "#d4a853", bg: "bg-amber-700/10 border-amber-700/20" },
  { name: "Gemini",     color: "#06b6d4", bg: "bg-cyan-500/10 border-cyan-500/20" },
];

const metrics = [
  { icon: TrendingUp, value: "+320%", label: "平均 AI 曝光提升" },
  { icon: Shield,     value: "47项",  label: "GEO 优化检测维度" },
  { icon: Sparkles,   value: "6大",   label: "主流 AI 平台覆盖" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    type P = { x: number; y: number; vx: number; vy: number; size: number; opacity: number };
    const particles: P[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.45 + 0.08,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,168,83,${p.opacity})`;
        ctx.fill();

        particles.slice(i + 1, i + 6).forEach((p2) => {
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212,168,83,${0.07 * (1 - d / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 grid-bg">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />

      {/* Gold radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 55% at 50% 40%, rgba(212,168,83,0.06) 0%, transparent 70%)" }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(30,58,138,0.08)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(212,168,83,0.04)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full text-sm font-medium"
          style={{ border: "1px solid rgba(212,168,83,0.3)", background: "rgba(212,168,83,0.08)", color: "#d4a853" }}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>GEO · AEO · LLMO · AI Visibility 全栈优化</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          <span className="text-white">让 AI 主动</span>
          <br />
          <span className="gradient-text">推荐你的品牌</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          当你的客户向 ChatGPT、Claude、Perplexity 提问时，<br className="hidden sm:block" />
          <strong className="text-[#f0ece0]">GS GEO</strong> 让 AI{" "}
          <strong className="text-[#d4a853]">主动引用、推荐、并转化</strong>你的品牌。
        </p>

        {/* ── CTA 层级 ────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          {/* Level 1：主 CTA — 金色实心，最大尺寸，带箭头 */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-9 py-4 text-base font-bold text-[#04080f] btn-gold rounded-xl hover:-translate-y-0.5 transition-all duration-300"
            style={{ boxShadow: "0 8px 32px rgba(212,168,83,0.35)", minWidth: 200 }}
          >
            <span>免费 GEO 体检</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Level 2：辅助 CTA — 金色描边，同高，无填充 */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl transition-all duration-200 btn-outline-gold"
          >
            <CalendarDays className="w-4 h-4" />
            <span>预约咨询</span>
          </a>
        </div>

        {/* Micro copy under CTAs */}
        <p className="text-xs text-slate-600 mb-14">
          免费诊断 · 48小时报告 · 无需信用卡 · 工作日 9:00–18:00 响应
        </p>

        {/* Metrics row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-16">
          {metrics.map((m) => (
            <div key={m.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(212,168,83,0.12)", border: "1px solid rgba(212,168,83,0.2)" }}>
                <m.icon className="w-4 h-4" style={{ color: "#d4a853" }} />
              </div>
              <div className="text-left">
                <div className="text-xl font-black gradient-text-gold">{m.value}</div>
                <div className="text-xs text-slate-500">{m.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform badges */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs text-slate-600 uppercase tracking-widest">覆盖全球主流 AI 搜索平台</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {aiPlatforms.map((p) => (
              <div key={p.name}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 hover:scale-105 ${p.bg}`}
                style={{ color: p.color }}>
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#04080f] to-transparent pointer-events-none" />
    </section>
  );
}
