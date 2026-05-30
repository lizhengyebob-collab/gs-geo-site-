"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "what-is-geo",       label: "01 什么是 GEO？" },
  { id: "geo-aeo-llmo",      label: "02 GEO / AEO / LLMO 区别" },
  { id: "chatgpt-rate",      label: "03 提升 ChatGPT 推荐率" },
  { id: "claude-perplexity", label: "04 Claude / Perplexity 引用" },
  { id: "b2b-why",           label: "05 B2B 为何需要 AI 可见度" },
  { id: "timeline",          label: "06 GEO 多久见效" },
];

export default function ResourcesNav() {
  const [active, setActive] = useState("what-is-geo");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
            active === item.id
              ? "text-white"
              : "text-slate-500 hover:text-slate-300 hover:bg-white/4"
          }`}
          style={
            active === item.id
              ? { background: "rgba(212,168,83,0.12)", color: "#d4a853", borderLeft: "2px solid #d4a853" }
              : {}
          }
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
