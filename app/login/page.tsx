"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd]   = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setError("演示模式：后台暂未开放，请联系管理员获取账户权限。");
  };

  const inputClass =
    "w-full py-3 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none transition-all"
    + " bg-white/4 border border-white/8 focus:bg-white/6";

  return (
    <div className="min-h-screen bg-[#04080f] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(30,58,138,0.06)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(212,168,83,0.04)" }}
      />

      {/* Back */}
      <div className="absolute top-6 left-6">
        <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors">
          <span>←</span><span>返回官网</span>
        </Link>
      </div>

      {/* Card */}
      <div className="relative w-full max-w-md">
        <div className="gradient-border rounded-2xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/gs-logo.png"
                alt="GS GEO"
                width={48}
                height={48}
                className="object-contain"
                priority
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-white">GS</span>
              <span className="text-2xl font-black" style={{ color: "#d4a853" }}>GEO</span>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">后台管理登录</h1>
            <p className="text-slate-500 text-sm">输入账户信息进入管理面板</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs text-slate-400 mb-1.5 font-medium">邮箱账户</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@gsgeo.cn"
                  className={`${inputClass} pl-10 pr-4`}
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1.5 font-medium">密码</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type={showPwd ? "text" : "password"} required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`${inputClass} pl-10 pr-12`}
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                />
                <button
                  type="button" onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-xs hover:text-slate-300 transition-colors" style={{ color: "#d4a853" }}>
                忘记密码？
              </a>
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
              type="submit" disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-[#04080f] btn-gold hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
              style={{ boxShadow: "0 8px 25px rgba(212,168,83,0.2)" }}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#04080f]/30 border-t-[#04080f] rounded-full animate-spin" />
                  <span>验证中...</span>
                </>
              ) : (
                <>
                  <span>登录后台</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Security note */}
          <div
            className="mt-6 pt-6 flex items-center justify-center gap-2"
            style={{ borderTop: "1px solid rgba(212,168,83,0.1)" }}
          >
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#d4a853" }} />
            <span className="text-xs text-slate-600">SSL 加密连接 · 多因素认证保护</span>
          </div>
        </div>

        <p className="text-center text-xs text-slate-700 mt-6">
          © {new Date().getFullYear()} GS GEO ·
          <a href="#" className="hover:text-slate-500 ml-1">隐私政策</a>
        </p>
      </div>
    </div>
  );
}
