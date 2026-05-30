"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, CalendarDays } from "lucide-react";

const navLinks = [
  { label: "核心服务", href: "#services" },
  { label: "工作原理", href: "#how-it-works" },
  { label: "客户案例", href: "#cases" },
  { label: "GEO 知识库", href: "/resources" },
  { label: "套餐价格", href: "#pricing" },
  { label: "联系我们", href: "#contact" },
];

/* Inline SVG fallback — shown when gs-logo.png fails to load */
function LogoSvgFallback({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M11 1H29L39 11V29L29 39H11L1 29V11Z" stroke="white" strokeWidth="1.8" />
      <path d="M13 4H27L36 13V27L27 36H13L4 27V13Z" stroke="white" strokeWidth="0.7" opacity="0.4" />
      <text x="20" y="26" textAnchor="middle" fill="white" fontWeight="800"
        fontSize="15" fontFamily="system-ui,sans-serif" letterSpacing="-0.5">GS</text>
    </svg>
  );
}

function Logo() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-9 h-9 flex-shrink-0">
        {imgOk ? (
          <Image
            src="/gs-logo.png"
            alt="GS GEO"
            width={36}
            height={36}
            className="object-contain w-full h-full"
            priority
            onError={() => setImgOk(false)}
          />
        ) : (
          <LogoSvgFallback size={36} />
        )}
      </div>
      <div className="flex items-baseline gap-1.5 leading-none">
        <span className="text-xl font-black tracking-tight text-white">GS</span>
        <span className="text-xl font-black tracking-tight" style={{ color: "#d4a853" }}>GEO</span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl border-b" : "bg-transparent"
      }`}
      style={scrolled ? {
        background: "rgba(4,8,15,0.95)",
        borderBottomColor: "rgba(212,168,83,0.1)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
      } : {}}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="px-3 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 whitespace-nowrap">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link href="/login"
            className="px-3 py-2 text-sm text-slate-500 hover:text-slate-300 transition-colors whitespace-nowrap">
            后台登录
          </Link>
          {/* Level 2 */}
          <a href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg btn-outline-gold whitespace-nowrap">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>预约咨询</span>
          </a>
          {/* Level 1 */}
          <a href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-bold text-[#04080f] btn-gold rounded-lg whitespace-nowrap"
            style={{ boxShadow: "0 4px 18px rgba(212,168,83,0.25)" }}>
            <span>免费体检</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)} aria-label="菜单">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-b px-4 pb-4"
          style={{ background: "rgba(4,8,15,0.98)", backdropFilter: "blur(20px)", borderBottomColor: "rgba(212,168,83,0.1)" }}>
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-2 pt-3 border-t" style={{ borderColor: "rgba(212,168,83,0.1)" }}>
              <Link href="/login"
                className="flex-1 py-2.5 text-sm text-center text-slate-500 hover:text-slate-300 border border-white/10 rounded-lg transition-colors"
                onClick={() => setOpen(false)}>
                后台登录
              </Link>
              <a href="#contact"
                className="flex-1 py-2.5 text-sm text-center font-medium rounded-lg btn-outline-gold flex items-center justify-center gap-1.5"
                onClick={() => setOpen(false)}>
                <CalendarDays className="w-3.5 h-3.5" /><span>预约咨询</span>
              </a>
              <a href="#contact"
                className="flex-1 py-2.5 text-sm text-center font-bold text-[#04080f] btn-gold rounded-lg"
                onClick={() => setOpen(false)}>
                <span>免费体检</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
