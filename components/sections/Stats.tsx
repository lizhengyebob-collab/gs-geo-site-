"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  { value: 320, suffix: "%", prefix: "+", label: "平均 AI 曝光提升",   desc: "优化后 90 天内",                                    color: "#3b82f6" },
  { value: 200, suffix: "+", prefix: "",  label: "服务企业客户",       desc: "覆盖 B2B SaaS、电商、金融、医疗",                   color: "#d4a853" },
  { value: 6,   suffix: "大", prefix: "", label: "AI 平台全覆盖",      desc: "ChatGPT · Claude · Perplexity · 豆包 · DeepSeek · Gemini", color: "#2563eb" },
  { value: 47,  suffix: "项", prefix: "", label: "GEO 检测维度",       desc: "基于 Princeton KDD 2024 & AutoGEO ICLR 2026",       color: "#d4a853" },
];

function CountUp({ target, suffix, prefix, color }: { target: number; suffix: string; prefix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref     = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, 2000 / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl font-black tracking-tight" style={{ color }}>
      {prefix}{count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(30,58,138,0.06), rgba(212,168,83,0.04))" }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 80}>
              <div
                className="glass-card rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: `${s.color}15` }}
              >
                <CountUp target={s.value} suffix={s.suffix} prefix={s.prefix} color={s.color} />
                <div className="text-white font-semibold mt-2 mb-1 text-sm sm:text-base">{s.label}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{s.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
