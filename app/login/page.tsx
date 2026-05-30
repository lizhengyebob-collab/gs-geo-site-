import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Lock, Mail, Phone } from "lucide-react";

export default function LoginPage() {
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
        <div className="gradient-border rounded-2xl p-8 shadow-2xl text-center">
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
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-white">GS</span>
              <span className="text-2xl font-black" style={{ color: "#d4a853" }}>GEO</span>
            </div>
          </div>

          {/* Lock icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.2)" }}
          >
            <Lock className="w-7 h-7" style={{ color: "#d4a853" }} />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-white mb-2">内测管理入口</h1>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed max-w-xs mx-auto">
            该管理系统目前处于内测阶段，暂未开放外部访问。
          </p>

          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
            style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)", color: "#f87171" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
            暂未开放 · 内部使用
          </div>

          {/* Contact to get access */}
          <div
            className="rounded-xl p-5 text-left mb-6"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-slate-400 text-xs mb-4 text-center">如需申请访问权限，请联系管理员</p>
            <div className="space-y-3">
              <a
                href="mailto:lizhengyebob@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                </div>
                lizhengyebob@gmail.com
              </a>
              <a
                href="tel:19040525048"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.2)" }}
                >
                  <Phone className="w-3.5 h-3.5" style={{ color: "#d4a853" }} />
                </div>
                190 4052 5048
              </a>
            </div>
          </div>

          {/* Security note */}
          <div
            className="flex items-center justify-center gap-2"
            style={{ borderTop: "1px solid rgba(212,168,83,0.1)", paddingTop: "1.25rem" }}
          >
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#d4a853" }} />
            <span className="text-xs text-slate-600">SSL 加密连接 · 访问权限受限</span>
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
