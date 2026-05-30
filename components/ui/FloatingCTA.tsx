"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <a
        href="#contact"
        className="group flex items-center gap-2.5 px-5 py-3.5 text-sm font-bold text-[#04080f] btn-gold rounded-2xl hover:-translate-y-0.5 transition-all duration-300"
        style={{ boxShadow: "0 8px 30px rgba(212,168,83,0.3)" }}
        aria-label="免费 GEO 体检"
      >
        <span className="hidden sm:inline">免费 GEO 体检</span>
        <span className="sm:hidden">体检</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
}
