"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MessageCircle } from "lucide-react";

function FooterLogoSvg({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M11 1H29L39 11V29L29 39H11L1 29V11Z" stroke="white" strokeWidth="1.8" />
      <path d="M13 4H27L36 13V27L27 36H13L4 27V13Z" stroke="white" strokeWidth="0.7" opacity="0.4" />
      <text x="20" y="26" textAnchor="middle" fill="white" fontWeight="800"
        fontSize="15" fontFamily="system-ui,sans-serif" letterSpacing="-0.5">GS</text>
    </svg>
  );
}

const footerLinks = {
  服务: [
    { label: "GEO 搜索体检", href: "#services" },
    { label: "AI 可见度分析", href: "#services" },
    { label: "AI 引用优化", href: "#services" },
    { label: "套餐价格", href: "#pricing" },
  ],
  资源: [
    { label: "客户案例", href: "#cases" },
    { label: "工作原理", href: "#how-it-works" },
    { label: "常见问题", href: "#faq" },
    { label: "联系我们", href: "#contact" },
  ],
  平台覆盖: [
    { label: "ChatGPT 优化", href: "#services" },
    { label: "Claude 引用提升", href: "#services" },
    { label: "Perplexity 排名", href: "#services" },
    { label: "豆包 / DeepSeek", href: "#services" },
  ],
};

const contactItems = [
  {
    icon: Mail,
    label: "邮件",
    value: "lizhengyebob@gmail.com",
    href: "mailto:lizhengyebob@gmail.com",
  },
  {
    icon: Phone,
    label: "电话",
    value: "190 4052 5048",
    href: "tel:19040525048",
  },
  {
    icon: MessageCircle,
    label: "微信",
    value: "19040525048",
    href: null,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [imgOk, setImgOk] = useState(true);

  return (
    <footer
      className="border-t"
      style={{ background: "#030710", borderColor: "rgba(212,168,83,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Brand col */}
          <div className="md:col-span-2">
            {/* Logo + name */}
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0">
                {imgOk ? (
                  <Image
                    src="/gs-logo.png"
                    alt="GS GEO"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                    onError={() => setImgOk(false)}
                  />
                ) : (
                  <FooterLogoSvg size={40} />
                )}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black text-white">GS</span>
                <span className="text-xl font-black" style={{ color: "#d4a853" }}>GEO</span>
              </div>
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              专注帮助企业在 ChatGPT、Claude、Perplexity、豆包、DeepSeek 等 AI 搜索平台建立持久可见度优势。
            </p>

            {/* Contact list */}
            <div className="space-y-3">
              {contactItems.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.2)" }}
                  >
                    <c.icon className="w-3.5 h-3.5" style={{ color: "#d4a853" }} />
                  </div>
                  {c.href ? (
                    <a href={c.href} className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400">{c.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Online indicator */}
            <div className="flex items-center gap-2 mt-6 text-xs text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-glow" />
              在线咨询 · 工作日 9:00–18:00
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="md:col-span-1">
              <h3
                className="text-xs font-bold uppercase tracking-wider mb-4"
                style={{ color: "#d4a853" }}
              >
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <div className="gold-line my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-700">
            © {year} GS GEO. 保留所有权利。
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="text-xs text-slate-700 hover:text-slate-400 transition-colors"
            >
              后台登录
            </Link>
            <a href="#" className="text-xs text-slate-700 hover:text-slate-400 transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-xs text-slate-700 hover:text-slate-400 transition-colors">
              服务条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
